import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD6AcgKI-VdzISQ-o1ZzZkzA-kssSA1wok",
  authDomain: "olx-clone-ace45.firebaseapp.com",
  projectId: "olx-clone-ace45",
  storageBucket: "olx-clone-ace45.appspot.com",
  messagingSenderId: "876817181512",
  appId: "1:876817181512:web:34d157098f85459baaa17d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();