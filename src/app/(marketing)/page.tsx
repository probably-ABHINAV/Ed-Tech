"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle, Smartphone, Zap, Layers } from 'lucide-react';
import Hero3D from '@/components/3d/Hero3D';
import Platform3D from '@/components/3d/Platform3D';
import styles from './page.module.css';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPage() {
  return (
    <div className={styles.container}>
      
      {/* 1. HERO SECTION */}
      <section className="container">
        <div className={styles.hero}>
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className={styles.title}>
              Master Skills with <br/>
              <span className="text-gradient">Active Learning</span>
            </h1>
            <p className={styles.subtitle}>
              30% discovery, 70% practical application. The modern way to learn complex topics deeply.
            </p>
            <div className={styles.actions}>
              <Link href="/signup" className={styles.primaryBtn}>
                Start Learning <ArrowRight size={20} />
              </Link>
              <Link href="/demo" className={styles.secondaryBtn}>
                Explore Demo
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Hero3D />
          </motion.div>
        </div>
      </section>

      {/* 2. HOW LEARNING WORKS (4-step flow) */}
      <section className="container">
        <motion.div 
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionDesc}>A scientifically backed learning process designed for retention.</p>
          </div>
          
          <motion.div 
            className={styles.stepsGrid}
            variants={staggerContainer}
          >
            {[
              { title: 'Learn', icon: Layers, desc: 'Bite-sized concepts introduced clearly.' },
              { title: 'Think', icon: Zap, desc: 'Interactive challenges to test understanding.' },
              { title: 'Practice', icon: Smartphone, desc: 'Real-world scenarios to apply knowledge.' },
              { title: 'Reflect', icon: CheckCircle, desc: 'Review and solidify your new skills.' },
            ].map((step, i) => (
              <motion.div key={i} className={styles.stepCard} variants={fadeInUp}>
                <div className={styles.iconBox}>
                  <step.icon size={24} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.sectionDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 3. PLATFORM PREVIEW */}
      <section className={styles.previewSection}>
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className={styles.previewContainer}>
            <h2 className={styles.sectionTitle}>Built for Focus</h2>
            <div className={styles.previewImage}>
              <Platform3D />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. WHY THIS PLATFORM */}
      <section className="container">
        <motion.div 
          className={styles.featuresGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
           <motion.div className={styles.featureCard} variants={fadeInUp}>
              <h3 className={styles.stepTitle}>Active Learning</h3>
              <p className={styles.sectionDesc}>Don&apos;t just watch videos. Solve problems and build projects.</p>
           </motion.div>
           <motion.div className={styles.featureCard} variants={fadeInUp}>
              <h3 className={styles.stepTitle}>Structured Paths</h3>
              <p className={styles.sectionDesc}>Expert-curated curriculum that guides you step-by-step.</p>
           </motion.div>
           <motion.div className={styles.featureCard} variants={fadeInUp}>
              <h3 className={styles.stepTitle}>Instant Feedback</h3>
              <p className={styles.sectionDesc}>Know exactly where you stand and how to improve.</p>
           </motion.div>
        </motion.div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="container">
        <motion.div 
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className={styles.ctaBox}>
             <h2 className={styles.ctaTitle}>Ready to Start?</h2>
             <p className={styles.ctaDesc}>Join thousands of learners mastering new skills today.</p>
             <Link href="/signup" className={styles.ctaBtn}>
                Get Started for Free
              </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
