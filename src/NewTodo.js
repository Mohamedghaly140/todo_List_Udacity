export default function NewTodo(props) {
  const { text, onChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={(e) => onChange(e)} />
      <button type="submit">Create</button>
    </form>
  );
}
