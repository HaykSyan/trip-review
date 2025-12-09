import { Card } from "@/components/atoms/Card";
import { useTripStore } from "@/stores/tripStore";

export const TripOverviewPanel = () => {
  const trip = useTripStore((state) => state.trip);

  if (!trip) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-500">No trip selected</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="max-h-96 w-full overflow-hidden rounded-lg">
        <img
          src={trip.resort.imageUrl}
          alt={trip.resort.name}
          className="w-full h-auto object-contain"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{trip.resort.name}</h1>
        <p className="text-sm text-gray-500">{trip.resort.region}</p>
        <p>{trip.resort.description}</p>
        <p>{trip.resort.vibe}</p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <Card className="shadow">
          <h2 className="text-lg font-semibold">Trip Details</h2>
          <p>
            <strong>Hotel:</strong> {trip.hotel.name} ({trip.hotel.stars}{" "}
            stars), Distance {trip.hotel.distanceToLift} to lift
          </p>
          <p>
            <strong>Room:</strong> {trip.room.title}
          </p>
          <p>
            <strong>Skipass:</strong> {trip.skipass.days} days in{" "}
            {trip.skipass.zone} zone
          </p>
        </Card>
        {trip.transfer && (
          <Card className="shadow">
            <h2 className="text-lg font-semibold">Transfer</h2>
            <p>
              <strong>From:</strong> {trip.transfer.from}
            </p>
            <p>
              <strong>Vehicle:</strong> {trip.transfer.vehicle}
            </p>
            <p>
              <strong>Time:</strong> {trip.transfer.time}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};
