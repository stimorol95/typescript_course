interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodosByCount = (count: number): void => {
  const todos: ToDo[] = [];
  const url = "https://jsonplaceholder.typicode.com/todos";

  fetch(url)
    .then((response) => response.json())
    .then<ToDo[]>((data): ToDo[] => {
      for (let i = 0; i < count; i++) {
        todos.push(data[i]);
      }
      return todos;
    })
    .then((todos: ToDo[]): void => {
      if (todos.length === 0) {
        throw Error("Задач нет");
      }
      console.log(todos);
    });
};
