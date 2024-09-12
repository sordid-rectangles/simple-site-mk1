<script lang="ts">
	import type { Article } from '$lib/types/article';

	export let data: { articles: Article[] };
	let articleList: Article[] = data.articles;
</script>

<svelte:head>
	<title>Simple Site Article Links</title>
	<meta
		name="Description"
		content="A collection of links to articles"
	/>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-top space-y-10 pt-10">
	<div class="text-center flex flex-col items-center space-y-10">
		<h2 class="h2 font-normal">Links</h2>
		<span>------</span>
		<div class="flex justify-center space-x-10">
			<ul class="flex flex-col space-y-5">
				{#each articleList as article}
					<li class="hover:bg-yellow-200">
						<a href={article.url}>{article.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
