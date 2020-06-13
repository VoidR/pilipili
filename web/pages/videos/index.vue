<template>
  <div class="pa-3">
    <h3>视频列表</h3>

    <v-row>
      <v-col v-for="item in videos" :key="item._id" md="3">
        <v-card :to="`/videos/${item._id}`" class="mx-auto" max-width="344">
          <v-card-text>
            <p class="display-1 text--primary">
              {{ item.name }}
            </p>
            <div class="text--primary">
              {{ item.detail }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">
              点击详情
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get('videos')
    return {
      videos: data.data
    }
  }
}
</script>

<style></style>
