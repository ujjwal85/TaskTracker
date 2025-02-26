import { reactive } from 'vue'

const state = reactive({
    errorMessage: '',
    showError: false
})

export const errorStore = {
    state,

    setError(message: string) {
        state.errorMessage = message
        state.showError = true
    },

    clearError() {
        state.errorMessage = ''
        state.showError = false
    }
}
