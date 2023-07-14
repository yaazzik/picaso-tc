import { PostComment } from "./types";

export async function getComments(): Promise<PostComment[] | undefined> {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json());
        return res
    }
    catch (e) {
        console.log(e);
    }
}
