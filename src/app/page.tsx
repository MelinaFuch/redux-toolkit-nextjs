"use client";

import { useGetUsersQuery } from "@/redux/api/userApi";
import { increment, decrement } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

export default function HomePage() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  if (isLoading || isFetching) return <h1>Loading...</h1>;
  if (error) return <h2>Error</h2>
  
  const dispatch = useAppDispatch();

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex justify-center gap-2 pt-5 pb-2">
        <button className="bg-green-500 px-3 py-2 rounded-md" onClick={() => {dispatch(increment())}}>Increment</button>
      <h1 className="text-center text-2xl ">Total: {count}</h1>
        <button className="bg-blue-500 px-3 py-2 rounded-md" onClick={() => {dispatch(decrement())}}>Decrement</button>
      </div>
      <div className="grid grid-cols-2 mx-auto gap-3 p-4">
        {
          data?.map(({name, username, email}) => (
            <div className="bg-zinc-800">
              <h4>{name}</h4>
              <h4>{username}</h4>
              <h5>{email}</h5>
            </div>
          ))
        }
      </div>
    </div>
  )
}
