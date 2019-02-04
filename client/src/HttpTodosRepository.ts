import {TodosRepository} from "./TodosRepository";

export class HttpTodosRepository implements TodosRepository {
    public async fetchTodos() {
        const todos = await fetch("/api/todos");

        return todos.json();
    }

    public async save(todo: Todo) {
        const result = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        });

        return result.json();
    }

}