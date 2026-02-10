import { BookOpen, Clock, Trophy } from 'lucide-react';
import Link from 'next/link';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const subjects = [
    { id: 1, title: 'Introduction to Physics', progress: 75, nextLesson: 'Kinematics: Velocity & Speed' },
    { id: 2, title: 'Calculus I', progress: 40, nextLesson: 'Derivatives: Chain Rule' },
    { id: 3, title: 'World History', progress: 10, nextLesson: 'The Industrial Revolution' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome back, John!</h1>
        <p className={styles.subtitle}>Here&apos;s an overview of your learning progress.</p>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statContent}>
            <div className={`${styles.iconWrapper} ${styles.blue}`}>
              <BookOpen size={24} />
            </div>
            <div>
              <p className={styles.statLabel}>Active Courses</p>
              <h3 className={styles.statValue}>3</h3>
            </div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statContent}>
            <div className={`${styles.iconWrapper} ${styles.green}`}>
              <Clock size={24} />
            </div>
            <div>
              <p className={styles.statLabel}>Hours Learned</p>
              <h3 className={styles.statValue}>12.5</h3>
            </div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statContent}>
            <div className={`${styles.iconWrapper} ${styles.yellow}`}>
              <Trophy size={24} />
            </div>
            <div>
              <p className={styles.statLabel}>Achievements</p>
              <h3 className={styles.statValue}>5</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Subjects */}
      <div>
        <h2 className={styles.sectionTitle}>Continue Learning</h2>
        <div className={styles.coursesGrid}>
          {subjects.map((subject) => (
            <div key={subject.id} className={styles.courseCard}>
              <div className={styles.courseHeader}>
                <h3 className={styles.courseTitle}>{subject.title}</h3>
                <span className={styles.progressBadge}>{subject.progress}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className={styles.progressBarBg}>
                <div 
                  className={styles.progressBarFill} 
                  style={{ width: `${subject.progress}%` }}
                />
              </div>

              <div className={styles.courseFooter}>
                <span className={styles.nextLesson}>Next: {subject.nextLesson}</span>
                <Link href={`/subjects/${subject.id}`} className={styles.resumeLink}>
                  Resume
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
