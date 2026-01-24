
import { TopicData } from '../../../types';
import { topicAData } from '../../part1/topicA';
import { topicBData } from '../../part1/topicB';
import { topicCData } from '../../part1/topicC';
import { topicDData } from '../../part1/topicD';
import { essentialsTopic } from '../../part1/essentials';

export const initialPart1Data: TopicData[] = [
  essentialsTopic, // 每一季开头都出现
  topicAData,
  topicBData,
  topicCData,
  topicDData,
];

export default initialPart1Data;
