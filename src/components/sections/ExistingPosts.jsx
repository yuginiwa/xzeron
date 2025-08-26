import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ExistingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;
    if (searchTerm) {
      filtered = filtered.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (date) {
      filtered = filtered.filter(post => post.date === date);
    }
    setFilteredPosts(filtered);
  }, [searchTerm, date, posts]);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from('blogs').select('*');
    if (error) console.log('Error fetching posts: ', error);
    else {
      setPosts(data);
      setFilteredPosts(data);
    }
  };

  const handleSoftDelete = async (id) => {
    const { data, error } = await supabase.from('blogs').update({ is_deleted: true }).eq('id', id).select();
    if (error) console.log('Error hiding post: ', error);
    else setPosts(posts.map(p => p.id === id ? data[0] : p));
  };

  const handleRestore = async (id) => {
    const { data, error } = await supabase.from('blogs').update({ is_deleted: false }).eq('id', id).select();
    if (error) console.log('Error restoring post: ', error);
    else setPosts(posts.map(p => p.id === id ? data[0] : p));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Existing Posts</h1>
      <div className="flex items-center mb-4">
        <Input
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-4"
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((p) => (
            <tr key={p.id} className={p.is_deleted ? 'bg-gray-200' : ''}>
              <td className="border px-4 py-2">{p.title}</td>
              <td className="border px-4 py-2">{p.is_deleted ? 'Hidden' : 'Visible'}</td>
              <td className="border px-4 py-2">
                {p.is_deleted ? (
                  <Button onClick={() => handleRestore(p.id)}>Show</Button>
                ) : (
                  <Button onClick={() => handleSoftDelete(p.id)}>Hide</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExistingPosts;
