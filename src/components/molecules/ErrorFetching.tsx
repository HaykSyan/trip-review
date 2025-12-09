import { Link } from "react-router-dom";

type Props = {
  refetch: () => Promise<unknown> | void;
  isFetching?: boolean;
};

export const ErrorFetching = ({ refetch, isFetching = false }: Props) => {
  const userMessage =
    "We couldn't load this trip. Please check your connection or try again.";

  return (
    <div className="col-span-2 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Unable to load trip
        </h3>
        <p className="text-sm text-gray-600 mb-4" aria-live="polite">
          {userMessage}
        </p>

        <div className="flex justify-center gap-3 mb-4">
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
            aria-busy={isFetching}
          >
            {isFetching ? "Retrying…" : "Retry"}
          </button>

          <Link
            to="/"
            className="px-4 py-2 border rounded text-sm text-gray-700 hover:bg-gray-50"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
