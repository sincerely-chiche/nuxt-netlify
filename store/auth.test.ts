import { useAuthStore } from './auth';
import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from 'pinia'





describe("auth store", () => {

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
    })

    
    it("changes login", () => {

        const authStore = useAuthStore();

        expect(authStore).toBeDefined();

        authStore.changeLogging(true);

        expect(authStore.loggedIn).toBeTruthy();
    })

    it("updates user details", () => {
        const authStore = useAuthStore();
        expect(authStore).toBeDefined();

        authStore.saveUserDetails({ name: 'chiche' });

        expect(authStore._userDetails).toContain({name: 'chiche'});
    })


})