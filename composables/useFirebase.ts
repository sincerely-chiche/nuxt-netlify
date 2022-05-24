import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthStore } from "@/store/auth";

export const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    const cred = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            console.log(error);
        });
    
    return cred;
}
export const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
    const cred = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    return cred;

}
export const initUser = async () => {

    const store = useAuthStore();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            console.log("signing out user");
        }
        store.saveUserDetails(user);
    });
}

export const logoutUser = async () => {
    const auth = getAuth();
    await auth.signOut();
}









