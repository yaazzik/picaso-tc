import {PostComment} from "./types";

export async function postComment (comment: PostComment): Promise<PostComment | undefined> {
    try {
        if (comment.body && comment.postId &&  comment.name && comment.email) {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())

            return res
        }
    }
    catch (e) {
        console.log(e)
    }
}
