import styles from './page.module.scss';
import BlogEditor from '@/components/BlogEditor';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Our Blog</h1>
      <BlogEditor />
    </main>
  );
}