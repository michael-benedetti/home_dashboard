import {By, until, WebDriver} from "selenium-webdriver";

export async function loadPage(page: WebDriver, pagePath?: string) {
    pagePath = pagePath || "";
    await page.get(`${global.journeyHost}${pagePath}`);
    await page.wait(until.elementLocated(By.id("dashboard-parent")));
}