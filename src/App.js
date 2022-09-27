import getCurrentUser from "./services/get-current-user.service";
import {useEffect, useState} from "react";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getCurrentUser().then(currentUser => {
      setUser(currentUser)
    })
  }, [])

  return (
    <div className="App">
      <h1>{user !== null && user.NAME}</h1>
      <h2>Тест битрикс2</h2>
    </div>
  )
}

export default App;
