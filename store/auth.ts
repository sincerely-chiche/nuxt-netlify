import { defineStore, acceptHMRUpdate } from "pinia";



export interface AuthState {
    _loggedIn: boolean,
    _userDetails: object
}


export const useAuthStore = defineStore("auth", {
    state: (): AuthState => {
        return { _loggedIn: false, _userDetails: {}};
    },
    getters: {
        loggedIn: (state: AuthState) => state._loggedIn,
        userDetails: (state: AuthState) => state._userDetails
    },
    actions: {
        changeLogging(payload: boolean) {
            this._loggedIn = payload;
        },
        saveUserDetails(cred: object) {
            this._userDetails = cred;
            console.log(this._userDetails);
        }
    },
});

if (
    import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore,
        import.meta.hot));
}