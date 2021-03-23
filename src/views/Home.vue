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
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    CharacterCard
  },
  data () {
    return {}
  },
  beforeMount () {
    if (!this.isStoreInitialized) {
      axios.get('http://localhost:3000/api/v1/characters/')
        .then((response) => {
          if (response.status === 200) {
            this.populateCharacters(response.data)
          } else {
            // TODO
            console.log(response.status)
          }
        })
    }
  },
  computed: {
    ...mapState(['characters', 'isStoreInitialized'])
  },
  methods: {
    populateCharacters (charactersArray) {
      this.$store.commit('setCharacters', charactersArray)
    }
  }
}
</script>
