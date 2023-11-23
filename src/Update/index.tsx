import { Container } from "./styles"

import { useNavigate } from "react-router-dom"

export const Update = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <h1>Updat</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </Container>
  )
}
