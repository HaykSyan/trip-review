import { useMemo } from "react";
import { useTripStore } from "@/stores/tripStore";

export const usePriceCalculator = () => {
  const trip = useTripStore((state) => state.trip);

  const total = useMemo(() => {
    if (!trip) return 0;

    const base = trip.basePrice ?? 0;
    const roomDelta = trip.room?.priceDelta ?? 0;
    const skipass = trip.skipass?.price ?? 0;
    const transfer = trip.transfer?.price ?? 0;
    const flight = trip.flight?.price ?? 0;
    const insurance =
      trip.insurance?.included === true ? trip.insurance.price ?? 0 : 0;
    const addons = (trip.addons ?? []).reduce(
      (sum, addon) => sum + (addon.selected ?? false ? addon.price : 0),
      0
    );

    return base + roomDelta + skipass + transfer + flight + insurance + addons;
  }, [trip]);

  return {
    total,
    currency: trip?.currency ?? "USD",
  };
};
