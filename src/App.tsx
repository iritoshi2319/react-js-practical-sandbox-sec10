import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserPlofile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "iri",
  hobbies: ["さんぽ", "げーむ"]
};
export default function App() {
  // stateの型（arrayの中にTodoType）を定義
  // todos自体が配列なので、この初期値は空配列[]を指定しておく
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      // 取得データに対して型（arrayの中にTodoType）を定義
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((result) => {
        setTodos(result.data);
      });
  };
  return (
    <div className="App">
      <UserPlofile user={user} />
      <Text color="red" fontSize="28px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}
