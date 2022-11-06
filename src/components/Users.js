import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h1>User</h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Logged in users
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing logged in user</h2>
      ) : (
        <h2>showing all users</h2>
      )}
    </div>
  );
};
