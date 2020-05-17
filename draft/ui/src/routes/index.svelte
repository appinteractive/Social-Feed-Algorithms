<script>
	import { onMount } from 'svelte';

	const amountCards = 50;
	const placeHolderImg = 'https://via.placeholder.com/900x500?text=Thumbnail';
	let cards = [];

	onMount(() => {
		for(let i = 0;i < amountCards;i++) {
			cards.push(i);
		}
		cards = cards;
	});
</script>

<svelte:head>
  <title>Scone</title>
</svelte:head>

<div class="content">
	{#each cards as card}
		<div class="w-8/12 px-4 my-2 float-left">
			<div class="">
				<img src="{placeHolderImg}" alt="{card}">
			</div>
			<div class="p-1 text-2xl bg-green-700 text-white">
				<h1>Headline {card}</h1>
			</div>
			<div class="p-1">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien id urna eleifend ullamcorper convallis eu lectus. Suspendisse ut pellentesque nunc. Aenean quis gravida lectus. Pellentesque erat ex, facilisis a varius eu, semper sed nisl. Integer sollicitudin varius ipsum et luctus. Curabitur massa leo, egestas non ante ac, condimentum fringilla mauris. Curabitur auctor diam sit amet ligula eleifend, sit amet bibendum arcu mollis. Phasellus ultricies massa porttitor tristique maximus. Quisque eu blandit ante, in convallis odio. Duis condimentum, lorem nec accumsan ullamcorper, mauris magna lobortis justo, non imperdiet massa nibh ut turpis. Cras tincidunt suscipit justo sed pulvinar. Mauris ultrices eleifend cursus. In in mauris fermentum, volutpat ipsum vel, dapibus dolor. Sed consectetur at arcu ac malesuada. Ut blandit pulvinar ante, vel mattis erat sollicitudin eu. 
			</div>
		</div>
		<div class="w-4/12 pt-2 float-right">
			<div class="text-green-900">
				<ul class="font-bold">
					<li>Author</li>
					<li>Topic</li>
					<li>Created at</li>
					<li>Updated at</li>
					<li>314 contributors</li>
				</ul>
			</div>
		</div>
	{/each}
</div>