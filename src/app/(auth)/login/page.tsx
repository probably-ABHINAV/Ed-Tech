"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate login for now
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Home
        </Link>
        <h2 className={styles.title}>
          Welcome back
        </h2>
        <p className={styles.subtitle}>
          Enter your details to access your learning dashboard.
        </p>
      </div>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={styles.input}
            placeholder="m@example.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className={styles.input}
          />
        </div>
        
        <button
          type="submit"
          className={styles.button}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className={styles.footer}>
        Don&apos;t have an account?{' '}
        <Link href="/signup" className={styles.link}>
          Sign up
        </Link>
      </div>
    </div>
  );
}
