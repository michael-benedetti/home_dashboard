package local.home.homedashboard;

import org.springframework.stereotype.Component;
import local.home.homedashboard.sql.SqlBackedTodosRepository;

import java.util.List;

@Component
public class SqlTodosReadRepository implements TodosReadRepository {
    private SqlBackedTodosRepository sqlBackedTodosRepository;

    public SqlTodosReadRepository(SqlBackedTodosRepository sqlBackedTodosRepository) {
        this.sqlBackedTodosRepository = sqlBackedTodosRepository;
    }

    @Override
    public List<Todo> findAll() {
        return sqlBackedTodosRepository.findAll();
    }
}
