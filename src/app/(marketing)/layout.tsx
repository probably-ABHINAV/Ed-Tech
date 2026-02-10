import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import styles from './layout.module.css';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
