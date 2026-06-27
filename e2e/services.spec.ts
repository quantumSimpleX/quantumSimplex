import { test, expect } from '@playwright/test';

test.describe('Services page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/services'); });

  test('has THE SERVICES heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /the services/i })).toBeVisible();
  });

  test('shows all 3 level sections', async ({ page }) => {
    await expect(page.locator('#level-1')).toBeVisible();
    await expect(page.locator('#level-2')).toBeVisible();
    await expect(page.locator('#level-3')).toBeVisible();
  });

  test('level names are correct', async ({ page }) => {
    await expect(page.locator('.qs-level-name').filter({ hasText: 'INSPIRE' })).toBeVisible();
    await expect(page.locator('.qs-level-name').filter({ hasText: 'MOBILIZE' })).toBeVisible();
    await expect(page.locator('.qs-level-name').filter({ hasText: 'TRANSFORM' })).toBeVisible();
  });

  test('each level shows tagline', async ({ page }) => {
    await expect(page.getByText('Change Mindset')).toBeVisible();
    await expect(page.getByText('Change Behaviors')).toBeVisible();
    await expect(page.getByText('Change Operations')).toBeVisible();
  });

  test('Level 1 shows Strategic Keynotes offering', async ({ page }) => {
    await expect(page.getByText('Strategic Keynotes')).toBeVisible();
  });

  test('Level 2 shows AI Product Strategy offering', async ({ page }) => {
    await expect(page.getByText('AI Product Strategy')).toBeVisible();
  });

  test('Level 2 shows Internal AI Adoption offering', async ({ page }) => {
    await expect(page.getByText('Internal AI Adoption')).toBeVisible();
  });

  test('Level 3 shows AI-Centric Workflow offering', async ({ page }) => {
    await expect(page.getByText('AI-Centric Workflow')).toBeVisible();
  });

  test('CTA banner links to engage', async ({ page }) => {
    await expect(page.locator('a[href="/engage"]').last()).toBeVisible();
  });

  test('hash navigation scrolls to level-2', async ({ page }) => {
    await page.goto('/services#level-2');
    await page.waitForTimeout(300);
    const level2 = page.locator('#level-2');
    await expect(level2).toBeInViewport();
  });
});
