import {Option} from "./Option";

export interface Question
{
    id: number;
    questionKey: string;
    index: number;
    text: string;
    options: Option[];
}