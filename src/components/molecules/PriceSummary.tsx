import { usePriceCalculator } from "@/hooks/usePriceCalculator";
import { Button } from "@/components/atoms/Button";
import { amountFormat } from "@/utils/currency";

type Props = {
  children?: React.ReactNode;
};

export const PriceSummary = ({ children }: Props) => {
  const { total, currency } = usePriceCalculator();
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow text-right flex flex-col gap-4">
      {children}
      <div>
        <h4 className="text-sm text-gray-600">Total price</h4>
        <div className="text-3xl font-bold mt-2">
          {amountFormat(total, currency)}
        </div>
      </div>
      <div>
        <Button className="w-full rounded-full">Continue to Checkout</Button>
      </div>
    </div>
  );
};
