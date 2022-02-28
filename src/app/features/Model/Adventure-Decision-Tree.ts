import {YesNoAnswer} from './YesNoAnswer.enum';

export interface AdventureDecisionTree {
  adventureId: number;
  question: string;
  type?: YesNoAnswer;
  children: AdventureDecisionTree[];
}
