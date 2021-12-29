const generateOptions = item => {
  const No = item.No || item.Id || item.value
  const Name = item.Name || item.text
  return { NO, Name, Id: No, value: No, text: Name }
}

export default {
  g_userName(state) {
    return state.user.name
  },
  g_userId(state) {
    return state.auth.id
  },
  g_userToken(state) {
    return state.auth.token
  },
}
