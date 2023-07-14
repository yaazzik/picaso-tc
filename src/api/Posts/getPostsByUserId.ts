import {Post} from "./types";

export async function getPostsByUserId(id: string | undefined): Promise<Post[] | undefined> {
    try {
      const url = id ? `https://jsonplaceholder.typicode.com/users/${id}/posts` : `https://jsonplaceholder.typicode.com/posts`
        const res = await fetch(url)
            .then((response) => response.json());
        return res
    }
    catch (e) {
        console.log(e);
    }
}
