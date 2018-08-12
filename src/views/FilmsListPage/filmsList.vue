<template>
  <div class="container">
    <div>
      <ul>
        <li @click="dplayer($event)">
          <img src="assets/logo.png" alt="">
          <div>标题</div>
          <div>电影描述</div>
        </li>
        <li>123</li>
      </ul>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="40%"
        center>
        <div class="player">
          <player :video-url="videoUrl" :state="state"></player>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="closeFilms()">确 定</el-button>
    </span>
      </el-dialog>
    </div>

  </div>
</template>

<script>
  import player from '@/components/Player'
  export default {
    components: {
      player
    },
    data () {
      return {
        centerDialogVisible: false,
        videoUrl: '',
        state: false
      }
    },
    methods: {
      dplayer () {
        this.centerDialogVisible = true
        this.state = false
        this.videoUrl = 'http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ'
      },
      closeFilms () {
        this.centerDialogVisible = false
        this.state = true
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
  .video-js .vjs-big-play-button{
    /*
    播放按钮换成圆形
    */
    height: 2em;
    width: 2em;
    line-height: 2em;
    border-radius: 1em;
  }
</style>
