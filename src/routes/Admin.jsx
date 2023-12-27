import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

const Admin = () => {

  const { authenticated } = useContext(AuthContext)

  if (!authenticated) {
    return (
      <Navigate to='/camping-fonte/login' />
    )
  }

  return (
    <div>Admin</div>
  )
}

export default Admin