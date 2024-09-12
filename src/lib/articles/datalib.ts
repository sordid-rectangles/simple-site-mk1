import type { Article } from '$lib/types/article';
import type { Publication } from '$lib/types/publication';
import { PublicationType } from '$lib/types/publicationType';

/*
Static Articles Data.
Eventually to be shifted to a db if needed / if blogging features are built out
*/

export const publicationsById: { [id: string]: Publication } = {
    "pub1": {
        id: "pub1",
        name: 'Substack',
        url: 'https://substack.com/',
        type: PublicationType.Website
    },
    "pub2": {
        id: "pub2",
        name: 'Metalabel',
        url: 'https://www.metalabel.com/',
        type: PublicationType.Website
    },
    "pub3": {
        id: "pub3",
        name: 'Do Not Research',
        url: 'https://legacy.donotresearch.net/about',
        type: PublicationType.Website
    },
};

export const articles: Article[] = [
    {
        id: '3',
        title: 'Text Is All You Need',
        url: 'https://studio.ribbonfarm.com/p/text-is-all-you-need',
        author: 'Venkatesh Rao',
        category: 'Books',
        publication: publicationsById.pub1,
    },
    {
        id: '2',
        title: 'After the Creator Economy',
        url: 'https://squad.metalabel.com/after-the-creator-economy',
        author: 'Metalabel',
        category: 'Digital Media',
        publication: publicationsById.pub2,
    },
    {
        id: '1',
        title: 'Digital Economy Models',
        url: 'https://legacy.donotresearch.net/posts/digital-economy-models',
        author: 'Jak Ritger',
        category: 'Digital Media',
        publication: publicationsById.pub3,
    },
];