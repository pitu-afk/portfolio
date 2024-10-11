<template>
  <div>
    <h1>Mes projets</h1>
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        {{ project.name }} - {{ project.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectView',
  data() {
    return {
      projects: [
        { name: 'Projet 1', description: 'Description du projet 1' },
        { name: 'Projet 2', description: 'Description du projet 2' }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: #f5f5f5;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>
