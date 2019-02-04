import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HttpTodosRepository} from "./HttpTodosRepository";

ReactDOM.render(
    <App todosRepository={new HttpTodosRepository()}/>,
    document.getElementById('root')
);
