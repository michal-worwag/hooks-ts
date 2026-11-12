import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import { hooks } from '../libs/hooks';
import styles from './hook-list.module.css';

export default function HookList() {
  return (
    <section className={styles.section} id="hooks">
      <div className={styles.inner}>
        <div className={styles.header}>
          <Heading as="h2" className={styles.heading}>
            Available hooks
          </Heading>
          <p className={styles.lead}>
            {hooks.length} focused hooks for everyday React work. Pick one and
            jump straight into the docs.
          </p>
        </div>

        <div className={styles.grid}>
          {hooks.map((hook) => (
            <Link key={hook.name} to={hook.url} className={styles.hook}>
              <h3 className={styles.name}>{hook.name}</h3>
              <p className={styles.description}>{hook.description}</p>
              <span className={styles.cta}>Open docs</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
