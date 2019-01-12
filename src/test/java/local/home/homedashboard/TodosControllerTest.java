package local.home.homedashboard;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class TodosControllerTest {
    @Mock
    private TodosReadRepository readRepository;

    @Mock
    private TodosWriteRepository writeRepository;

    private TodosController todosController;

    @Before
    public void setup() {
        todosController = new TodosController(readRepository, writeRepository);
    }

    @Test
    public void getTodos_fetchesTodosFromReadRepo() {
        todosController.getTodos();
        verify(readRepository).findAll();
    }

    @Test
    public void addTodo_callsWriteRepoWithCorrectData() {
        Todo todoToAdd = Todo.builder()
                .completed(false)
                .description("test todo")
                .build();

        todosController.addTodo(todoToAdd);

        verify(writeRepository).save(todoToAdd);
    }


}
