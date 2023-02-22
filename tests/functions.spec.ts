import { expect, Page, test } from "@playwright/test";

test("navigate to /functions/ from root and run test", async ({ page, javaScriptEnabled }) => {
  await page.goto("/");
  if (javaScriptEnabled) {
    await page.click("text=Functions");
    await functionsTest(page);
  }
});

test("navigate to /functions/ and run test", async ({ page, javaScriptEnabled }) => {
  await page.goto("/functions/");
  if (javaScriptEnabled) {
    await functionsTest(page);
  }
});

async function functionsTest(page: Page) {
  const increment = page.locator("#increment");
  const save = page.locator("#save");
  const load = page.locator("#load");
  const result = page.locator("#result");

  await save.click();
  await page.waitForTimeout(100);
  await load.click();

  await expect(increment).toHaveText("Increment 0");
  await expect(result).toHaveText("Stuff is: 0");

  await increment.click();
  await save.click();
  await load.click();
  await expect(result).toHaveText("Stuff is: 0");
  await expect(result).toHaveText("Stuff is: 2");

  await increment.click();
  await increment.click();
  await load.click();
  await expect(result).toHaveText("Stuff is: 4");
  await save.click();
  await load.click();
  await expect(result).toHaveText("Stuff is: 6");
}