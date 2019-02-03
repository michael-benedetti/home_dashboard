package local.home.homedashboard;

import org.springframework.stereotype.Component;
import local.home.homedashboard.sql.SqlBackedTodosRepository;

@Component
public class SqlTodosWriteRepository implements TodosWriteRepository {
    private SqlBackedTodosRepository sqlBackedTodosRepository;

    public SqlTodosWriteRepository(SqlBackedTodosRepository sqlBackedTodosRepository) {
        this.sqlBackedTodosRepository = sqlBackedTodosRepository;
    }

    @Override
    public Todo save(Todo newTodo) {
        return sqlBackedTodosRepository.save(newTodo);
    }

    @Override
    public void deleteAll() {
        sqlBackedTodosRepository.deleteAll();
    }
}
