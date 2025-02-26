import { useState, useEffect } from 'react'

function App() {

  //let's create the dinamic array of posts
  const [posts, setPosts] = useState([]);

  //WITH FETCH METHOD
  // const fetchPosts = () => {
  //   fetch('http://localhost:3000/posts')
  //     .then((res) => res.json())
  //     // .then((data) => setPosts(data.results))
  //     .then(setPosts)


  //     .catch((err) => console.error(err));
  // }

  //with Axios Method
  function fetchPosts() {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => setPosts(res.data));
  }

  useEffect(fetchPosts, []);

  return (
    <>
      <main className='container'>
        <table className='table'>

          <thead>
            <tr>
              {
                posts.map((post) => {
                  return (
                    <th scope="col" key={post.id}>
                      {post.title}
                    </th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                posts.map((post) => {
                  return (
                    <th scope="col" key={post.id}>
                      {post.content}
                    </th>
                  )
                })
              }
            </tr>
          </tbody>

        </table>

      </main>
    </>
  )
}

export default App
