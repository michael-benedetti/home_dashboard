import * as  React from 'react';
import './App.css';
import {Component} from "react";

interface AppState {
    todos: Todo[];
}

interface AppProps {
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    public async componentDidMount() {
        await this.getTodos();
    }

    private getTodos = async () => {
        await fetch("/api/todos")
            .then((result) => result.json())
            .then((json) => {
                this.setState({
                    todos: json,
                });
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Welcome.
                    </p>
                    <button onClick={this.createNewTodo}>New Todo</button>
                    {this.state.todos.map((todo) => <div key={todo.id}>{todo.description}</div>)}
                </header>
            </div>
        );
    }

    private createNewTodo = async () => {
        await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify({
                id: null,
                complete: false,
                description: "newTodoTest"
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }).then(this.getTodos);
    }
}

export default App;
