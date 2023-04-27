import axios from "axios";
import Cookie from 'js-cookie';
// import { QueryFunctionContext } from "@tanstack/react-query";

import type { ISearchTerm } from "../../types";

const instance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ?
        "https://127.0.0.1:8000/api/v1/" :
        "PRODUCTION URL GOES HERE",
    withCredentials: true,
})

// Fetching User Information

// export const getSingleUser = async ({ queryKey }: QueryFunctionContext) => {
//     const [_, userPk] = queryKey;
//     return instance.get(
//         `users/${userPk}`,
//         {
//             headers: {
//                 // ...headers,
//                 "X-CSRFToken": Cookie.get("csrftoken") || "",
//             },
//         }
//     ).then(res => {
//         console.log(res.data);
//         return res.data;
//     })
// }

export const getUsers = async ({ searchTerm }: ISearchTerm) => {
    // const headers = backendRequiresAuth(true);

    return instance.post(
        "users/", {
        searchTerm: searchTerm
    },
        {
            headers: {
                // ...headers,
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        },
    ).then(res => {
        console.log(res.data);
        return res.data;
    })
}

export const getProjects = async ({ searchTerm }: ISearchTerm) => {
    // const headers = backendRequiresAuth(true);

    return instance.post(
        "projects/", {
        searchTerm: searchTerm,
    },
        {
            headers: {
                // ...headers,
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    ).then(res => {
        console.log(res.data);
        return res.data;
    })
}