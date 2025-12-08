export type Resort = {
  id: string;
  name: string;
  region: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  vibe: string;
  imageUrl: string;
  description: string;
};

export type Hotel = {
  id: string;
  name: string;
  stars: number;
  distanceToLift: string;
  roomOptions: RoomOption[];
  imageUrl?: string;
};

export type RoomOption = {
  id: string;
  title: string;
  priceDelta: number; // relative to base
  description?: string;
};

export type SkipassOption = {
  id: string;
  days: number;
  zone: string;
  price: number;
};

export type TransferOption = {
  id: string;
  from: string;
  vehicle: string;
  time: string;
  price: number;
};

export type Flight = {
  id: string;
  carrier: string;
  class: string;
  depart: string; // ISO
  arrive: string; // ISO
  price: number;
};

export type Addon = {
  id: string;
  name: string;
  price: number;
  selected?: boolean;
};

export type TripPackage = {
  id: string;
  resort: Resort;
  hotel: Hotel;
  room: RoomOption;
  skipass: SkipassOption;
  transfer?: TransferOption;
  flight?: Flight;
  insurance?: { type: string; price: number; included: boolean };
  addons: Addon[];
  basePrice: number;
  recommendedBecause?: string;
};
