import { useState, useEffect } from 'react'

function App() {

  //let's create the dinamic array of posts
  const [posts, SetPosts] = useState([]);

  const fetchPosts = () => {
    fetch('https://localhost:3000')
      .then((res) => res.json())
      .then((data) => SetPosts(data.results))

      .catch((err) => console.error(err));
  }

  useEffect(fetchPosts, []);

  return (
    <>
      <h1>React Api</h1>
    </>
  )
}

export default App
