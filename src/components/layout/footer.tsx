import Link from 'next/link';
import { Twitter, Github, Linkedin } from 'lucide-react';
import styles from './footer.module.css';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={cn('container', styles.grid)}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand}>EdTech</Link>
          <p className={styles.tagline}>
            Empowering the next generation of thinkers and creators.
          </p>
        </div>
        
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Platform</h4>
          <Link href="/features" className={styles.link}>Features</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/institutions" className={styles.link}>For Institutions</Link>
        </div>
        
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Company</h4>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/careers" className={styles.link}>Careers</Link>
          <Link href="/blog" className={styles.link}>Blog</Link>
        </div>
        
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Legal</h4>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/terms" className={styles.link}>Terms</Link>
        </div>
      </div>
      
      <div className={cn('container', styles.bottom)}>
        <p>© {currentYear} EdTech Platform. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="#" className={styles.link}><Twitter size={20} /></a>
          <a href="#" className={styles.link}><Github size={20} /></a>
          <a href="#" className={styles.link}><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
