"use client";

import { Sidebar } from '@/components/layout/sidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      {/* Desktop Sidebar */}
      <Sidebar className={styles.sidebarDesktop} />

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        
        {/* Mobile Header */}
        <header className={styles.mobileHeader}>
          <Link href="/dashboard" className={styles.brand}>EdTech</Link>
          <button className={styles.menuButton} onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle menu">
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.menuHeader}>
              <span className={styles.menuTitle}>Menu</span>
              <button className={styles.menuButton} onClick={() => setSidebarOpen(false)}>Close</button>
            </div>
            <nav className={styles.nav}>
              <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
              <Link href="/subjects" className={styles.navLink}>My Subjects</Link>
              <Link href="/progress" className={styles.navLink}>Progress</Link>
              <Link href="/settings" className={styles.navLink}>Settings</Link>
              <Link href="/login" className={styles.signOut}>Sign Out</Link>
            </nav>
          </div>
        )}

        <main className={styles.main}>
          <div className={styles.container}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
