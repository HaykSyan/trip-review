import { trips } from "./data";
import { type TripPackage } from "@/types/trip";

export const getMockTrip = async (id: string): Promise<TripPackage> => {
  const trip = trips.find((t) => t.id === id);
  if (!trip) throw new Error(`Trip ${id} not found`);
  return trip;
};

export const getMockTripList = async (): Promise<TripPackage[]> => {
  return await new Promise((res) => res(trips));
};
