import { Link } from "react-router-dom";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  like: boolean;
}

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  like: boolean;
  deletePost: (id: number) => void;
  handleLike: (id: number) => void;
}

const Post: React.FC<PostProps> = ({
  id,
  title,
  body,
  like,
  deletePost,
  handleLike,
}) => {
  return (
    <section className="w-1/2 rounded-lg border-4  border-white p-2 text-white ">
      <div className="mb-5 flex justify-between">
        <p className="overflow-auto font-bold">{title}</p>
        <p>
          Number of post {`>>`} {id}
        </p>
      </div>
      <p className="mb-2">{body}</p>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="flex gap-4">
          <button
            className={`rounded-lg border-2 p-1 transition-colors ease-in
           hover:border-cyan-500 hover:text-cyan-500 ${
             like ? "border-cyan-500 text-cyan-500" : "border-white"
           } w-full`}
            onClick={() => handleLike(id)}
          >
            Like
          </button>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            className="rounded-lg border-2 p-1 transition-colors ease-in
           hover:border-cyan-500 hover:text-cyan-500 "
          >
            <Link to={`/comments/${id}`}>Comments</Link>
          </button>
          <button
            onClick={() => deletePost(id)}
            className="rounded-lg border-2 p-1 transition-colors ease-in
             hover:border-cyan-500 hover:text-cyan-500 "
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default Post;
