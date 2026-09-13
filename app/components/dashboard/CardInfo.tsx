"use client";

import { fetchTotalAssets } from "@/app/helpers/api";
import { useOrganizationStore } from "@/app/store/organization.store";
import { Server, HeartPulse, TriangleAlert, Gauge } from "lucide-react";
import { useEffect, useState } from "react";

function CardInfo() {
  const [totalAssets, setTotalAssets] = useState(0);

  const activeOrganization = useOrganizationStore(
    (state) => state.activeOrganization,
  );

  const organizationId = activeOrganization?.id;

  useEffect(() => {
    if (!organizationId) return;
    const loadAssets = async () => {
      try {
        const result = await fetchTotalAssets(organizationId);
        setTotalAssets(result);
      } catch (error) {
        console.error("Error fetching total assets:", error);
        setTotalAssets(0);
      }
    };
    loadAssets();
  }, [organizationId]);

  if (!activeOrganization) {
    return null;
  }

  const cards = [
    {
      title: "Total Assets",
      icon: Server,
      value: `${totalAssets}`,
      iconColor: "text-cyan-400",
    },
    {
      title: "Healthy",
      icon: HeartPulse,
      value: 21,
      iconColor: "text-cyan-400",
    },
    {
      title: "Alerts",
      icon: TriangleAlert,
      value: 2,
      iconColor: "text-cyan-400",
    },
    {
      title: "Uptime",
      icon: Gauge,
      value: 99.8,
      iconColor: "text-cyan-400",
    },
  ];

  return cards.map((card) => {
    const LinIcon = card.icon;
    return (
      <div
        key={card.title}
        className="
        relative
        min-h-30
        rounded-xl
        border
        border-white/10
        bg-slate-900/60
        p-4
        transition-colors
        hover:border-white/20
      "
      >
        <div className="mb-3 flex items-center justify-between">
          <div
            className={`
            flex size-9 items-center justify-center
            rounded-lg bg-white/5
            ${card.iconColor}
          `}
          >
            <LinIcon className="size-5" />
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {card.title}
            </p>

            <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
              {card.value}
            </p>
          </div>
        </div>
      </div>
    );
  });
}

export default CardInfo;
