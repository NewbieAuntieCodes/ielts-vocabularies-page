import { Word } from '../data-types';
import { wordsA } from './a';
import { wordsB } from './b';
import { wordsC } from './c';
import { wordsD } from './d';
import { wordsE } from './e';
import { wordsF } from './f';
import { wordsG } from './g';
import { wordsH } from './h';
import { wordsI } from './i';
import { wordsJ } from './j';
import { wordsK } from './k';
import { wordsL } from './l';
import { wordsM } from './m';
import { wordsN } from './n';
import { wordsO } from './o';
import { wordsP } from './p';
import { wordsQ } from './q';
import { wordsR } from './r';
import { wordsS } from './s';
import { wordsT } from './t';
import { wordsU } from './u';
import { wordsV } from './v';
import { wordsW } from './w';
import { wordsX } from './x';
import { wordsY } from './y';
import { wordsZ } from './z';

// 动态聚合所有词汇到一个对象中
export const wordPool: Record<string, Word> = {
  ...wordsA,
  ...wordsB,
  ...wordsC,
  ...wordsD,
  ...wordsE,
  ...wordsF,
  ...wordsG,
  ...wordsH,
  ...wordsI,
  ...wordsJ,
  ...wordsK,
  ...wordsL,
  ...wordsM,
  ...wordsN,
  ...wordsO,
  ...wordsP,
  ...wordsQ,
  ...wordsR,
  ...wordsS,
  ...wordsT,
  ...wordsU,
  ...wordsV,
  ...wordsW,
  ...wordsX,
  ...wordsY,
  ...wordsZ,
};
