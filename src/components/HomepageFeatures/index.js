import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '1960s',
    description: (
      <>
        The 1960s were mainly the years of mainframes and minicomputers. It saw the rise of minicomputers like the DEC PDP line, HP 2100, CDC 1700 and Data General Nova. There were many interesting operating systems made for these computers.
      </>
    ),
    link: '/1960s',
    buttontext: "Let's Go!",
  },
  {
    title: '1970s',
    description: (
      <>
        1970s were the age in which microcomputers evolved, but many of the operating systems we are going to cover are still minicomputer ones. This decade saw the rise of many historic operating systems including Unix, Alto OS, Apple DOS, VAX/VMS and CP/M.
      </>
    ),
    link: '/1970s',
    buttontext: "Let's Go!",
  },
  {
    title: '1980s',
    description: (
      <>
        The 1980s were the years of personal computing. The release of IBM PC in 1981 started a new era. There were also many other famous microcomputers which came out in this decade, like the Commodore 64, BBC Micro and the Tandy 2000. There were many OSs for these systems.
      </>
    ),
    link: '#',
    buttontext: 'Coming Soon!',
  },
  {
    title: '1990s',
    description: (
      <>
        Done with the 80s? Let's go explore the newer versions of those OS and software which survived to the new decade and the ones which were newly introduced. This was the decade in which Windows evolved from a shell on top of DOS to a full fledged OS.
      </>
    ),
    link: '#',
    buttontext: 'Coming Soon!',
  },
  {
    title: '2000s',
    description: (
      <>
        Operating Systems released in 2000s are not really "old", so we are not going to cover proprietary operating systems from that era, but we are going to cover the open source ones. This includes Linux distros and other modern FOSS versions of the classic OSs.
      </>
    ),
    link: '#',
    buttontext: 'Coming Soon!',
  },
  {
    title: 'Apps',
    description: (
      <>
        Using Operating Systems with built-in apps only is boring. See our tutorials on how to install different third-party apps on different operating systems. Explore the old <em>killer</em> apps like Visicalc and WordStar and feel their power.
      </>
    ),
    link: '#',
    buttontext: 'Coming Soon!',
  },
];

function Feature({title, description, link, buttontext}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <a
            className="button button--primary button--md"
            href={link}>
            {buttontext}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
