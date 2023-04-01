import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError
} from "react-router-dom";
import Counter from './counter';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Main Page</div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cv",
      element: <div>CV Page</div>,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );