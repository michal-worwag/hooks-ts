import Heading from '@theme/Heading';

import styles from './features.module.css';

const features = [
  {
    title: 'Lightweight',
    description:
      'No heavy dependencies — just focused hooks that keep your bundle lean.',
  },
  {
    title: 'Type-Safe',
    description:
      'First-class TypeScript types catch mistakes early and improve editor DX.',
  },
  {
    title: 'Tree-Shakable',
    description:
      'Import only what you need. Unused hooks stay out of the final build.',
  },
  {
    title: 'Easy to Use',
    description:
      'Small, predictable APIs with clear docs and copy-paste ready examples.',
  },
  {
    title: 'Developer-Friendly',
    description:
      'Solve common React problems once, then reuse the pattern across projects.',
  },
  {
    title: 'Open Source',
    description:
      'MIT licensed and open to contributions — fork it, improve it, ship it.',
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <Heading as="h2" className={styles.heading}>
          Features
        </Heading>
        <p className={styles.lead}>
          Everything you want from a hooks library — without the ceremony.
        </p>
        <ul className={styles.grid}>
          {features.map((feature) => (
            <li key={feature.title} className={styles.item}>
              <span className={styles.mark} aria-hidden="true" />
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
