import { ExamTypeEnum } from "../../../entities/enums/ExamTypeEnum";

export interface IUpdateExamDTO {
    id: number;
    name: string;
    type: ExamTypeEnum;
    isActive: boolean;
}