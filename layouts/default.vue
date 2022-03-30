<template lang="pug">
v-app(:dark="setTheme")
    div
        NavigationAppbar
    
    v-main
        v-slide-y-transition(mode="out-in")
            Nuxt
</template>

<script>

export default {
    name: "Default",
    data() {
        return {
            goDark: false
        };
    },
    methods: {},
    watch: {
        $route() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    },
    computed: {
        drawerState: {
            get() {
                return this.$store.getters.drawerState;
            },
            set(v) {
                return this.$store.commit("navbar/toggleDrawerState", v);
            }
        },
        setTheme() {
            if (this.goDark == true) {
                return (this.$vuetify.theme.dark = true);
            }
            else {
                return (this.$vuetify.theme.dark = false);
            }
        }
    }
}
</script>
