import React from 'react';
import { styled } from 'styled-components';
import { 
    IntroSection,
    GuideContainer,
    StepHeader,
    StepNumber,
    StepTitle,
    StepDescription,
    StepDivider,
    FlowQuestion,
    FinalAnswerBox,
    AnswerLegend,
    LegendItem,
    LegendColorBox,
    Highlight
} from './shared';
import { RightArrowIcon } from '../shared/Icons';

const Part2Tips: React.FC = () => {
    return (
        <>
            <IntroSection>
                <h3>Part 2: 讲述一个有吸引力的故事</h3>
                <p>Part 2 的核心是在1分钟准备后，进行1-2分钟的个人陈述。话题卡通常分为<b>人物、地点、事物、事件</b>等几大类。本部分考验的是你快速构建思路和讲述一个有结构、有细节故事的能力。5W1H 和 PRE 同样是你的得力助手。</p>
            </IntroSection>
            
            <GuideContainer>
                <div>
                    <StepHeader>
                        <StepNumber>1</StepNumber>
                        <StepTitle>1分钟准备: 用 5W1H 构建故事蓝图</StepTitle>
                    </StepHeader>
                    <StepDescription>
                        题卡上的提示 (prompts) 其实就是 5W1H 的变体。利用一分钟准备时间，针对每个提示写下关键词，这就是你故事的骨架。
                    </StepDescription>
                    <VisualAidGrid>
                        <MockCueCard>
                            <h4>Describe a good friend...</h4>
                            <ul>
                                <li>Who this person is</li>
                                <li>How you met</li>
                                <li>What you do together</li>
                                <li>Why this person is important</li>
                            </ul>
                        </MockCueCard>
                        <ArrowIcon><RightArrowIcon /></ArrowIcon>
                        <MockNotepad>
                            <h4>My Notes (1 min)</h4>
                            <ul>
                                <li><Highlight type="who">Who:</Highlight> Li Wei, classmate</li>
                                <li><Highlight type="how">How:</Highlight> university project</li>
                                <li><Highlight type="what">What:</Highlight> study, basketball</li>
                                <li><Highlight type="why">Why:</Highlight> supportive (exam), funny</li>
                            </ul>
                        </MockNotepad>
                    </VisualAidGrid>
                </div>

                <StepDivider />

                <div>
                    <StepHeader>
                        <StepNumber>2</StepNumber>
                        <StepTitle>充实细节: 用 PRE 让故事更饱满</StepTitle>
                    </StepHeader>
                    <StepDescription>
                        在讲述故事时，特别是解释原因 (Why) 或阐述感受 (How) 时，可以巧妙地使用 PRE 结构，让你的论证更有力、更具说服力。
                    </StepDescription>
                    <PREExampleContainer>
                        <PREPrompt>Prompt: "And explain why this person is important to you."</PREPrompt>
                        <PREStep type="point">
                            <PRELabel>P - Point</PRELabel>
                            <PREText>He's incredibly supportive, which is the main reason he's so important to me.</PREText>
                        </PREStep>
                        <PREStep type="reason">
                            <PRELabel>R - Reason</PRELabel>
                            <PREText>This is because he always encourages me when I'm facing challenges.</PREText>
                        </PREStep>
                        <PREStep type="example">
                            <PRELabel>E - Example</PRELabel>
                            <PREText>For instance, right before my final exams, I was really stressed out. He spent a whole afternoon helping me review and told me he believed in me. That gesture made a huge difference.</PREText>
                        </PREStep>
                    </PREExampleContainer>
                </div>

                <StepDivider />

                <div>
                    <StepHeader>
                        <StepNumber>3</StepNumber>
                        <StepTitle>实战演练：一个完整的故事</StepTitle>
                    </StepHeader>
                    <FlowQuestion>Describe an old person you know and respect.</FlowQuestion>
                     <FinalAnswerBox>
                        <p><Highlight type="introduction">I'd like to talk about my grandfather. He's in his late seventies, and he's been a huge influence in my life.</Highlight></p>
                        <p><Highlight type="body1">One of his main qualities is his incredible patience. (PRE Starts) I remember when I was struggling with a complex math problem. I wanted to give up, but he sat with me for over an hour, calmly explaining it from different angles until I understood. That taught me the value of persistence.</Highlight></p>
                        <p><Highlight type="body2">Another thing I respect is his optimistic attitude. (PRE Starts) He has faced many challenges, but he always finds something positive. For example, after a knee surgery, he treated the recovery period as a great opportunity to catch up on his reading. His "every cloud has a silver lining" mindset is truly inspiring.</Highlight></p>
                        <p><Highlight type="conclusion">So, he is not just a family member to me; he is a role model. His patience and optimism have shaped my character, and that's why I respect him so much.</Highlight></p>
                     </FinalAnswerBox>
                     <AnswerLegend>
                        <LegendItem><LegendColorBox type="introduction" /> Introduction</LegendItem>
                        <LegendItem><LegendColorBox type="body1" /> Story 1 (with PRE)</LegendItem>
                        <LegendItem><LegendColorBox type="body2" /> Story 2 (with PRE)</LegendItem>
                        <LegendItem><LegendColorBox type="conclusion" /> Conclusion</LegendItem>
                    </AnswerLegend>
                </div>
            </GuideContainer>
        </>
    );
};

const VisualAidGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 1.5rem;
    padding-left: calc(40px + 1rem);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding-left: 0;
    }
`;

const MockCardBase = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.colors.cardBg};
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    height: 100%;

    h4 {
        margin: 0 0 1rem 0;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.header};
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            margin-bottom: 0.5rem;
        }
    }
`;

const MockCueCard = styled(MockCardBase)`
    background-color: ${({ theme }) => theme.colors.cardYellowBg};
    border-color: #fbe5a2;
    li::before {
        content: '•';
        color: ${({ theme }) => theme.colors.label};
        margin-right: 0.5rem;
    }
`;

const MockNotepad = styled(MockCardBase)`
    li {
        display: flex;
        gap: 0.5rem;
    }
`;

const ArrowIcon = styled.div`
    color: ${({ theme }) => theme.colors.label};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        transform: rotate(90deg);
        margin: 0 auto;
    }
`;

const PREExampleContainer = styled.div`
    padding-left: calc(40px + 1rem);
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-left: 0;
    }
`;

const PREPrompt = styled.div`
    font-style: italic;
    color: ${({ theme }) => theme.colors.label};
    margin-bottom: 0.5rem;
`;

const PREStep = styled.div<{ type: string }>`
    border-left: 4px solid;
    padding: 0.75rem 1.25rem;
    border-color: ${({ theme, type }) => theme.colors[type as keyof typeof theme.colors]};
    background-color: ${({ theme, type }) => theme.colors[`analysis${type.charAt(0).toUpperCase() + type.slice(1)}Bg` as keyof typeof theme.colors]};
    border-radius: 0 8px 8px 0;
`;

const PRELabel = styled.div`
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.colors.header};
`;

const PREText = styled.p`
    margin: 0;
`;

export default Part2Tips;
