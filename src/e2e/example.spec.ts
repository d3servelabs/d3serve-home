import { expect, test } from "@playwright/test";
import { WEBSITE } from "@/constants";

test("has title", async ({ page }) => {
  await page.goto("./");

  await expect(page).toHaveTitle(WEBSITE.title);
});
