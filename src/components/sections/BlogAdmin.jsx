import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate, Link } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 p-2 border rounded-t-md">
      <Button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>bold</Button>
      <Button onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>italic</Button>
      <Button onClick={() => editor.chain().focus().toggleStrike().run()} disabled={!editor.can().chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>strike</Button>
      <Button onClick={() => editor.chain().focus().toggleCode().run()} disabled={!editor.can().chain().focus().toggleCode().run()} className={editor.isActive('code') ? 'is-active' : ''}>code</Button>
      <Button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>paragraph</Button>
      <Button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>h1</Button>
      <Button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>h2</Button>
      <Button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>h3</Button>
      <Button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>bullet list</Button>
      <Button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>ordered list</Button>
      <Button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}>code block</Button>
      <Button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is-active' : ''}>blockquote</Button>
      <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>horizontal rule</Button>
    </div>
  );
};

const BlogAdmin = () => {
  const [post, setPost] = useState({ title: '', excerpt: '', body: '', image: [], category: '', readTime: '', author: '', date: '' });
  const [editing, setEditing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [StarterKit],
    content: post.body,
    onUpdate: ({ editor }) => {
      setPost({ ...post, body: editor.getHTML() });
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleFileChange = (e) => {
    setPost({ ...post, image: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    let imageUrls = [];
    if (post.image && post.image.length > 0) {
      const uploadPromises = Array.from(post.image).map(async (file) => {
        const fileName = `${Date.now()}_${file.name}`;
        const { data, error } = await supabase.storage.from('blog-images').upload(fileName, file);
        if (error) {
          console.error('Error uploading image:', error);
          return null;
        }
        const { data: { publicUrl } } = supabase.storage.from('blog-images').getPublicUrl(data.path);
        return publicUrl;
      });
      imageUrls = (await Promise.all(uploadPromises)).filter(url => url !== null);
    }

    const postData = { ...post, image: imageUrls };

    if (editing) {
      const { data, error } = await supabase.from('blogs').update(postData).eq('id', post.id).select();
      if (error) console.log('Error updating post: ', error);
    } else {
      const { data, error } = await supabase.from('blogs').insert([postData]).select();
      if (error) console.log('Error adding post: ', error);
    }

    setPost({ title: '', excerpt: '', body: '', image: [], category: '', readTime: '', author: '', date: '' });
    editor.commands.clearContent();
    setEditing(false);
    setUploading(false);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error logging out:', error);
    else navigate('/login');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Blog Admin</h1>
        <div className="flex items-center">
          <Link to="/blog-admin/posts">
            <Button className="mr-4">View Existing Posts</Button>
          </Link>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mb-8">
        <h2 className="text-xl font-bold mb-2">{editing ? 'Edit Post' : 'Add New Post'}</h2>
        <div className="grid grid-cols-1 gap-4">
          <Input name="title" placeholder="Title" value={post.title} onChange={handleInputChange} />
          <Input name="excerpt" placeholder="Excerpt" value={post.excerpt} onChange={handleInputChange} />
          <div className="border rounded-md">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className="p-2" />
          </div>
          <Input type="file" name="image" multiple accept="image/*" onChange={handleFileChange} />
          <Input name="category" placeholder="Category" value={post.category} onChange={handleInputChange} />
          <Input name="readTime" placeholder="Read Time" value={post.readTime} onChange={handleInputChange} />
          <Input name="author" placeholder="Author" value={post.author} onChange={handleInputChange} />
          <Input name="date" placeholder="Date" value={post.date} onChange={handleInputChange} />
        </div>
        <Button type="submit" className="mt-4" disabled={uploading}>{uploading ? 'Uploading...' : (editing ? 'Update Post' : 'Add Post')}</Button>
        {editing && <Button onClick={() => { setEditing(false); setPost({ title: '', excerpt: '', body: '', image: [], category: '', readTime: '', author: '', date: '' }); editor.commands.clearContent(); }} className="mt-4 ml-2">Cancel</Button>}
      </form>
    </div>
  );
};

export default BlogAdmin;
