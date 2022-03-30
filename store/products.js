export const state = () => ({
    categories: [],
    products: [],
})

export const getters = {
    categories: state => {
        return state.categories
    },
    products: state => {
        return state.products
    }
}

export const actions = {
    setCategories({commit, state}, data){
        commit('setCategories', data)
    },
    setProducts({commit, state}, data){
        commit('setProducts', data)
    },
}

export const mutations = {
    setCategories(state, data) {
        const clearCategories = data.reduce((acc, item) => {
            let findCategory = acc.filter(i => i.name === item.name)
            if(findCategory.length === 0) acc.push(item)
            return acc
        }, [])
        state.categories = clearCategories
    },
    setProducts(state, data) {
        state.products = data
    }
}