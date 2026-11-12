import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

import styles from './homepage-header.module.css';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.mesh} />
        <div className={styles.grid} />
      </div>

      <div className={styles.inner}>
        <p className={styles.brand}>{siteConfig.title}</p>
        <Heading as="h1" className={styles.title}>
          Simple, type-safe React hooks
        </Heading>
        <p className={styles.subtitle}>
          A lightweight TypeScript library of reusable hooks — ready for
          production, built to stay out of your way.
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Explore the docs
          </Link>
          <Link
            className={`button button--secondary button--lg ${styles.ghost}`}
            href="https://github.com/michal-worwag/hooks-ts"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
