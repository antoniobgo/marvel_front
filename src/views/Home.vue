<template lang="pug">
  v-row(justify="center")
    div.central-block
        v-row(justify="center")
          template(v-for="character in characters")
            character-card(:character="character").ma-3
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    CharacterCard
  },
  data () {
    return {
      characters: []
    }
  },
  mounted () {
    // this.$store.commit('initializeStore')
    axios.get('http://localhost:3000/api/v1/characters/')
      .then((response) => {
        this.populateCharacters(response.data)
      })
  },
  methods: {
    populateCharacters (charactersArray) {
      charactersArray.forEach(character => {
        this.addCharacter(character)
      })
    },
    addCharacter (characterToAdd) {
      const character = {
        id: characterToAdd.id,
        name: characterToAdd.name,
        description: characterToAdd.description,
        thumbnail: characterToAdd.thumbnail
      }
      this.characters.push(character)
    }
  }
}
</script>
