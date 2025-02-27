import { useState, useEffect } from 'react'

function App() {

  //let's create the dinamic array of posts
  const [posts, setPosts] = useState([]);

  //let's initialize the intialFormData in a empty object with keys from the server
  // const initialFormData = {
  //   title: '',
  //   content: '',
  //   image: '',
  //   tags: [],
  // };

  //let's build dinamic information with useState,with initial value the empty object 
  // const [formData, setFormData] = useState(initialFormData);

  //WITH FETCH METHOD
  // const fetchPosts = () => {
  //   fetch('http://localhost:3000/posts')
  //     .then((res) => res.json())
  //     // .then((data) => setPosts(data.results))
  //     .then(setPosts)


  //     .catch((err) => console.error(err));
  // }

  //with get Axios Method 
  function fetchPosts() {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => {
        setPosts(res.data)
      });
  }

  const handleDelete = (idPost) => {
    axios.delete(`http://localhost:3000/posts/${idPost}`).then
      // (fetchPosts())
      (setPosts(posts.filter(post => post.id !== idPost)))

  };


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
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(post.id)}
                      >
                        x
                      </button>
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
                      <figure>
                        <img className='img-fluid' src={post.image} alt={post.title} />
                      </figure>


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
                      <p># {post.tags.join(" #")} </p>

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
