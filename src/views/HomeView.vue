<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import InfiniteLoading from 'vue-infinite-loading'
  import SubNav from '../components/SubNav.vue'
  import List from '../components/List.vue'
  export default {
    name: 'home-view',
    components: { SubNav, List, InfiniteLoading },
    data () {
      return {

      }
    },
    computed: {
      ...mapState({
        events: state => state.activities.events
      })
    },
    methods: {
      onInfinite () {
        setTimeout(() => {
          this.loadMore()
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, 1000)
      },
      ...mapActions([
        'loadMore',
        'getEvent'
      ])
    },
    created () {
      this.getEvent()
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
