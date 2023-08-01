interface CommentProps {
  name: string;
  email: string;
  body: string;
  postId: number;
}

const Comment: React.FC<CommentProps> = ({ name, email, body }) => {
  return (
    <section className="w-1/2 rounded-lg border-4 border-white p-2 text-white ">
      <div className="mb-5 flex justify-between">
        <p className="overflow-auto font-bold">{name}</p>
        <p>{email}</p>
      </div>
      <p className="mb-2">{body}</p>
    </section>
  );
};

export default Comment;
