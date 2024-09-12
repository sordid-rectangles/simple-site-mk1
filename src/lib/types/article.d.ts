import { Publication } from "$lib/types/publication";

// Common use Article interface
export interface Article {
    id: string;
    title: string;
    url: string;
    author: string;
    category: string;
    publication: Publication;
    content?: string;
    publishedAt?: Date;
    tags?: string[];
};