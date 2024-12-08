import styles from './hook-list.module.css';
import { hooks } from '../libs/hooks';

export default function HookList() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Available hooks</h2>
      <div className={styles.wrapper}>
        {hooks.map((hook) => (
          <a key={hook.name} href={hook.url} className={styles.hook}>
            <h3>{hook.name}</h3>
          </a>
        ))}
      </div>
    </main>
  );
}
