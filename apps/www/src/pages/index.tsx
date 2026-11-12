import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Features from '../components/features';
import HomepageHeader from '../components/homepage-header';
import HookList from '../components/hook-list';
import OpenSource from '../components/open-source';

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} — Simple, type-safe React hooks`}
      description="Lightweight TypeScript React hooks library with clear docs and production-ready APIs."
    >
      <HomepageHeader />
      <main>
        <Features />
        <HookList />
        <OpenSource />
      </main>
    </Layout>
  );
}
