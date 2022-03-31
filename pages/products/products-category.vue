<template lang="pug">
    v-container(fluid)
        v-btn#goBack(@click="$router.go(-1)" color="important"  aria-label="menu" name="menu" rounded small fab dark).ml-2.elevation-0.text-capitalize.font-family-raleway-bold.mr-2 
            v-icon fas fa-angle-left
        v-container#container-products.d-flex.flex-wrap.justify-center
            v-card(v-for="(product, key) in filterProducts" :key="key" class="flexcard ma-3 elevation-0" :width="$vuetify.breakpoint.smAndUp ? 250 : 140" :alt="product.name" height="auto")
                v-img(v-if="product.images" :src="`https://v3.tissini.app${product.images[0].url}`" width="100%" height="auto")
                    template(v-slot:placeholder)
                        v-row(class="fill-height ma-0" align="center" justify="center")
                            v-progress-circular( indeterminate color="important")
                div.pa-4
                    h3.text-caption.text-sm-h6.text-center.text-uppercase.font-family-raleway-bold {{product.name}}
                    p.mb-0.text-caption.text-sm-body-1.secondary--text {{product.category}}
                    h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product.price}}

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Products",
    layout: "default",
    middleware: ['authenticated'],
    head() {
        return {
            title: "Products",
            meta: [
              { hid: 'description', name: 'description', content: 'Products description' }
            ]
        }
    },
    data() {
        return {
            category: null
        }
    },
    methods: {
        
    },
    computed: {
        ...mapGetters({
            auth: 'user/auth',
            products: 'products/products',
            categories: 'products/categories',
        }),
        filterProducts() {
            return this.products.filter(i => i.category === this.category)     
        }
    },
    created() {
        this.$nextTick().then(() => {
            if(!this.auth) this.$router.push({path: '/'})
        })
    },
    mounted() {
        if(!this.$route.query.category) this.$router.push({path: '/user/home'})
        this.category = this.$route.query.category
    }
}
</script>
<style lang="scss">
.flexcard {
  align-self: flex-start;
}

.v-slide-group__prev, .v-slide-group__next {
    & > i {
        font-size: 30px !important;
    }

    .theme--light.v-icon {
        color: var(--v-important-base) !important;
    }

    .theme--light.v-icon.v-icon.v-icon--disabled {
        color: var(--v-important-base) !important;
    }
}

</style>
<style lang="scss" scoped>
    #container-categories {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: center;
        justify-content: center;


        .card-category {
            display: flex;
            height: auto;
            justify-content: center;

            .v-btn {
                position: absolute;
                bottom: 20px;
            }
        }
    }

    #goBack {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 10;
    }
</style>