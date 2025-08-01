import { useState } from 'react';

const BlogForm = ({ initialData = {}, onSubmit, onCancel, isEdit = false }) => {
  const [formData, setFormData] = useState({
    author: initialData.author || '',
    title: initialData.title || '',
    description: initialData.description || '',
    content: initialData.content || '',
    profileLink: initialData.profileLink || '',
    date: initialData.createdAt || new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="blog-modal max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isEdit ? 'Edit your Post' : 'Post a Blog'}
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Profile Link</label>
            <input
              type="url"
              name="profileLink"
              value={formData.profileLink}
              onChange={handleChange}
              placeholder="https://www.example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your blog content here..."
              rows="8"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="blog-button-danger px-6 py-2 rounded-md font-medium flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="blog-button-primary px-6 py-2 rounded-md font-medium flex-1"
            >
              {isEdit ? 'Save' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;