import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageHeader from '../components/homepage-header';
import HookList from '../components/hook-list';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Simple, type-safe React hooks`}
      description="Simple, type-safe React hooks"
    >
      <HomepageHeader />
      <HookList />
    </Layout>
  );
}
