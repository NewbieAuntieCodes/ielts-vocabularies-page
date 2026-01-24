
import React, { useState } from 'react';
import { styled, keyframes } from 'styled-components';
import { GoogleGenAI, Type } from "@google/genai";

interface AIEvaluatorProps {
    question: string;
    targetBand: string;
}

interface EvaluationResult {
    overallScore: number;
    fluency: string;
    vocabulary: string;
    grammar: string;
    improvedAnswer: string;
    tips: string[];
}

const getGeminiApiKey = (): string | null => {
    const key = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
    return key?.trim() ? key.trim() : null;
};

const AIEvaluator: React.FC<AIEvaluatorProps> = ({ question, targetBand }) => {
    const [userInput, setUserInput] = useState('');
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [result, setResult] = useState<EvaluationResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleEvaluate = async () => {
        if (!userInput.trim()) return;

        const apiKey = getGeminiApiKey();
        if (!apiKey) {
            setError('未配置 Gemini API Key：请在 `.env.local` 设置 `VITE_GEMINI_API_KEY=你的key` 后重启开发服务。');
            return;
        }

        setIsEvaluating(true);
        setError(null);
        setResult(null);

        try {
            const ai = new GoogleGenAI({ apiKey });
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: `Evaluate the following IELTS Speaking answer for the question: "${question}". 
                The student is aiming for a Band ${targetBand}.
                
                Student Answer: "${userInput}"`,
                config: {
                    systemInstruction: "You are an experienced IELTS Speaking Examiner. Provide a strict but constructive evaluation in JSON format. The feedback should be in Chinese (except for the English answer parts).",
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            overallScore: { type: Type.NUMBER, description: "Estimated band score" },
                            fluency: { type: Type.STRING, description: "Feedback on fluency" },
                            vocabulary: { type: Type.STRING, description: "Feedback on lexical resource" },
                            grammar: { type: Type.STRING, description: "Feedback on grammatical range and accuracy" },
                            improvedAnswer: { type: Type.STRING, description: "A high-scoring (Band 7.5+) version of the student's answer" },
                            tips: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 actionable tips for improvement" }
                        },
                        required: ["overallScore", "fluency", "vocabulary", "grammar", "improvedAnswer", "tips"]
                    }
                }
            });

            const data = JSON.parse(response.text || '{}');
            setResult(data);
        } catch (err) {
            console.error("AI Evaluation failed:", err);
            setError("评价失败，请稍后再试。可能是网络或API问题。");
        } finally {
            setIsEvaluating(false);
        }
    };

    return (
        <Container>
            <InputSection>
                <Label>输入你的练习文本（可使用语音转文字或手动输入）</Label>
                <TextArea 
                    placeholder="在此输入你的回答..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={isEvaluating}
                />
                <ButtonRow>
                    <EvaluateButton 
                        onClick={handleEvaluate} 
                        disabled={isEvaluating || !userInput.trim()}
                    >
                        {isEvaluating ? <LoadingSpinner /> : "开始 AI 评价"}
                    </EvaluateButton>
                    <ClearButton onClick={() => setUserInput('')} disabled={isEvaluating}>清空</ClearButton>
                </ButtonRow>
            </InputSection>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            {result && (
                <ResultCard>
                    <ScoreHeader>
                        <ScoreCircle>
                            <ScoreValue>{result.overallScore}</ScoreValue>
                            <ScoreLabel>估计得分</ScoreLabel>
                        </ScoreCircle>
                        <ScoreSummary>
                            <p>目标分数: {targetBand}</p>
                            <p>AI 评价已生成。你的表达在{result.overallScore >= parseFloat(targetBand) ? "达标边缘" : "稳步提升中"}。</p>
                        </ScoreSummary>
                    </ScoreHeader>

                    <CriteriaGrid>
                        <Criterion>
                            <strong>流利度 (FC):</strong>
                            <p>{result.fluency}</p>
                        </Criterion>
                        <Criterion>
                            <strong>词汇 (LR):</strong>
                            <p>{result.vocabulary}</p>
                        </Criterion>
                        <Criterion>
                            <strong>语法 (GRA):</strong>
                            <p>{result.grammar}</p>
                        </Criterion>
                    </CriteriaGrid>

                    <ImprovedSection>
                        <h4>高分改写参考 (Band 7.5+)</h4>
                        <ImprovedText>{result.improvedAnswer}</ImprovedText>
                    </ImprovedSection>

                    <TipsSection>
                        <h4>改进建议</h4>
                        <ul>
                            {result.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                        </ul>
                    </TipsSection>
                </ResultCard>
            )}
        </Container>
    );
};

const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const InputSection = styled.div`
    background: ${({ theme }) => theme.colors.boxBg};
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Label = styled.div`
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.header};
`;

const TextArea = styled.textarea`
    width: 100%;
    min-height: 120px;
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primaryBlue};
    }
`;

const ButtonRow = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

const EvaluateButton = styled.button`
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    transition: transform 0.2s;

    &:hover:not(:disabled) {
        transform: translateY(-2px);
    }
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const ClearButton = styled.button`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.label};
`;

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
`;

const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.primaryRed};
    font-weight: 600;
    text-align: center;
    padding: 1rem;
    background: #fff5f5;
    border-radius: 8px;
`;

const ResultCard = styled.div`
    background: white;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    animation: fadeIn 0.5s ease;
`;

const ScoreHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ScoreCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primaryLight};
    border: 4px solid ${({ theme }) => theme.colors.primaryBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ScoreValue = styled.div`
    font-size: 2.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primaryBlue};
    line-height: 1;
`;

const ScoreLabel = styled.div`
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.label};
`;

const ScoreSummary = styled.div`
    flex: 1;
    p { margin: 0; line-height: 1.6; }
    p:first-child { font-weight: 800; font-size: 1.1rem; color: ${({ theme }) => theme.colors.header}; }
`;

const CriteriaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
`;

const Criterion = styled.div`
    strong { display: block; margin-bottom: 0.5rem; color: ${({ theme }) => theme.colors.header}; }
    p { font-size: 0.95rem; color: ${({ theme }) => theme.colors.text}; margin: 0; }
`;

const ImprovedSection = styled.div`
    background: ${({ theme }) => theme.colors.highlightBg};
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    h4 { margin: 0 0 1rem 0; color: ${({ theme }) => theme.colors.primaryBlue}; }
`;

const ImprovedText = styled.div`
    font-style: italic;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.header};
`;

const TipsSection = styled.div`
    h4 { margin: 0 0 1rem 0; }
    ul { padding-left: 1.25rem; margin: 0; }
    li { margin-bottom: 0.5rem; }
`;

export default AIEvaluator;
