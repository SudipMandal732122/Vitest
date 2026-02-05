import { useEffect, useState } from "react";

import { fetchUser } from "../api/userApi";

import type { user } from "../api/userApi";


export function UserProfile(){
    const [user,setUser]= useState<user | null>(null);

    useEffect(()=>{
        fetchUser().then(setUser);
    },[]);

    if(!user) return <h1>Loading ... </h1>

    return(
        <div>
            <h1>UserName:{user.name}</h1>
            <h1>UserId:{user.id}</h1>
        </div>
    )
};