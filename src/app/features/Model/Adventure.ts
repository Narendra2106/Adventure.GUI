export interface Adventure {
    adventureId: number;
    question: string;
    ifYesNextQuestionId: number;
    ifNoNextQuestionId: number;
  }
  