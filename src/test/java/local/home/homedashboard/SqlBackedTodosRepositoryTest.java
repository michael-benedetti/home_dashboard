package local.home.homedashboard;

import local.home.homedashboard.sql.SqlBackedTodosRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@DirtiesContext
@RunWith(SpringRunner.class)
@SpringBootTest
public class SqlBackedTodosRepositoryTest {
    @Autowired
    private SqlBackedTodosRepository repo;

    @Before
    public void setup() {
        repo.deleteAll();
    }

    @Test
    public void findAll_returnsAllTodosFromRepo() {
        Todo todoToSave = Todo.builder()
                .completed(true)
                .description("test Todo")
                .build();

        Todo expectedTodo = repo.save(todoToSave);

        assertThat(repo.findAll()).contains(expectedTodo);
    }
}
