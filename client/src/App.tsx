import * as  React from 'react';
import './App.css';
import {Component} from "react";
import {TodosRepository} from "./TodosRepository";

interface AppState {
    todos: Todo[];
    newTodoDescription: string;
}

interface AppProps {
    todosRepository: TodosRepository;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            todos: [],
            newTodoDescription: "",
        }
    }

    public async componentDidMount() {
        await this.getTodos();
    }

    private getTodos = async () => {
        await this.props.todosRepository.fetchTodos()
            .then((result) => {
                this.setState({
                    todos: result,
                });
            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Welcome.
                    </p>
                    <label htmlFor={"newTodoInput"}>New Todo Description</label>
                    <input
                        id={"newTodoInput"}
                        onChange={this.handleDescriptionChange}
                    />

                    <button onClick={this.createNewTodo}>New Todo</button>
                    {this.state.todos.map((todo) => <div key={todo.id}>{todo.description}</div>)}
                </header>
            </div>
        );
    }

    private createNewTodo = async () => {
        this.props.todosRepository.save({completed: false, description: this.state.newTodoDescription})
            .then(this.getTodos);
    }

    private handleDescriptionChange = (e: any) => {
        this.setState({
            newTodoDescription: e.target.value,
        })
    }
}

export default App;
