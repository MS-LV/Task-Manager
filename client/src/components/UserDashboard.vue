<script setup>
// import UserHeader from './UserHeader.vue';
import UserDashboardSidebar from '@/components/UserDashboardSidebar.vue';


// const folders = [
//   {
//     subtitle: 'John Doe',
//     title: 'john@gmail.com',
//     img: '01.jpg'
//   }
// ]

</script>
<template>
  <!-- <UserHeader /> -->
  <!-- <v-main /> -->
  <v-app :style="{background: $vuetify.theme.themes.light.colors.primary}">
    <UserDashboardSidebar />
    <v-main>
      <v-container
        class="px-6 mt-2"
        fluid
      >
        <v-row>
          <v-col
            cols="12"
            sm="4"
          >
            <v-card
              color="#b49239"
              theme="dark"
              class="rounded"
              height="150"
            >
              <div class="flex flex-nowrap justify-between">
                <div>
                  <v-card-title class="text-h5 mt-10">
                    IPhone 15 Pro Max
                  </v-card-title>
                  <v-card-subtitle>1500$</v-card-subtitle>
                </div>
                <v-img
                  src="IPhome-14-pro.png"
                  absolute
                  top="0"
                  right
                  height="150"
                />
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-card
              color="#b49239"
              theme="dark"
              class="rounded"
              height="150"
            >
              <div class="flex flex-nowrap justify-between">
                <div>
                  <v-card-title class="text-h5 mt-10">
                    Galaxy S23 Ultra
                  </v-card-title>
                  <v-card-subtitle>1700$</v-card-subtitle>
                </div>
                <v-img
                  src="Galaxy-S23.png"
                  absolute
                  top="0"
                  right
                  height="150px"
                />
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-card
              color="#b49239"
              theme="dark"
              class="rounded"
              height="150"
            >
              <div class="flex flex-nowrap justify-between">
                <div>
                  <v-card-title class="text-h5 mt-10">
                    IPhone XR
                  </v-card-title>
                  <v-card-subtitle>600$</v-card-subtitle>
                </div>
                <v-img
                  src="IPhone-XR.png"
                  absolute
                  top="0"
                  right
                  height="150px"
                />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped></style>