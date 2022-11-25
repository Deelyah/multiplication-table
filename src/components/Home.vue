<template>
  <div class="container">
    <div>Welcome!</div>
    <p>Click to view the multiplication table</p>
    <router-link to="/multiply">View</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
a {
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid gray;
}
</style>
