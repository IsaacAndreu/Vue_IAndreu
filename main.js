const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Camiseta del F.C Barcelona',
            image: './assets/images/camisetabarça.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'Primera equipació', image: './assets/images/camisetabarça.jpg' },
                { id: 2235, color: 'Segona equipació', image: './assets/images/barçarosa.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        // solution
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        // solution
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})