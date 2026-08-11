import React, { useEffect } from 'react';
import Template from '../Template';
import { marked } from 'marked';
import introRaw from './contents/intro.md?raw';

// Strip frontmatter if present
const markdownContent = introRaw.replace(/^---[\s\S]*?---\s*/, '');
const htmlContent = marked.parse(markdownContent) as string;

const IndexPage = () => {
  useEffect(() => {
    document.title = 'ChefYeum - Welcome';
  }, []);

  return (
    <Template>
      <main css={{ textAlign: 'right' }}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </main>
    </Template>
  );
};

export default IndexPage;
