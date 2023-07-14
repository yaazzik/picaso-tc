import { Post } from "./types";

export async function getPosts(): Promise<Post[] | undefined> {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
        return res
    }
    catch (e) {
        console.log(e);
    }
}
