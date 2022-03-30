<template lang="pug">
v-app(:dark="false")
    v-main
        v-slide-y-transition(mode="out-in")
            Nuxt
</template>

<script>

export default {
    name: "Home",
    opts: {
        theme: {
            dark: false
        }
    },
    data() {
        return {
            goDark: false
        };
    },
    methods: {},
    computed: {
        drawerState: {
            get() {
                return this.$store.getters.drawerState;
            },
            set(v) {
                return this.$store.commit("navbar/toggleDrawerState", v);
            }
        }
    },
    components: { }
}
</script>