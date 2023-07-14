import { User } from "./types";

export async function getUsers(): Promise<User[] | undefined> {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json());
        return res
    }
    catch (e) {
        console.log(e);
    }
}
