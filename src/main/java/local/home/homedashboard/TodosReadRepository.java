package local.home.homedashboard;

import java.util.List;

public interface TodosReadRepository {
    List<Todo> findAll();
}
