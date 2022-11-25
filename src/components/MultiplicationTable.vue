<template>
  <ul>
    <li v-for="(product, index) in products" :key="index">{{ product }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },

  methods: {
    //using recursion
    viaRecursion(n, x) {
      if (n < 13) {
        if (x < 13) {
          this.products.push(`${n * x}`);
          return this.viaRecursion(n, x + 1);
        } else {
          return this.viaRecursion(n + 1, (x = 1));
        }
      } else {
        return;
      }
    },

    //using loops
    viaLoops() {
      let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
          this.products.push(`${a[i] * b[j]}`);
        }
      }
    },
  },

  mounted() {
    this.viaRecursion(1, 1);
    // this.viaLoops();
  },
};
</script>

<style>
ul {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

li {
  flex: 1 1 8.3%;
  padding: 20px 0;
  list-style-type: none;
}
</style>
