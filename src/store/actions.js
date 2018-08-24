
export default {
  changeUser (context, payload) {
    // context é só uma nomenclatura para a action. o argumento é o state da store
    context.commit('CHANGE_USER', payload)
  }
}
