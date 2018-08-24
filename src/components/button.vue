<template>
    <div>
        <button
            :disabled="!hasUser"
            @click="mudarDados">Mudar dados do usuário</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    hasUser () {
      return this.$store.state.user.name !== ''
    }
  },
  methods: {
    ...mapActions(['changeUser']),

    mudarDados () {
      console.log('alguma coisa')
      const payload = {
        name: 'Outro nome',
        email: 'outroemail@teste.com',
        level: 'usuario-raso',
        city: 'Lugar Nenhum',
        state: 'AC'
      }
      this.changeUser(payload)
    }
  }
}
</script>

<style scoped>

</style>
