<template lang="pug">
  v-row(justify="center")
    div.central-block
        v-row(justify="center")
          template(v-for="comic in comics")
            comic-card(:comic="comic").ma-3
</template>

<script>
import ComicCard from '@/components/ComicCard.vue'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    ComicCard
  },
  data () {
    return {
      comics: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/v1/comics/' + this.character.id)
      .then((response) => {
        this.populateComics(response.data)
      })
  },
  computed: {
    ...mapState(['character'])
  },
  methods: {
    populateComics (comicsArray) {
      comicsArray.forEach(comics => {
        this.addCharacter(comics)
      })
    },
    addCharacter (comicsToAdd) {
      const comic = {
        name: comicsToAdd.title,
        description: comicsToAdd.description,
        thumbnail: comicsToAdd.cover
      }
      this.comics.push(comic)
    }
  }
}
</script>
