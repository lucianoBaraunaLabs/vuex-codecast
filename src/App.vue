<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Welcome vue 2</h1>
    <h4>{{user}} {{outraCoisa}}</h4>
    <hr>
    <ul>
      <li>{{ listItens }}</li>
    </ul>
    <cc-users />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CcUsers from './components/users/main'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'VuexCodecastExemplo',
  components: {
    HelloWorld,
    CcUsers
  },
  mounted () {
    const payload = {
      name: 'Luciano Baráuna',
      email: 'baraunaluciano@gmail.com',
      level: 'admin',
      city: 'Rio de Janeiro',
      state: 'RJ'
    }

    setTimeout(() => {
      // this.$store.commit('CHANGE_USER', payload) aqui era utilizano o mutation
      // this.$store.dispatch('changeUser', payload) // dispatch pq estamos usando uma action
      this.changeUser(payload) // agora o action está acessível por conta de mapActions
    }, 3000)
  },
  computed: {
    // user () {
    //   const { name, email } = this.$store.state.user

    //   // return 'O usuário logado é X e possui o email Y.'
    //   // return `O usuário logado é ${this.$store.state.user.name}
    //   // e possui o email ${this.$store.state.user.email}.`
    //   return `O usuário logado é ${name}
    //   e possui o email ${email}.`
    // }
    ...mapState({
      // mapState me dá acesso aos state da aplicação e faz com que não tenha
      // a necessidade de utilizar this.$store
      user: state => {
        const { name, email } = state.user
        return `O usuário logado é ${name} e possui o email ${email}.`
      }
    }),

    outraCoisa () {
      return 'Outra coisa, mais uma info'
    },

    listItens () {
      return this.$store.state.Categories.list[0]
    }
  },
  methods: {
    ...mapActions(['changeUser'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
