import {
  FaEllipsisVertical,
  FaPlus,
  FaUserShield,
  FaUsers,
} from "react-icons/fa6";

const users = [
  {
    name: "Yoan Licourt",
    email: "yoan@example.com",
    role: "Owner",
    status: "Active",
    lastActive: "Now",
    initial: "Y",
  },
  {
    name: "John Smith",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    initial: "J",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Member",
    status: "Active",
    lastActive: "1 day ago",
    initial: "S",
  },
  {
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Member",
    status: "Inactive",
    lastActive: "5 days ago",
    initial: "M",
  },
];

export default function UsersSettings() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <FaUsers />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
                User Management
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage users and their permissions within your organization.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-blue-600
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-blue-500
          "
        >
          <FaPlus className="text-xs" />
          Invite User
        </button>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-[#0F1724] p-5">
          <p className="text-sm text-slate-500">Total Users</p>

          <p className="mt-2 text-2xl font-semibold text-white">12</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0F1724] p-5">
          <p className="text-sm text-slate-500">Active Users</p>

          <p className="mt-2 text-2xl font-semibold text-emerald-400">10</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0F1724] p-5">
          <p className="text-sm text-slate-500">Pending Invitations</p>

          <p className="mt-2 text-2xl font-semibold text-amber-400">2</p>
        </div>
      </div>

      {/* Users Table */}

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0F1724]">
        <div className="border-b border-white/10 px-5 py-4">
          <h3 className="text-sm font-semibold text-white">
            Organization Users
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Manage access and permissions for your team.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-175">
            <thead className="border-b border-white/10 bg-white/2">
              <tr>
                <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  User
                </th>

                <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  Role
                </th>

                <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  Last Active
                </th>

                <th className="px-5 py-4 text-right text-xs font-medium uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.email}
                  className="
                    border-b
                    border-white/5
                    transition
                    last:border-none
                    hover:bg-white/3
                  "
                >
                  {/* User */}

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-400 text-sm font-semibold text-white">
                        {user.initial}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-white">
                          {user.name}
                        </p>

                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Role */}

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <FaUserShield className="text-xs text-blue-400" />

                      <span className="text-sm text-slate-300">
                        {user.role}
                      </span>
                    </div>
                  </td>

                  {/* Status */}

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`size-2 rounded-full ${
                          user.status === "Active"
                            ? "bg-emerald-400"
                            : "bg-slate-500"
                        }`}
                      />

                      <span
                        className={`text-sm ${
                          user.status === "Active"
                            ? "text-emerald-400"
                            : "text-slate-400"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                  </td>

                  {/* Last active */}

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {user.lastActive}
                  </td>

                  {/* Actions */}

                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      className="
                        rounded-lg
                        p-2
                        text-slate-500
                        transition
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      <FaEllipsisVertical />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
