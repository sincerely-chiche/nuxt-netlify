import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export const createUser = async (email: string, password: string) => {
    const auth = await getAuth();
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
    const auth = await getAuth();
    const cred = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    return cred;

}
export const initUser = async (email: string, password: string) => {
    const auth = await getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

export const logoutUser = async () => {
    const auth = await getAuth();
    const result = await auth.signOut();
    console.log(result);
}









