import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Post, { IPost } from "../components/Post";
import { useQuery } from "@tanstack/react-query";

const PostListPage = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
  });
  const [posts, setPosts] = useState<IPost[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const filteredPosts = (posts: IPost[] | null | undefined) => {
    const searchedPosts = () => {
      if (value) {
        return posts?.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        return posts;
      }
    };
    return searchedPosts();
  };

  var searchedPosts = filteredPosts(posts);

  const deletePost = (id: number) => {
    setPosts(posts?.filter((post: IPost) => post.id !== id));
  };

  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, like: !post.like } : post
      )
    );
  };

  if (isLoading)
    return (
      <aside className="flex items-center justify-center">
        <p className="animate-spin text-9xl">⟳</p>
      </aside>
    );

  if (isError) return <h1>{`An error has occurred: ` + isError}</h1>;

  return (
    <>
      <Header
        value={value}
        setValue={setValue}
        placeholder={"Search post"}
      ></Header>
      {searchedPosts?.map((post: IPost) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          like={post.like}
          userId={post.userId}
          deletePost={deletePost}
          handleLike={handleLike}
        ></Post>
      ))}
    </>
  );
};

export default PostListPage;
