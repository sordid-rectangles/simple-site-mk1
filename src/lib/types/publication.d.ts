import { PublicationType } from "$lib/types/publicationType";

export interface Publication {
    id: string;
    name: string;
    url: string;
    type: PublicationType;
}
