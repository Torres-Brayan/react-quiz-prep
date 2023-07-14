import Users from "./components/Users";
import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
    }

    getData()
  }, [])

  // Instructions:
    // 1. Use a react hook to create some state called users with an initial value of an empty Array.
    // 2. Use the endpoint https://jsonplaceholder.typicode.com/users to get data
    // 3. Use a hook to make the API request when the app loads. 
    // 4. Create Users and UserItem components
    // 5. Pass down the users state into the Users component, loop through it, and render UserItem components
    // 6. Add event listeners to each UserItem, that when clicked will console.log() that UserItems unique ID



  return (
    <div className="container">
      < Users users={users}/>
    </div>
  )
}

export default App
