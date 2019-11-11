<template>
  <div>
    <!-- <el-row  class="row-bg" justify="start"> -->
    <el-col :span="11">
      <!-- <iframe frameborder="0" width="830" height="530" scrolling="yes" :src="src"></iframe> -->
      <div style="width:830px;height:530px;border:1px solid #000">
        <i-table height="530" v-if="jTenNew !=null" :columns="jTenColumns" :data="jTenNew"></i-table>
      </div>
    </el-col>
    <div>加密货币</div>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="BTC != null"
          :class="BTC.rise_fall_value >0 ? 'up headerBox': 'down headerBox'">
          <h4>BTC</h4>
          <h4>{{ BTC.last_price }} &#12288; {{BTC.rise_fall_value}} &#12288;
            {{ (BTC.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ BTC.open}} &#12288; {{ BTC.low }} &#12288;
            {{BTC.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>BTC</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="ETH != null"
          :class="ETH.rise_fall_value >0 ? 'up headerBox': 'down headerBox'">
          <h4>ETH</h4>
          <h4>{{ ETH.last_price }} &#12288; {{ETH.rise_fall_value}} &#12288;
            {{ (ETH.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ ETH.open}} &#12288; {{ ETH.low }} &#12288;
            {{ETH.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>ETH</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="EOS != null"
          :class="EOS.rise_fall_value >0 ? 'up headerBox ': 'down headerBox'">
          <h4>EOS</h4>
          <h4>{{ EOS.last_price }} &#12288; {{EOS.rise_fall_value}} &#12288;
            {{ (EOS.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ EOS.open}} &#12288; {{ EOS.low }} &#12288;
            {{EOS.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>EOS</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="OKB != null"
          :class="OKB.rise_fall_value >0 ? 'up headerBox ': 'down headerBox'">
          <h4>OKB</h4>
          <h4>{{ OKB.last_price }} &#12288; {{OKB.rise_fall_value}} &#12288;
            {{ (OKB.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ OKB.open}} &#12288; {{ OKB.low }} &#12288;
            {{OKB.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>OKB</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="LINK != null"
          :class="LINK.rise_fall_value >0 ? 'up headerBox ': 'down headerBox'">
          <h4>LINK</h4>
          <h4>{{ LINK.last_price }} &#12288; {{LINK.rise_fall_value}} &#12288;
            {{ (LINK.rise_fall_rate*100).toFixed(2) + "%"}} <br> {{ LINK.open}} &#12288; {{ LINK.low }} &#12288;
            {{LINK.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>LINK</h4>
        </div>
      </el-col>
    </el-row>
    <div>十年债卷</div>
    <el-row type="flex" class="row-bg" justify="start">
      <!-- <el-col :span="5" v-for="(item,index) in bonds" :key="index"> -->
      <el-col :span="5">
        <!-- <div style="width:200px;height:60px;border:1px solid #000" :id="item.id" v-if="bondsdata !=null":class="bondsdata.pc > 0 ?'up headerBox ': 'down headerBox'"> -->
        <div style="width:200px;height:60px;border:1px solid #000" v-if="mTen !=null"
          :class="mTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>美十</h4>
          <h4>{{ mTen.last}} &#12288; {{mTen.pc}} &#12288;
            {{ mTen.pcp}} <br> {{ mTen.low }} &#12288;
            {{mTen.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>美十</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="jTen !=null"
          :class="jTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>日十</h4>
          <h4>{{ jTen.last}} &#12288; {{jTen.pc}} &#12288;
            {{ jTen.pcp}} <br> {{ jTen.low }} &#12288;
            {{jTen.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>日十</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="dTen !=null"
          :class="dTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>德十</h4>
          <h4>{{ dTen.last}} &#12288; {{dTen.pc}} &#12288;
            {{ dTen.pcp}} <br> {{ dTen.low }} &#12288;
            {{dTen.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>德十</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="yTen !=null"
          :class="yTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4> 意十</h4>
          <h4>{{ yTen.last}} &#12288; {{yTen.pc}} &#12288;
            {{ yTen.pcp}} <br> {{ yTen.low }} &#12288;
            {{yTen.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4> 意十</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="yiTen !=null"
          :class="yiTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4> 英十</h4>
          <h4>{{ yiTen.last}} &#12288; {{yiTen.pc}} &#12288;
            {{ yiTen.pcp}} <br> {{ yiTen.low }} &#12288;
            {{yiTen.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4> 英十</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="fTen !=null"
          :class="fTen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>法十</h4>
          <h4>{{ fTen.last}} &#12288; {{fTen.pc}} &#12288;
            {{ fTen.pcp}} <br> {{ fTen.low }} &#12288;
            {{fTen.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>法十</h4>
        </div>
      </el-col>
    </el-row>
    <div>指数</div>
    <el-row type="flex" class="row-bg" justify="start">
      <!-- <el-col :span="5" v-for="(item,index) in aIndex" :key="index"> -->
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="DJ !=null"
          :class="DJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>DJ30</h4>
          <h4>{{ DJ.last_numeric}} &#8194; {{DJ.pc}}&#8194; {{ DJ.pcp}} <br> {{ DJ.low }}&#8194; {{DJ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>DJ30</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="NDSQ !=null"
          :class="NDSQ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>NDSQ</h4>
          <h4>{{ NDSQ.last_numeric}} &#8194; {{NDSQ.pc}} &#8194;
            {{ NDSQ.pcp}} <br> {{ NDSQ.low }}&#8194;
            {{NDSQ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>NDSQ</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="SPX !=null"
          :class="SPX.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>SPX</h4>
          <h4>{{ SPX.last_numeric}} &#8194; {{SPX.pc}} &#8194;
            {{ SPX.pcp}} <br> {{ SPX.low }} &#8194;
            {{SPX.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>SPX</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="JPN !=null"
          :class="JPN.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>JPN</h4>
          <h4>{{ JPN.last_numeric}} &#8194; {{JPN.pc}} &#8194;
            {{ JPN.pcp}} <br> {{ JPN.low }} &#8194;
            {{JPN.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>JPN</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="DAX !=null"
          :class="DAX.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>DAX</h4>
          <h4>{{ DAX.last_numeric}} &#8194; {{DAX.pc}} &#8194;
            {{ DAX.pcp}} <br> {{ DAX.low }} &#8194;
            {{DAX.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>DAX</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="FRA !=null"
          :class="FRA.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>FRA</h4>
          <h4>{{ FRA.last_numeric}} &#8194; {{FRA.pc}} &#8194;
            {{ FRA.pcp}} <br> {{ FRA.low }} &#8194;
            {{FRA.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>FRA</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="UK !=null"
          :class="UK.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>UK</h4>
          <h4>{{ UK.last_numeric}} &#8194; {{UK.pc}} &#8194;
            {{ UK.pcp}} <br> {{ UK.low }} &#8194;
            {{UK.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>UK</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="AUS !=null"
          :class="AUS.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>AUS</h4>
          <h4>{{ AUS.last_numeric}} &#8194;{{AUS.pc}} &#8194;
            {{ AUS.pcp}} <br> {{ AUS.low }} &#8194;
            {{AUS.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>AUS</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="UpIn !=null"
          :class="UpIn.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>上证指数</h4>
          <h4>{{ UpIn.last_numeric}} &#8194; {{UpIn.pc}} &#8194;
            {{ UpIn.pcp}} <br> {{ UpIn.low }} &#8194;
            {{UpIn.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>上证指数</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="Sin !=null"
          :class="Sin.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>深证指数</h4>
          <h4>{{ Sin.last_numeric}} &#8194; {{Sin.pc}} &#8194;
            {{ Sin.pcp}} <br> {{ Sin.low }} &#8194;
            {{Sin.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>深证指数</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="lshen !=null"
          :class="lshen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>沪深300</h4>
          <h4>{{ lshen.last_numeric}} &#8194; {{lshen.pc}} &#8194;
            {{ lshen.pcp}} <br> {{ lshen.low }} &#8194;
            {{lshen.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>沪深300</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="hshen !=null"
          :class="hshen.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>恒生指数</h4>
          <h4>{{ hshen.last_numeric}} &#8194; {{hshen.pc}} &#8194;
            {{ hshen.pcp}} <br> {{ hshen.low }} &#8194;
            {{hshen.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>恒生指数</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="China !=null"
          :class="China.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>富时50指数</h4>
          <h4>{{ China.last_numeric}} &#8194; {{China.pc}} &#8194;
            {{ China.pcp}} <br> {{ China.low }} &#8194;
            {{China.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>富时50指数</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="Vix !=null"
          :class="Vix.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>恐慌</h4>
          <h4>{{ Vix.last_numeric}} &#12288; {{Vix.pc}} &#12288;
            {{ Vix.pcp}} <br> {{ Vix.low }} &#12288;
            {{Vix.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>恐慌</h4>
        </div>
      </el-col>
    </el-row>
    <div>商品</div>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="Ton !=null"
          :class="Ton.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>铜</h4>
          <h4>{{ Ton.last_numeric}} &#12288; {{Ton.pc}} &#12288;
            {{ Ton.pcp}} <br> {{ Ton.low }} &#12288;
            {{Ton.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>铜</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="boj !=null"
          :class="boj.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>铂金</h4>
          <h4>{{ boj.last_numeric}} &#12288; {{boj.pc}} &#12288;
            {{ boj.pcp}} <br> {{ boj.low }} &#12288;
            {{boj.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>铂金</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="Oil !=null"
          :class="Oil.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>原油</h4>
          <h4>{{ Oil.last_numeric}} &#12288; {{Oil.pc}} &#12288;
            {{ Oil.pcp}} <br> {{ Oil.low }} &#12288;
            {{Oil.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>原油</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="RMB !=null"
          :class="RMB.pc > 0 ?'down headerBox ': 'up headerBox'">
          <h4>离岸人民币</h4>
          <h4>{{ RMB.last}} &#12288; {{RMB.pc}} &#12288;
            {{ RMB.pcp}} <br> {{ RMB.low }} &#12288;
            {{RMB.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>离岸人民币</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="Gold !=null"
          :class="Gold.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>Gold</h4>
          <h4>{{ Gold.last}} &#12288; {{Gold.pc}} &#12288;
            {{ Gold.pcp}} <br> {{ Gold.low }} &#12288;
            {{Gold.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>Gold</h4>
        </div>
      </el-col>
    </el-row>
    <div>主货币</div>
    <el-row type="flex" class="row-bg" justify="start">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="EU !=null"
          :class="EU.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>EUR/USD</h4>
          <h4>{{ EU.last_close}} &#12288; {{EU.pc}} &#12288;
            {{ EU.pcp}} <br> {{ EU.low }} &#12288;
            {{EU.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>EUR/USD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="GU !=null"
          :class="GU.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>GBP/USD</h4>
          <h4>{{ GU.last_close}} &#12288; {{GU.pc}} &#12288;
            {{ GU.pcp}} <br> {{ GU.low }} &#12288;
            {{GU.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>GBP/USD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="AU !=null"
          :class="AU.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>AUD/USD</h4>
          <h4>{{ AU.last_close}} &#12288; {{AU.pc}} &#12288;
            {{ AU.pcp}} <br> {{ AU.low }} &#12288;
            {{AU.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>AUD/USD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="NU !=null"
          :class="NU.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>NZD/USD</h4>
          <h4>{{ NU.last_close}} &#12288; {{NU.pc}} &#12288;
            {{ NU.pcp}} <br> {{ NU.low }} &#12288;
            {{NU.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>NZD/USD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="Dollar !=null"
          :class="Dollar.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>美元</h4>
          <h4>{{ Dollar.last}} &#12288; {{Dollar.pc}} &#12288;
            {{ Dollar.pcp}} <br> {{ Dollar.low }} &#12288;
            {{Dollar.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>美元</h4>
        </div>
      </el-col>
    </el-row>
    <!-- <div stylejj="float:left"> -->
    <el-col :span="11" style="margin-top:-40px">
      <div>新兴市场新闻</div>
      <div style="width:830px;height:260px;border:1px solid #000">
        <i-table height="250" v-if="staticNew !=null" :columns="newsColumns" :data="staticNew"></i-table>
      </div>
      <div>特朗普新闻</div>
      <div style="width:830px;height:160px;border:1px solid #000">
        <i-table height="150" v-if="trumpNew !=null" :columns="trumpColumns" :data="trumpNew"></i-table>
      </div>
    </el-col>
    <!-- </div> -->
    <div>避险货币</div>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="EJ !=null"
          :class="EJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>EUR/JPY</h4>
          <h4>{{ EJ.last_close}} &#12288; {{EJ.pc}} &#12288;
            {{ EJ.pcp}} <br> {{ EJ.low }} &#12288;
            {{EJ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>EUR/JPY</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="GJ !=null"
          :class="GJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>GBP/JPY</h4>
          <h4>{{ GJ.last_close}} &#12288; {{GJ.pc}} &#12288;
            {{ GJ.pcp}} <br> {{ GJ.low }} &#12288;
            {{GJ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>GBP/JPY</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="AJ !=null"
          :class="AJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>AUD/JPY</h4>
          <h4>{{ AJ.last_close}} &#12288; {{AJ.pc}} &#12288;
            {{ AJ.pcp}} <br> {{ AJ.low }} &#12288;
            {{AJ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>AUD/JPY</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="NJ !=null"
          :class="NJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>NZD/JPY</h4>
          <h4>{{ NJ.last_close}} &#12288; {{NJ.pc}} &#12288;
            {{ NJ.pcp}} <br> {{ NJ.low }} &#12288;
            {{NJ.JPY}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>NZD/JPY</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="UJ !=null"
          :class="UJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>USD/JPY</h4>
          <h4>{{ UJ.last_close}} &#12288; {{UJ.pc}} &#12288;
            {{ UJ.pcp}} <br> {{ UJ.low }} &#12288;
            {{UJ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>USD/JPY</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="CJ !=null"
          :class="CJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>CAD/JPY</h4>
          <h4>{{ CJ.last_close}} &#12288; {{CJ.pc}} &#12288;
            {{ CJ.pcp}} <br> {{ CJ.low }} &#12288;
            {{CJ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>CAD/JPY</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="CF !=null"
          :class="CF.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>CAD/CHF</h4>
          <h4>{{ CF.last_close}} &#12288; {{CF.pc}} &#12288;
            {{ CF.pcp}} <br> {{ CF.low }} &#12288;
            {{CF.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>CAD/CHF</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="FJ !=null"
          :class="FJ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>CHF/JPY</h4>
          <h4>{{ FJ.last_close}} &#12288; {{FJ.pc}} &#12288;
            {{ FJ.pcp}} <br> {{ FJ.low }} &#12288;
            {{FJ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>CHF/JPY</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="EF !=null"
          :class="EF.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>EUR/CHF</h4>
          <h4>{{ EF.last_close}} &#12288; {{EF.pc}} &#12288;
            {{ EF.pcp}} <br> {{ EF.low }} &#12288;
            {{EF.JPY}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>EUR/CHF</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="GF !=null"
          :class="GF.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>GBP/CHF</h4>
          <h4>{{ GF.last_close}} &#12288; {{GF.pc}} &#12288;
            {{ GF.pcp}} <br> {{ GF.low }} &#12288;
            {{GF.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>GBP/CHF</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="AF !=null"
          :class="AF.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>AUD/CHF</h4>
          <h4>{{ AF.last_close}} &#12288; {{AF.pc}} &#12288;
            {{ AF.pcp}} <br> {{ AF.low }} &#12288;
            {{AF.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>AUD/CHF</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="NF !=null"
          :class="NF.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>NZD/CHF</h4>
          <h4>{{ NF.last_close}} &#12288; {{NF.pc}} &#12288;
            {{ NF.pcp}} <br> {{ NF.low }} &#12288;
            {{NF.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>NZD/CHF</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="UF !=null"
          :class="UF.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>USD/CHF</h4>
          <h4>{{ UF.last_close}} &#12288; {{UF.pc}} &#12288;
            {{ UF.pcp}} <br> {{ UF.low }} &#12288;
            {{UF.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>USD/CHF</h4>
        </div>
      </el-col>
    </el-row>
    <div>交叉盘</div>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="ED !=null"
          :class="ED.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>EUR/CAD</h4>
          <h4>{{ ED.last_close}} &#12288; {{ED.pc}} &#12288;
            {{ ED.pcp}} <br> {{ ED.low }} &#12288;
            {{ED.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>EUR/CAD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="GD !=null"
          :class="GD.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>GBP/CAD</h4>
          <h4>{{ GD.last_close}} &#12288; {{GD.pc}} &#12288;
            {{ GD.pcp}} <br> {{ GD.low }} &#12288;
            {{GD.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>GBP/CAD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="AD !=null"
          :class="AD.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>AUD/CAD</h4>
          <h4>{{ AD.last_close}} &#12288; {{AD.pc}} &#12288;
            {{ AD.pcp}} <br> {{ AD.low }} &#12288;
            {{AD.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>AUD/CAD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="ND !=null"
          :class="ND.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>NZD/CAD</h4>
          <h4>{{ ND.last_close}} &#12288; {{ND.pc}} &#12288;
            {{ ND.pcp}} <br> {{ ND.low }} &#12288;
            {{ND.JPY}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>NZD/CAD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="UD !=null"
          :class="UD.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>USD/CAD</h4>
          <h4>{{ UD.last_close}} &#12288; {{UD.pc}} &#12288;
            {{ UD.pcp}} <br> {{ UD.low }} &#12288;
            {{UD.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>USD/CAD</h4>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="EA !=null"
          :class="EA.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>EUR/AUD</h4>
          <h4>{{ EA.last_close}} &#12288; {{EA.pc}} &#12288;
            {{ EA.pcp}} <br> {{ EA.low }} &#12288;
            {{EA.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>EUR/AUD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="GA !=null"
          :class="GA.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>GBP/AUD</h4>
          <h4>{{ GA.last_close}} &#12288; {{GA.pc}} &#12288;
            {{ GA.pcp}} <br> {{ GA.low }} &#12288;
            {{GA.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>GBP/AUD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="EZ !=null"
          :class="EZ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>EUR/NZD</h4>
          <h4>{{ EZ.last_close}} &#12288; {{EZ.pc}} &#12288;
            {{ EZ.pcp}} <br> {{ EZ.low }} &#12288;
            {{EZ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>EUR/NZD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="GZ !=null"
          :class="GZ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>GBP/NZD</h4>
          <h4>{{ GZ.last_close}} &#12288; {{GZ.pc}} &#12288;
            {{ GZ.pcp}} <br> {{ GZ.low }} &#12288;
            {{GZ.JPY}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>GBP/NZD</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="AZ !=null"
          :class="AZ.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>AUD/NZD</h4>
          <h4>{{ AZ.last_close}} &#12288; {{AZ.pc}} &#12288;
            {{ AZ.pcp}} <br> {{ AZ.low }} &#12288;
            {{AZ.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>AUD/NZD</h4>
        </div>
      </el-col>
    </el-row>
    <div>新兴市场</div>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="TRY !=null"
          :class="TRY.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>USR/TRY</h4>
          <h4>{{ TRY.last_close}} &#12288; {{TRY.pc}} &#12288;
            {{ TRY.pcp}} <br> {{ TRY.low }} &#12288;
            {{TRY.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>USD/TRY</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="SEK !=null"
          :class="SEK.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>USD/SEK</h4>
          <h4>{{ SEK.last_close}} &#12288; {{SEK.pc}} &#12288;
            {{ SEK.pcp}} <br> {{ SEK.low }} &#12288;
            {{SEK.JPY}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>USD/SEK</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="MXN !=null"
          :class="MXN.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>USD/MXN</h4>
          <h4>{{ MXN.last_close}} &#12288; {{MXN.pc}} &#12288;
            {{ MXN.pcp}} <br> {{ MXN.low }} &#12288;
            {{MXN.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>USD/MXN</h4>
        </div>
      </el-col>
      <el-col :span="5">
        <div style="width:200px;height:60px;border:1px solid #000" v-if="ZAR !=null"
          :class="ZAR.pc > 0 ?'up headerBox ': 'down headerBox'">
          <h4>USD/ZAR</h4>
          <h4>{{ ZAR.last_close}} &#12288; {{ZAR.pc}} &#12288;
            {{ ZAR.pcp}} <br> {{ ZAR.low }} &#12288;
            {{ZAR.high}}</h4>
        </div>
        <div style="width:200px;height:60px;border:1px solid #000" v-else>
          <h4>USD/ZAR</h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                myChart: {},
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
                //     "id": "940801"
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
                EZ: null,
                GZ: null,
                AZ: null,
                TRY: null,
                MXN: null,
                SEK: null,
                ZAR: null,
                ND: null,
                AD: null,
                GD: null,
                ED: null,
                UD: null,
                EA: null,
                GA: null,
                CJ: null,
                FJ: null,
                AJ: null,
                NJ: null,
                GJ: null,
                EJ: null,
                UJ: null,
                NF: null,
                AF: null,
                GF: null,
                EF: null,
                CF: null,
                UF: null,
                NU: null,
                AU: null,
                GU: null,
                EU: null,
                bondsdata: null,
                Dollar: null,
                Gold: null,
                data: {},
                newsColumns: [{
                    title: "新闻",
                    key: "content"
                }, {
                    title: "状态",
                    key: "status"
                }],
                trumpColumns: [{
                    title: "新闻",
                    key: "content"
                }, {
                    title: "状态",
                    key: "status"
                }, {
                    title: "时间",
                    key: "time"
                }],
                jTenColumns: [{
                    title: "新闻",
                    key: "content",
                    width: 600
                }, {
                    title: "状态",
                    key: "status"
                }, {
                    title: "时间",
                    key: "time"
                }],
                data1: [{
                    content: '王小明',
                    status: '北京市朝阳区芍药居'
                }, {
                    content: '王小',
                    status: '北京市朝阳区芍药居'
                }],
                staticNew: null,
                trumpNew: null,
                ws: null,
                jTenNew: null,
                // jsTen:null,
                // jiTen:null,
            }
        },
        created() {
            var self = this;
            this.$axios
                .get(
                    "/news/index/"
                )
                .then(function(res) {
                    var tmp = res.data.data
                    var newList = []
                    for (var x = 0; x < tmp.length; x++) {
                        if (tmp[x].status == 0) {
                            tmp[x].status = "负面"
                            newList.push(tmp[x])
                        } else {
                            tmp[x].status = "正面"
                            newList.push(tmp[x])
                        }
                    }
                    self.staticNew = newList
                })
                .catch(function(error) {
                    console.log(error);
                })
            setInterval(this.getTrump, 20000);
            setInterval(this.getJten, 15000);
        },
        mounted() {
            this.initWebSocket()
            this.initF()
            this.initS()
            this.initI()
                // this.rendterPic()
        },
        destroyed: function() {
            this.websocketclose()
        },
        methods: {
            getJten() {
                var self = this
                this.$axios
                    .get(
                        "/news/jten/"
                    )
                    .then(function(res) {
                        var tmp = res.data.data
                        var jTenList = []
                        for (var x = 0; x < tmp.length; x++) {
                            if (tmp[x].status == 0) {
                                tmp[x].status = "负面"
                                tmp[x].time = tmp[x].time.replace("T", " ")
                                jTenList.push(tmp[x])
                            } else {
                                tmp[x].status = "正面"
                                tmp[x].time = tmp[x].time.replace("T", " ")
                                jTenList.push(tmp[x])
                            }
                        }
                        self.jTenNew = jTenList
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            },
            initF() {
                let that = this
                var socket = io.connect('https://sscpgpecdd.jin10.com:8082', {
                    "force new connection": !0,
                    "reconnection": !1
                })
                socket.on('connect', function() {
                    socket.emit("switch_channel", 1, function() {})
                    console.log("forex socket conn")
                })
                socket.on('flash', function(data) {
                    if (data.data) {
                        let playload = {
                            content: data.data.content.replace("<b>", "").replace("</b>", ""),
                            tag: data.id,
                            time: data.time,
                            exttime: data.time.split(" ")[0]
                        };
                        that.syncPost(playload)
                    }
                })
                socket.on('error', function(err) {
                    console.log(err)
                })
                socket.on('connect_error', function(err) {
                    console.log(err)
                })
                socket.on('disconnect', function() {
                    console.log("forex socket close")
                })
            },
            initS() {
                let that = this
                var socket = io.connect('https://sscpgpecdd.jin10.com:8082', {
                    "force new connection": !0,
                    "reconnection": !1
                })
                socket.on('connect', function() {
                    socket.emit("switch_channel", 2, function() {})
                    console.log("shop socket conn")
                })
                socket.on('flash', function(data) {
                    if (data.data) {
                        let playload = {
                            content: data.data.content.replace("<b>", "").replace("</b>", ""),
                            tag: data.id,
                            time: data.time,
                            exttime: data.time.split(" ")[0]
                        };
                        that.syncPost(playload)
                    }
                })
                socket.on('error', function(err) {
                    console.log(err)
                })
                socket.on('connect_error', function(err) {
                    console.log(err)
                })
                socket.on('disconnect', function() {
                    console.log("shop socket close")
                })
            },
            initI() {
                let that = this
                var socket = io.connect('https://sscpgpecdd.jin10.com:8082', {
                    "force new connection": !0,
                    "reconnection": !1
                })
                socket.on('connect', function() {
                    console.log("index socket conn")
                    socket.emit("switch_channel", 3, function() {})
                })
                socket.on('flash', function(data) {
                    if (data.data) {
                        let playload = {
                            content: data.data.content.replace("<b>", "").replace("</b>", ""),
                            tag: data.id,
                            time: data.time,
                            exttime: data.time.split(" ")[0]
                        };
                        that.syncPost(playload)
                    }

                })
                socket.on('error', function(err) {
                    console.log(err)
                })
                socket.on('connect_error', function(err) {
                    console.log(err)
                })
                socket.on('disconnect', function() {
                    console.log("index socket close")
                })
            },
            syncPost(playload) {
                this.$axios
                    .post("/news/jten/", playload)
                    .then(function(res) {
                        // console.log(res);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            getTrump() {
                var self = this
                this.$axios
                    .get(
                        "/news/trump/"
                    )
                    .then(function(res) {
                        var tmp = res.data.data
                        var trumpList = []
                        for (var x = 0; x < tmp.length; x++) {
                            if (tmp[x].status == 0) {
                                tmp[x].status = "负面"
                                tmp[x].time = tmp[x].time.replace("T", " ")
                                trumpList.push(tmp[x])
                            } else {
                                tmp[x].status = "正面"
                                tmp[x].time = tmp[x].time.replace("T", " ")
                                trumpList.push(tmp[x])
                            }
                        }
                        self.trumpNew = trumpList
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            },
            rowClassName(row, index) {
                if (row.status === "正面") {
                    return 'demo-table-info-row';
                } else {
                    return 'demo-table-error-row';
                }
            },
            rendterPic() {
                this.myChart = this.$echarts.init(document.getElementById("container"))
                this.myChart.setOption(this.Tlines.initKOption(this.TmpData.kdata))
                window.addEventListener("resize", () => {
                    this.myChart.resize();
                });
            },
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
                this.ws.send('["{\\\"_event\\\":\\\"bulk-subscribe\\\",\\\"tzID\\\":28,\\\"message\\\":\\\"pid-16:%%pid-4:%%pid-48:%%pid-51:%%pid-7:%%pid-52:%%pid-55:%%pid-50:%%pid-41:%%pid-18:%%pid-39:%%pid-14:%%pid-17:%%pid-57:%%pid-56:%%pid-47:%%pid-54:%%pid-15:%%pid-53:%%pid-12:%%pid-10:%%pid-13:%%pid-49:%%pid-58:%%pid-11:%%pid-9:%%pid-3:%%pid-8:%%pid-5:%%pid-2:%%pid-1:%%pid-68:%%pid-8827:%%pid-7814:%%pid-7807:%%pid-7801:%%pid-7803:%%pid-7808:%%pid-7813:%%pid-7802:%%pid-7800:%%pid-7805:%%pid-961728:%%pid-8849:%%pid-8910:%%pid-8831:%%pid-8884:%%pid-940801:%%pid-942630:%%pid-44486:%%pid-40820:%%pid-23738:%%pid-23778:%%pid-23673:%%pid-23901:%%pid-23693:%%pid-23705:%%pidExt-16:%%pidExt-4:%%pidExt-48:%%pidExt-51:%%pidExt-7:%%pidExt-52:%%pidExt-55:%%pidExt-50:%%pidExt-41:%%pidExt-18:%%pidExt-39:%%pidExt-14:%%pidExt-17:%%pidExt-57:%%pidExt-56:%%pidExt-47:%%pidExt-54:%%pidExt-15:%%pidExt-53:%%pidExt-12:%%pidExt-10:%%pidExt-13:%%pidExt-49:%%pidExt-58:%%pidExt-11:%%pidExt-9:%%pidExt-3:%%pidExt-8:%%pidExt-5:%%pidExt-2:%%pidExt-1:%%pidExt-68:%%pidExt-8827:%%pidExt-7814:%%pidExt-7807:%%pidExt-7801:%%pidExt-7803:%%pidExt-7808:%%pidExt-7813:%%pidExt-7802:%%pidExt-7800:%%pidExt-7805:%%pidExt-961728:%%pidExt-8849:%%pidExt-8910:%%pidExt-8831:%%pidExt-8884:%%pidExt-940801:%%pidExt-942630:%%pidExt-44486:%%pidExt-40820:%%pidExt-23738:%%pidExt-23778:%%pidExt-23673:%%pidExt-23901:%%pidExt-23693:%%pidExt-23705:\\\"}"]')
                setInterval(this.hearbeat, 12000);
            },
            websocketonmessage(e) {
                if (e.data.split("::").length > 1) {
                    this.bondsdata = JSON.parse(e.data.split("::")[1].replace(/\\/g, "").split('"}"]')[0])
                        // console.log(JSON.parse(e.data.split("::")[1].replace(/\\/g, "").split('"}"]')[0]))
                    switch (this.bondsdata.pid) {
                        case "23705":
                            this.mTen = this.bondsdata;
                            break;
                        case "23901":
                            this.jTen = this.bondsdata;
                            break;
                        case "23693":
                            this.dTen = this.bondsdata;
                            break;
                        case "23738":
                            this.yTen = this.bondsdata;
                            break;
                        case "23673":
                            this.yiTen = this.bondsdata;
                            break;
                        case "23778":
                            this.fTen = this.bondsdata;
                            break;
                        case "7805":
                            this.DJ = this.bondsdata;
                            break
                        case "7800":
                            this.NDSQ = this.bondsdata;
                            break
                        case "7802":
                            this.SPX = this.bondsdata;
                            break
                        case "7813":
                            this.JPN = this.bondsdata;
                            break
                        case "7808":
                            this.DAX = this.bondsdata;
                            break
                        case "7803":
                            this.FRA = this.bondsdata;
                            break
                        case "7801":
                            this.UK = this.bondsdata;
                            break
                        case "7807":
                            this.AUS = this.bondsdata;
                            break
                        case "40820":
                            this.UpIn = this.bondsdata;
                            break
                        case "942630":
                            this.Sin = this.bondsdata;
                            break
                        case "940801":
                            this.lshen = this.bondsdata;
                            break
                        case "7814":
                            this.hshen = this.bondsdata;
                            break
                        case "44486":
                            this.China = this.bondsdata;
                            break;
                        case "8827":
                            this.Dollar = this.bondsdata;
                            break;
                        case "68":
                            this.Gold = this.bondsdata;
                            break;
                        case "8831":
                            this.Ton = this.bondsdata;
                            break;
                        case "8910":
                            this.boj = this.bondsdata;
                            break;
                        case "961728":
                            this.RMB = this.bondsdata;
                            break;
                        case "8884":
                            this.Vix = this.bondsdata;
                            break;
                        case "8849":
                            this.Oil = this.bondsdata;
                            break;
                        case "52":
                            this.EZ = this.bondsdata;
                            break;
                        case "55":
                            this.GZ = this.bondsdata;
                            break;
                        case "50":
                            this.AZ = this.bondsdata;
                            break;
                        case "41":
                            this.SEK = this.bondsdata;
                            break;
                        case "18":
                            this.TRY = this.bondsdata;
                            break;
                        case "39":
                            this.MXN = this.bondsdata;
                            break;
                        case "17":
                            this.ZAR = this.bondsdata;
                            break;
                        case "56":
                            this.ND = this.bondsdata;
                            break;
                        case "47":
                            this.AD = this.bondsdata;
                            break;
                        case "54":
                            this.GD = this.bondsdata;
                            break;
                        case "16":
                            this.ED = this.bondsdata;
                            break;
                        case "7":
                            this.UD = this.bondsdata;
                            break;
                        case "15":
                            this.EA = this.bondsdata;
                            break;
                        case "53":
                            this.GA = this.bondsdata;
                            break;
                        case "51":
                            this.CJ = this.bondsdata;
                            break;
                        case "13":
                            this.FJ = this.bondsdata;
                            break;
                        case "49":
                            this.AJ = this.bondsdata;
                            break;
                        case "58":
                            this.NJ = this.bondsdata;
                            break;
                        case "11":
                            this.GJ = this.bondsdata;
                            break;
                        case "9":
                            this.EJ = this.bondsdata;
                            break;
                        case "3":
                            this.UJ = this.bondsdata;
                            break;
                        case "57":
                            this.NF = this.bondsdata;
                            break;
                        case "48":
                            this.AF = this.bondsdata;
                            break;
                        case "12":
                            this.GF = this.bondsdata;
                            break;
                        case "10":
                            this.EF = this.bondsdata;
                            break;
                        case "14":
                            this.CF = this.bondsdata;
                            break;
                        case "4":
                            this.UF = this.bondsdata;
                            break;
                        case "8":
                            this.NU = this.bondsdata;
                            break;
                        case "5":
                            this.AU = this.bondsdata;
                            break;
                        case "2":
                            this.GU = this.bondsdata;
                            break;
                        case "1":
                            this.EU = this.bondsdata;
                            break;
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
                        this.BTC = this.data.data;
                        break;
                    case "Ticker:ETH/USDT":
                        this.ETH = this.data.data;
                        break;
                    case "Ticker:EOS/USDT":
                        this.EOS = this.data.data;
                        break;
                    case "Ticker:OKB/USDT":
                        this.OKB = this.data.data;
                        break;
                    case "Ticker:LINK/USDT":
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
    
    .ivu-table .demo-table-info-row td {
        background-color: #a6e7b6;
        color: #fff;
    }
    
    .ivu-table .demo-table-error-row td {
        background-color: #ff6600;
        color: #fff;
        ;
    }
    
    .ivu-table td.demo-table-info-column {
        background-color: #2db7f5;
        color: #fff;
    }
    
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #2db7f5;
    }
    
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>