<template>
  <div>
    <!-- <el-row  class="row-bg" justify="start"> -->
    <el-col :span="11">
      <iframe frameborder="0" width="830" height="530" scrolling="yes" :src="src"></iframe>
    </el-col>
    <div>加密货币</div>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="BTC != null"
          :class="BTC.rise_fall_value >0 ? 'up headerBox': 'down headerBox'">
          <h4>BTC</h4>
          <h4>{{ BTC.last_price }} &#12288; {{BTC.rise_fall_value}} &#12288;
            {{ (BTC.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ BTC.open}} &#12288; {{ BTC.low }} &#12288;
            {{BTC.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>BTC</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="ETH != null"
          :class="ETH.rise_fall_value >0 ? 'up headerBox': 'down headerBox'">
          <h4>ETH</h4>
          <h4>{{ ETH.last_price }} &#12288; {{ETH.rise_fall_value}} &#12288;
            {{ (ETH.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ ETH.open}} &#12288; {{ ETH.low }} &#12288;
            {{ETH.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>ETH</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="EOS != null"
          :class="EOS.rise_fall_value >0 ? 'up headerBox ': 'down headerBox'">
          <h4>EOS</h4>
          <h4>{{ EOS.last_price }} &#12288; {{EOS.rise_fall_value}} &#12288;
            {{ (EOS.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ EOS.open}} &#12288; {{ EOS.low }} &#12288;
            {{EOS.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>EOS</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="OKB != null"
          :class="OKB.rise_fall_value >0 ? 'up headerBox ': 'down headerBox'">
          <h4>OKB</h4>
          <h4>{{ OKB.last_price }} &#12288; {{OKB.rise_fall_value}} &#12288;
            {{ (OKB.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ OKB.open}} &#12288; {{ OKB.low }} &#12288;
            {{OKB.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>OKB</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="LINK != null"
          :class="LINK.rise_fall_value >0 ? 'up headerBox ': 'down headerBox'">
          <h4>LINK</h4>
          <h4>{{ LINK.last_price }} &#12288; {{LINK.rise_fall_value}} &#12288;
            {{ (LINK.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ LINK.open}} &#12288; {{ LINK.low }} &#12288;
            {{LINK.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>LINK</h4>
        </div>
      </el-col>
    </el-row>
    <div>十年债卷</div>
    <el-row type="flex" class="row-bg" justify="start">
      <!-- <el-col :span="5" v-for="(item,index) in bonds" :key="index"> -->
      <el-col :span="5">
        <!-- <div style="width:200px;height:50px;border:1px solid #000" :id="item.id" v-if="bondsdata !=null":class="bondsdata.pc > 0 ?'up headerBox ': 'down headerBox'"> -->
        <div style="width:200px;height:50px;border:1px solid #000" v-if="mTen !=null"
          :class="mTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>美十</h4>
          <h4>{{ mTen.last}} &#12288; {{mTen.pc}} &#12288;
            {{ mTen.pcp}} <br> {{ mTen.low }} &#12288;
            {{mTen.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>美十</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="jTen !=null"
          :class="jTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>日十</h4>
          <h4>{{ jTen.last}} &#12288; {{jTen.pc}} &#12288;
            {{ jTen.pcp}} <br> {{ jTen.low }} &#12288;
            {{jTen.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>日十</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="dTen !=null"
          :class="dTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>德十</h4>
          <h4>{{ dTen.last}} &#12288; {{dTen.pc}} &#12288;
            {{ dTen.pcp}} <br> {{ dTen.low }} &#12288;
            {{dTen.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>德十</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="yTen !=null"
          :class="yTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4> 意十</h4>
          <h4>{{ yTen.last}} &#12288; {{yTen.pc}} &#12288;
            {{ yTen.pcp}} <br> {{ yTen.low }} &#12288;
            {{yTen.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4> 意十</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="yiTen !=null"
          :class="yiTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4> 英十</h4>
          <h4>{{ yiTen.last}} &#12288; {{yiTen.pc}} &#12288;
            {{ yiTen.pcp}} <br> {{ yiTen.low }} &#12288;
            {{yiTen.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4> 英十</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="fTen !=null"
          :class="fTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>法十</h4>
          <h4>{{ fTen.last}} &#12288; {{fTen.pc}} &#12288;
            {{ fTen.pcp}} <br> {{ fTen.low }} &#12288;
            {{fTen.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>法十</h4>
        </div>
      </el-col>
    </el-row>
    <div>指数</div>
    <el-row type="flex" class="row-bg" justify="start">
      <!-- <el-col :span="5" v-for="(item,index) in aIndex" :key="index"> -->
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="DJ !=null"
          :class="DJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>DJ30</h4>
          <h4>{{ DJ.last}} &#8194; {{DJ.pc}}&#8194; {{ DJ.pcp}} <br> {{ DJ.low }}&#8194; {{DJ.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>DJ30</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="NDSQ !=null"
          :class="NDSQ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>NDSQ</h4>
          <h4>{{ NDSQ.last}} &#8194; {{NDSQ.pc}} &#8194;
            {{ NDSQ.pcp}} <br> {{ NDSQ.low }}&#8194;
            {{NDSQ.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>NDSQ</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="SPX !=null"
          :class="SPX.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>SPX</h4>
          <h4>{{ SPX.last}} &#8194; {{SPX.pc}} &#8194;
            {{ SPX.pcp}} <br> {{ SPX.low }}  &#8194;;
            {{SPX.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>SPX</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="JPN !=null"
          :class="JPN.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>JPN</h4>
          <h4>{{ JPN.last}} &#8194; {{JPN.pc}}  &#8194;
            {{ JPN.pcp}} <br> {{ JPN.low }} &#8194;
            {{JPN.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>JPN</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="DAX !=null"
          :class="DAX.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>DAX</h4>
          <h4>{{ DAX.last}} &#8194; {{DAX.pc}} &#8194;
            {{ DAX.pcp}} <br> {{ DAX.low }}  &#8194;
            {{DAX.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>DAX</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="FRA !=null"
          :class="FRA.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>FRA</h4>
          <h4>{{ FRA.last}} &#8194; {{FRA.pc}}  &#8194;
            {{ FRA.pcp}} <br> {{ FRA.low }} &#8194;
            {{FRA.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>FRA</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="UK !=null"
          :class="UK.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>UK</h4>
          <h4>{{ UK.last}} &#8194; {{UK.pc}}  &#8194;
            {{ UK.pcp}} <br> {{ UK.low }}  &#8194;
            {{UK.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>UK</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="AUS !=null"
          :class="AUS.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>AUS</h4>
          <h4>{{ AUS.last}}  &#8194;{{AUS.pc}}  &#8194;
            {{ AUS.pcp}} <br> {{ AUS.low }} &#8194;
            {{AUS.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>AUS</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="UpIn !=null"
          :class="UpIn.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>上证指数</h4>
          <h4>{{ UpIn.last}} &#8194; {{UpIn.pc}}  &#8194;
            {{ UpIn.pcp}} <br> {{ UpIn.low }}  &#8194;
            {{UpIn.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>上证指数</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="Sin !=null"
          :class="Sin.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>深证指数</h4>
          <h4>{{ Sin.last}} &#8194; {{Sin.pc}} &#8194;
            {{ Sin.pcp}} <br> {{ Sin.low }} &#8194;;
            {{Sin.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>深证指数</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="lshen !=null"
          :class="lshen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>沪深300</h4>
          <h4>{{ lshen.last}}  &#8194; {{lshen.pc}}  &#8194;
            {{ lshen.pcp}} <br> {{ lshen.low }}  &#8194;
            {{lshen.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>沪深300</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="hshen !=null"
          :class="hshen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>恒生指数</h4>
          <h4>{{ hshen.last}}  &#8194; {{hshen.pc}}  &#8194;
            {{ hshen.pcp}} <br> {{ hshen.low }}  &#8194;
            {{hshen.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>恒生指数</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="China !=null"
          :class="China.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>富时50指数</h4>
          <h4>{{ China.last}} &#8194; {{China.pc}}  &#8194;
            {{ China.pcp}} <br> {{ China.low }}  &#8194;
            {{China.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>富时50指数</h4>
        </div>
      </el-col>
    </el-row>
    <div>商品</div>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="Ton !=null"
          :class="Ton.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>铜</h4>
          <h4>{{ Ton.last}} &#12288; {{Ton.pc}} &#12288;
            {{ Ton.pcp}} <br> {{ Ton.low }} &#12288;
            {{Ton.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>铜</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="boj !=null"
          :class="boj.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>铂金</h4>
          <h4>{{ boj.last}} &#12288; {{boj.pc}} &#12288;
            {{ boj.pcp}} <br> {{ boj.low }} &#12288;
            {{boj.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>铂金</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="Oil !=null"
          :class="Oil.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>原油</h4>
          <h4>{{ Oil.last}} &#12288; {{Oil.pc}} &#12288;
            {{ Oil.pcp}} <br> {{ Oil.low }} &#12288;
            {{Oil.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>原油</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="RMB !=null"
          :class="RMB.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>RMB</h4>
          <h4>{{ RMB.last}} &#12288; {{RMB.pc}} &#12288;
            {{ RMB.pcp}} <br> {{ RMB.low }} &#12288;
            {{RMB.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>RMB</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:50px;border:1px solid #000" v-if="Vix !=null"
          :class="Vix.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>恐慌</h4>
          <h4>{{ Vix.last}} &#12288; {{Vix.pc}} &#12288;
            {{ Vix.pcp}} <br> {{ Vix.low }} &#12288;
            {{Vix.high}}</h4>
        </div>
        <div style="width:200px;height:50px;border:1px solid #000" v-else>
          <h4>恐慌</h4>
        </div>
      </el-col>
    </el-row>
    <el-row class="row-bg" justify="start">
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
                // bonds: [{
                //     "id": "23705",
                //     "name": "美十"
                // }, {
                //     "id": "23901",
                //     "name": "日十"
                // }, {
                //     "id": "23693",
                //     "name": "德十"
                // }, {
                //     "id": "23738",
                //     "name": "意十"
                // }, {
                //     "id": "23673",
                //     "name": "英十"
                // }],
                // aIndex: [{
                //     "name": "DJ30",
                //     "id": "8873"
                // }, {
                //     "name": "NDSQ100",
                //     "id": "20"
                // }, {
                //     "name": "SPX500",
                //     "id": "8839"
                // }, {
                //     "name": "JPN225",
                //     "id": "178"
                // }, {
                //     "name": "DAX",
                //     "id": "8826"
                // }],
                // nIndex: [{
                //     "name": "FRA40",
                //     "id": "8853"
                // }, {
                //     "name": "UK100",
                //     "id": "8838"
                // }, {
                //     "name": "AUS200",
                //     "id": "171"
                // }, {
                //     "name": "上证指数",
                //     "id": "40820"
                // }, {
                //     "name": "深证指数",
                //     "id": "942630"
                // }],
                // iIndex: [{
                //     "name": "沪深300",
                //     "id": "94080"
                // }, {
                //     "name": "恒生指数",
                //     "id": "179"
                // }, {
                //     "name": "China50",
                //     "id": "44486"
                // }],
                // sIndex: [{
                //     "name": "铜",
                //     "id": "8831"
                // }, {
                //     "name": "铂金",
                //     "id": "8910"
                // }, {
                //     "name": "WTI",
                //     "id": "8849"
                // }, {
                //     "name": "离岸人民币",
                //     "id": "961728"
                // }, {
                //     "name": "VIX",
                //     "id": "8884"
                // }],
                mTen: null,
                jTen: null,
                dTen: null,
                yTen: null,
                yiTen: null,
                fTen: null,
                BTC: null,
                ETH: null,
                EOS: null,
                OKB: null,
                DJ: null,
                NDSQ: null,
                SPX: null,
                JPN: null,
                DAX: null,
                FRA: null,
                UK: null,
                AUS: null,
                UpIn: null,
                Sin: null,
                lshen: null,
                hshen: null,
                China: null,
                Ton: null,
                boj: null,
                Oil: null,
                RMB: null,
                Vix: null,
                LINK: null,
                bondsdata: null,
                data: {},
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
                const csuri = process.env.CY_API;
                this.ws = new WebSocket(wsuri);
                this.cs = new WebSocket(csuri);
                this.cs.onopen = this.csonopen;
                this.cs.onmessage = this.csonmessage;
                this.cs.onerror = this.csonerror;
                this.cs.onclose = this.csclose;
                this.ws.onopen = this.websocketonopen;
                this.ws.onmessage = this.websocketonmessage;
                this.ws.onerror = this.websocketonerror;
                this.ws.onclose = this.websocketclose;
            },
            websocketonopen() {
                this.ws.send('["{\\\"_event\\\":\\\"bulk-subscribe\\\",\\\"tzID\\\":28,\\\"message\\\":\\\"pid-7814:%%pid-7807:%%pid-7801:%%pid-7803:%%pid-7808:%%pid-7813:%%pid-7802:%%pid-7800:%%pid-7805:%%pid-961728:%%pid-8849:%%pid-8910:%%pid-8831:%%pid-8884:%%pid-940801:%%pid-942630:%%pid-44486:%%pid-40820:%%pid-23738:%%pid-23778:%%pid-23673:%%pid-23901:%%pid-23693:%%pid-23705:%%pidExt-7814:%%pidExt-7807:%%pidExt-7801:%%pidExt-7803:%%pidExt-7808:%%pidExt-7813:%%pidExt-7802:%%pidExt-7800:%%pidExt-7805:%%pidExt-961728:%%pidExt-8849:%%pidExt-8910:%%pidExt-8831:%%pidExt-8884:%%pidExt-940801:%%pidExt-942630:%%pidExt-44486:%%pidExt-40820:%%pidExt-23738:%%pidExt-23778:%%pidExt-23673:%%pidExt-23901:%%pidExt-23693:%%pidExt-23705:\\\"}"]');
                setInterval(this.hearbeat, 15000);
            },
            websocketonmessage(e) {
                if (e.data.split("::").length > 1) {
                    this.bondsdata = JSON.parse(e.data.split("::")[1].replace(/\\/g, "").split('"}"]')[0])
                        // console.log(JSON.parse(e.data.split("::")[1].replace(/\\/g, "").split('"}"]')[0]))
                    switch (this.bondsdata.pid) {
                        case "23705":
                            this.mTen = null;
                            this.mTen = this.bondsdata;
                            break;
                        case "23901":
                            this.jTen = null;
                            this.jTen = this.bondsdata;
                            break;
                        case "23693":
                            this.dTen = null;
                            this.dTen = this.bondsdata;
                            break;
                        case "23738":
                            this.yTen = null;
                            this.yTen = this.bondsdata;
                            break;
                        case "23673":
                            this.yiTen = null;
                            this.yiTen = this.bondsdata;
                            break;
                        case "23778":
                            this.fTen = null;
                            this.fTen = this.bondsdata;
                            break;
                        case "7805":
                            this.DJ = null;
                            this.DJ = this.bondsdata;
                            break
                        case "7800":
                            this.NDSQ = null;
                            this.NDSQ = this.bondsdata;
                            break
                        case "7802":
                            this.SPX = null;
                            this.SPX = this.bondsdata;
                            break
                        case "7813":
                            this.JPN = null;
                            this.JPN = this.bondsdata;
                            break
                        case "7808":
                            this.DAX = null;
                            this.DAX = this.bondsdata;
                            break
                        case "7803":
                            this.FRA = null;
                            this.FRA = this.bondsdata;
                            break
                        case "7801":
                            this.UK = null;
                            this.UK = this.bondsdata;
                            break
                        case "7807":
                            this.AUS = null;
                            this.AUS = this.bondsdata;
                            break
                        case "40820":
                            this.UpIn = null;
                            this.UpIn = this.bondsdata;
                            break
                        case "942630":
                            this.Sin = null;
                            this.Sin = this.bondsdata;
                            break
                        case "94080":
                            this.lshen = null;
                            this.lshen = this.bondsdata;
                            break
                        case "7814":
                            this.hshen = null;
                            this.hshen = this.bondsdata;
                            break
                        case "44486":
                            this.China = null;
                            this.China = this.bondsdata;
                            break
                        case "8831":
                            this.Ton = null;
                            this.Ton = this.bondsdata;
                            break
                        case "8910":
                            this.boj = null;
                            this.boj = this.bondsdata;
                            break
                        case "961728":
                            this.RMB = null;
                            this.RMB = this.bondsdata;
                            break
                        case "8884":
                            this.Vix = null;
                            this.Vix = this.bondsdata;
                            break
                        case "8849":
                            this.Oil = null;
                            this.Oil = this.bondsdata;
                            break
                    }
                }
            },
            websocketonerror(e) {

            },
            websocketclose(e) {
                this.ws.close()
                console.log("英为财情close")
            },
            hearbeat() {
                this.ws.send('["{\\\"_event\\\":\\\"heartbeat\\\",\\\"data\\\":\\\"h\\\"}"]')
            },
            csonopen() {
                this.cs.send('{"action": "subscribe", "args": ["Ticker:BTC/USDT","Ticker:ETH/USDT","Ticker:EOS/USDT","Ticker:OKB/USDT","Ticker:LINK/USDT"]}')
                setInterval(this.cshearbeat, 10000);
            },
            csonmessage(e) {
                this.data = JSON.parse(e.data)
                    // console.log(this.data)
                switch (this.data.group) {
                    case "Ticker:BTC/USDT":
                        this.BTC = null;
                        this.BTC = this.data.data;
                        break;
                    case "Ticker:ETH/USDT":
                        this.ETH = null;
                        this.ETH = this.data.data;
                        break;
                    case "Ticker:EOS/USDT":
                        this.EOS = null;
                        this.EOS = this.data.data;
                        break;
                    case "Ticker:OKB/USDT":
                        this.OKB = null;
                        this.OKB = this.data.data;
                        break;
                    case "Ticker:LINK/USDT":
                        this.LINK = null;
                        this.LINK = this.data.data;
                        break;
                }
            },
            csonerror(e) {

            },
            csclose(e) {
                this.cs.close()
                console.log("crypto connection close")
            },
            cshearbeat() {
                this.cs.send('{"action":"ping"}')
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
    
    h4 {
        margin: -1px;
    }
    
    .up {
        background-color: red;
    }
    
    .down {
        background-color: rgb(49, 190, 49);
    }
    
    @keyframes fade {
        from {
            opacity: 1.0;
        }
        50% {
            opacity: 0.4;
        }
        to {
            opacity: 1.0;
        }
    }
    
    @-webkit-keyframes fade {
        from {
            opacity: 1.0;
        }
        50% {
            opacity: 0.4;
        }
        to {
            opacity: 1.0;
        }
    }
    
    .headerBox {
        color: #fff;
        font-size: 15px;
        animation: fade 600ms infinite;
        animation-iteration-count: 1;
        -webkit-animation: fade 1s infinite;
        -webkit-animation-iteration-count: 1;
    }
</style>