<template>
	<div class="flex flex-col min-h-screen">
		<TheHeader />
		<main class="flex-grow flex items-center justify-center">
			<slot />
		</main>
		<TheFooter />
	</div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<style scoped></style>
