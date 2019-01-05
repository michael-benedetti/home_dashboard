package local.home.homedashboard;

import lombok.Builder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Builder
@RestController
@RequestMapping("/api/todos")
public class TodosController {
    private TodosReadRepository todosReadRepository;
    private TodosWriteRepository todosWriteRepository;

    public TodosController(TodosReadRepository sqlTodosReadRepository, TodosWriteRepository sqlTodosWriteRepository) {
        this.todosReadRepository = sqlTodosReadRepository;
        this.todosWriteRepository = sqlTodosWriteRepository;
    }

    @GetMapping
    public List<Todo> getTodos() {
        return todosReadRepository.findAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return todosWriteRepository.save(todo);
    }
}
