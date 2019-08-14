<template>
  <div id="app">
    <component
            :is="layout"
    >
      <router-view/>
    </component>
  </div>
</template>

<script>
  import mainLayout from '@/layouts/main'
  export default {
    name: 'App',
    data: () => ({

    }),
      computed: {
        layout() {
            // console.log(this.$route.meta.layout);
            return (this.$route.meta.layout || 'main') + '-layout';
        }
      },
      components: {
        mainLayout
      }
  };
</script>
