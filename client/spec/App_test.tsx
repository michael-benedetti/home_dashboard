import * as  React from 'react';
import App from '../src/App';
import {cleanup, render, RenderResult, fireEvent} from "react-testing-library";
import {HttpTodosRepository} from "../src/HttpTodosRepository";
import * as fetchMock from "fetch-mock";
import {expect} from 'chai';
import {fillIn, lastFetchBodyMatches} from "./helpers/karma_helpers";

describe("Home Dashboard", () => {
    let container: RenderResult;

    afterEach(async () => {
        cleanup();
        fetchMock.restore();
    });

    function renderApp(todosRepo = new HttpTodosRepository()) {
        fetchMock.mock("/api/todos", 200);
        container = render(
            <App
                todosRepository={todosRepo}
            />,
        );
    }

    it("renders the app", async () => {
        renderApp();
        await container.getByText("Welcome.");
    });

    it("allows the user to add a new todo", async () => {
        renderApp();

        const newTodo: Todo = {
            completed: false,
            description: "New Todo",
        };

        fillIn("New Todo Description", newTodo.description, container);
        fireEvent.click(await container.getByText("New Todo"));

        expect(lastFetchBodyMatches(newTodo)).to.eq(true);
    });
});
