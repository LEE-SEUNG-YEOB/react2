import { BaseButton } from '../blog5/BaseButton';
import styles from './page.module.css'

export default function Blog5Page() {
  return (
    <div>
      <h1>Blog Post 5</h1>
      <p>This is the content of blog post 5.</p>
      <BaseButton className={styles.primary} />
    </div>
  );
}
