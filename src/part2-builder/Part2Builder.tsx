import React, { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { BuildKit, SentenceTemplate } from './types';
// Add replaceAll to imports to fix the 'replaceAll' error
import { buildInitialState, renderSentence, replaceAll } from './utils';

type Part2BuilderProps = {
  kit: BuildKit;
};

type PoolGroup = {
  poolId: string;
  blanks: Array<{ id: string; label: string }>;
};

const groupBlanksByPool = (template: SentenceTemplate): PoolGroup[] => {
  const groups = new Map<string, PoolGroup>();
  template.blanks.forEach((blank) => {
    const existing = groups.get(blank.poolId);
    if (existing) {
      existing.blanks.push({ id: blank.id, label: blank.label });
      return;
    }
    groups.set(blank.poolId, {
      poolId: blank.poolId,
      blanks: [{ id: blank.id, label: blank.label }],
    });
  });
  return Array.from(groups.values());
};

const randomFrom = (items: string[]): string | undefined => {
  if (!items || items.length === 0) return undefined;
  return items[Math.floor(Math.random() * items.length)];
};

const renderWithMissing = (text: string) => {
  const parts = text.split('___');
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && <Missing>___</Missing>}
        </React.Fragment>
      ))}
    </>
  );
};

const Part2Builder: React.FC<Part2BuilderProps> = ({ kit }) => {
  const poolsById = useMemo(() => new Map(kit.pools.map((p) => [p.id, p])), [kit.pools]);

  const slotsWithTemplate = useMemo(() => {
    return kit.slots
      .map((slot) => ({ slot, template: slot.templates[0] }))
      .filter((item) => !!item.template);
  }, [kit.slots]);

  const [selections, setSelections] = useState<Record<string, string | undefined>>(
    () => buildInitialState(kit).selections,
  );
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setSelections(buildInitialState(kit).selections);
    setCopied(false);
    setIsSpeaking(false);
  }, [kit]);

  const sentences = useMemo(() => {
    return slotsWithTemplate.map(({ template }) => renderSentence(template, selections));
  }, [slotsWithTemplate, selections]);

  const outputLines = useMemo(
    () => sentences.map((sentence, index) => `${index + 1}. ${sentence}`),
    [sentences],
  );

  const totalBlankIds = useMemo(() => {
    const ids = new Set<string>();
    slotsWithTemplate.forEach(({ template }) => template.blanks.forEach((b) => ids.add(b.id)));
    return Array.from(ids);
  }, [slotsWithTemplate]);

  const filledBlankCount = useMemo(() => {
    return totalBlankIds.reduce((sum, id) => sum + (selections[id] ? 1 : 0), 0);
  }, [selections, totalBlankIds]);

  const outputTextForCopy = useMemo(() => outputLines.join('\n'), [outputLines]);

  const speakText = useMemo(() => {
    // FIX: Use the imported replaceAll helper instead of String.prototype.replaceAll to avoid TS error with lower target ES versions.
    return sentences.map((s) => replaceAll(s, '___', '').trim()).filter(Boolean).join(' ');
  }, [sentences]);

  const handlePickForGroup = (group: PoolGroup, option: string) => {
    const blankIds = group.blanks.map((b) => b.id);
    setSelections((prev) => {
      const next = { ...prev };

      if (blankIds.length === 1) {
        const id = blankIds[0];
        next[id] = prev[id] === option ? undefined : option;
        return next;
      }

      const current = blankIds.map((id) => prev[id]).filter(Boolean) as string[];
      const exists = current.includes(option);

      let nextValues: string[];
      if (exists) {
        nextValues = current.filter((v) => v !== option);
      } else if (current.length < blankIds.length) {
        nextValues = [...current, option];
      } else {
        nextValues = [...current.slice(0, blankIds.length - 1), option];
      }

      blankIds.forEach((id, index) => {
        next[id] = nextValues[index];
      });
      return next;
    });
  };

  const handleClearGroup = (group: PoolGroup) => {
    setSelections((prev) => {
      const next = { ...prev };
      group.blanks.forEach((b) => {
        next[b.id] = undefined;
      });
      return next;
    });
  };

  const handleRandomFillSlot = (template: SentenceTemplate) => {
    setSelections((prev) => {
      const next = { ...prev };
      const usedByPool = new Map<string, Set<string>>();

      template.blanks.forEach((blank) => {
        const currentValue = next[blank.id];
        const used = usedByPool.get(blank.poolId) || new Set<string>();
        if (currentValue) {
          used.add(currentValue);
          usedByPool.set(blank.poolId, used);
          return;
        }

        const pool = poolsById.get(blank.poolId);
        if (!pool || pool.options.length === 0) return;
        const candidates = pool.options.filter((opt) => !used.has(opt));
        const value = randomFrom(candidates.length > 0 ? candidates : pool.options);
        if (!value) return;
        next[blank.id] = value;
        used.add(value);
        usedByPool.set(blank.poolId, used);
      });

      return next;
    });
  };

  const handleClearSlot = (template: SentenceTemplate) => {
    setSelections((prev) => {
      const next = { ...prev };
      template.blanks.forEach((blank) => {
        next[blank.id] = undefined;
      });
      return next;
    });
  };

  const handleRandomFillAll = () => {
    setSelections((prev) => {
      const next = { ...prev };
      slotsWithTemplate.forEach(({ template }) => {
        const usedByPool = new Map<string, Set<string>>();
        template.blanks.forEach((blank) => {
          const currentValue = next[blank.id];
          const used = usedByPool.get(blank.poolId) || new Set<string>();
          if (currentValue) {
            used.add(currentValue);
            usedByPool.set(blank.poolId, used);
            return;
          }

          const pool = poolsById.get(blank.poolId);
          if (!pool || pool.options.length === 0) return;
          const candidates = pool.options.filter((opt) => !used.has(opt));
          const value = randomFrom(candidates.length > 0 ? candidates : pool.options);
          if (!value) return;
          next[blank.id] = value;
          used.add(value);
          usedByPool.set(blank.poolId, used);
        });
      });
      return next;
    });
  };

  const handleReset = () => {
    setSelections(buildInitialState(kit).selections);
    setCopied(false);
    setIsSpeaking(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputTextForCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error('Failed to copy', error);
    }
  };

  const handleSpeak = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    // FIX: Use the imported replaceAll helper instead of String.prototype.replaceAll to avoid TS error.
    const utterance = new SpeechSynthesisUtterance(speakText || replaceAll(outputTextForCopy, '\n', ' '));
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeak = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <Wrapper>
      <Header>
        <Hero>
          <Title>{kit.title}</Title>
          <Prompt>{kit.prompt}</Prompt>
          <Tip>
            直接点下面的词语按钮填空；每次选择都会同步更新“拼装结果”。
          </Tip>
        </Hero>
        <Actions>
          <ActionButton type="button" onClick={handleRandomFillAll}>
            随机一套
          </ActionButton>
          <ActionButton type="button" onClick={handleReset}>
            清空
          </ActionButton>
          <PrimaryButton type="button" onClick={handleCopy} disabled={outputLines.length === 0}>
            {copied ? '已复制' : `复制 ${outputLines.length} 句`}
          </PrimaryButton>
          {window.speechSynthesis && (
            isSpeaking ? (
              <ActionButton type="button" onClick={handleStopSpeak}>
                停止朗读
              </ActionButton>
            ) : (
              <ActionButton type="button" onClick={handleSpeak} disabled={outputLines.length === 0}>
                朗读
              </ActionButton>
            )
          )}
        </Actions>
      </Header>

      {kit.card && (
        <ExamCard aria-label="题目卡片">
          <ExamCardTop>
            {kit.card.seasonTag && <SeasonTag>{kit.card.seasonTag}</SeasonTag>}
            {kit.card.status === 'New' && <NewTag>新题</NewTag>}
          </ExamCardTop>
          {kit.card.cardTitle && <ExamCardTitle>{kit.card.cardTitle}</ExamCardTitle>}

          {kit.card.part2Title && (
            <ExamSection>
              <SectionBadge>Part 2</SectionBadge>
              <SectionTitle>{kit.card.part2Title}</SectionTitle>
              {kit.card.part2Prompts && kit.card.part2Prompts.length > 0 && (
                <>
                  <SectionHint>You should say:</SectionHint>
                  <BulletList>
                    {kit.card.part2Prompts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </BulletList>
                </>
              )}
            </ExamSection>
          )}

          {kit.card.part3Questions && kit.card.part3Questions.length > 0 && (
            <ExamDetails>
              <summary>Part 3（点开查看）</summary>
              <BulletList>
                {kit.card.part3Questions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </BulletList>
            </ExamDetails>
          )}
        </ExamCard>
      )}

      <OutputCard aria-label="拼装结果">
        <OutputHeader>
          <OutputTitle>拼装结果（{outputLines.length} 句）</OutputTitle>
          <Progress>
            {filledBlankCount}/{totalBlankIds.length} 已填
          </Progress>
        </OutputHeader>
        <OutputBody>
          {outputLines.map((line, idx) => (
            <OutputLine key={idx}>{renderWithMissing(line)}</OutputLine>
          ))}
        </OutputBody>
      </OutputCard>

      <Board aria-label="填空与选择">
        {slotsWithTemplate.map(({ slot, template }, index) => {
          const groups = groupBlanksByPool(template);
          return (
            <SentenceCard key={slot.id}>
              <SentenceHeader>
                <SentenceLeft>
                  <SentenceIndex>{index + 1}</SentenceIndex>
                  <div>
                    <SentenceTitle>{slot.title}</SentenceTitle>
                    <SentenceText>{renderWithMissing(renderSentence(template, selections))}</SentenceText>
                  </div>
                </SentenceLeft>
                <SentenceActions>
                  <MiniButton type="button" onClick={() => handleRandomFillSlot(template)}>
                    随机此句
                  </MiniButton>
                  <MiniButton type="button" onClick={() => handleClearSlot(template)}>
                    清空此句
                  </MiniButton>
                </SentenceActions>
              </SentenceHeader>

              <Pools>
                {groups.map((group) => {
                  const pool = poolsById.get(group.poolId);
                  if (!pool) return null;
                  const selectedValues = group.blanks
                    .map((b) => selections[b.id])
                    .filter(Boolean) as string[];
                  const required = group.blanks.length;
                  const isMulti = required > 1;

                  return (
                    <PoolSection key={`${slot.id}:${group.poolId}`}>
                      <PoolSectionHeader>
                        <PoolTitle>
                          {pool.title}
                          {isMulti ? <PoolMeta>（选{required}个）</PoolMeta> : null}
                        </PoolTitle>
                        <PoolTools>
                          <SelectedSummary>
                            {selectedValues.length > 0 ? (
                              isMulti ? (
                                selectedValues.map((v, idx) => (
                                  <SelectedTag key={`${v}-${idx}`}>
                                    {idx + 1}. {v}
                                  </SelectedTag>
                                ))
                              ) : (
                                <SelectedTag>{selectedValues[0]}</SelectedTag>
                              )
                            ) : (
                              <EmptySelected>未选</EmptySelected>
                            )}
                          </SelectedSummary>
                          <InlineLink type="button" onClick={() => handleClearGroup(group)}>
                            清空
                          </InlineLink>
                        </PoolTools>
                      </PoolSectionHeader>

                      <ChipGrid>
                        {pool.options.map((opt) => {
                          const active = selectedValues.includes(opt);
                          return (
                            <Chip
                              key={opt}
                              type="button"
                              $active={active}
                              onClick={() => handlePickForGroup(group, opt)}
                              aria-label={`选择：${opt}`}
                            >
                              {opt}
                            </Chip>
                          );
                        })}
                      </ChipGrid>
                    </PoolSection>
                  );
                })}
              </Pools>
            </SentenceCard>
          );
        })}
      </Board>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Hero = styled.div`
  min-width: 320px;
  flex: 1 1 auto;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.header};
`;

const Prompt = styled.p`
  margin: 0.35rem 0 0;
  color: ${({ theme }) => theme.colors.label};
  font-weight: 700;
`;

const Tip = styled.div`
  margin-top: 0.75rem;
  padding: 0.65rem 0.9rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.highlightBorder};
  background-color: ${({ theme }) => theme.colors.highlightBg};
  color: ${({ theme }) => theme.colors.header};
  font-weight: 900;
  line-height: 1.5;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  font-family: inherit;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.header};
  padding: 0.55rem 1rem;
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.12s ease, background-color 0.12s ease;

  &:hover:enabled {
    transform: translateY(-1px);
    background-color: ${({ theme }) => theme.colors.boxBg};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(ActionButton)`
  border-color: ${({ theme }) => theme.colors.primaryBlue};
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: white;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.header};
    border-color: ${({ theme }) => theme.colors.header};
  }
`;

const ExamCard = styled.section`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  padding: 1rem;
  box-shadow: 0 10px 22px ${({ theme }) => theme.colors.shadow};
`;

const ExamCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const SeasonTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.7rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: white;
  font-weight: 1000;
`;

const NewTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.7rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: white;
  font-weight: 1000;
`;

const ExamCardTitle = styled.h3`
  margin: 0.75rem 0 0;
  font-size: 1.4rem;
  font-weight: 1000;
  color: ${({ theme }) => theme.colors.header};
`;

const ExamSection = styled.div`
  margin-top: 0.9rem;
  padding: 0.9rem;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.highlightBorder};
  background-color: ${({ theme }) => theme.colors.highlightBg};
`;

const SectionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.55rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  font-weight: 1000;
  font-size: 0.85rem;
`;

const SectionTitle = styled.div`
  margin-top: 0.5rem;
  font-size: 1.05rem;
  font-weight: 1000;
  color: ${({ theme }) => theme.colors.header};
`;

const SectionHint = styled.div`
  margin-top: 0.7rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.label};
`;

const BulletList = styled.ul`
  margin: 0.5rem 0 0;
  padding-left: 1.2rem;
  color: ${({ theme }) => theme.colors.header};
  font-weight: 800;
  line-height: 1.75;
`;

const ExamDetails = styled.details`
  margin-top: 0.9rem;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.boxBg};
  padding: 0.8rem 0.9rem;

  summary {
    cursor: pointer;
    font-weight: 1000;
    color: ${({ theme }) => theme.colors.header};
    outline: none;
  }

  ${BulletList} {
    margin-top: 0.8rem;
  }
`;

const OutputCard = styled.section`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  border-radius: 22px;
  padding: 1rem;
  box-shadow: 0 10px 22px ${({ theme }) => theme.colors.shadow};
`;

const OutputHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const OutputTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 1000;
  color: ${({ theme }) => theme.colors.header};
`;

const Progress = styled.div`
  font-weight: 1000;
  color: ${({ theme }) => theme.colors.label};
`;

const OutputBody = styled.div`
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const OutputLine = styled.div`
  background-color: ${({ theme }) => theme.colors.highlightBg};
  border: 1px solid ${({ theme }) => theme.colors.highlightBorder};
  border-radius: 14px;
  padding: 0.75rem 0.85rem;
  line-height: 1.7;
  font-weight: 850;
  color: ${({ theme }) => theme.colors.header};
`;

const Missing = styled.span`
  color: ${({ theme }) => theme.colors.primaryOrange};
  font-weight: 1000;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SentenceCard = styled.section`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 8px 18px ${({ theme }) => theme.colors.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const SentenceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const SentenceLeft = styled.div`
  display: flex;
  gap: 0.85rem;
  min-width: 0;
`;

const SentenceIndex = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  font-weight: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const SentenceTitle = styled.h4`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 1000;
  color: ${({ theme }) => theme.colors.header};
`;

const SentenceText = styled.div`
  margin-top: 0.45rem;
  border-radius: 16px;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.boxBg};
  padding: 0.75rem 0.85rem;
  line-height: 1.75;
  font-weight: 850;
  color: ${({ theme }) => theme.colors.header};
  word-break: break-word;
`;

const SentenceActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const MiniButton = styled.button`
  font-family: inherit;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.header};
  padding: 0.45rem 0.85rem;
  font-weight: 900;
  cursor: pointer;
`;

const Pools = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const PoolSection = styled.div`
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.highlightBorder};
  background-color: ${({ theme }) => theme.colors.highlightBg};
  padding: 0.9rem;
`;

const PoolSectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PoolTitle = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  font-weight: 1000;
  color: ${({ theme }) => theme.colors.header};
`;

const PoolMeta = styled.span`
  color: ${({ theme }) => theme.colors.label};
  font-weight: 900;
`;

const PoolTools = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const SelectedSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
`;

const SelectedTag = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.3rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.header};
  font-weight: 900;
  font-size: 0.9rem;
`;

const EmptySelected = styled.span`
  color: ${({ theme }) => theme.colors.primaryOrange};
  font-weight: 1000;
`;

const InlineLink = styled.button`
  font-family: inherit;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.label};
  font-weight: 1000;
  cursor: pointer;
  padding: 0.25rem 0.4rem;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.header};
  }
`;

const ChipGrid = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const Chip = styled.button<{ $active?: boolean }>`
  font-family: inherit;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primaryBlue : theme.colors.cardBg};
  color: ${({ theme, $active }) => ($active ? 'white' : theme.colors.header)};
  padding: 0.55rem 1rem;
  font-weight: 1000;
  cursor: pointer;
  transition: transform 0.12s ease, border-color 0.12s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

export default Part2Builder;
