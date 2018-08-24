
export default {
  // state = fornece automatica a store para a mutation
  // payload = é o que vamos fornecer de informação para essa mutations
  // existe uma convensão que mutations devem ser com letra maíuscula
  'CHANGE_USER' (state, payload) {
    state.user = payload
  }
}
