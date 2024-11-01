
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBxpm0GvZdQ0_Jz5Del7eEoswmk477IOQk",
  authDomain: "netflix-clone-58d21.firebaseapp.com",
  projectId: "netflix-clone-58d21",
  storageBucket: "netflix-clone-58d21.appspot.com",
  messagingSenderId: "684582914588",
  appId: "1:684582914588:web:169fc8db32019824b96dd9"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db =getFirestore(app);

const signup =async (name,email,password)=>{
  try {
    const res= await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
    })
  } catch (error) {
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "));

  }
}


const login= async(email, password)=>{
     try {
        await signInWithEmailAndPassword(auth,email,password);

        
     } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
     }
}

const logout =()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};