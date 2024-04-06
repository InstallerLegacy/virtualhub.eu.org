import React from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import MDXContent from '@theme/MDXContent';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
export default function BlogPostItemContent({children, className}) {
  const {isBlogPostPage} = useBlogPost();
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
  const discord = (
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
  )
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className)}>
      <MDXContent>
        {children}
        {isBlogPostPage && discord}
        {isBlogPostPage && giscus}
      </MDXContent>
    </div>
  );
}
