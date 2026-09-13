"use client";

import { fetchMyOrganizationsMemberships } from "@/app/helpers/api";
import { useOrganizationStore } from "@/app/store/organization.store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function OrganizationInitializer() {
  const { data: session, status } = useSession();

  const setOrganizations = useOrganizationStore(
    (state) => state.setOrganizations,
  );

  const setActiveOrganization = useOrganizationStore(
    (state) => state.setActiveOrganization,
  );

  useEffect(() => {
    if (status !== "authenticated") {
      return;
    }

    if (!session?.user?.token) {
      console.error("Session does not contain backend token");
      return;
    }

    async function initializeOrganizations() {
      try {
        const memberships = await fetchMyOrganizationsMemberships(
          session?.user?.token,
        );

        if (memberships.length === 0) {
          return;
        }

        const organizations = memberships.map((membership) => ({
          id: membership.organizationId,
          name: membership.organization.name,
        }));

        setOrganizations(organizations);

        const currentOrganization =
          useOrganizationStore.getState().activeOrganization;

        if (!currentOrganization) {
          setActiveOrganization(organizations[0]);
        }
      } catch (error) {
        console.error("Failed to initialize organizations:", error);
      }
    }

    initializeOrganizations();
  }, [status, session, setOrganizations, setActiveOrganization]);

  return null;
}
