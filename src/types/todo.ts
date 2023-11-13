export type TodoType = {
  userId: number;
  id: number;
  title: string;
  // completedは『必須ではない』想定でクエスチョンを使う
  completed?: boolean;
};
