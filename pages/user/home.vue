<template lang="pug">
    v-container
        v-slide-group(v-model="model" mandatory class="pa-4" center-active show-arrows)
            v-slide-item(v-for="categorie in categories" :key="categorie.id" v-slot="{ active, toggle }")
                v-card(:color="active ? 'important' : 'grey lighten-1'" class="flexcard ma-4 elevation-0" height="auto" width="200" @click="toggle")
                    v-img(:src="`https://v3.tissini.app${categorie.image}`" :alt="categorie.name" width="100%" height="auto")
        
        v-img(:src="`https://v3.tissini.app/img/categories/multivendor/new-products.png`")    

        v-window(show-arrows)
            template(v-slot:prev="{ on, attrs }")
                v-btn(color="transparent" v-bind="attrs" v-on="on" small fab text style="font-size: 16px").elevation-0.text-capitalize.font-family-raleway-bold
                    v-icon(style="font-size: 25px" color="important").mr-2 fas fa-angle-left

            template(v-slot:next="{ on, attrs }")
                v-btn(color="transparent" v-bind="attrs" v-on="on" small fab text style="font-size: 16px").elevation-0.text-capitalize.font-family-raleway-bold
                    v-icon(style="font-size: 25px" color="important").mr-2 fas fa-angle-right
            v-window-item(v-for="(product, key) in randomProducts" :key="key")

                v-layout.justify-center.align-center
                    div.d-flex.flex-wrap.container-products.justify-center
               
                        v-card(class="flexcard ma-4 elevation-0" width="250" height="auto")
                            v-img(v-if="product[0].images[0] && product[0].images[0].url" :src="`https://v3.tissini.app${product[0].images[0].url}`" :alt="product[0].name" width="100%" height="auto")
                            div.pa-4
                                h3.text-center.text-uppercase {{product[0].name}}
                                p.mb-0.text-body-1.secondary--text {{product[0].category}}
                                h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product[0].price}}


                        v-card(class="flexcard ma-4 elevation-0" width="250" height="auto")
                            v-img(v-if="product[1].images[0] && product[1].images[0].url" :src="`https://v3.tissini.app${product[1].images[0].url}`" :alt="product[0].name" width="100%" height="auto")
                            div.pa-4
                                h3.text-center.text-uppercase {{product[1].name}}
                                p.mb-0.text-body-1.secondary--text {{product[1].category}}
                                h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product[1].price}}


                        v-card(class="flexcard ma-4 elevation-0" width="250" height="auto")
                            v-img(v-if="product[2].images[0] && product[2].images[0].url" :src="`https://v3.tissini.app${product[2].images[0].url}`" :alt="product[0].name" width="100%" height="auto")
                            div.pa-4
                                h3.text-center.text-uppercase {{product[2].name}}
                                p.mb-0.text-body-1.secondary--text {{product[2].category}}
                                h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product[2].price}}


                        v-card(class="flexcard ma-4 elevation-0" width="250" height="auto")
                            v-img(v-if="product[3].images[0] && product[3].images[0].url" :src="`https://v3.tissini.app${product[3].images[0].url}`" :alt="product[0].name" width="100%" height="auto")
                            div.pa-4
                                h3.text-center.text-uppercase {{product[3].name}}
                                p.mb-0.text-body-1.secondary--text {{product[3].category}}
                                h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product[3].price}}

        div#container-categories
            v-card(v-for="(category, key) in categories" :key="key" class="card-category ma-4 elevation-0" width="380" height="auto")
                v-img(v-if="category.image" :src="`https://v3.tissini.app${category.image}`" :alt="category.name" width="100%" height="auto").rounded-xl
                v-btn(rounded color="important" :to="{path: '/products/products-category', query: {category: category.category}}" dark).font-family-raleway-bold.text-capitalize Leer Mas
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Home",
    layout: "default",
    middleware: ['authenticated'],
    head() {
        return {
            title: "Home",
            meta: [
              { hid: 'description', name: 'description', content: 'Home description' }
            ]
        }
    },
    data() {
        return {
            model: null
        }
    },
    methods: {
        
    },
    computed: {
        ...mapGetters({
            auth: 'user/auth',
            categories: 'products/categories',
            products: 'products/products',
        }),
        randomProducts() {
            let cards = new Array()
            for (let i = 0; i < 10; i++) {
                let products = new Array()
                for (let i = 0; i < 4; i++) products.push(this.products[Math.floor(Math.random()*(this.products.length))])
                cards.push(products)
            }
            return cards       
        }
    },
    created() {
        this.$nextTick().then(() => {
            if(!this.auth) this.$router.push({path: '/'})
        })
    },
    mounted() {
        
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
</style>
