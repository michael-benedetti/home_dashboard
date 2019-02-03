import * as  React from 'react';
import App from '../src/App';
import {cleanup, render, RenderResult} from "react-testing-library";

describe("Home Dashboard", () => {
    let container: RenderResult;

    afterEach(async () => {
        await cleanup();
    });

    function renderApp() {
        container = render(
            <App/>,
        );
    }

    it("renders the app", async () => {
        renderApp();
        await container.getByText("Welcome.");
    });
});
