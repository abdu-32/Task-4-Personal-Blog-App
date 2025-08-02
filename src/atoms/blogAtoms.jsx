import { atom } from 'jotai';

// Sample blog data
const sampleBlogs = [
  {
    id: "1",
    title: "Breaking Down Product Design Advice from Untitled-Founder Frankie",
    author: "John Doe",
    description: "Let's get one thing clear for the week you don't need fancy Bachelor's Degree to work with us our team come with Frankie Sullivan our VP, so she is one in design and who anyone get into her growing industry.",
    content: "Breaking down product design advice from industry leaders can provide invaluable insights for aspiring designers and entrepreneurs. In this comprehensive guide, we'll explore key principles that have shaped successful product development strategies.\n\nThe foundation of great product design lies in understanding user needs and market dynamics. Successful designers emphasize the importance of user research, iterative testing, and continuous feedback loops. This approach ensures that products not only meet technical requirements but also solve real-world problems effectively.\n\nAnother crucial aspect is the balance between innovation and practicality. While groundbreaking features can differentiate a product, they must be implemented in ways that enhance rather than complicate the user experience. The most successful products often combine familiar patterns with subtle innovations that delight users without overwhelming them.\n\nCollaboration across disciplines is equally important. Great product design emerges from the intersection of engineering, business strategy, and user experience design. Teams that foster open communication and shared ownership of outcomes tend to create more cohesive and successful products.",
    createdAt: "2024-01-15",
    editedAt: null,
    featured: true,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Mastering UI Linear 101",
    author: "Emily Chen",
    description: "User-friendly layouts can aid in making browsing more aesthetically pleasing and functional.",
    content: "Linear design principles form the backbone of modern user interface development. Understanding how to create flowing, intuitive layouts is essential for any designer looking to improve user engagement and satisfaction.\n\nThe concept of linear UI focuses on creating clear, logical progressions through interface elements. This approach helps users understand where they are in a process and what actions they need to take next. By implementing consistent visual hierarchies and clear navigation patterns, designers can significantly reduce cognitive load on users.\n\nKey principles include establishing clear visual flow, maintaining consistent spacing and alignment, and using typography and color strategically to guide attention. These elements work together to create interfaces that feel natural and effortless to navigate.",
    createdAt: "2024-01-12",
    editedAt: null,
    featured: false,
    image: "./src/assets/images/9388"
  },
  {
    id: "3",
    title: "The Power of Morning Routines",
    author: "Michael Johnson",
    description: "Discover how a solid morning routine can set the tone for productivity and success throughout your day.",
    content: "Morning routines have become a cornerstone of personal productivity and mental well-being. Research consistently shows that how we start our day significantly impacts our energy levels, focus, and overall performance.\n\nSuccessful individuals across various fields often attribute their achievements to well-designed morning rituals. These routines typically include elements such as physical exercise, meditation or mindfulness practices, goal setting, and consuming nutritious food.\n\nThe key to an effective morning routine is consistency and personalization. What works for one person may not work for another, so it's important to experiment and find a combination of activities that energize and motivate you specifically.",
    createdAt: "2024-01-10",
    editedAt: null,
    featured: false,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=250&fit=crop"
  },
  {
    id: "4",
    title: "Meal Prep in Minutes: Fast, Fresh & Fuss-Free!",
    author: "Emily Carter",
    description: "Quick and easy meal prep solutions that fit into your busy lifestyle without compromising on nutrition.",
    content: "In today's fast-paced world, finding the time to cook every meal from scratch can feel impossible. Whether you're a student juggling assignments, a parent managing multiple schedules, or simply someone who values convenience – meal prep is your secret weapon for maintaining a healthy diet without the daily stress.\n\nBut who said meal prep has to be time-consuming? With the right meal tricks, you can prep delicious, healthy meals in 30 minutes or less. The key is smart planning and more control over what goes into your body.\n\nWhy Quick Meal Prep Matters\n\nTime-Saving Tips for Effortless Meal Prep\n\n1. Plan Before You Chop\nDedicate 10 minutes on the week. Focus on overlapping ingredients to reduce waste and cooking time.\n\n2. Use Pre-Cut Ingredients\nDon't be afraid of pre-cut veggies or store-bought sauces – they're lifesavers when you're short on time.\n\n3. Batch Cook Smart Staples\nPrepare versatile items like grilled chicken, quinoa, or roasted veggies in bulk and mix and match throughout the week.\n\n4. Keep It Simple\nThink stir-fries, wraps, and bowls. They're fast, customizable, and endlessly satisfying.\n\n5. Invest in the Right Tools\nA good quality pan, sharp knife, and storage containers can cut your prep time in half.",
    createdAt: "2024-01-08",
    editedAt: null,
    featured: false,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop"
  },
  {
    id: "5",
    title: "Journal for Clarity",
    author: "Sarah Williams",
    description: "Bringing order to chaos through the simple practice of daily journaling and reflection.",
    content: "Journaling has emerged as one of the most powerful tools for mental clarity and personal growth. In an age of constant digital distraction, the simple act of putting pen to paper can provide profound insights and emotional relief.\n\nThe practice of journaling helps organize thoughts, process emotions, and identify patterns in our behavior and thinking. Regular journaling can improve decision-making abilities, reduce stress, and increase self-awareness.\n\nDifferent journaling techniques serve different purposes. Stream-of-consciousness writing can help clear mental clutter, while structured prompts can guide deeper self-reflection. The key is finding an approach that resonates with your personality and lifestyle.",
    createdAt: "2024-01-05",
    editedAt: null,
    featured: false,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=250&fit=crop"
  }
];

// Atoms
export const blogsAtom = atom(sampleBlogs);
export const bookmarksAtom = atom([]);

// Derived atoms
export const featuredBlogAtom = atom(
  (get) => get(blogsAtom).find(blog => blog.featured)
);

export const recentBlogsAtom = atom(
  (get) => get(blogsAtom).filter(blog => !blog.featured).slice(0, 6)
);

export const bookmarkedBlogsAtom = atom(
  (get) => {
    const blogs = get(blogsAtom);
    const bookmarkIds = get(bookmarksAtom);
    return blogs.filter(blog => bookmarkIds.includes(blog.id));
  }
);

// Actions
export const addBlogAtom = atom(
  null,
  (get, set, newBlog) => {
    const blogs = get(blogsAtom);
    const blogWithId = {
      ...newBlog,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
      editedAt: null,
      featured: false
    };
    set(blogsAtom, [...blogs, blogWithId]);
    return blogWithId.id;
  }
);

export const updateBlogAtom = atom(
  null,
  (get, set, { id, updatedBlog }) => {
    const blogs = get(blogsAtom);
    const updatedBlogs = blogs.map(blog => 
      blog.id === id 
        ? { ...blog, ...updatedBlog, editedAt: new Date().toISOString().split('T')[0] }
        : blog
    );
    set(blogsAtom, updatedBlogs);
  }
);

export const toggleBookmarkAtom = atom(
  null,
  (get, set, blogId) => {
    const bookmarks = get(bookmarksAtom);
    const isBookmarked = bookmarks.includes(blogId);
    
    if (isBookmarked) {
      set(bookmarksAtom, bookmarks.filter(id => id !== blogId));
    } else {
      set(bookmarksAtom, [...bookmarks, blogId]);
    }
  }
);