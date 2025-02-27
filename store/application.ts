import { defineStore } from 'pinia'

export interface Product {
	image: string
	newPrice: number
	oldPrice?: number
	brand: string
	name: string
	url: string
}

export const useCartStore = defineStore('cart', () => {
	const cart = ref<Product[]>([])

	// Подсчёт количества товаров
	const totalItems = computed(() => cart.value.length)

	return {
		cart,
		totalItems,
	}
})
