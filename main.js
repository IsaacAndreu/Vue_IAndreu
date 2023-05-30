const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Camiseta del F.C Barcelona',
            brand: 'Nike',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'Primera equipació', image: './assets/images/camisetabarça.jpg', quantity: 50 },
                { id: 2235, color: 'Segona equipació', image: './assets/images/barçarosa.jpg', quantity: 0 },
            ],
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' esta a la venta.'
            }
            return ''
        }

    }
})