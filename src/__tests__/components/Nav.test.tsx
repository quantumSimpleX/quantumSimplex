import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Nav from '@/components/Nav';

const mockedUsePathname = vi.mocked(usePathname);

describe('Nav', () => {
  beforeEach(() => {
    mockedUsePathname.mockReturnValue('/');
  });

  it('renders all 4 nav link labels', () => {
    const { container } = render(<Nav />);
    // Nav renders both a desktop (.qs-header-nav) and a mobile menu; scope to desktop.
    const desktopNav = within(container.querySelector('.qs-header-nav') as HTMLElement);
    expect(desktopNav.getByText('About')).toBeInTheDocument();
    expect(desktopNav.getByText('Services')).toBeInTheDocument();
    expect(desktopNav.getByText('Insights')).toBeInTheDocument();
    expect(desktopNav.getByText('Engage')).toBeInTheDocument();
  });

  it('renders the brand link to home', () => {
    const { container } = render(<Nav />);
    const brand = container.querySelector('.qs-header-brand');
    expect(brand).toHaveAttribute('href', '/');
  });

  it('theme toggle button has an aria-label about dark/light mode', () => {
    render(<Nav />);
    const toggle = screen.getByLabelText(/dark mode|light mode/i);
    expect(toggle).toBeInTheDocument();
  });

  it('menu toggle button has aria-label "Menu"', () => {
    render(<Nav />);
    expect(screen.getByLabelText('Menu')).toBeInTheDocument();
  });

  it('Engage link has class qs-nav-engage', () => {
    const { container } = render(<Nav />);
    const engage = container.querySelector('.qs-header-nav .qs-nav-engage');
    expect(engage).not.toBeNull();
    expect(engage).toHaveAttribute('href', '/engage');
  });

  it('Services link is active when pathname is /services', () => {
    mockedUsePathname.mockReturnValue('/services');
    const { container } = render(<Nav />);
    const active = container.querySelector('.qs-header-nav .is-active');
    expect(active).toHaveAttribute('href', '/services');
    expect(active?.textContent).toBe('Services');
  });

  it('on home, brand renders and Services is not active', () => {
    mockedUsePathname.mockReturnValue('/');
    const { container } = render(<Nav />);
    expect(container.querySelector('.qs-header-brand')).toHaveAttribute('href', '/');
    const desktopNav = within(container.querySelector('.qs-header-nav') as HTMLElement);
    const servicesLink = desktopNav.getByText('Services');
    expect(servicesLink.className).not.toContain('is-active');
  });
});
