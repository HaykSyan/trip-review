import { useTripStore } from "@/stores/tripStore";
import { amountFormat } from "@/utils/currency";

export const PriceSummaryDetails = () => {
  const trip = useTripStore((state) => state.trip);

  if (!trip) {
    return (
      <div className="pb-4 border-b border-gray-200">
        <p className="text-sm text-gray-500">No trip selected</p>
      </div>
    );
  }

  const currency = trip.currency ?? "USD";
  return (
    <div className="pb-4 border-b border-gray-200">
      <div>
        <h2 className="text-lg font-semibold mb-2">Price Summary Details</h2>
        <div className="flex justify-between mb-1">
          <span>Resort:</span>
          <span>{amountFormat(trip.basePrice, currency)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Room:</span>
          <span>{amountFormat(trip.room.priceDelta, currency)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Flight:</span>
          <span>{amountFormat(trip.flight?.price ?? 0, currency)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Transfer:</span>
          <span>{amountFormat(trip.transfer?.price ?? 0, currency)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Ski: {trip.skipass.days} days</span>
          <span>{amountFormat(trip.skipass.price, currency)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Insurance: {trip.insurance?.type ?? "None"}</span>
          <span>
            {amountFormat(
              trip.insurance?.included === true ? trip.insurance.price : 0,
              currency
            )}
          </span>
        </div>
        {trip.addons
          .filter((a) => a.selected === true)
          .map((a) => (
            <div key={a.id} className="flex justify-between mb-1">
              <span>{a.name}</span>
              <span>{amountFormat(a.price, currency)}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
