import { ReactNode, useEffect, useState } from 'react';
import fetchingImg from './assets/data-fetching.png';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import ErrorMessage from './components/ErrorMessage';
import { get } from './util/http';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true);

      try {
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
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof Error) {
          setError(error.message || 'Failed to fetch data');
        }
      }

      setIsFetching(false);
    }

    fetchPost();
  }, []);
  console.log(fetchedPosts);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id="loading-fallback">Loading...</p>;
  }

  return (
    <main>
      <img src={fetchingImg} alt="image" />
      {content}
    </main>
  );
}

export default App;
