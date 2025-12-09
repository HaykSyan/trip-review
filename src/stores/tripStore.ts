import { create } from "zustand";
import { type TripPackage } from "@/types/trip";

type TripState = {
  trip: TripPackage | undefined;
  setTrip: (t: TripPackage | undefined) => void;
  updateRoom: (roomId: string) => void;
  toggleInsurance: (type: string) => void;
  toggleAddon: (id: string) => void;
  clearTrip: () => void;
};

export const useTripStore = create<TripState>((set) => ({
  trip: undefined,
  setTrip: (t) => set({ trip: t }),
  clearTrip: () => set({ trip: undefined }),
  updateRoom: (roomId) =>
    set((state) => {
      if (!state.trip) return state;
      const room = state.trip.hotel.roomOptions.find((r) => r.id === roomId);
      if (!room) return state;
      return { trip: { ...state.trip, room } };
    }),
  toggleInsurance: (type) =>
    set((state) => {
      if (!state.trip?.insurance || state.trip.insurance.type !== type) {
        return state;
      }
      return {
        trip: {
          ...state.trip,
          insurance: {
            ...state.trip.insurance,
            included: !state.trip.insurance.included,
          },
        },
      };
    }),
  toggleAddon: (id) =>
    set((state) => {
      if (!state.trip) return state;
      const addons = state.trip.addons.map((a) =>
        a.id === id ? { ...a, selected: !(a.selected ?? false) } : a
      );
      return { trip: { ...state.trip, addons } };
    }),
}));

// Action helpers for use outside React components
export const setTrip = (trip?: TripPackage) =>
  useTripStore.getState().setTrip(trip);
export const updateRoom = (roomId: string) =>
  useTripStore.getState().updateRoom(roomId);
export const toggleAddon = (id: string) =>
  useTripStore.getState().toggleAddon(id);
export const toggleInsurance = (type: string) =>
  useTripStore.getState().toggleInsurance(type);
export const clearTrip = () => useTripStore.getState().clearTrip();
