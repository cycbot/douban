<template>
  <div class="tags">
    <template v-if="items">
      <ul>
        <li v-for="items in items">
          <a href="#">{{item.name ? item.name : item}}</a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'tags',
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data () {
      return {

      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .tags {

    li {
      display: inline-block;
      margin: 1rem 1rem 0 0;
      font-size: 1.5rem;
    }
    a {
      display: block;
      padding: 0 1.2rem;
      line-height: 2.8rem;
      font-size: 1.5rem;
      border-radius: 2.8rem;
      text-align: center;
      color: #494949;
      background: #f5f5f5;
    }
  }
</style>
