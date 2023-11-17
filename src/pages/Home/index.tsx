import React, { useMemo } from "react";
import "./styles.css";
import api from "../../apis";
type PostData = {
  id: number;
  title: string;
  body: string;
};
const Home: React.FunctionComponent = () => {
  const [posts, setPosts] = React.useState<PostData[]>([]);
  const getAllPosts = async () => {
    const resp = await api.GetAllPosts();
    setPosts(resp?.data);
  };
  React.useEffect(() => {
    getAllPosts();
  }, []);
  const AllPosts = useMemo(
    () => (
      <div className={posts?.length ? "all_post_loaded" : "all_posts"}>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    ),
    [posts]
  );
  return (
    <div className="home">
      <h1>Welcome</h1>
      <button>Add a new post</button>
      <input />
      <button>Search</button>
      <button>Show All Posts</button>
      <div className="post_wrap">{AllPosts}</div>
    </div>
  );
};

export default Home;
