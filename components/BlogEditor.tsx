'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from './BlogEditor.module.scss';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const BlogEditor = () => {
  const [content, setContent] = useState<string>('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start writing your blog post here...</p>',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const handleSave = () => {
    console.log('Saving content:', content);
    // Here you would typically save the content to a backend or local storage
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.toolbar}>
        <Button onClick={handleSave}>Save</Button>
      </div>
      <EditorContent editor={editor} className={styles.editor} />
    </div>
  );
};

export default BlogEditor;