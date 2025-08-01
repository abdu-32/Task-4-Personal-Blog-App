import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { addBlogAtom } from '../atoms/blogAtoms';
import Navbar from '../components/Navbar';
import BlogForm from '../components/BlogForm';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [, addBlog] = useAtom(addBlogAtom);

  const handleSubmit = (formData) => {
    const newBlogId = addBlog({
      title: formData.title,
      author: formData.author,
      description: formData.description,
      content: formData.content,
      profileLink: formData.profileLink
    });
    
    navigate(`/blog/${newBlogId}`);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="blog-background">
      <Navbar />
      <BlogForm 
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CreateBlog;