import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

// interface post, yang dimana dari base url yg sudah di fetch
interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// server component
const Posts = async () => {
    // fetch api
  const response = await fetch(base_url, {

  });
  const posts: Ipost[] = await response.json();

  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;
