export interface FormTypes {
    type: 'input' | 'checkbox' | 'textarea'
    name: string
    label?: string
    placeholder?: string
    required?: boolean
    readonly?: boolean
}