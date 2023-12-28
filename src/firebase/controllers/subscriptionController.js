import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
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
  try {
    const subscriptionsRef = collection(db, "subscriptions");
    let data = []

    const q = query(subscriptionsRef, orderBy("name"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    })

    if (querySnapshot.empty)
      throw {
        title: 'Erro',
        description: 'Inscrição não encontrada.'
      }
    else {
      console.log(JSON.stringify(data))
      return data
    }

  } catch (error) {
    console.log(JSON.stringify(error))
    return error
  }
}