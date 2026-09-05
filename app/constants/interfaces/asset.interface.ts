import { ServiceType } from "../enums/service-type.enum";
import { TypeAsset } from "../enums/type-asset.enum";
import { Client } from "./client.interface";
import { Organization } from "./organization.interface";

export interface Asset {
  id: number;
  organization: Organization;
  client?: Client;
  name: string;
  typeAsset: TypeAsset;
  serviceType: ServiceType;
  technology?: string;
  hostname?: string;
  ipAddress?: string;
  url?: string;
  environment?: string;
  description?: string;
}
