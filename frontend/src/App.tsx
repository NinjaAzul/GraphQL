import { gql, useQuery } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`

function App() {
  const { data } = useQuery(GET_USERS)
  console.log(data)
  return <div className="App">hello world</div>
}

export default App
