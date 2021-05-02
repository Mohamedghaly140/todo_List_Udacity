export default function TodoItem(props) {
  /* Destructure props */
  const { todo, onDeleteItem, onCompleteItem } = props;

  return (
    <div>
      <p
        style={{
          textDecoration: `${todo.completed ? "line-through" : "none"}`
        }}
      >
        {todo.text}
      </p>
      <button onClick={(e) => onDeleteItem(e, todo.id)}>Delete</button>
      <input
        type="checkbox"
        value={todo.completed}
        checked={todo.completed}
        onChange={(e) => onCompleteItem(e, todo.id)}
      />
    </div>
  );
}
