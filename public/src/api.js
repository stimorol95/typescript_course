export const getTodosByCount = (count) => {
    const todos = [];
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        for (let i = 0; i < count; i++) {
            todos.push(data[i]);
        }
        return todos;
    })
        .then((todos) => {
        if (todos.length === 0) {
            throw Error("Задач нет");
        }
        console.log(todos);
    });
};
