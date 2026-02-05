
export type user={
    id:number;
    name:string;
};

export async function fetchUser(): Promise<user>{
    const res = await fetch("api/user");

    if(!res.ok) throw new Error("Failed to fetch");

    return  await res.json();
}   