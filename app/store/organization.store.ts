import { create } from "zustand";
import { Organization } from "../helpers/definitions";
import { persist } from "zustand/middleware";

interface OrganizationStore {
  organizations: Organization[];
  activeOrganization: Organization | null;

  setOrganizations: (organizations: Organization[]) => void;
  setActiveOrganization: (organization: Organization) => void;
  clearOrganization: () => void;
}

export const useOrganizationStore = create<OrganizationStore>()(
  persist(
    (set) => ({
      organizations: [],
      activeOrganization: null,

      setOrganizations: (organizations) =>
        set({
          organizations,
        }),

      setActiveOrganization: (organization) =>
        set({
          activeOrganization: organization,
        }),

      clearOrganization: () =>
        set({
          organizations: [],
          activeOrganization: null,
        }),
    }),
    {
      name: "infra-monitor-organization",
    },
  ),
);
