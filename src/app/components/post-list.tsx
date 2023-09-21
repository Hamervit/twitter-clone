import { type Post } from '../types/posts';
import { PostCard } from './post-card';

interface IPostListProps {
  posts: Post[] | null;
}

export function PostList({ posts }: IPostListProps) {
  return posts?.map((post) => {
    const { id, content, user } = post,
      { name: userFullName, avatar_url: avatarUrl, user_name: userName } = user;

    return (
      <PostCard
        avatarUrl={avatarUrl}
        content={content}
        key={id}
        userFullName={userFullName}
        userName={userName}
      />
    );
  });
}
