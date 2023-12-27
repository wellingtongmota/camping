import { collection, addDoc, getDocs } from "firebase/firestore";
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

export const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "subscriptions"));
  let data = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data())
  });

  // console.log(data)
  return data
}