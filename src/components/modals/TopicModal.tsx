import React from 'react';
import { styled, keyframes } from 'styled-components';
import { CueCardData } from '../../types';
import Part1Modal from './Part1Modal';
import Part2Modal from './Part2Modal';
import { SeasonId } from '../../data/seasons';

interface TopicModalProps {
    card: CueCardData;
    seasonId?: SeasonId;
    seasonTag?: string;
    onClose: () => void;
}

const TopicModal: React.FC<TopicModalProps> = (props) => {
    const isPart2Card = !!props.card.part2Title;

    return (
        <ModalOverlay onClick={props.onClose} role="dialog" aria-modal="true">
            {isPart2Card ? <Part2Modal {...props} /> : <Part1Modal {...props} />}
        </ModalOverlay>
    );
};

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease;
`;

export default TopicModal;
