import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ href, children, className, onClick, style, target, rel }: any) =>
    React.createElement('a', { href, className, onClick, style, target, rel }, children),
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/'),
  useRouter: vi.fn(() => ({ push: vi.fn(), back: vi.fn(), refresh: vi.fn() })),
  useSearchParams: vi.fn(() => ({ get: (_: string) => null, toString: () => '' })),
}));

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: vi.fn(() => ({ resolvedTheme: 'light', setTheme: vi.fn() })),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
}));

// Browser API stubs
Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });

class ResizeObserverStub {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
global.ResizeObserver = ResizeObserverStub as any;

class IntersectionObserverStub {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  constructor(public cb: any) {}
}
global.IntersectionObserver = IntersectionObserverStub as any;
