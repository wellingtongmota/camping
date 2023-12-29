import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const getAll = async () => {
  try {
    const subscriptionsRef = collection(db, "subscriptions");
    let data = []

    const q = query(subscriptionsRef, orderBy("name"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(Object.assign({ id: doc.id }, doc.data()))
    })

    if (querySnapshot.empty)
      throw {
        title: 'Erro',
        description: 'Não há inscrições.'
      }
    else {
      return data
    }

  } catch (error) {
    console.log('Erro geAll: ', error)
    return []
  }
}

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

export const deleteSubscription = async (values) => {
  const { id } = values
  await deleteDoc(doc(db, "subscriptions", `${id}`))
    .then(response => {
      console.log('delete ok. ', response)
      return true
    })
    .catch(e => {
      console.log('error delete. ', e)
      return false
    })
}