import { StatusComercial } from "../enums/status-comercial-client.enum";
import { Asset } from "./asset.interface";
import { Organization } from "./organization.interface";

export interface Client {
  id: number;
  organization: Organization;
  name: string;
  description?: string;
  email?: string;
  phone?: string;
  statusComercial: StatusComercial;
  assets: Asset[];
  createdAt: Date;
}
