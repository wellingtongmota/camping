import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const insertUser = async (values) => {

  const { user, password } = values
  try {
    const docRef = await addDoc(collection(db, "users"), {
      user,
      password,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}