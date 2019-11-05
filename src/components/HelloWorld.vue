<template>
  <div>
    <!-- <el-row  class="row-bg" justify="start"> -->
    <el-col :span="11">
      <iframe frameborder="0" width="830" height="530" scrolling="yes" :src="src"></iframe>

    </el-col>
    <div>加密货币</div>
    <el-row type="flex"  class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
    </el-row>
    <div>十年债卷</div>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5" v-for="(ids,index) in bonds" :key="index">
        <div style="width:200px;height:50px;border:1px solid #000" :id="ids"></div>
      </el-col>
      <!-- <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div> -->
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" id="23778"></div>
      </el-col>
    </el-row>
    <div>指数</div>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
    </el-row>
    <div>商品</div>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000"></div>
      </el-col>
    </el-row>
    <el-row  class="row-bg" justify="start">
      <el-col :span="24">
          <div>新兴市场新闻</div>
          <div style="width:830px;height:250px;border:1px solid #000">
            <ul>
                  <li></li>
            </ul>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                src: 'https://www.jin10.com/example/jin10.com.html?fontSize=14px&theme=white',
                newNews: null,
                bonds: [23705, 23901, 23693, 23738, 23673],
                ws: null
            }
        },
        mounted() {
            this.initWebSocket()
        },
        destroyed: function() {
            this.websocketclose()
        },
        methods: {
            initWebSocket() {
                const wsuri = process.env.WS_API;
                this.ws = new WebSocket(wsuri);
                this.ws.onopen = this.websocketonopen;
                this.ws.onmessage = this.websocketonmessage;
                this.ws.onerror = this.websocketonerror;
                this.ws.onclose = this.websocketclose;
            },
            websocketonopen() {
                this.ws.send('["{\\\"_event\\\":\\\"bulk-subscribe\\\",\\\"tzID\\\":28,\\\"message\\\":\\\"pid-961728:%%pid-8849:%%pid-8910:%%pid-8831:%%pid-8853:%%pid-8826:%%pid-8838:%%pid-171:%%pid-20:%%pid-8884:%%pid-178:%%pid-8839:%%pid-8873:%%pid-940801:%%pid-942630:%%pid-44486:%%pid-179:%%pid-40820:%%pid-23738:%%pid-23778:%%pid-23673:%%pid-23901:%%pid-23693:%%pid-23705:%%pidExt-961728:%%pidExt-8849:%%pidExt-8910:%%pidExt-8831:%%pidExt-8853:%%pidExt-8826:%%pidExt-8838:%%pidExt-171:%%pidExt-20:%%pidExt-8884:%%pidExt-178:%%pidExt-8839:%%pidExt-8873:%%pidExt-940801:%%pidExt-942630:%%pidExt-44486:%%pidExt-179:%%pidExt-40820:%%pidExt-23738:%%pidExt-23778:%%pidExt-23673:%%pidExt-23901:%%pidExt-23693:%%pidExt-23705:\\\"}"]')
                    // setInterval(this.hearbeat,15000);
            },
            websocketonmessage(e) {
                if (e.data.split("::").length > 1) {
                    // console.log(JSON.parse(e.data.split("::")[1].replace(/\\/g,"").split('"}"]')[0]))
                }
            },
            websocketonerror(e) {

            },
            websocketclose(e) {
                this.ws.close()
                console.log("connection close")
            },
            hearbeat() {
                this.ws.send('["{\\\"_event\\\":\\\"heartbeat\\\",\\\"data\\\":\\\"h\\\"}"]')
            }
        }
    }
</script>


<style scoped>
    .under_layer {
        width: 830px;
        height: 200px;
        overflow: auto;
        float: left;
        margin: 5px;
        border: none;
    }
</style>