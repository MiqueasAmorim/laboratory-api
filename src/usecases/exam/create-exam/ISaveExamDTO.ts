import { ExamTypeEnum } from "../../../entities/enums/ExamTypeEnum";
import { Laboratory } from "../../../entities/Laboratory";

export interface ISaveExamDTO {
    name: string;
    type: ExamTypeEnum;
}