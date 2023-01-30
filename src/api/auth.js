import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { genAddNewUserToDB } from "./firestore";

export async function genSignIn(auth, db) {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const result = await signInWithPopup(auth, provider);
  try {
    await genAddNewUserToDB(db, result.user);
  } catch (error) {
    console.log(
      "%s Error: New user signup with Google Failed.\n%s",
      error.code,
      error.message
    );
  }
}
