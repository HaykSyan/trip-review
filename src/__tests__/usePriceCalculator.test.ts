import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { usePriceCalculator } from "@/hooks/usePriceCalculator";
import { useTripStore } from "@/stores/tripStore";
import type { TripPackage } from "@/types/trip";

// Mock the zustand store
vi.mock("@/stores/tripStore", () => ({
  useTripStore: vi.fn(),
}));

describe("usePriceCalculator", () => {
  let mockTrip: TripPackage | undefined;

  beforeEach(() => {
    vi.clearAllMocks();
    mockTrip = undefined;
    // Mock useTripStore to work as a selector function
    (useTripStore as unknown as ReturnType<typeof vi.fn>).mockImplementation(
      (
        selector?: (state: { trip: TripPackage | undefined }) => TripPackage | undefined
      ) => {
        const mockState = { trip: mockTrip };
        return selector ? selector(mockState) : mockState;
      }
    );
  });

  it("should return total 0 and undefined currency when trip is undefined", () => {
    mockTrip = undefined;

    const { result } = renderHook(() => usePriceCalculator());

    expect(result.current.total).toBe(0);
    expect(result.current.currency).toBe("USD");
  });

  it("should calculate total with base price only", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "USD",
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    expect(result.current.total).toBe(1000);
    expect(result.current.currency).toBe("USD");
  });

  it("should calculate total with all components", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "EUR",
      room: { id: "1", title: "Standard", priceDelta: 200 },
      skipass: { id: "1", days: 5, zone: "A", price: 150 },
      transfer: {
        id: "1",
        from: "Airport",
        vehicle: "Bus",
        time: "10:00",
        price: 50,
      },
      flight: {
        id: "1",
        carrier: "Airline",
        class: "Economy",
        depart: "2024-01-01",
        arrive: "2024-01-02",
        price: 300,
      },
      insurance: { type: "Basic", price: 25, included: true },
      addons: [
        { id: "1", name: "Equipment", price: 100, selected: true },
        { id: "2", name: "Guide", price: 200, selected: true },
      ],
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    // 1000 (base) + 200 (room) + 150 (skipass) + 50 (transfer) + 300 (flight) + 25 (insurance) + 100 (addon1) + 200 (addon2) = 2025
    expect(result.current.total).toBe(2025);
    expect(result.current.currency).toBe("EUR");
  });

  it("should not include insurance price when insurance is not included", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "USD",
      insurance: { type: "Basic", price: 25, included: false },
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    expect(result.current.total).toBe(1000);
  });

  it("should not include insurance price when insurance is undefined", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "USD",
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    expect(result.current.total).toBe(1000);
  });

  it("should handle missing optional components (transfer, flight)", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "GBP",
      room: { id: "1", title: "Standard", priceDelta: 200 },
      skipass: { id: "1", days: 5, zone: "A", price: 150 },
      // transfer and flight are undefined
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    // 1000 (base) + 200 (room) + 150 (skipass) = 1350
    expect(result.current.total).toBe(1350);
    expect(result.current.currency).toBe("GBP");
  });

  it("should only include selected addons in total", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "USD",
      addons: [
        { id: "1", name: "Equipment", price: 100, selected: true },
        { id: "2", name: "Guide", price: 200, selected: false },
        { id: "3", name: "Lessons", price: 150, selected: true },
      ],
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    // 1000 (base) + 100 (addon1) + 150 (addon3) = 1250
    expect(result.current.total).toBe(1250);
  });

  it("should handle addons without selected property (defaults to not selected)", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "USD",
      addons: [
        { id: "1", name: "Equipment", price: 100 }, // selected is undefined
        { id: "2", name: "Guide", price: 200, selected: true },
      ],
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    // 1000 (base) + 200 (addon2) = 1200
    expect(result.current.total).toBe(1200);
  });

  it("should handle empty addons array", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "USD",
      addons: [],
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    expect(result.current.total).toBe(1000);
  });

  it("should handle negative room priceDelta", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "USD",
      room: { id: "1", title: "Budget", priceDelta: -100 },
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    expect(result.current.total).toBe(900);
  });

  it("should handle zero values for all components", () => {
    mockTrip = {
      basePrice: 0,
      currency: "USD",
      room: { id: "1", title: "Standard", priceDelta: 0 },
      skipass: { id: "1", days: 5, zone: "A", price: 0 },
      transfer: {
        id: "1",
        from: "Airport",
        vehicle: "Bus",
        time: "10:00",
        price: 0,
      },
      flight: {
        id: "1",
        carrier: "Airline",
        class: "Economy",
        depart: "2024-01-01",
        arrive: "2024-01-02",
        price: 0,
      },
      insurance: { type: "Basic", price: 0, included: true },
      addons: [],
    } as unknown as TripPackage;

    const { result } = renderHook(() => usePriceCalculator());

    expect(result.current.total).toBe(0);
  });

  it("should recalculate when trip data changes", () => {
    mockTrip = {
      basePrice: 1000,
      currency: "USD",
    } as unknown as TripPackage;

    const { result, rerender } = renderHook(() => usePriceCalculator());

    expect(result.current.total).toBe(1000);

    mockTrip = {
      basePrice: 2000,
      currency: "EUR",
      room: { id: "1", title: "Luxury", priceDelta: 500 },
    } as unknown as TripPackage;

    rerender();

    expect(result.current.total).toBe(2500);
    expect(result.current.currency).toBe("EUR");
  });
});
