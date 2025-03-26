import type { Module } from 'vuex'

interface FormState {
    [formName: string]: object
}

export const formsModule: Module<FormState, any> = {
    namespaced: true,
    state: () => ({}),
    mutations: {
        SET_FORM_DATA(state: any, payload: { formName: string, data: object }) {
            state[payload.formName] = payload.data
        },
        CLEAR_FORM(state: any, formName: string) {
            delete state[formName]
        }
    },
    actions: {
        saveFormData({ commit }, payload: { formName: string; data: any }) {
            commit('SET_FORM_DATA', payload)
        },
        clearForm({ commit }, formName: string) {
            commit('CLEAR_FORM', formName)
        }
    },
    getters: {
        getFormData: (state) => (formName: string) => {
            return state[formName] || {}
        },
    }
}