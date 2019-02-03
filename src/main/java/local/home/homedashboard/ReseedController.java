package local.home.homedashboard;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reseed")
public class ReseedController {
    private TodosWriteRepository todosWriteRepository;

    public ReseedController(TodosWriteRepository todosWriteRepository) {
        this.todosWriteRepository = todosWriteRepository;
    }

    @GetMapping("/testFixtures")
    public String generateTestFixtures() {
        todosWriteRepository.deleteAll();

        Todo todo = Todo.builder()
                .description("First Test Todo")
                .completed(false)
                .build();

        todosWriteRepository.save(todo);

        return "Done";
    }
}
