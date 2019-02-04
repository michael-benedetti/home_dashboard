export interface TodosRepository {
    fetchTodos: () => Promise<Todo[]>;
    save: (todo: Todo) => Promise<Todo>;
}
