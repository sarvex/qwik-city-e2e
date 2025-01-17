import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";
import { USER_COOKIE_NAME } from "../../auth/auth";

export const useUserLoader = routeLoader$(({ cookie }) => {
  return {
    userId: cookie.get(USER_COOKIE_NAME)?.value || "unknown",
  };
});

export default component$(() => {
  const userData = useUserLoader();
  return (
    <>
      <h1>Dashboard</h1>
      <p>
        <span>User: </span>
        <span data-test-user-id>{userData.value.userId}</span>
      </p>
      <ul>
        <li>
          <Link href="/app/sign-out/">Sign out</Link>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Dashboard",
};
