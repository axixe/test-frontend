import { Store } from "vuex";

export const useHandleForm = (store: Store<any>) => {
    const useFormSubmit = (formType: string) => {
        const storeData = store.getters["forms/getFormData"](formType)

        localStorage.setItem(formType, JSON.stringify({ ...storeData }))
        alert('Значения из стейта записаны')
    }

    const useFormClear = (formType: string) => {
        store.dispatch('forms/clearForm', formType)

        localStorage.removeItem(formType)
        alert('Значения из стейта удалены')
    }

    const useFormGetData = (formType: string): Record<string, any> | null => {
        const localStorageData = localStorage.getItem(formType)

        return localStorageData ? JSON.parse(localStorageData) : null
    }

    return {
        useFormSubmit,
        useFormClear,
        useFormGetData,
    }
}