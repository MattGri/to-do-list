import { useSelector } from 'react-redux';

const TodoList = ({ id }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <>
          <li key={todo.id}>{todo.text}</li>
        </>
      ))}
    </ul>
  );
};

export default TodoList;
