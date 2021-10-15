export const state = () => ({
  modal: {
    isShowModal: true,
    remember: false
  }
})

export const mutations = {
  toggleModal(state, payload) {

    state.modal = { ...state.modal, isShowModal: payload.modal, remember: payload.remember };
  }
}
export const getters = {
  getisShowModal(state) {
    return state.modal;
  }
}



