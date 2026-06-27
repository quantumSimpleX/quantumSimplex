import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('clicking About nav link goes to /about', async ({ page }) => {
    await page.goto('/');
    await page.locator('.qs-header-nav a[href="/about"]').click();
    await expect(page).toHaveURL('/about');
  });

  test('clicking Services nav link goes to /services', async ({ page }) => {
    await page.goto('/');
    await page.locator('.qs-header-nav a[href="/services"]').click();
    await expect(page).toHaveURL('/services');
  });

  test('clicking Insights nav link goes to /insights', async ({ page }) => {
    await page.goto('/');
    await page.locator('.qs-header-nav a[href="/insights"]').click();
    await expect(page).toHaveURL('/insights');
  });

  test('Engage nav link has qs-nav-engage class', async ({ page }) => {
    await page.goto('/');
    const engageLink = page.locator('.qs-header-nav .qs-nav-engage');
    await expect(engageLink).toBeVisible();
    await expect(engageLink).toHaveAttribute('href', '/engage');
  });

  test('active nav link has is-active class on services page', async ({ page }) => {
    await page.goto('/services');
    const activeLink = page.locator('.qs-header-nav .is-active');
    await expect(activeLink).toHaveAttribute('href', '/services');
  });

  test('logo link goes back to home', async ({ page }) => {
    await page.goto('/about');
    await page.locator('.qs-header-brand').click();
    await expect(page).toHaveURL('/');
  });

  test('mobile menu toggle opens menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const menu = page.locator('.qs-mobile-nav');
    await expect(menu).not.toHaveClass(/is-open/);
    await page.locator('.qs-menu-toggle').click();
    await expect(menu).toHaveClass(/is-open/);
  });

  test('mobile menu closes after navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.locator('.qs-menu-toggle').click();
    await page.locator('.qs-mobile-nav a[href="/about"]').click();
    await expect(page).toHaveURL('/about');
    await expect(page.locator('.qs-mobile-nav')).not.toHaveClass(/is-open/);
  });

  test('theme toggle switches between light and dark', async ({ page }) => {
    await page.goto('/');
    // Wait for mount
    const toggle = page.locator('.qs-theme-toggle');
    await expect(toggle).toBeVisible();
    // Click to switch to dark
    await toggle.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('footer Services column links point to /services#level-N', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.qs-footer a[href="/services#level-1"]')).toBeVisible();
    await expect(page.locator('.qs-footer a[href="/services#level-2"]')).toBeVisible();
    await expect(page.locator('.qs-footer a[href="/services#level-3"]')).toBeVisible();
  });
});
