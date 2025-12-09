import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import { BaseLayout } from "@/layouts/BaseLayout";
import { AsideLayout } from "@/layouts/AsideLayout";
import { ErrorBoundary } from "@/components/molecules/ErrorBoundary";

const Resorts = lazy(() => import("@/pages/Resorts"));
const Overview = lazy(() => import("@/pages/Overview"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <BaseLayout>
            <Suspense fallback={<>Loading...</>}>
              <Resorts />
            </Suspense>
          </BaseLayout>
        ),
      },
      {
        path: "/overview/:id",
        element: (
          <AsideLayout>
            <Suspense fallback={<>Loading...</>}>
              <Overview />
            </Suspense>
          </AsideLayout>
        ),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
