import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img className={styles.logo} alt="VirtualHub logo" src="/img/logo.webp" width="180" height="180"/>
        <Heading as="h1" className="hero__title">
          Welcome to {siteConfig.title}!
        </Heading>
        <p className="hero__subtitle">
          Want to experience old operating systems without purchasing old computers? You have come to the right place! Browse our library of tutorials on how to install legacy operating systems in virtual machines and emulators and feel the power of old.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/start-here">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Want to experience old operating systems without purchasing old computers? You have come to the right place! Browse our library of tutorials on how to install legacy operating systems in virtual machines and emulators and feel the power of old.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.content}>
          <div className="text--center">
            <p>Come, chat with us:</p>
            <a href="https://chat.virtualhub.eu.org"><img width="320" height="76" src="https://discordapp.com/api/guilds/1176107431013646357/widget.png?style=banner2" alt="Discord Banner"/></a>
                  <p className="meta" {...{ 'xmlns:cc': "http://creativecommons.org/ns#" }} {...{ 'xmlns:dct': "http://purl.org/dc/terms/" }}><a property="dct:title" rel="cc:attributionURL" href="https://virtualhub.eu.org">VirtualHub</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://twitter.com/Virtua1Hub">Legacy Installer</a> is licensed under <a className={styles.cc} href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">CC BY-NC-SA 4.0 <img className={styles.ccimages} src="/img/cc.svg" alt="cc" width="22" height="22"/><img className={styles.ccimages} src="/img/by.svg" alt="by" width="22" height="22"/><img className={styles.ccimages} src="/img/nc.svg" alt="nc" width="22" height="22"/><img className={styles.ccimages} src="/img/sa.svg" alt="sa" width="22" height="22"/></a></p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
