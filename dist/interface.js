"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNewPost = setNewPost;
;
function setNewPost(title, author, created_at, tags) {
    const newPost = {
        title,
        author,
        created_at,
        tags
    };
    return newPost;
}
