"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, BookOpen, BarChart3, Settings, LogOut } from 'lucide-react';
import styles from './sidebar.module.css';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/subjects', label: 'My Subjects', icon: BookOpen },
  { href: '/progress', label: 'Progress', icon: BarChart3 },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside className={cn(styles.sidebar, className)}>
      <Link href="/dashboard" className={styles.brand}>
        EdTech
      </Link>
      
      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(styles.link, isActive && styles.active)}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div className="flex items-center gap-3 mb-6 p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
          <div className={styles.avatar}>JD</div>
          <div className={styles.userInfo}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.role}>Student</span>
          </div>
        </div>
        
        <Link href="/login" className={cn(styles.link, "text-destructive hover:text-destructive hover:bg-destructive/10")}>
          <LogOut className="w-5 h-5" />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
