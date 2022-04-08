import Comments from "./Comments";
import NewComment from "./NewComment";

const Post = ({ title, body, postId, comment }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comments comments={comment} />
    <NewComment postId={postId} />
  </div>
}

export default Post;
