import { Post } from "./types";

export async function getPostById(id: string): Promise<Post | undefined> {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json());
        return res
    }
    catch (e) {
        console.log(e);
    }
}
