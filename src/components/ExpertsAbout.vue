<template>
  <div class="mt-15">
    <v-row>
      <h1 class="text--anchor pb-5">О нас рассказывают эксперты</h1>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col md="6">
        <v-card>
          <video autoplay="autoplay" controls width="100%" loop muted>
            <source src="https://youtu.be/EgnNsNeLY9w" />
          </video>
          <v-card-title>
            <h2 class="black--text">О компании Максстор</h2>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card>
          <video
            autoplay="autoplay"
            controls
            width="100%"
            height="100%"
            loop
            muted
          >
            <source src="https://youtu.be/EgnNsNeLY9w" />
          </video>
          <v-card-title>
            <h2 class="black--text">О набивных стеллажах Максстор</h2>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ExpertsAbout",
};
</script>

<style scoped>
h1 {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 22px;
}
h2 {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 16px;
}
</style>