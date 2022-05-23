import { defineStore, acceptHMRUpdate } from "pinia";



export interface AuthState {
    _loggedIn: boolean
}


export const useAuthStore = defineStore("auth", {
    state: (): AuthState => {
        return { _loggedIn: false as boolean};
    },
    getters: {
        loggedIn: (state: AuthState) => state._loggedIn
    },
    actions: {
        changeLogging(payload: boolean) {
            this._loggedIn = payload;
        },
    },
});

if (
    import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore,
        import.meta.hot));
}