<template lang="pug">
v-layout.pa-0.container-appbar
    v-container.fluid.pa-0
        v-layout.justify-space-between.align-center.py-1
            h3#fullname.important--text.ml-4 {{user.name}}
            v-flex 
                v-layout.align-center.justify-end
                    v-flex.xs12.d-flex.justify-center.align-center

                    a(:href="`tel:${user.mobilephone}`" fab color="transparent" aria-label="menu" name="menu" x-small).ml-2.elevation-0.btn.mr-2
                        v-icon(style="font-size: 15px" color="important") fas fa-phone

                    v-dialog(v-model="dialogCloseSession" transition="dialog-top-transition" max-width="600")
                        template(v-slot:activator="{ on, attrs }")
                            v-btn(v-bind="attrs" v-on="on" color="important" aria-label="menu" name="menu" rounded small dark).ml-2.elevation-0.text-capitalize.font-family-raleway-bold.mr-2 Salir
                        template(v-slot:default="dialog")
                            v-card
                                v-toolbar(color="important" dark)
                                    h6.text-h5.font-family-raleway-bold.mr-2 ¿Quieres Salir?
                                v-card-text
                                    p.mt-3 Dándole un toque a este botón sales de la Tienda. Si quieres navegar en la Tienda utiliza las opciones de la parte inferior:
                                
                                    v-btn(color="secondary" small text @click="closeSession" style="font-size: 16px").elevation-0.text-capitalize.font-family-raleway-bold
                                        v-icon(style="font-size: 25px" color="important").mr-2 fas fa-credit-card
                                        div Carrito catalogo

                                    v-btn(color="secondary" small text @click="closeSession" style="font-size: 16px").elevation-0.text-capitalize.font-family-raleway-bold
                                        v-icon(style="font-size: 25px" color="important").mr-2 fas fa-home
                                        div Categorías
                                
                                v-card-actions(class="justify-end")
                                    v-btn(color="important" small text @click="closeSession").elevation-0.text-capitalize.font-family-raleway-bold Confirmo salir
                                    v-btn(color="important" rounded small dark @click="dialogCloseSession = false").elevation-0.text-capitalize.font-family-raleway-bold Continuar

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'Appbar',
    data() {
        return {
            dialogCloseSession: false
        }
    },
    computed: {
        ...mapGetters({
            user: 'user/user',
            auth: 'user/auth'
        })
    },
    methods: {
        ...mapActions({
            closeSession: 'user/closeSession',
        }),
        confirmCloseSession() {
            this.dialogCloseSession = true
        }
    },
    created() {
        this.$nuxt.$on('change-logo', (url) => {
            this.images.menu_icon = url
        })

        this.$nuxt.$on('change-button', (url) => {
            this.images.navigation_icon = url
        })
    },
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
.container-appbar {
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 100;

    #fullname {
        font-size: 1.5rem;
        font-family: 'Lobster';
        font-weight: bold;
    }

}


</style>