<template>
  <div class="pa-3">
    <h3>视频播放界面</h3>
    <h3>{{ video.name }}</h3>
    <div>{{ episode.file }}</div>
    <v-select
      v-model="currentIndex"
      :items="video.episodes.map((v, i) => ({ text: v.index, value: i }))"
    ></v-select>
    <section class="vueVideo">
      <div
        v-video-player:myVideoPlayer="playerOptions"
        class="video-player-box"
        :playsinline="playsinline"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @ready="playerReadied"
        @statechanged="playerStateChanged($event)"
      ></div>
    </section>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
  components: {},

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
  },
  data() {
    return {
      currentIndex: 0,
      playsinline: true
    }
  },
  computed: {
    episode() {
      return this.video.episodes[this.currentIndex]
    },
    playerOptions() {
      const opt = {
        // 播放器配置
        muted: false, // 是否静音
        language: 'zh-CN',
        // aspectRatio: '16:9',
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        controls: true,
        preload: 'auto', // 视频预加载
        fluid: true,
        sources: [
          {
            type: 'application/x-mpegURL',
            src: this.episode.file
          }
        ],
        notSupportedMessage: '此视频暂无法播放，请稍后再试'
      }
      return opt
    }
  },
  mounted() {},
  methods: {
    // 监听播放
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    // 监听暂停
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // 监听停止
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    // 监听加载完成
    onPlayerLoadeddata(player) {
      console.log('player Loadeddata!', player)
    },
    // 监听视频缓存等待
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    // 监听视频暂停后播放
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    // 监听视频播放时长更新
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // 监听状态改变
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // 监听播放器准备就绪
    playerReadied(player) {
      //   player.tech_.hls.xhr.beforeRequest = function(options) {
      //     const token = JSON.parse(localStorage.getItem('userInfo')).accessToken
      //     options.headers = {
      //       Accept: 'application/json, text/plain, */*',
      //       'Content-Type': 'application/json;charset=UTF-8',
      //       'Accept-Language': 'zh-CN,zh;q=0.9,hy;q=0.8,mn;q=0.7',
      //       Authorization: 'Bearer ' + token
      //     }
      //     return options
      //   }
    }
  }
}
</script>

<style></style>
