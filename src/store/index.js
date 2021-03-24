import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: {},
    isStoreInitialized: false
  },
  mutations: {
    setCurrentCharacter (state, character) {
      state.character = character
    },
    setCharacters (state, characters) {
      state.characters = []
      characters.forEach(characterToAdd => {
        const character = {
          id: characterToAdd.id,
          name: characterToAdd.name,
          description: characterToAdd.description,
          thumbnail: characterToAdd.thumbnail
        }
        state.characters.push(character)
      })
      state.isStoreInitialized = true
    }
  },
  actions: {
  },
  modules: {
  }
})
