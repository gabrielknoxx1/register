import { useNavigate } from "react-router-dom"

export const Register = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Register</h1>

      <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}
