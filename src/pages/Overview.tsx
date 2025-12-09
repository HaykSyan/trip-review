import { useParams } from "react-router-dom";

import { Back } from "@/components/atoms/Back";
import { PriceSummary } from "@/components/molecules/PriceSummary";
import { ErrorFetching } from "@/components/molecules/ErrorFetching";
import { TripCustomizer } from "@/components/molecules/TripCustomizer";
import RecommendedForYou from "@/components/organisms/RecommendedForYou";
import { TripOverviewPanel } from "@/components/organisms/TripOverviewPanel";
import { PriceSummaryDetails } from "@/components/molecules/PriceSummaryDetails";

import { useOverviewData } from "@/hooks/useOverviewData";

export default function Overview() {
  const { id } = useParams();

  const { isLoading, isError, refetch, isFetching } = useOverviewData(id);

  if (!id) return null;
  if (isError)
    return <ErrorFetching refetch={refetch} isFetching={isFetching} />;

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading…
      </div>
    );

  return (
    <>
      <section>
        <Back />
        <TripOverviewPanel />
        <TripCustomizer />
      </section>
      <aside>
        <div className="sticky top-4 h-fit">
          <PriceSummary>
            <PriceSummaryDetails />
          </PriceSummary>
          <RecommendedForYou />
        </div>
      </aside>
    </>
  );
}
