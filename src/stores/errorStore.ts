import { reactive } from 'vue'

const state = reactive({
    showMessage: false,
    messageType: 'error',
    messageText: '',
})

export const errorStore = {
    state,

    setError(message: string) {
        state.messageText = message,
            state.messageType = 'error',
            state.showMessage = true
    },
    setSuccess(message: string) {
        state.messageText = message,
            state.messageType = 'success',
            state.showMessage = true
    },
    clearMessage() {
        state.messageText = '',
            state.showMessage = false
    }
}