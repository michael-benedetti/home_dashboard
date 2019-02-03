import {WebDriver} from "selenium-webdriver";
import {
    loadPage,
    pageToContainText
} from "../helpers/journey_helpers";

describe("Home Dashboard", async () => {
    let page: WebDriver;

    before(async () => {
        page = await global.browser;
        await page.get(`${global.journeyHost}/reseed/testFixtures`);
    });

    it("loads the dashboard homepage", async () => {
        await loadPage(page);
        await pageToContainText("First Test Todo", page);
    });
});
