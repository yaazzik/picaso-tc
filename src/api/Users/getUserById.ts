import { User } from "./types";

export async function getUserById(id: number | undefined): Promise<User | undefined> {
    try {
      if (id) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id.toString()}`)
          .then((response) => response.json());
        return res
      }

    }
    catch (e) {
        console.log(e);
    }
}
