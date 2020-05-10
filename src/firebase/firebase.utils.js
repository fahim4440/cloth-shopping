import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_r8KJ-Lua2AYZcXGhImL0mNM7FlTGXns",
    authDomain: "cloth-shoping.firebaseapp.com",
    databaseURL: "https://cloth-shoping.firebaseio.com",
    projectId: "cloth-shoping",
    storageBucket: "cloth-shoping.appspot.com",
    messagingSenderId: "128504061893",
    appId: "1:128504061893:web:956af34c703d110dc2f5ac",
    measurementId: "G-FYYER2NKX1"
};

export const createUserProfileDocument = async (authUser, additionalData) => {
    if (!authUser) {
        return
    }

    const userRef = firestore.doc(`users/${authUser.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = authUser;
        const createdAt = new Date();
        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`error to create data into database: ${error.message}`)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;