<template>
<div>

  <v-app-bar app  color="#ffffff" >
    
    <v-col >
        <v-app-bar-nav-icon >
                       <v-img 
                       
            max-height="200"
            max-width="300"
          src="..\assets\logo.png"></v-img>
        </v-app-bar-nav-icon>
      </v-col>
      <v-col>
        <v-breadcrumbs :items="items">

        </v-breadcrumbs>
      </v-col>

      <v-col>
        <v-row>8800-495-67-38</v-row>
        <v-row>8800-495-67-38</v-row>
        <v-row>8800-495-67-38</v-row>
      </v-col>
  </v-app-bar>
</div>
</template>

<script>
export default {
  name: 'HeaderItem',
  data: () => ({
       items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
   
  }),
};
</script>
<style scoped lang="scss">

</style>
