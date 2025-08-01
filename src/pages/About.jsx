import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="blog-background">
      <Navbar />
      
      <main className="blog-content">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="blog-card p-12 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our Blog</h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Welcome to our blog platform where ideas come to life. We believe in the power of 
                storytelling and sharing knowledge that inspires, educates, and connects people 
                from all walks of life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're here to read the latest insights on technology, lifestyle, business, 
                or personal development, our community of writers is dedicated to bringing you 
                high-quality content that matters.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;