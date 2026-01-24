import React from 'react';
import { styled } from 'styled-components';
import { prePart3Examples } from '../../data/tips/part3Data';
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
import { LightbulbIcon, DownArrowIcon } from '../shared/Icons';

const Part3Tips: React.FC = () => {
    const currentPREExample = prePart3Examples[0];
    return (
        <>
            <IntroSection>
                <h3>Part 3: 深入探讨，展现思辨能力</h3>
                <p>Part 3 要求你就 Part 2 的相关话题进行更深入、更抽象的讨论。考官希望看到你的逻辑思维和论证能力。PRE 结构是这一部分的关键技巧，能帮助你构建一个逻辑严密、有理有据的回答。</p>
            </IntroSection>

            <GuideContainer>
                <div>
                    <StepHeader>
                        <StepNumber>1</StepNumber>
                        <StepTitle>审题：分析问题</StepTitle>
                    </StepHeader>
                    <FlowQuestion>{currentPREExample.question}</FlowQuestion>
                </div>

                <StepDivider />

                <div>
                    <StepHeader>
                        <StepNumber>2</StepNumber>
                        <StepTitle>拆解：用 PRE 构建论点</StepTitle>
                    </StepHeader>
                    <StepDescription>
                        <b>P</b>oint (观点) → <b>R</b>eason (理由) → <b>E</b>xample (例子). 
                        这个经典结构可以帮助你清晰地表达任何观点。
                    </StepDescription>
                    
                    <PREGraphicContainer>
                        <PREBlock type="point">
                            <PRELabel type="point">P</PRELabel>
                            <PREText>I think going to a coffee shop would be a good idea.</PREText>
                        </PREBlock>
                        <ArrowContainer>
                            <DownArrowIcon />
                        </ArrowContainer>
                        <PREBlock type="reason">
                            <PRELabel type="reason">R</PRELabel>
                            <PREText>Because it is inexpensive, and the atmosphere is quiet and comfortable, so we can spend time together.</PREText>
                        </PREBlock>
                        <ArrowContainer>
                            <DownArrowIcon />
                        </ArrowContainer>
                        <PREBlock type="example">
                            <PRELabel type="example">E</PRELabel>
                            <PREText>For example, last week I went to a coffee shop near my school. It had nice drinks and snacks, and we could sit and chat for a long time.</PREText>
                        </PREBlock>
                    </PREGraphicContainer>

                    <PromptsGridV2>
                        {currentPREExample.prompts.map(prompt => <PromptCard key={prompt.id} prompt={prompt} />)}
                    </PromptsGridV2>
                </div>

                <StepDivider />
                
                <div>
                    <StepHeader>
                        <StepNumber>3</StepNumber>
                        <StepTitle>组合：形成一个有说服力的答案</StepTitle>
                    </StepHeader>
                    <StepDescription>将你的观点、理由和例子串联起来，形成一个逻辑连贯的完整回答。</StepDescription>
                    <FinalAnswerBox>
                        <p>
                            {currentPREExample.answer().map((part: AnswerPart, index: number) =>
                                part.type === 'text'
                                    ? <React.Fragment key={index}>{part.text}</React.Fragment>
                                    : <Highlight key={index} type={part.type}>{part.text}</Highlight>
                            )}
                        </p>
                    </FinalAnswerBox>
                    <AnswerLegend>
                        {currentPREExample.legend.map(item => (
                            <LegendItem key={item.id}><LegendColorBox type={idToPromptType[item.id]} />{item.text}</LegendItem>
                        ))}
                    </AnswerLegend>
                </div>
            </GuideContainer>
            <ImportantNote>
                <LightbulbIcon />
                <p><strong>Part 3 总结:</strong> 始终尝试用 PRE 结构来组织你的思想。即使你对某个话题不熟悉，这个框架也能帮助你清晰地表达观点。关键是展示你的思考过程，而不仅仅是给出一个简单的答案。</p>
            </ImportantNote>
        </>
    );
};

const PREGraphicContainer = styled.div`
    padding: 1rem 0;
    margin: 1.5rem auto 2.5rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-left: calc(40px + 1rem);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-left: 0;
    }
`;

const PREBlock = styled.div<{ type: string }>`
    background-color: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    padding: 1.25rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

const PRELabel = styled.div<{ type: string }>`
    background-color: ${({ theme, type }) => theme.colors[type as keyof typeof theme.colors]};
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const PREText = styled.p`
    margin: 0;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};
    padding-top: 0.2rem;
`;

const ArrowContainer = styled.div`
    color: ${({ theme }) => theme.colors.label};
    opacity: 0.5;
`;

export default Part3Tips;