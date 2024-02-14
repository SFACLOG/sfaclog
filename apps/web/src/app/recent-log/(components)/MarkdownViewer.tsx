'use client';
import MDEditor from '@uiw/react-md-editor';
import React from 'react';

interface MarkdownViewerProps {
  source: string;
}

const MarkdownViewer = ({ source }: MarkdownViewerProps) => {
  return (
    <div className='px-[200px] pb-[90px] border-b border-neutral-10'>
      <MDEditor.Markdown source={source}></MDEditor.Markdown>
    </div>
  );
};

export default MarkdownViewer;
