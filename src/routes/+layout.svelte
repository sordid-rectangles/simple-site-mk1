<script lang="ts">
	import { page } from '$app/stores';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl hover:bg-yellow-200">
					<a href='/'>Simple Site</a>
				</strong>

			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex flex-col md:flex-row space-y-2  md:space-y-0 md:space-x-2 ">
					<a
						class="btn btn-sm variant-ghost-secondary"
						href="https://github.com/sordid-rectangles"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>

					<a
						class="btn btn-sm variant-ghost-secondary"
						href="https://substack.com/@sordidrectangles"
						target="_blank"
						rel="noreferrer"
					>
						Substack
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
	
	<svelte:fragment slot="footer">
		<div class="flex flex-col items-center justify-center font-mono text-sm text-opacity-50 py-4">
			<span>© Sordid Rectangles 2024</span>

			<!-- inject website cred on about page -->
			{#if $page.route.id === '/about'}
				 <div>
					<span>powered by </span>
					<a href="https://github.com/sordid-rectangles">@sordid-rectangles</a>
				</div>
			{/if}
		</div>
	</svelte:fragment>
</AppShell>
