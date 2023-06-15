import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
    id: number
    name: String
    username: String
    email: String
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], null>({
            query: () => 'users'
        }),
        getUserById: builder.query<User, {id: string}>({
            query: ({id}) => `users/${id}`
        })
    })
})

export default userApi.reducer;
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi