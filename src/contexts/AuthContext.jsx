import { createContext, useEffect, useState } from "react";
import { userAuthenticate } from "../firebase/controllers/userController";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const loadingStorage = () => {
      const storageUser = localStorage.getItem("@Auth:user")
      const storageToken = localStorage.getItem("@Auth:token")

      if (storageUser && storageToken) {
        setUser(storageUser)
        setAuthenticated(true)
      }
    }

    const loadingSession = () => {
      const sessionUser = sessionStorage.getItem("@Auth:user")
      const sessionToken = sessionStorage.getItem("@Auth:token")

      if (sessionUser && sessionToken) {
        setUser(sessionUser)
        setAuthenticated(true)
      }
    }

    loadingStorage()
    loadingSession()
  }, [])


  const signIn = async (values) => {

    try {
      const data = await userAuthenticate(values)

      if (data[0] == undefined) {
        console.log('user not found')
      } else {
        const { user } = data[0]
        setUser(user)

        if (values.checked[0] === "remember") {
          localStorage.setItem("@Auth:user", user)
          setAuthenticated(true)
        } else {
          setAuthenticated(true)
          sessionStorage.setItem("@Auth:user", user)
        }
      }

    } catch (err) {
      console.log("Erro: ", err)
    }
  }

  const signOut = () => {
    setUser(null)
    setAuthenticated(false)
    localStorage.clear()
    sessionStorage.clear()
  }

  return (
    <AuthContext.Provider value={{ user, setUser, authenticated, setAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider