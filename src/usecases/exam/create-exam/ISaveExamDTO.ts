import { ExamTypeEnum } from "../../../entities/enums/ExamTypeEnum";

export interface ISaveExamDTO {
    name: string;
    type: ExamTypeEnum;
}