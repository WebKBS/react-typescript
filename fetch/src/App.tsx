import { ReactNode, useEffect, useState } from 'react';
import fetchingImg from './assets/data-fetching.png';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import { get } from './util/http';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchPost() {
      const data = (await get(
        'https://jsonplaceholder.typicode.com/posts'
      )) as RawDataBlogPost[];

      const blogPosts: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });

      setFetchedPosts(blogPosts);
    }

    fetchPost();
  }, []);
  console.log(fetchedPosts);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImg} alt="image" />
      {content}
    </main>
  );
}

export default App;
