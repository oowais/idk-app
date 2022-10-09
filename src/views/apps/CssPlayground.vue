<template>
  <h1 class="mx-4 heading">
    CSS playground (Doesn't linaer gradient look nice)
  </h1>
  <br />
  <div class="d-flex justify-space-around">
    <v-card>
      <v-card-title>Auto snap on scroll</v-card-title>
      <div class="container">
        <div class="box1">1</div>
        <div class="box2">2</div>
        <div class="box3">3</div>
        <div class="box4">4</div>
        <div class="box5">5</div>
        <div class="box6">6</div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.container {
  width: 20rem;
  height: 20rem;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.container div {
  min-width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  scroll-snap-align: center;
}

.heading {
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
