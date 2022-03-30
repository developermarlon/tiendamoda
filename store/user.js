export const state = () => ({
    auth: false,
    firstname: null,
    lastname: null,
    name: null,
    entitynumber: null,
    id: null,
    mobilephone: null,
    salesrep: null,
    store_name_active: null
})

export const getters = {
    auth: state => {
        return state.auth
    },
    user: state => {
        return state
    },
    firstname: state => {
        return state.firstname
    },
    lastname: state => {
        return state.lastname
    },
    name: state => {
        return state.state
    },
    entitynumber: state => {
        return state.entitynumber
    },
    id: state => {
        return state.state
    },
    mobilephone: state => {
        return state.mobilephone
    },
    salesrep: state => {
        return state.salesrep
    },
    store_name_active: state => {
        return state.store_name_active
    }
}

export const actions = {
    openSession({commit, state}, data){
        commit('openSession', data)
    },
    closeSession({commit, state}) {
        commit('closeSession')
    },
}

export const mutations = {
    openSession(state, data) {
        state.auth = true
        state.firstname = data.firstname
        state.lastname = data.lastname
        state.name = data.name
        state.entitynumber = data.entitynumber
        state.id = data.id
        state.mobilephone = data.mobilephone
        state.salesrep = data.salesrep
        state.store_name_active = data.store_name_active
    },
    closeSession(state) {
        this.$router.push({path: '/'})
        state.auth = false
        state.firstname = null
        state.lastname = null
        state.name = null
        state.entitynumber = null
        state.id = null
        state.mobilephone = null
        state.salesrep = null
        state.store_name_active = null
    }
}