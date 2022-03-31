<template lang="pug">
    v-container
        v-slide-group(v-model="model" mandatory class="px-4" center-active show-arrows).mt-n3
            v-slide-item(v-for="categorie in categories" :key="categorie.id" v-slot="{ active, toggle }")
                v-card(:color="active ? 'important' : 'grey lighten-1'" class="flexcard ma-4 elevation-8" height="auto" width="200" @click="toggle").rounded-xl
                    v-img(:src="`https://v3.tissini.app${categorie.image}`" :alt="categorie.name" width="100%" height="auto" )
                        template(v-slot:placeholder)
                            v-row(class="fill-height ma-0" align="center" justify="center")
                                v-progress-circular( indeterminate color="important")
        
        v-img(:src="`https://v3.tissini.app/img/categories/multivendor/new-products.png`")    
            template(v-slot:placeholder)
                v-row(class="fill-height ma-0" align="center" justify="center")
                    v-progress-circular( indeterminate color="important")
        
        v-window(show-arrows)
            template(v-slot:prev="{ on, attrs }")
                v-btn(color="transparent" v-bind="attrs" v-on="on" small fab text style="font-size: 16px").elevation-0.text-capitalize.font-family-raleway-bold
                    v-icon(style="font-size: 25px" color="important").mr-2 fas fa-angle-left

            template(v-slot:next="{ on, attrs }")
                v-btn(color="transparent" v-bind="attrs" v-on="on" small fab text style="font-size: 16px").elevation-0.text-capitalize.font-family-raleway-bold
                    v-icon(style="font-size: 25px" color="important").mr-2 fas fa-angle-right
           
            v-window-item(v-for="(product, key) in randomProducts" :key="key")
                v-layout.justify-center.align-center.mb-10
                    div.d-flex.flex-wrap.container-products.justify-center
               
                        v-card(class="flexcard ma-4 elevation-15" :width="$vuetify.breakpoint.smAndUp ? 250 : 150" height="auto")
                            v-img(v-if="product[0].images[0] && product[0].images[0].url" :src="`https://v3.tissini.app${product[0].images[0].url}`" :alt="product[0].name" width="100%" height="auto")
                                template(v-slot:placeholder)
                                    v-row(class="fill-height ma-0" align="center" justify="center")
                                        v-progress-circular( indeterminate color="important")
                            div.pa-4
                                h3.text-caption.text-sm-h6.text-center.text-uppercase.font-family-raleway-bold {{product[0].name}}
                                p.mb-0.text-caption.text-sm-body-1.secondary--text {{product[0].category}}
                                h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product[0].price}}


                        v-card(class="flexcard ma-4 elevation-15" :width="$vuetify.breakpoint.smAndUp ? 250 : 150" height="auto")
                            v-img(v-if="product[1].images[0] && product[1].images[0].url" :src="`https://v3.tissini.app${product[1].images[0].url}`" :alt="product[0].name" width="100%" height="auto")
                                template(v-slot:placeholder)
                                    v-row(class="fill-height ma-0" align="center" justify="center")
                                        v-progress-circular( indeterminate color="important")
                            div.pa-4
                                h3.text-caption.text-sm-h6.text-center.text-uppercase.font-family-raleway-bold {{product[1].name}}
                                p.mb-0.text-caption.text-sm-body-1.secondary--text {{product[1].category}}
                                h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product[1].price}}


                        v-card(class="flexcard ma-4 elevation-15" :width="$vuetify.breakpoint.smAndUp ? 250 : 150" height="auto")
                            v-img(v-if="product[2].images[0] && product[2].images[0].url" :src="`https://v3.tissini.app${product[2].images[0].url}`" :alt="product[0].name" width="100%" height="auto")
                                template(v-slot:placeholder)
                                    v-row(class="fill-height ma-0" align="center" justify="center")
                                        v-progress-circular( indeterminate color="important")
                            div.pa-4
                                h3.text-caption.text-sm-h6.text-center.text-uppercase.font-family-raleway-bold {{product[2].name}}
                                p.mb-0.text-caption.text-sm-body-1.secondary--text {{product[2].category}}
                                h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product[2].price}}


                        v-card(class="flexcard ma-4 elevation-15" :width="$vuetify.breakpoint.smAndUp ? 250 : 150" height="auto")
                            v-img(v-if="product[3].images[0] && product[3].images[0].url" :src="`https://v3.tissini.app${product[3].images[0].url}`" :alt="product[0].name" width="100%" height="auto")
                                template(v-slot:placeholder)
                                    v-row(class="fill-height ma-0" align="center" justify="center")
                                        v-progress-circular( indeterminate color="important")
                            div.pa-4
                                h3.text-caption.text-sm-h6.text-center.text-uppercase.font-family-raleway-bold {{product[3].name}}
                                p.mb-0.text-caption.text-sm-body-1.secondary--text {{product[3].category}}
                                h4.mt-0.text-h5.important--text.font-family-raleway-bold {{product[3].price}}

        h1.text-center.font-family-lobster Categorias

        div#container-categories
            v-card(v-for="(category, key) in categories" :key="key" class="card-category ma-4 elevation-0" width="380" height="auto").rounded-xl
                v-img(v-if="category.image" :src="`https://v3.tissini.app${category.image}`" :alt="category.name" width="100%" height="auto").rounded-xl
                    template(v-slot:placeholder)
                        v-row(class="fill-height ma-0" align="center" justify="center")
                            v-progress-circular( indeterminate color="important")
                v-btn(rounded color="important" :to="{path: '/products/products-category', query: {category: category.category}}" dark :elevation="0").elevation-0.font-family-raleway-bold.text-capitalize 
                    div Leer Mas
                    v-icon(color="white").ml-2 fas fa-angle-right
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

.v-window__prev, .v-window__next{
    background: transparent !important;

    button {
        & > span {
            & > i {
                font-size: 50px !important;
            }
        }
    }
    
}   
</style>
<style lang="scss" scoped>
    #container-categories {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;


        .card-category {
            display: flex;
            height: auto;
            justify-content: center;
            box-shadow: 0px 15px 15px -10px rgba(0,0,0,0.3) !important;

            .v-btn {
                position: absolute;
                right: 20px;
                bottom: 20px;
            }
        }
    }
</style>
