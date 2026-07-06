import { test, expect } from '@playwright/test';

test.describe('About page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/about'); });

  test('has DR. MICHAEL WU heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /dr. michael wu/i })).toBeVisible();
  });

  test('shows portrait image', async ({ page }) => {
    const portrait = page.locator('.qs-abt-portrait img');
    await expect(portrait).toBeVisible();
    await expect(portrait).toHaveAttribute('src', '/images/portrait.jpg');
  });

  test('shows Background bio block', async ({ page }) => {
    await expect(page.getByText('Background')).toBeVisible();
  });

  test('shows SPEAKING archive section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'SPEAKING' })).toBeVisible();
  });

  test('shows WHY QUANTUM SIMPLEX section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'WHY QUANTUM SIMPLEX' })).toBeVisible();
  });

  test('has LinkedIn external link', async ({ page }) => {
    const li = page.locator('a[href*="linkedin.com"]').first();
    await expect(li).toBeVisible();
  });

  test('social icons are present', async ({ page }) => {
    await expect(page.locator('.qs-social-icons')).toBeVisible();
  });

  test('Engage CTA button is present', async ({ page }) => {
    await expect(page.locator('a[href="/engage"]').last()).toBeVisible();
  });
});
