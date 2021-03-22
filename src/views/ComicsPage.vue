<template lang="pug">
  v-row(justify="center")
    div.central-block
        v-row(justify="center")
          template(v-for="comic in comics")
            character-card(:comic="comic").ma-3
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
      comics: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/v1/comics/')
      .then((response) => {
        this.populateComics(response.data)
      })
  },
  methods: {
    populateComics (comicsArray) {
      comicsArray.forEach(comics => {
        this.addCharacter(comics)
      })
    },
    addCharacter (comicsToAdd) {
      const comic = {
        name: comicsToAdd.name,
        description: comicsToAdd.description,
        thumbnail: comicsToAdd.thumbnail
      }
      this.comics.push(comic)
    }
  }
}
</script>