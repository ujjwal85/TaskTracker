<template>
  <v-container class="pt-6">
    <v-row dense>
      <v-col cols="12" md="6">
        <v-row dense class="">
          <v-col v-for="(card, index) in stats" :key="index" cols="12" sm="4" md="4">
            <v-card class="pa-6 text-center" style="width: 175px; height: 165px">
              <v-row align="center" justify="space-between">
                <span class="text-subtitle-1">{{ card.title }}</span>
                <v-icon size="20">mdi-chevron-down</v-icon>
              </v-row>
              <v-divider class="my-2"></v-divider>
              <h2 class="text-h4 font-weight-bold">{{ card.value }}</h2>
              <p class="blue--text text-caption">100% / period</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4 text-center">
          <h3 class="text-h5 font-weight-bold">Right Side Content</h3>
          <p>Yahan tum jo bhi content add karna chahte ho wo likh sakte ho.</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { title: 'book', value: '$566' },
        { title: 'pen', value: '$13' },
        { title: 'mobile', value: '$6' },
        { title: 'laptop', value: '$16' },
        { title: 'headphones', value: '$2.7' },
        { title: 'charger', value: '$1.3' },
      ],
    }
  },
}
</script>
