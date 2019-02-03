package local.home.homedashboard;

public interface TodosWriteRepository {
    Todo save(Todo newTodo);

    void deleteAll();
}
