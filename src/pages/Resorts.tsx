import { useQuery } from "@tanstack/react-query";

import { TripItemCard } from "@/components/molecules/TripItemCard";

import { getMockTripList } from "@/api/mock";

export default function Resorts() {
  const { data: trips, isLoading } = useQuery({
    queryKey: ["trips"],
    queryFn: getMockTripList,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading…
      </div>
    );

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Recommended Resorts</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 auto-rows-fr">
        {trips?.map((trip) => (
          <TripItemCard
            key={trip.id}
            id={trip.id}
            title={trip.resort.name}
            imageUrl={trip.resort.imageUrl}
            subtitle={trip.resort.region}
            description={trip.resort.description}
            price={trip.basePrice}
            currency={trip.currency}
          />
        ))}
      </div>
    </section>
  );
}
