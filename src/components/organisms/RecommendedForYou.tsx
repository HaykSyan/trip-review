import { Card } from "@/components/atoms/Card";
import { Button } from "@/components/atoms/Button";

type Props = { reason?: string };

export default function RecommendedForYou({ reason }: Props) {
  return (
    <section className="mt-8 w-full">
      <Card>
        <h4>Recommended for you</h4>
        <p className="text-[#6b7280]">{reason}</p>

        <div className="pt-3 border-t border-gray-200 space-y-3">
          <strong>AI suggestion:</strong>
          <p>
            Upgrade room to “Superior Room” for €50 — more space for groups and
            better views.
          </p>
          <div className="ai-actions">
            <Button>Apply suggestion</Button>
            <a
              href="#"
              className="underline text-blue-400 p-1.5 cursor-pointer"
            >
              Dismiss
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
