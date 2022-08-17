import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Todo from '../entities/Todo.entity';

const todoApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    todos: builder.query<Todo[], void>({
      query: () => '/todos',
    }),
  }),
});

export const { useTodosQuery } = todoApi;
export default todoApi;
