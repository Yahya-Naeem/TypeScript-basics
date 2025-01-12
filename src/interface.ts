export interface Author{
    name: string,
    avatar: string
};

export interface Post{
    author: Author,
    created_at: Date,
    tags: string[],
    title: string
}

export function setNewPost(title: string, author: Author, created_at: Date, tags: string[]): Post {
    const newPost: Post = {
        title,
        author,
        created_at,
        tags
    };
    return newPost;
}