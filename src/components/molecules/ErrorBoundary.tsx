import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex justify-center items-center p-8">
        <p className="text-gray-600 font-medium">
          {error.status} | {error.statusText}
        </p>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className="p-8">
        <p className="text-gray-600 font-medium">Unexpected Error</p>
        <pre className="mt-2 text-sm text-gray-600">{error.message}</pre>
      </div>
    );
  }

  return (
    <div className="p-8 text-gray-600 font-medium">Something went wrong.</div>
  );
}
