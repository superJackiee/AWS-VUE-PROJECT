<template>
  <div id="app">
  <q-layout view="hHh lpr fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <a class="mainlogo" target="_blank"
          href="https://github.com/bitcod3r/vue-aws-samsadsadsa-example">
          <q-icon clickable name="code" style="font-size: 32px;"  /></a>

          Welcome to the challenge app
          <span>ft. CallOfDuty API</span> 
        </q-toolbar-title>
      

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" overlay elevated>

      <q-list>
        <q-item-label header>Challenges</q-item-label>
        <q-item clickable tag="a" target="_blank" href="task1.png">
          <q-item-section avatar>
            <q-icon name="bug_report" />
          </q-item-section>
          <q-item-section>
            <q-item-label>There are broken unit tests on both front and back-end apps. 
              Find the problems and fix them so that the tests pass.</q-item-label>
            <q-item-label caption>[Click to open Screenshot]</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" target="_blank" href="task2.png">
          <q-item-section avatar>
            <q-icon name="engineering" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Serve the app open it in a browser. Note that there is an issue between 
              front-end and back-end. Fix that issue and capture a screenshot of the app fully 
              loaded in your browser.</q-item-label>
            <q-item-label caption>[Click to open Screenshot]</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" target="_blank" href="task3.png">
          <q-item-section avatar>
            <q-icon name="computer" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Implement a new back-end lambda. The lambda can do whatever you like, extra 
              points for creativity! Call the lambda from the front end and display the result.
              Style the app to make it look nice, and capture a second screenshot.</q-item-label>
            <q-item-label caption>[Click to open Screenshot]</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>


    <q-page-container>
      <div class="row justify-between">
          <q-parallax :height="1000">

              <template v-slot:media>
                <img src="~./assets/cod_bg.jpg">
              </template>

              <template v-slot:content="scope">
                <div
                  class="absolute column items-center"
                  :style="{
                    opacity: 0.55 + (1 - scope.percentScrolled) * 0.55,
                    top: (scope.percentScrolled * 60) + '%',
                    left: 0,
                    right: 0
                  }"
                >
                  <p content-class="bg-grey-2">{{ message }}</p>
                  <Leaderboard :gamers=gamers />
                </div>
              </template>
          </q-parallax>
      </div>
      
    </q-page-container>
  </q-layout>



  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import fetch from 'cross-fetch'
import Leaderboard from './components/Leaderboard.vue'

@Component({
  components: {
    Leaderboard,
  }
})
export default class App extends Vue {
  right = false;
  message = 'Loading...';
  gamers = {}; // Payload with COD Leaderboad gamers data 

  async mounted(): Promise<void> {
    
    const res = await fetch('http://localhost:3000/hello');
    if (res.ok) {
      const { message } = await res.json();
      this.message = message;
    }

    // Reaching out second Lambda
    const resCodApi = await fetch('http://localhost:3000/cod');
    if (resCodApi.ok) {
      const { message, data } = await resCodApi.json();
      console.log("COD endopoint is " + message);
      
      // console.log(data);
      const { platform, leaderboardType, entries } = data.codApiResponse;

      this.gamers =  {      
        platform : platform,
        type: leaderboardType,
        leaders: entries
      }
    }
  }

}
</script>

<style scoped>
.mainlogo:active{color: aliceblue;}
.mainlogo:visited{color: aliceblue;}
.mainlogo:link{color: aliceblue;}
.mainlogo:hover{color:yellow;}
</style>