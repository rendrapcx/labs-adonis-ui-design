export default () => ({
  showModal: false,

  openModal() {
    this.showModal = true
  },

  closeModal() {
    this.showModal = false
  },
})
