import type { OptionsTypes } from "./OptionsTypes.ts";

export interface FormTypes {
    type: 'text' | 'password' | 'checkbox' | 'textarea' | 'select'
    name: string
    label?: string
    placeholder?: string
    required?: boolean
    readonly?: boolean
    options?: OptionsTypes[]
}