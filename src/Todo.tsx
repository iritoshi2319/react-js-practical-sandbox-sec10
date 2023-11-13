import { TodoType } from "./types/todo";
import { VFC } from "react";

// typeキーワードで定義した型をpropsの型として定義
export const Todo: VFC<Omit<TodoType, "id">> = (
  // TypeScriptの組み込みの型ユーティリティ『Pick』を用いて
  // importした型定義内の必要なものだけを指定する
  // こうしなければApp.tsx側に『id』も渡ってしまうのでそちらでも処理が必要
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // TypeScriptの組み込みの型ユーティリティ『Omit』を用いて
  // importした型定義内の不要なものだけを指定する方法も可能
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[缶]" : "【み】";
  return <p>{`${completeMark}${title} ユーザー：${userId}`}</p>;
};
