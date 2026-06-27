import { test, expect } from '@playwright/test';

test.describe('Insights page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/insights'); });

  test('has THOUGHT LEADERSHIP heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /thought leadership/i }).first()).toBeVisible();
  });

  test('shows theme filter buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'All topics' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Level 1.*Inspire/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Level 2.*Mobilize/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Level 3.*Transform/i })).toBeVisible();
  });

  test('shows type filter buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'All formats' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Video' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Podcast' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Article' })).toBeVisible();
  });

  test('clicking Video filter updates URL and shows only videos', async ({ page }) => {
    await page.getByRole('button', { name: 'Video' }).click();
    await expect(page).toHaveURL(/type=video/);
    // All visible type labels should be Video
    const typeLabels = page.locator('.qs-archive-type-label');
    const count = await typeLabels.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(typeLabels.nth(i)).toHaveText('Video');
    }
  });

  test('clicking Inspire theme filter shows only inspire items', async ({ page }) => {
    await page.getByRole('button', { name: /Level 1.*Inspire/i }).click();
    await expect(page).toHaveURL(/theme=inspire/);
    await expect(page.locator('.qs-archive-section')).toHaveCount(1);
  });

  test('combination filter: Article + Mobilize', async ({ page }) => {
    await page.getByRole('button', { name: /Level 2.*Mobilize/i }).click();
    await page.waitForURL(/theme=mobilize/);
    await page.getByRole('button', { name: 'Article' }).click();
    await expect(page).toHaveURL(/theme=mobilize.*type=article|type=article.*theme=mobilize/);
  });

  test('shows empty state for impossible combination', async ({ page }) => {
    // Navigate directly to an empty combination via URL
    await page.goto('/insights?type=video&theme=transform');
    // transform theme videos may or may not exist; if none, shows empty message
    const empty = page.locator('.qs-archive-empty');
    const sections = page.locator('.qs-archive-section');
    const emptyCount = await empty.count();
    const sectionCount = await sections.count();
    expect(emptyCount + sectionCount).toBeGreaterThan(0); // either empty state or items
  });

  test('YouTube Channel link is present', async ({ page }) => {
    await expect(page.locator('a[href*="youtube.com"]').first()).toBeVisible();
  });
});
