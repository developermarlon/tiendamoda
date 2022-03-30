import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
const ls = new SecureLS({isCompression: false})

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
      paths: ['user', 'products'],
      storage: {
          getItem: key => ls.get(key),
          setItem: (key, value) => {
            // console.log(key)
            // console.log('=================================')
            // console.log(value)
            return ls.set(key, value)
          },
          removeItem: key => ls.remove(key)
      }
    })(store)
  })
}