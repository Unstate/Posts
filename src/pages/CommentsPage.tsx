import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import Comment from "../components/Comment";

interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const Comments: React.FC = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?${id}`)
        .then((res) => res.data),
  });

  const [comments, setComments] = useState<IComment[] | undefined | null>(null);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (data) {
      setComments(data);
    }
  }, [data]);

  const filteredComments = (comments: IComment[] | null | undefined) => {
    const searchedComments = () => {
      if (value) {
        return comments?.filter((comment) =>
          comment.name.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        return comments;
      }
    };
    return searchedComments();
  };

  var searchedComments = filteredComments(comments);

  if (isLoading)
    return (
      <aside className="flex items-center justify-center">
        <p className="animate-spin text-9xl">⟳</p>
      </aside>
    );

  if (isError) return <h1>{`An error has occured: ` + isError}</h1>;

  return (
    <>
      <Header value={value} setValue={setValue} placeholder="Search comment" />
      <p>{`Comments to post with number >> ${id}`}</p>
      {searchedComments?.map((comment: IComment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
          postId={comment.postId}
        />
      ))}
    </>
  );
};

export default Comments;
