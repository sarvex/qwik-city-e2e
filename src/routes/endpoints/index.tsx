import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Endpoints</h1>
      <ul>
        <li>
          <a href="/endpoints/data.html">/endpoints/data.html</a>
        </li>
        <li>
          <a href="/endpoints/data.json">/endpoints/data.json</a>
        </li>
        <li>
          <a href="/endpoints/data.txt">/endpoints/data.txt</a>
        </li>
        <li>
          <a href="/endpoints/image.png">/endpoints/image.png</a>
        </li>
        <li>
          <a href="/endpoints/redirect?url=/">/endpoints/redirect?url=/</a>
        </li>
        <li>
          <a href="/endpoints/response.txt">/endpoints/response.txt</a>
        </li>
        <li>
          <a href="/endpoints/stream.csv">/endpoints/stream.csv</a>
        </li>
      </ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Endpoints",
};
