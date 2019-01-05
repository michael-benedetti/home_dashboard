package local.home.homedashboard.sql;

import local.home.homedashboard.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SqlBackedTodosRepository extends CrudRepository<Todo, Long> {
    List<Todo> findAll();

    Todo save(Todo newTodo);
}
