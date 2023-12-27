import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const newSubscription = async (values) => {

  const { name, email, phone, church, ground, transport, payment } = values

  try {
    const docRef = await addDoc(collection(db, "subscriptions"), {
      name,
      email,
      phone,
      church,
      ground,
      transport,
      payment
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}