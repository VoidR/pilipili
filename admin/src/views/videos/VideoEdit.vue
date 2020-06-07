<template>
  <div>
    <h3>{{isNew ? '创建' : '编辑'}}视频</h3>
    <ele-form
      :form-data="data"
      :form-desc="fields"
      :request-fn="submit"
    ></ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class VideoEdit extends Vue {
  @Prop(String) id!:string;
  data = {};

  fields = {
    name: { label: "视频名称", type: "input" },
    cover: { label: "视频封面图", type: 'input' },
  };

  get isNew(){
    return !this.id//新增则没有ID
  }

  async fetch() {
    const res = await this.$http.get(`videos/${this.id}`);
    this.data = res.data;
  }

  async submit(data){
    console.log(data)

    const url = this.isNew ? `videos` : `videos/${this.id}`
    const method = this.isNew ? 'post' : 'put'
    await this.$http[method](url, data)
    this.$message.success('保存成功')
    this.data = {}
    this.$router.go(-1)
  }
  created() {
    !this.isNew && this.fetch();
  }
}
</script>

<style>
</style>