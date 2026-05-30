import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { RegisterForm } from "../types/auth";
import { auth } from "../config/firebase";


export const registWithEmail = async (data: RegisterForm) : Promise<UserCredential>=> {
    return createUserWithEmailAndPassword(auth, data.email, data.password);
}