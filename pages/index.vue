<template lang="pug">
    v-container(fluid)#general-container-login.fill-height.align-center.justify-center.pt-16
        div.d-flex.flex-column.align-center.wrap

            nuxt-link(to="/").mb-0.mt-16
                nuxt-img( provider="cloudinary" fit="cover" :src="'/q_auto:best/'+'v1648630571/tiendamoda/home/icon_home_f5rle9.png'" format="png" width="150")

            h3.mt-4.mb-10 Ingresa el número de teléfono </br>
                | de tu asesora independiente.

            v-text-field(v-format-tel="form.telephone" ref="telephone" :rules="[rules.min, rules.validatePhone]" label="Correo" max=13 outline filled dark).mb-4.font-family-raleway-regular
                v-icon(slot="append" color="white") fas fa-telephone

            <v-progress-circular :width="3"  v-visible="loadingRequest" color="#da3368" indeterminate></v-progress-circular>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Login",
    layout: "login",
    middleware: ['unauthenticated'], 
    head() {
        return {
            title: "Login",
            meta: [
              { hid: 'description', name: 'description', content: 'Login description' }
            ]
        }
    },
    data() {
        return {
            form: {
                telephone: null
            },
            maximumPhoneCharacters: 12,
            errorNumber: false,
            rules: {
                min: v => (v && v.length >= this.maximumPhoneCharacters) ? true : 'Min 10 dígitos',
                validatePhone: telephone => this.errorNumber ? this.errorNumber : true
            },
            validatePhone: false,
            loadingRequest: false
        }
    },
    watch: {
        'form.telephone': async function(v) {
            if(v.length >= this.maximumPhoneCharacters) {
                try {
                    if(v.length > this.maximumPhoneCharacters) this.form.telephone = v.slice(0, v.length - 1)
                    this.loadingRequest = true
                    const resultUser = await this.$axios.post(`/login/client`,
                    {
                        mobilephone: this.form.telephone,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': null
                        }
                    })
                    
                    if(this.categories.length === 0) this.setCategories(resultUser.data.categories)  

                    if(this.products.length === 0) {
                        const resultProducts = await this.$axios.get(`/ipaper/products/searchall`)
                        this.setProducts(resultProducts.data.products)
                    }

                    this.openSession(resultUser.data.customer)
                    this.$router.push({path: '/user/home'})

                }catch(error) {
                    console.log(error)
                    this.errorNumber = 'Este número no es valido o no está registrado.'
                    this.$refs.telephone.validate()
                }finally {
                    this.loadingRequest = false
                }
            }
        } 
    },
    methods: {
        ...mapActions({
            openSession: 'user/openSession',
            setCategories: 'products/setCategories',
            setProducts: 'products/setProducts'
        }),
    },
    computed: {
        ...mapGetters({
            auth: 'user/auth',
            categories: 'products/categories',
            products: 'products/products',
        })
    },
    created() {
        this.$nextTick().then(() => {
            if(this.auth) this.$router.push({path: '/user/home'})
        })
    }
}//7865470213
</script>

<style lang="scss">
.v-text-field {
    width: 100%;

    .v-input__control {
        .v-label {
            color: #fff;
            font-weight: 600;
        }
        .v-input__slot {
            border: 2px solid #ffff;
        }

        input {
            font-size: 25px;
            font-weight: 100;
            font-family: 'Oswald';
        }
    }
    
}
</style>

<style lang="scss" scoped>
$background: $baseUrlCloudinary+"/e_saturation:20/v1648596652/tiendamoda/home/login-desktop.695c98cc_fmzhf7.jpg";

#general-container-login {
  background: url($background);
  background-position: center top;
  background-size: cover;
  height: 100vh;

  & > div {
      width: 100%;

      & > h3 {
          text-align: center;
          color: #fff;
          font-size: 18px;
          font-weight: 600;
      }
  }
}

@media screen and (min-width: 960px) {
  #general-container-login {
    & > div {
        max-width: 500px;
    }
  }
}
</style>
