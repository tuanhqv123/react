import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'

export const blogApi = createApi({
  reducerPath: ' blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => 'posts'
    }),
    addPost: build.mutation<Post, Omit<Post, 'id'>>({
      query(body) {
        return {
          url: 'post',
          method: 'POST',
          body
        }
      }
    })
  })
})

export const { useGetPostsQuery, useAddPostMutation } = blogApi
