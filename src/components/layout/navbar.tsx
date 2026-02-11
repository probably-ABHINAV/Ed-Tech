"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import styles from './navbar.module.css';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={cn('container', styles.navContainer)}>
        <Link href="/" className={styles.brand}>
          BookandLab
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <div className={styles.navActions}>
            <Link href="/features" className={styles.navLink}>Features</Link>
            <Link href="/pricing" className={styles.navLink}>Pricing</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </div>
          
          <div className={styles.navActions}>
            <Link href="/login" className={styles.navLink}>
              Log in
            </Link>
            <Link href="/signup" className={styles.ctaButton}>
              Start Learning
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Trigger */}
        <button className={styles.burger} aria-label="Toggle menu">
          <Menu className={styles.menuIcon} />
        </button>
      </div>
    </header>
  );
}
