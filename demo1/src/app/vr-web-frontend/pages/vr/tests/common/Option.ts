import {boolean, number, string} from "yup";

export  interface Option
{
    id: number;
    option_id: string;
    text: string;
    isCorrect: boolean;
};