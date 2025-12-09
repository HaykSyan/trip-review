import { Link } from "react-router-dom";

import { amountFormat } from "@/utils/currency";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  subtitle?: string;
  description?: string;
  price?: string | number;
  currency?: string;
  children?: React.ReactNode;
};

export const TripItemCard: React.FC<Props> = ({
  id,
  title,
  imageUrl,
  subtitle,
  description,
  price,
  currency = "USD",
  children,
}) => {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col items-start">
      <div
        className="w-full h-48 product-image rounded-t-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="w-full flex flex-col p-4 flex-1">
        <div className="flex justify-between items-start w-full">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="flex flex-col items-end">
            {price !== undefined && (
              <div className="text-lg font-semibold">
                {typeof price === "number"
                  ? amountFormat(price, currency)
                  : price}
              </div>
            )}
          </div>
        </div>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        {description && <p className="text-sm">{description}</p>}
        <div className="mt-2">{children}</div>
        <Link
          className="w-full py-2 px-4 text-center border border-blue-400 text-blue-400 rounded-md mt-auto hover:bg-blue-50 "
          to={`/overview/${id}`}
        >
          Reserve
        </Link>
      </div>
    </div>
  );
};
