export default function CommentForm({ onSubmitComment, commentText, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    onSubmitComment(commentText, slug);
    event.target.reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit} aria-label="add comments">
        <label htmlFor="comments">Add your comment:</label>
        <br />
        <textarea
          value={commentText}
          type="text"
          name="comment"
          rows="4"
          placehoder="Write your comment here..."
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
