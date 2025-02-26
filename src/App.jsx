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
      <main className='container-fluid'>
        <table className='table'>

          <thead>
            <tr>
              {
                posts.map((post) => {
                  return (
                    <th scope="col" key={post.id}>
                      <p>{post.title}</p>
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
                    <td scope="col" key={post.id}>
                      <p>{post.content}</p>
                    </td>
                  )
                })
              }
            </tr>
          </tbody>
          <tfoot>
            <tr>
              {
                posts.map((post) => {
                  return (
                    <td scope="col" key={post.id}>
                      <p>{post.tags}</p>
                    </td>
                  )
                })
              }
            </tr>
          </tfoot>

        </table>

      </main>
    </>
  )
}

export default App
