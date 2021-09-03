<template>


  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="../assets/rank1.png">

      <q-list>
        <q-item>
          <q-item-section avatar><q-icon color="primary" name="person" /></q-item-section>
          <q-item-section><q-item-label>Username</q-item-label>
            <q-item-label caption>{{ gamer.username }}.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
        <q-item-section avatar><q-icon color="primary" name="medication" /></q-item-section>
          <q-item-section><q-item-label>Kills</q-item-label>
            <q-item-label caption>{{ gamer.values.kills }}.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
        <q-item-section avatar><q-icon color="primary" name="military_tech" /></q-item-section>
          <q-item-section><q-item-label>Level</q-item-label>
            <q-item-label caption>{{ gamer.values.level }}.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
        <q-item-section avatar><q-icon color="primary" name="track_changes" /></q-item-section>
          <q-item-section><q-item-label>Accuracy</q-item-label>
            <q-item-label caption>{{ gamer.values.accuracy }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
        <q-item-section avatar><q-icon color="primary" name="sports_score" /></q-item-section>
          <q-item-section><q-item-label>Score</q-item-label>
            <q-item-label caption>{{ gamer.values.score }}.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
        <q-item-section avatar><q-icon color="primary" name="medical_services" /></q-item-section>
          <q-item-section><q-item-label>Assists</q-item-label>
            <q-item-label caption>{{ gamer.values.assists }}.</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-card>
    </div>

</template>

<script>
  export default {
    name: 'Gamer',
    props: ['gamer'],
  }
</script>

<style scoped>
  h3 {
    font-weight: bold;
  }
</style>
