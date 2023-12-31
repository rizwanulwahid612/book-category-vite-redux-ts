//import { api } from "@/redux/api/apiSlice";

import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["comments"],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ["comments"],
    }),
    editbook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/editbook/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["comments"], //refatching data or refresh
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"], //refatching data or refresh
    }),
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["comments"],
    }),
    userRegist: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"], //refatching data or refresh
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"], //refatching data or refresh
    }),
    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["comments"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["comments"], //refatching data or refresh
    }),
  }),
});
export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useGetReviewQuery,
  usePostReviewMutation,
  useDeleteBookMutation,
  useEditbookMutation,
  usePostBookMutation,
  useUserRegistMutation,
  useGetUsersQuery,
} = booksApi;
