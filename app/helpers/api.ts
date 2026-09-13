import { authHeader } from "./utils";
import { Membership } from "./definitions";

export const fetchTotalAssets = async (id: number) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const getTotalAssets = await fetch(
      `${apiUrl}/organization/${id}/assets/count`,
    );

    const resultTotalAssets = await getTotalAssets.json();

    const numberOfTotalAssets = Number(resultTotalAssets || "0");

    return numberOfTotalAssets;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Failed fetching total assets data");
  }
};

export const fetchMyMemberships = async (
  organizationId: number,
  token?: string,
) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const getMyMemberships = await fetch(
      `${apiUrl}/organization/${organizationId}/memberships/me`,
      {
        headers: authHeader(token),
      },
    );

    const resultMyMemberships = await getMyMemberships.json();

    return resultMyMemberships;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Failed fetching MyMemberships data");
  }
};

export const fetchMyOrganizationsMemberships = async (
  token?: string,
): Promise<Membership[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const getMyOrganizationMemberships = await fetch(
      `${apiUrl}/organization/me`,
      {
        headers: authHeader(token),
      },
    );
    if (!getMyOrganizationMemberships.ok) {
      throw new Error(
        `Failed to fetch organizations: ${getMyOrganizationMemberships.status}`,
      );
    }

    const resultMyOrganizationMemberships =
      await getMyOrganizationMemberships.json();

    return resultMyOrganizationMemberships;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Failed fetching MyOrganizationsMemberships data");
  }
};
