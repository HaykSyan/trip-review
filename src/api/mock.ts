import { type TripPackage } from "@/types/trip";

const trips: TripPackage[] = [
  {
    id: "trip-1",
    basePrice: 850,
    resort: {
      id: "res-1",
      name: "Alpine Heights",
      region: "Chamonix, FR",
      difficulty: "Intermediate",
      vibe: "Party, Après-ski",
      imageUrl: "/images/alpine.jpg",
      description: "Modern slopes, lively village vibes.",
    },
    hotel: {
      id: "hot-1",
      name: "4* Chalet near lifts",
      stars: 4,
      distanceToLift: "200m",
      roomOptions: [
        { id: "r-1", title: "Double Room w/ breakfast", priceDelta: 0 },
        { id: "r-2", title: "Deluxe Room + Balcony", priceDelta: 120 },
      ],
      imageUrl: "/images/hotel.jpg",
    },
    room: { id: "r-1", title: "Double Room w/ breakfast", priceDelta: 0 },
    skipass: { id: "s-3", days: 3, zone: "Premium", price: 120 },
    transfer: {
      id: "t-1",
      from: "Geneva Airport",
      vehicle: "Minivan",
      time: "15:00",
      price: 70,
    },
    flight: {
      id: "f-1",
      carrier: "Emirates",
      class: "Economy",
      depart: "2025-01-12T15:40:00Z",
      arrive: "2025-01-12T18:00:00Z",
      price: 220,
    },
    insurance: { type: "Basic", price: 20, included: true },
    addons: [
      { id: "a-1", name: "Ski lessons", price: 60, selected: false },
      { id: "a-2", name: "Spa", price: 40, selected: false },
    ],
    recommendedBecause:
      "Based on your preferences: Party vibe • Medium budget • Group of friends",
  },
  {
    id: "trip-2",
    basePrice: 1050,
    resort: {
      id: "res-1",
      name: "Alpine Heights",
      region: "Chamonix, FR",
      difficulty: "Intermediate",
      vibe: "Party, Après-ski",
      imageUrl: "/images/alpine.jpg",
      description: "Modern slopes, lively village vibes.",
    },
    hotel: {
      id: "hot-1",
      name: "4* Chalet near lifts",
      stars: 4,
      distanceToLift: "200m",
      roomOptions: [
        { id: "r-1", title: "Double Room w/ breakfast", priceDelta: 0 },
        { id: "r-2", title: "Deluxe Room + Balcony", priceDelta: 120 },
      ],
      imageUrl: "/images/hotel.jpg",
    },
    room: { id: "r-1", title: "Double Room w/ breakfast", priceDelta: 0 },
    skipass: { id: "s-3", days: 3, zone: "Premium", price: 120 },
    transfer: {
      id: "t-1",
      from: "Geneva Airport",
      vehicle: "Minivan",
      time: "15:00",
      price: 70,
    },
    flight: {
      id: "f-1",
      carrier: "Emirates",
      class: "Economy",
      depart: "2025-01-12T15:40:00Z",
      arrive: "2025-01-12T18:00:00Z",
      price: 220,
    },
    insurance: { type: "Basic", price: 20, included: true },
    addons: [
      { id: "a-1", name: "Ski lessons", price: 60, selected: false },
      { id: "a-2", name: "Spa", price: 40, selected: false },
    ],
    recommendedBecause:
      "Based on your preferences: Party vibe • Medium budget • Group of friends",
  },
  {
    id: "trip-3",
    basePrice: 1250,
    resort: {
      id: "res-1",
      name: "Alpine Heights",
      region: "Chamonix, FR",
      difficulty: "Intermediate",
      vibe: "Party, Après-ski",
      imageUrl: "/images/alpine.jpg",
      description: "Modern slopes, lively village vibes.",
    },
    hotel: {
      id: "hot-1",
      name: "4* Chalet near lifts",
      stars: 4,
      distanceToLift: "200m",
      roomOptions: [
        { id: "r-1", title: "Double Room w/ breakfast", priceDelta: 0 },
        { id: "r-2", title: "Deluxe Room + Balcony", priceDelta: 120 },
      ],
      imageUrl: "/images/hotel.jpg",
    },
    room: { id: "r-1", title: "Double Room w/ breakfast", priceDelta: 0 },
    skipass: { id: "s-3", days: 3, zone: "Premium", price: 120 },
    transfer: {
      id: "t-1",
      from: "Geneva Airport",
      vehicle: "Minivan",
      time: "15:00",
      price: 70,
    },
    flight: {
      id: "f-1",
      carrier: "Emirates",
      class: "Economy",
      depart: "2025-01-12T15:40:00Z",
      arrive: "2025-01-12T18:00:00Z",
      price: 220,
    },
    insurance: { type: "Basic", price: 20, included: true },
    addons: [
      { id: "a-1", name: "Ski lessons", price: 60, selected: false },
      { id: "a-2", name: "Spa", price: 40, selected: false },
    ],
    recommendedBecause:
      "Based on your preferences: Party vibe • Medium budget • Group of friends",
  },
];

export const getMockTrip = async (id: string): Promise<TripPackage> => {
  // simulate latency
  await new Promise((res) => setTimeout(res, 200));
  return trips.find((t) => t.id === id)!;
};

export const getMockTripList = async (): Promise<TripPackage[]> => {
  // simulate latency
  return await new Promise((res) => res(trips));
};
