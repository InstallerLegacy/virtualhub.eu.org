import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Unlisted from '@theme/Unlisted';
import styles from './styles.module.css';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const { colorMode } = useColorMode();
  const giscus = (
    <React.Fragment>
      <Giscus
        id="comments"
        repo="InstallerLegacy/virtualhub.eu.org"
        repoId="R_kgDOLCT14w"
        category="Comments"
        categoryId="DIC_kwDOLCT1484CcS1P"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </React.Fragment>
  )
  const {
    metadata: {unlisted},
  } = useDoc();
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        {unlisted && <Unlisted />}
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <br></br>
            <div class="text--center">
              <p>
                Tell us about what you liked/disliked about this page on Discord.
                Are you facing any problem in following any of the tutorials? We will help you.
                We love to chat with people interested in old software:
              </p>
              <p>
                <a href="https://chat.virtualhub.eu.org">
                  <img width="320" height="76" src="https://discordapp.com/api/guilds/1176107431013646357/widget.png?style=banner2" alt="Discord Banner"/>
                </a>
              </p>
            </div>
            {giscus}
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
