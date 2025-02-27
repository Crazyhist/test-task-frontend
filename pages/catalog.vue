<template>
	<div class="container mx-auto p-4">
		<h1 class="text-2xl font-bold mb-4">Каталог товаров</h1>
		<div v-if="isLoading" class="text-center">Загрузка...</div>
		<div v-else class="grid grid-cols-4 gap-4">
			<div
				v-for="item in products"
				:key="item.url"
				class="p-4 shadow-lg rounded-lg bg-white"
			>
				<div class="w-[200px] h-[200px] overflow-hidden rounded-md">
					<img
						:src="item.image"
						alt="Product"
						class="w-full h-full object-cover"
					/>
				</div>
				<h2 class="text-lg font-semibold mt-2 line-clamp-2">
					{{ item.name }}
				</h2>
				<p class="text-gray-500">{{ item.brand }}</p>
				<p class="text-pink-500 font-bold mt-2">{{ item.newPrice }} ₽</p>
				<p v-if="item.oldPrice" class="text-gray-400 line-through text-sm">
					{{ item.oldPrice }} ₽
				</p>
				<button class="bg-black text-white p-2 mt-2 rounded">В корзину</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const products = ref([])
const isLoading = ref(true)

onMounted(async () => {
	try {
		const response = await fetch('/api/products')
		const data = await response.json()
		products.value = data.products
	} catch (error) {
		console.error('Ошибка загрузки данных', error)
	} finally {
		isLoading.value = false
	}
})
</script>
