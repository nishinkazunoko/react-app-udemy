import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore'
import { auth, db } from "../firebase"
import "./Home.css"

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // 💡 mapの引数を "doc" から "postDoc" に変更
      setPostList(data.docs.map((postDoc) => ({ ...postDoc.data(), id: postDoc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  }

  return (
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              {post.postText}
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author?.username || "名無しさん"}</h3>
              {auth.currentUser && post.author?.id === auth.currentUser.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home