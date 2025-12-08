import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";

const Resorts = lazy(() => import("@/pages/Resorts"));
const Overview = lazy(() => import("@/pages/Overview"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Resorts />
          </Suspense>
        ),
      },
      {
        path: "/overview",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Overview />
          </Suspense>
        ),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
