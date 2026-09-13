import { FaCheck, FaCreditCard, FaDownload } from "react-icons/fa6";

const invoices = [
  {
    id: "INV-2024-001",
    date: "May 1, 2024",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-2024-002",
    date: "Apr 1, 2024",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-2024-003",
    date: "Mar 1, 2024",
    amount: "$29.00",
    status: "Paid",
  },
];

export default function BillingSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="border-b border-white/10 pb-6">
        <h2 className="text-lg font-semibold text-white">
          Billing & Subscription
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage your subscription, billing information and invoices.
        </p>
      </div>

      {/* Current Plan */}

      <div className="rounded-xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 to-transparent p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
              Current Plan
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Professional
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Advanced monitoring for growing infrastructure.
            </p>

            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">$29</span>

              <span className="text-sm text-slate-500">/month</span>
            </div>
          </div>

          <button
            type="button"
            className="
              rounded-lg
              border
              border-blue-500/30
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-500
            "
          >
            Manage Plan
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
          <PlanFeature text="Up to 500 assets" />
          <PlanFeature text="Advanced monitoring" />
          <PlanFeature text="Email support" />
        </div>
      </div>

      {/* Usage */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724] p-6">
        <h3 className="text-sm font-semibold text-white">Resource Usage</h3>

        <div className="mt-6 space-y-6">
          <UsageItem
            title="Infrastructure Assets"
            value="156"
            total="500"
            percentage="31%"
          />

          <UsageItem
            title="Organization Members"
            value="12"
            total="25"
            percentage="48%"
          />

          <UsageItem
            title="Monitoring Checks"
            value="89"
            total="250"
            percentage="35%"
          />
        </div>
      </div>

      {/* Payment Method */}

      <div className="rounded-xl border border-white/10 bg-[#0F1724] p-6">
        <h3 className="text-sm font-semibold text-white">Payment Method</h3>

        <div className="mt-5 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/2 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-slate-400">
              <FaCreditCard />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Visa ending in 4242
              </p>

              <p className="mt-1 text-xs text-slate-500">Expires 12/2026</p>
            </div>
          </div>

          <button
            type="button"
            className="text-sm text-blue-400 transition hover:text-blue-300"
          >
            Update
          </button>
        </div>
      </div>

      {/* Invoices */}

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0F1724]">
        <div className="border-b border-white/10 px-6 py-5">
          <h3 className="text-sm font-semibold text-white">Billing History</h3>
        </div>

        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="
              flex
              flex-col
              gap-4
              border-b
              border-white/5
              px-6
              py-4
              last:border-none
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p className="text-sm font-medium text-white">{invoice.id}</p>

              <p className="mt-1 text-xs text-slate-500">{invoice.date}</p>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm text-slate-300">{invoice.amount}</span>

              <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400">
                {invoice.status}
              </span>

              <button className="text-slate-400 transition hover:text-white">
                <FaDownload />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-400">
      <FaCheck className="text-xs text-emerald-400" />

      {text}
    </div>
  );
}

function UsageItem({
  title,
  value,
  total,
  percentage,
}: {
  title: string;
  value: string;
  total: string;
  percentage: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-300">{title}</p>

          <p className="mt-1 text-xs text-slate-500">
            {value} of {total} used
          </p>
        </div>

        <span className="text-sm text-white">{percentage}</span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{
            width: percentage,
          }}
        />
      </div>
    </div>
  );
}
