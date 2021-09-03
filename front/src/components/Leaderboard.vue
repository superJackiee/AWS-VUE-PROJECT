<template>
  <section>
    <div><strong class="text-h1"> Call of Duty Leaderboard</strong></div>
    <div><strong class="text-h3">Platform {{ gamers.platform }}  {{ gamers.type }}</strong></div>
    <div class="q-pa-md row items-start q-gutter-md">
      <Gamer :key="gamer.rank" v-for="gamer in gamers.leaders" :gamer="gamer" />
    </div>
  </section>
</template>

<script>
  import Gamer from './Gamer';
  export default {
    name: 'Leaderboard',
    components: { Gamer },
    props: ['gamers'],
  }
</script>
