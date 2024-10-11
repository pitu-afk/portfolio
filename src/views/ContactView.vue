<template>
  <div>
    <h1>Contactez-moi</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nom</label>
        <input v-model="name" id="name" type="text" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input v-model="email" id="email" type="email" required />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea v-model="message" id="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      // Traitement du formulaire, ex: envoyer un email ou sauvegarder les données
      alert(`Merci pour votre message, ${this.name}!`)
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
form {
  display: flex;
  flex-direction: column;
}
input,
textarea {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #369670;
}
</style>
