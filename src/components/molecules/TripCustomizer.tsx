import { Card } from "@/components/atoms/Card";
import { CheckboxGroup } from "@/components/molecules/CheckboxGroup";

import { amountFormat } from "@/utils/currency";
import {
  updateRoom,
  toggleAddon,
  toggleInsurance,
  useTripStore,
} from "@/stores/tripStore";

export const TripCustomizer = () => {
  const trip = useTripStore((state) => state.trip);
  return (
    <section className="mt-4">
      <h2 className="text-xl font-bold mb-4">Customize Your Trip</h2>
      <div className="flex flex-col gap-4">
        <Card>
          <h3 className="text-lg font-semibold mb-2">Room Options</h3>
          <CheckboxGroup
            items={
              trip?.hotel.roomOptions.map((room) => ({
                id: room.id,
                label: room.title,
                rightContent: amountFormat(
                  room.priceDelta,
                  trip?.currency ?? "USD"
                ),
              })) ?? []
            }
            selectedIds={trip ? [trip.room.id] : []}
            onChange={(id) => updateRoom(id)}
          />
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2">Insurance</h3>
          <CheckboxGroup
            items={
              trip?.insurance
                ? [
                    {
                      id: trip.insurance.type,
                      label: trip.insurance.type,
                      rightContent: amountFormat(
                        trip.insurance.price,
                        trip?.currency ?? "USD"
                      ),
                    },
                  ]
                : []
            }
            selectedIds={trip?.insurance?.included ? [trip.insurance.type] : []}
            onChange={(id) => toggleInsurance(id)}
          />
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2">Add-ons</h3>
          <CheckboxGroup
            items={
              trip?.addons.map((addon) => ({
                id: addon.id,
                label: addon.name,
                rightContent: amountFormat(
                  addon.price,
                  trip?.currency ?? "USD"
                ),
              })) ?? []
            }
            selectedIds={
              trip?.addons.filter((a) => a.selected).map((a) => a.id) || []
            }
            onChange={(id) => toggleAddon(id)}
          />
        </Card>
      </div>
    </section>
  );
};
