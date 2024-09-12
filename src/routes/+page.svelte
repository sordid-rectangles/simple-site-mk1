<script>
	import {page, navigating} from '$app/stores'
</script>

<svelte:head>
	<title>Simple Site</title>
    <meta name="Description" content="Simple site skeleton project homepage">
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 text-center flex flex-col items-center">
		<!-- Landing Page Hero Text -->
		<h2 class="h2">Welcome to SimpleNet.</h2>
		<!-- Links Nav button -->
		<div class="space-y-0">
			<div class="flex justify-center space-x-2 underline">
				<a
					class="btn variant-unfilled hover:bg-yellow-200"
					href="/links"
					aria-current="{$page.url.pathname === '/links'}"
				>
				{#if $navigating}
					 <!--nav message-->
					 navigating to 
					 {$navigating.to ? $navigating.to.url.pathname : '...'}
				{:else}
					 <!--default-->
					  Links
				{/if}
				</a>
			</div>
		<!-- About Nav Button  -->
			<div class="flex justify-center space-x-2 underline">
				<a
					class="btn variant-unfilled hover:bg-yellow-200"
					href="/about"
					aria-current="{$page.url.pathname === '/about'}"
				>
				{#if $navigating}
					 <!--nav message-->
					 navigating to 
					 {$navigating.to ? $navigating.to.url.pathname : '...'}
				{:else}
					 <!--default-->
					  About
				{/if}
				</a>
			</div>
			
		</div>
	</div>
</div>


