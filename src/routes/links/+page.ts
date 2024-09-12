import type { PageLoad } from './$types.js';
import { articles } from '$lib/articles/datalib.js';

export const load: PageLoad = async () => {
	let articleList = articles;

	return {
		articles: articleList
	};
};
