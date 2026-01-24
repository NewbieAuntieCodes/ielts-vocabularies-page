import React, { useState } from 'react';
import { styled } from 'styled-components';
import { examples5w1h, preExamples } from '../../data/tips/part1Data';
import { 
    IntroSection, 
    GuideContainer,
    StepHeader,
    StepNumber,
    StepTitle,
    FlowQuestion,
    StepDivider,
    StepDescription,
    PromptsGridV2,
    PromptCard,
    FinalAnswerBox,
    AnswerLegend,
    LegendItem,
    LegendColorBox,
    ImportantNote,
    idToPromptType,
    AnswerPart,
    Highlight
} from './shared';
import { LightbulbIcon } from '../shared/Icons';

const Part1Tips: React.FC = () => {
    const [exampleIndex, setExampleIndex] = useState(0);
    const [preExampleIndex, setPreExampleIndex] = useState(0);
    const [activeSkill, setActiveSkill] = useState<'5w1h' | 'pre'>('5w1h');

    const current5w1hExample = examples5w1h[exampleIndex];
    const currentPreExample = preExamples[preExampleIndex];

    return (
        <>
            <IntroSection>
                <h3>Part 1: 快速、连贯地回答</h3>
                <p>在 Part 1 中，目标是给出长度适中（3-5句话）、内容清晰的回答。考官希望看到你能够轻松地谈论日常话题。以下两个技巧将帮助你轻松扩展答案，避免回答过短或逻辑混乱。</p>
            </IntroSection>

            <SkillNavContainer>
                <SkillNavButton $active={activeSkill === '5w1h'} onClick={() => setActiveSkill('5w1h')}>
                    技巧一: 5W1H 扩展法
                </SkillNavButton>
                <SkillNavButton $active={activeSkill === 'pre'} onClick={() => setActiveSkill('pre')}>
                    技巧二: PRE 结构法
                </SkillNavButton>
            </SkillNavContainer>

            {activeSkill === '5w1h' && (
                <div key="5w1h" style={{ animation: 'fadeIn 0.4s ease' }}>
                    <GuideContainer>
                        <StepHeader>
                            <StepNumber>1</StepNumber>
                            <StepTitle>审题：分析问题</StepTitle>
                        </StepHeader>
                        <FlowQuestion>{current5w1hExample.question}</FlowQuestion>
                        <StepDivider />
                        <StepHeader>
                            <StepNumber>2</StepNumber>
                            <StepTitle>拆解：用 5W1H 扩展思路</StepTitle>
                        </StepHeader>
                        <StepDescription>围绕问题，从不同角度发散思考。每个角度都能成为你答案的一部分。</StepDescription>
                        <PromptsGridV2>
                            {current5w1hExample.prompts.map(prompt => <PromptCard key={prompt.id} prompt={prompt} />)}
                        </PromptsGridV2>
                        <StepDivider />
                        <StepHeader>
                            <StepNumber>3</StepNumber>
                            <StepTitle>组合：组织成一个完整的答案</StepTitle>
                        </StepHeader>
                        <StepDescription>将刚才的思路点串联起来，形成一段流暢、详细的回答。</StepDescription>
                        <FinalAnswerBox>
                            <p>
                                {current5w1hExample.answer().map((part: AnswerPart, index: number) =>
                                    part.type === 'text'
                                        ? <React.Fragment key={index}>{part.text}</React.Fragment>
                                        : <Highlight key={index} type={part.type}>{part.text}</Highlight>
                                )}
                            </p>
                        </FinalAnswerBox>
                        <AnswerLegend>
                            {current5w1hExample.legend.map(item => (
                                <LegendItem key={item.id}><LegendColorBox type={idToPromptType[item.id]} />{item.text}</LegendItem>
                            ))}
                        </AnswerLegend>
                    </GuideContainer>
                </div>
            )}
            
            {activeSkill === 'pre' && (
                 <div key="pre" style={{ animation: 'fadeIn 0.4s ease' }}>
                    <GuideContainer>
                        <StepHeader>
                            <StepNumber>1</StepNumber>
                            <StepTitle>审题：分析问题</StepTitle>
                        </StepHeader>
                        <FlowQuestion>{currentPreExample.question}</FlowQuestion>
                        <StepDivider />
                        <StepHeader>
                            <StepNumber>2</StepNumber>
                            <StepTitle>拆解：用 PRE 构建思路</StepTitle>
                        </StepHeader>
                        <StepDescription>围绕问题，按照“观点-理由-例子”的顺序组织你的想法。</StepDescription>
                        <PromptsGridV2>
                            {currentPreExample.prompts.map(prompt => <PromptCard key={prompt.id} prompt={prompt} />)}
                        </PromptsGridV2>
                        <StepDivider />
                        <StepHeader>
                            <StepNumber>3</StepNumber>
                            <StepTitle>组合：组织成一个完整的答案</StepTitle>
                        </StepHeader>
                        <StepDescription>将刚才的思路点串联起来，形成一段逻辑清晰、有理有据的回答。</StepDescription>
                        <FinalAnswerBox>
                            <p>
                                {currentPreExample.answer().map((part: AnswerPart, index: number) =>
                                    part.type === 'text'
                                        ? <React.Fragment key={index}>{part.text}</React.Fragment>
                                        : <Highlight key={index} type={part.type}>{part.text}</Highlight>
                                )}
                            </p>
                        </FinalAnswerBox>
                        <AnswerLegend>
                            {currentPreExample.legend.map(item => (
                                <LegendItem key={item.id}><LegendColorBox type={idToPromptType[item.id]} />{item.text}</LegendItem>
                            ))}
                        </AnswerLegend>
                    </GuideContainer>
                </div>
            )}
            <ImportantNote>
                <LightbulbIcon />
                <p><strong>Part 1 总结:</strong> 5W1H 帮助你丰富<strong>内容</strong>，PRE 帮助你构建<strong>逻辑</strong>。熟练运用这两个技巧，选择其中2-3个角度展开，就能给出一个既饱满又清晰的答案。</p>
            </ImportantNote>
        </>
    );
};

const SkillNavContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 2.5rem;
`;

const SkillNavButton = styled.button<{ $active: boolean }>`
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme, $active }) => $active ? theme.colors.header : theme.colors.label};
    border-bottom: 3px solid ${({ $active, theme }) => $active ? theme.colors.primaryOrange : 'transparent'};
    margin-bottom: -1px;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.header};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
        padding: 0.75rem 1rem;
        flex-grow: 1;
    }
`;

export default Part1Tips;
