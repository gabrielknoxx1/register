import { useNavigate } from "react-router-dom"

export const Update = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Update</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}
