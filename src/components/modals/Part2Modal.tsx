import React, { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { CueCardData } from '../../types';
import { BackArrowIcon, HelmIcon, NextIcon, PrevIcon } from '../shared/Icons';
import SampleAnswerViewer from '../shared/SampleAnswerViewer';
import { useBandContext } from '../../context/BandContext';
import { DEFAULT_SEASON_ID, SeasonId } from '../../data/seasons';
import { getBuildKitById } from '../../part2-builder/kits';

interface Part2ModalProps {
    card: CueCardData;
    seasonId?: SeasonId;
    seasonTag?: string;
    onClose: () => void;
}

const Part2Modal: React.FC<Part2ModalProps> = ({ card, onClose, seasonId, seasonTag }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { tierToShow, getSampleAnswersForCard, speakingMode } = useBandContext();
    const sampleAnswers = getSampleAnswersForCard(card);
    const resolvedSeasonId: SeasonId = seasonId || (card.seasonId as SeasonId) || DEFAULT_SEASON_ID;
    const resolvedSeasonTag = seasonTag || '【题库】';
    const buildKit = getBuildKitById(card.id);
    const isTeacherMode = speakingMode === 'teacher';
    const [currentView, setCurrentView] = useState<'part2' | 'part3'>('part2');
    const [showP2Answer, setShowP2Answer] = useState(false);

    useEffect(() => {
        setCurrentView('part2');
        setShowP2Answer(false);
    }, [card.id, speakingMode]);

    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    
    if (showP2Answer) {
        return (
           <ModalContainerP2 onClick={handleModalContentClick}>
               <HeaderP2>
                   <BackButtonP2 onClick={() => setShowP2Answer(false)} aria-label="返回题卡">
                       <BackArrowIcon />
                   </BackButtonP2>
                   <h3 id="modal-title-p2-answer">P2 范文解析</h3>
                   <RefreshButtonP2 aria-label="刷新" style={{ visibility: 'hidden' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" /></RefreshButtonP2>
               </HeaderP2>
               <ContentP2>
                    <SampleAnswerViewer 
                        sampleAnswers={sampleAnswers.length ? [sampleAnswers[0]] : []}
                        totalQuestions={1}
                        questionNumbering={(_, question) => question}
                        lockedTier={tierToShow}
                    />
               </ContentP2>
               <FooterP2>
                   <ActionButtonBlue onClick={() => {
                       onClose();
                       navigate({ pathname: `/speaking/analysis/${resolvedSeasonId}/${card.id}`, search: location.search });
                   }}>
                       查看 Part 3 问题及解析
                   </ActionButtonBlue>
               </FooterP2>
           </ModalContainerP2>
        );
    }
    
    return (
         <ModalContainerP2 onClick={handleModalContentClick}>
	             <HeaderP2>
	                <BackButtonP2 
	                    onClick={isTeacherMode ? onClose : (currentView === 'part2' ? onClose : () => setCurrentView('part2'))}
	                    aria-label={isTeacherMode ? '返回' : (currentView === 'part2' ? '返回' : '返回 Part 2')}
	                >
	                    <BackArrowIcon />
	                </BackButtonP2>
	                <h3>{isTeacherMode ? 'P2+P3 题卡' : (currentView === 'part2' ? 'P2 题卡' : 'P3 题卡')}</h3>
	                <RefreshButtonP2 aria-label="刷新"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L20.5 10a5 5 0 0 0-7.82 5.42L11 17.5" /></svg></RefreshButtonP2>
	             </HeaderP2>
             <ContentP2>
                <CardWrapper>
                     <Sidebar>
                        <HelmIcon />
                        <DateText>{resolvedSeasonTag}</DateText>
                     </Sidebar>
                     <MainContent>
                        {card.status === 'New' && <NewTag>新题</NewTag>}
                        <CardTitle id="modal-title-p2">{card.title}</CardTitle>
	                        {(isTeacherMode || currentView === 'part2') && (
                            <PartSection>
                                <PartLabel>Part 2</PartLabel>
                                <Part2Title>{card.part2Title}</Part2Title>
                                <p><strong>{card.part2Description}</strong></p>
                                <Part2Prompts>
                                    {card.part2Prompts?.map((prompt, i) => <li key={i}>{prompt}</li>)}
                                </Part2Prompts>
                                {buildKit && (
                                    <BuilderCallout>
                                        <BuilderHeader>
                                            <BuilderTitle>积木拼装练习</BuilderTitle>
                                            <BuilderHint>点词填空 → 自动拼成 5 句</BuilderHint>
                                        </BuilderHeader>
                                        <BuilderButton onClick={() => {
                                            const params = new URLSearchParams(location.search);
                                            params.set('kit', buildKit.id);
                                            params.set('from', 'bank');
                                            params.set('season', resolvedSeasonId);
                                            const search = params.toString();
                                            onClose();
                                            navigate({ pathname: '/speaking/builder/part2', search: search ? `?${search}` : '' });
                                        }}>
                                            打开积木
                                        </BuilderButton>
                                    </BuilderCallout>
                                )}
                            </PartSection>
                        )}
	                        {(isTeacherMode || currentView === 'part3') && (
                            <PartSection>
                                <PartLabel>Part 3</PartLabel>
                                <Part3Questions>
                                     {card.part3Questions?.map((q, i) => <li key={i}>{q}</li>)}
                                </Part3Questions>
                            </PartSection>
                        )}
                     </MainContent>
                </CardWrapper>
             </ContentP2>
             <FooterP2>
                <PrevNextNav>
                     <button disabled><PrevIcon /> 上一题</button>
                     <button disabled>下一题 <NextIcon /></button>
                </PrevNextNav>
	                 <MainActions>
	                     <ActionButtonOrange onClick={() => setShowP2Answer(true)}>Part 2 范文</ActionButtonOrange>
	                     {isTeacherMode ? (
	                        <ActionButtonBlue onClick={() => {
	                            onClose();
	                            navigate({ pathname: `/speaking/analysis/${resolvedSeasonId}/${card.id}`, search: location.search });
	                        }}>查看 Part 3 解析</ActionButtonBlue>
	                     ) : (
	                        (currentView === 'part2' ? (
	                            <ActionButtonBlue onClick={() => setCurrentView('part3')}>查看 Part 3 问题</ActionButtonBlue>
	                        ) : (
	                            <ActionButtonBlue onClick={() => {
	                                onClose();
	                                navigate({ pathname: `/speaking/analysis/${resolvedSeasonId}/${card.id}`, search: location.search });
	                            }}>查看 Part 3 解析</ActionButtonBlue>
	                        ))
	                     )}
	                 </MainActions>
                 <SupplementaryAction>我要补充</SupplementaryAction>
             </FooterP2>
         </ModalContainerP2>
    );
};

const slideIn = keyframes`from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;

// --- PART 2+3 MODAL STYLES ---
const ModalContainerP2 = styled.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 760px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-out;
  overflow: hidden;
`;
const HeaderP2 = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #e1e8ed;
  h3 { margin: 0; font-size: 1.2rem; font-weight: 600; }
`;
const HeaderButton = styled.button`
  background: none; border: none; cursor: pointer; color: #5b7083; padding: 0.5rem;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  &:hover { background-color: #e8f5fd; color: #1da1f2; }
  svg { width: 22px; height: 22px; }
`;
const BackButtonP2 = styled(HeaderButton)``;
const RefreshButtonP2 = styled(HeaderButton)``;
const ContentP2 = styled.main`
  flex-grow: 1; overflow-y: auto; padding: 1.5rem; background-color: #f5f8fa;
`;
const CardWrapper = styled.div`
  display: flex; gap: 1.5rem; background: white; border-radius: 16px; padding: 1.5rem; border: 1px solid #e1e8ed;
`;
const Sidebar = styled.div`
  background: #1da1f2; color: white; border-radius: 12px; padding: 1rem;
  display: flex; flex-direction: column; align-items: center; text-align: center;
`;
const DateText = styled.p`
  margin: 0.5rem 0 0 0; font-weight: 600; font-size: 0.8rem; writing-mode: vertical-rl; text-orientation: mixed;
`;
const MainContent = styled.div`
  flex-grow: 1; position: relative;
`;
const NewTag = styled.div`
  position: absolute; top: -2.5rem; right: -1.5rem;
  background-color: #ff9f43; color: white; padding: 0.3rem 1rem;
  font-size: 0.8rem; font-weight: 700; border-radius: 16px 0 0 16px;
`;
const CardTitle = styled.h2`
  margin: 0 0 1.5rem 0; font-size: 1.5rem;
`;
const PartSection = styled.section``;
const PartLabel = styled.div`
  font-weight: 700; color: #1da1f2; margin-bottom: 0.5rem;
`;
const Part2Title = styled.p`
  font-size: 1.1rem; font-weight: 600; margin: 0 0 1rem 0;
`;
const Part2Prompts = styled.ul`
  list-style: none; padding-left: 0; margin: 0;
  li { margin-bottom: 0.5rem; color: #5b7083;
    &::before { content: '•'; color: #1da1f2; margin-right: 0.5rem; }
  }
`;

const BuilderCallout = styled.div`
  margin-top: 1rem;
  border: 1px solid #c7dfff;
  background: #e9f2ff;
  border-radius: 14px;
  padding: 0.9rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const BuilderHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const BuilderTitle = styled.div`
  font-weight: 800;
  color: #1a2533;
`;

const BuilderHint = styled.div`
  font-weight: 700;
  color: #5b7083;
  font-size: 0.9rem;
`;

const BuilderButton = styled.button`
  padding: 0.65rem 1.1rem;
  border: none;
  border-radius: 9999px;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  background-color: #1da1f2;
  color: white;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.92;
  }
`;
const Part3Questions = styled.ol`
  padding-left: 1.25rem; margin: 0;
  li { margin-bottom: 0.75rem; }
`;
const FooterP2 = styled.footer`
  padding: 1rem 1.5rem; border-top: 1px solid #e1e8ed; display: flex;
  justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;
`;
const PrevNextNav = styled.div`
  display: flex; gap: 0.5rem;
  button {
    background: none; border: 1px solid #e1e8ed; border-radius: 99px;
    padding: 0.5rem 1rem; font-weight: 600; cursor: not-allowed;
    display: flex; align-items: center; gap: 0.25rem; color: #aab8c2;
  }
`;
const MainActions = styled.div`
  display: flex; gap: 1rem;
`;
const ActionButtonBase = styled.button`
  padding: 0.75rem 1.5rem; border: none; border-radius: 99px; font-size: 1rem;
  font-weight: 700; cursor: pointer; transition: opacity 0.2s;
  &:hover { opacity: 0.9; }
`;
const ActionButtonOrange = styled(ActionButtonBase)`
  background-color: #ff9f43; color: white;
`;
const ActionButtonBlue = styled(ActionButtonBase)`
  background-color: #1da1f2; color: white;
`;
const SupplementaryAction = styled.button`
  background: none; border: none; color: #1da1f2; font-weight: 600;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

export default Part2Modal;
