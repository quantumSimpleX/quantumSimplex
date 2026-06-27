import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Quantum Simplex/i);
  });

  test('shows hero headline', async ({ page }) => {
    await expect(page.getByText('INSPIRE.')).toBeVisible();
    await expect(page.getByText('MOBILIZE.')).toBeVisible();
    await expect(page.getByText('TRANSFORM.')).toBeVisible();
  });

  test('shows stat numbers', async ({ page }) => {
    await expect(page.getByText('20+')).toBeVisible();
    await expect(page.getByText('100+')).toBeVisible();
  });

  test('shows all 3 service levels in sequence strip', async ({ page }) => {
    await expect(page.getByText('LEVEL 01')).toBeVisible();
    await expect(page.getByText('LEVEL 02')).toBeVisible();
    await expect(page.getByText('LEVEL 03')).toBeVisible();
  });

  test('shows As seen in publications', async ({ page }) => {
    await expect(page.getByText('As seen in')).toBeVisible();
    await expect(page.getByText('TechCrunch')).toBeVisible();
  });

  test('shows about section with Dr. Wu', async ({ page }) => {
    const heading = page.locator('h2.qs-about-name');
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toContainText('DR. MICHAEL WU');
  });

  test('shows FEATURED VIDEOS section', async ({ page }) => {
    await expect(page.getByText('FEATURED VIDEOS.')).toBeVisible();
  });

  test('Engage CTA button links to /engage', async ({ page }) => {
    const ctaBtn = page.locator('.qs-btn-hero-primary').first();
    await expect(ctaBtn).toHaveAttribute('href', '/engage');
  });

  test('Services ghost button links to /services', async ({ page }) => {
    const ghostBtn = page.locator('.qs-btn-hero-ghost').first();
    await expect(ghostBtn).toHaveAttribute('href', '/services');
  });
});
