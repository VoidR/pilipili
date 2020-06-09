<template>
  <div class="pa-3">
    <h3>视频播放界面</h3>
    <h3>{{ video.name }}</h3>
    <div>{{ episode }}</div>
    <v-select
      v-model="currentIndex"
      :items="video.episodes.map((v, i) => ({ text: v.index, value: i }))"
    ></v-select>
    <!-- <video
      controls
      preload="auto"
      style="width: 100%;height: auto"
      :poster="poster"
      src="{{episode.file}}"
      type="application/x-mpegURL"
    ></video> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    episode() {
      return this.video.episodes[this.currentIndex]
    }
  },
  async asyncData({ params, $axios }) {
    const { id } = params
    const video = await $axios.$get(`videos/${id}`, {
      params: {
        query: { populate: 'episodes' }
      }
    })
    return {
      id,
      video
    }
  }
}
</script>

<style></style>
