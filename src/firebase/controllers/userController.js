import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
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

export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

export const userAuthenticate = async (values) => {
  try {
    const { user, password } = values
    const usersRef = collection(db, "users");
    let data = []

    // Create a query against the collection.
    const q = query(usersRef, where("user", "==", user), where("password", "==", password));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      data.push(doc.data())
    })

    if (querySnapshot.empty)
      throw {
        title: 'Erro',
        description: 'Usuário ou senha inválidos.'
      }
    else {
      // console.log(JSON.stringify(data))
      return data
    }

  } catch (error) {
    // console.log(JSON.stringify(error))
    return error
  }
}