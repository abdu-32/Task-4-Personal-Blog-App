import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'jotai';
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/EditBlog";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);

export default App;