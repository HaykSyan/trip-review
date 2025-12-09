import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getMockTrip } from "@/api/mock";
import { setTrip } from "@/stores/tripStore";

export const useOverviewData = (id: string | undefined) => {
  const {
    data: trip,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["trip", id],
    queryFn: async () => {
      if (!id) throw new Error("Trip ID is required");
      return await getMockTrip(id);
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (isSuccess && trip) {
      setTrip(trip);
    }
  }, [isSuccess, trip]);

  return { trip, isLoading, isFetching, isError, error, refetch };
};
