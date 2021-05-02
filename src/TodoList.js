import TodoItem from "./TodoItem";

export default function TodoList(props) {
  /* Destructure props */
  const { todoItems, onDelete, onCompleteChange } = props;

  return (
    <ul>
      {todoItems.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onDeleteItem={onDelete}
            onCompleteItem={onCompleteChange}
          />
          {/* Map over todo items */
          /* Add respective handlers to each item */}
        </li>
      ))}
    </ul>
  );
}
