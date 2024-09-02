import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map(p => (
      <PostCard
        cover={p.cover}
        title={p.title}
        id={p.id}
        key={p.id}
        body={p.body}
      />
    ))
    }
  </div>
)