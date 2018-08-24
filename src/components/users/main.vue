<template>
    <div>
        email: {{email}}
        <p>Localidade: {{ localidade }}</p>
        <cc-button></cc-button>
    </div>
</template>

<script>
import CcButton from '../button.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    CcButton
  },
  computed: {
    ...mapGetters(['localidade']),
    email () {
    //   return this.$store.state.user.email
      return this.$store.state.user.email
    }
    // localidade () {
    //   return `Este usuário mora em ${this.$store.getters.localidade}`
    // }
  }
}
</script>

<style scoped>

</style>
