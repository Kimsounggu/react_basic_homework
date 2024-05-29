import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 100,
      text: "잠자기",
      completed: true,
    },
    {
      id: 101,
      text: "일찍일어나기",
      completed: false,
    },
  ]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);

    setInput("");
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
