import { defineEventHandler, H3Event, setResponseHeader } from 'h3'
import { generateFakeProduct } from '~/utils/generate'

export default defineEventHandler((event: H3Event) => {
	setResponseHeader(
		event,
		'Cache-Control',
		's-maxage=3600, stale-while-revalidate'
	)

	const products = Array.from({ length: 12 }, () => generateFakeProduct())
	return { products }
})
