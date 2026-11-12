import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './open-source.module.css';

export default function OpenSource() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Heading as="h2" className={styles.heading}>
          Free, forever
        </Heading>
        <p className={styles.lead}>
          hooks-ts is MIT licensed and open source. Use it in side projects or
          production apps — then star the repo if it saved you time.
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get started
          </Link>
          <Link
            className={`button button--secondary button--lg ${styles.ghost}`}
            href="https://github.com/michal-worwag/hooks-ts"
          >
            Star on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
