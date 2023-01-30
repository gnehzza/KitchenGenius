import { setDoc, doc, getDoc } from "firebase/firestore";

export async function genAddNewUserToDB(db, user) {
  try {
    const exists = await genCheckUserExists(db, user.uid);
    if (!exists) {
      await setDoc(doc(db, "users", user.uid), {
        profilePicture: user.photoURL,
      });
    } else {
      console.log("User already exists in DB");
      // TODO: Update user daily streak
    }
  } catch (error) {
    console.error(
      "%s Error: Failed to adding user to Firestore. \n%s",
      error.code,
      error.message
    );
  }
}

async function genCheckUserExists(db, user_id) {
  const docRef = doc(db, "users", user_id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
}
