import { test, expect } from '@playwright/test';

test.describe('Engage page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/engage'); });

  test("has LET'S TALK. heading", async ({ page }) => {
    await expect(page.getByRole('heading', { name: /let's talk/i })).toBeVisible();
  });

  test('shows booking steps 01, 02, 03', async ({ page }) => {
    // Scope to the step-number element: footer "© 2026" / "v.2026.06" also contain these digits.
    await expect(page.locator('.qs-book-step-n', { hasText: '01' })).toBeVisible();
    await expect(page.locator('.qs-book-step-n', { hasText: '02' })).toBeVisible();
    await expect(page.locator('.qs-book-step-n', { hasText: '03' })).toBeVisible();
  });

  test('shows calendar iframe', async ({ page }) => {
    const iframe = page.locator('.qs-calendar-wrap iframe');
    await expect(iframe).toBeVisible();
    const src = await iframe.getAttribute('src');
    expect(src).toContain('calendar.app.google');
  });

  test('shows sidebar What to expect', async ({ page }) => {
    await expect(page.getByText('What to expect')).toBeVisible();
  });

  test("shows sidebar Who you're talking to", async ({ page }) => {
    await expect(page.getByText("Who you're talking to")).toBeVisible();
  });

  test('sidebar shows Dr. Michael Wu', async ({ page }) => {
    const sidebar = page.locator('.qs-book-sidebar');
    await expect(sidebar.getByText(/Dr\. Michael Wu/)).toBeVisible();
  });

  test('sidebar has LinkedIn link', async ({ page }) => {
    const sidebar = page.locator('.qs-book-sidebar');
    await expect(sidebar.locator('a[href*="linkedin.com"]')).toBeVisible();
  });
});
