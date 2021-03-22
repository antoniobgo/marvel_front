<template lang="pug">
  v-row(justify="center")
    div.central-block
        v-row(justify="center")
          character-card(:character="character").ma-3
</template>

<script>
// @ is an alias to /src
import CharacterCard from '@/components/CharacterCard.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    CharacterCard
  },
  data () {
    return {
      character: {},
      name: ''
    }
  },
  mounted () {
    // this.$store.commit('initializeStore')
    axios.get('http://localhost:3000/api/v1/characters/')
      .then((response) => {
        this.populateCharacters(response.data)
      })
      // debugger
    // debugger
  },
  methods: {
    populateCharacters (charactersArray) {
      const character = {
        name: charactersArray[1].name,
        description: charactersArray[1].description,
        thumbnail: charactersArray[1].thumbnail
      }
      this.character = character
    }
  }
}
</script>

<style scoped>
.central-block {
  width: 75vw;
}
</style>
