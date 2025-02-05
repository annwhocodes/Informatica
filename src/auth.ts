import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { User } from "./types"; // Assuming `User` is defined in types.ts
import { auth } from "./firebase"; // Ensure the correct path to firebase.ts

// Function to save a new user
export const saveUser = async (user: User): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
    return userCredential;
  } catch (error: any) {
    // `error` is typed as `any` to handle non-TypeScript errors from Firebase SDK
    throw new Error(error.message);
  }
};

// Function to validate user login
export const validateUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error: any) {
    // `error` is typed as `any` to handle Firebase errors
    throw new Error(error.message);
  }
};

