import {WebDriver} from "selenium-webdriver";
import {loadPage} from "../helpers/journey_helpers";

describe("homepage", async () => {
    let page: WebDriver;

    before(async () => {
        page = await global.browser;
    });

    it("loads the dashboard homepage", async () => {
        await loadPage(page)
    })
});
