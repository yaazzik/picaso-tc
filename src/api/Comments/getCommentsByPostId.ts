import { PostComment } from "./types";

export async function getCommentsByPostId(id: number): Promise<PostComment[] | undefined> {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.toString()}/comments`)
            .then((response) => response.json());
        return res
    }
    catch (e) {
        console.log(e);
    }
}
