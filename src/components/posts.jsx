import { useEffect, useState } from "react";
import Post from "./post";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const useurl="https://cookbook-backend-0sqo.onrender.com"
  useEffect(() => {
    fetch(useurl+"/posts").then((response) => {
      response.json().then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
    });
  }, []);

  return (
    <div class="postbg">
      <div className="post">
        <div></div>
        <div className="post-con">
          {posts.length > 0 && posts.map((post) => <Post {...post} />)}
        </div>
      </div>
    </div>
  );
}
