<template>
  <div class="body">
    <!-- 顶部导航栏 -->
    <top-header></top-header>
    <van-dialog v-model="isDialog" title="定制码" show-cancel-button>
      <van-field v-model="custome_code" placeholder="请输入定制" />
    </van-dialog>
    <!-- 选择套餐 -->
    <div class="chiose-tc">
      <div>选择套餐</div>
      <div class="list">
        <span
          :class="['single ', v.is_select && 'select']"
          v-for="(v, k) in setMeal"
          :key="k"
          @click="chioseNav(k)"
        >{{ v.cte }}</span>
      </div>
    </div>

    <!-- 选择出行日期 -->
    <div class="chiose-date">
      <div class="chiose-d-title">选择出行日期</div>

      <!-- 日期导航 -->
      <div class="date-nav">
        <div
          v-for="(i, k) in dateNav"
          :class="['date-n-single', i.is_select && 'date-n-select']"
          :key="k"
          @click="chioseDate(k)"
        >
          <div>{{ i.moth }}月</div>
          <div style="font-size: .2rem">￥{{ i.total_price }}起</div>
        </div>
      </div>

      <!-- 日历 -->
      <!-- :style="{width: dateNav.length+'00%'}" -->
      <div class="date-box">
        <!--  :style="{width: (100 / dateNav.length) + '%'}" -->
        <div class="calendar">
          <!-- 星期 -->
          <div class="week">
            <span
              v-for="(i, k) in week"
              :key="k"
              :style="'color: ' + ((k == 6 || k == 0) && '#ff911b')"
            >{{ i }}</span>
          </div>

          <!-- 日期 -->
          <div class="date-num">
            <span :class="['alone', i.is_select && 'alone-select']" v-for="(i, k) in days" :key="k">
              <div v-if="!i.cte" class="box">{{ i.num }}</div>
              <div
                v-else
                class="box"
                @click="chiosePiao(k)"
                :style="{'color':i.is_select ? '#fff' : '#777' }"
              >
                <span>{{ i.num }}</span>
                <span :style="{'color':i.is_select ? '#fff' : '#fe9525'}">{{ i.cte }}</span>
                <span>￥{{ i.price }}</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 购买 -->
    <div class="goods" v-if="goodsBool">
      <div
        v-for="(item,index) in cardsList"
        :class="['g-box', goodsClick && 'goods-select']"
        @click="goodsChiose(item,index)"
        :key="index"
      >
        <div>{{ item.tripTime }}</div>
        <!-- <div>{{ item.str }}</div> -->
        <div style="color: #fe9525">仅剩{{ item.numofSignup }}个名额</div>
      </div>
    </div>

    <div class="ren-num" v-if="listBool">
      <div style="font-weight: 700; padding-bottom: .3125rem">出行人数</div>
      <div class="r-n-single" v-for="(i, k) in cardsList" :key="k">
        <section>
          <span>{{adult}}</span>
          <div class="price-">
            <div>￥{{ i.adult_price }}</div>
            <img src="../../../assets/icon_05.png" class="edit" alt @click="adultJian(k)" />
            <div style="color: #333">{{ i.num }}</div>
            <img src="../../../assets/icon_06.png" class="edit" alt @click="adultJia(k)" />
          </div>
        </section>
        <section>
          <span>{{children}}</span>
          <div class="price-">
            <div>￥{{ i.children_price }}</div>
            <img src="../../../assets/icon_05.png" class="edit" alt @click="childJian(k)" />
            <div style="color: #333">{{ i.num1 }}</div>
            <img src="../../../assets/icon_06.png" class="edit" alt @click="childJia(k)" />
          </div>
        </section>
      </div>
    </div>

    <!-- 支付 -->
    <div style="width: 100%; height: 5rem"></div>
    <div class="pay">
      <div class="left">
        <span>需支付</span>
        <span style="color: #ff911b; margin-left: 5px; font-weight: 400">￥{{ totalPrice }}</span>
      </div>
      <div class="right" @click="nextStep">确定</div>
    </div>
  </div>
</template>

<script>
var date = new Date(),
  year = date.getFullYear()

// 提示消息
class Msg {
  constructor(str) {
    var box = document.querySelector('.msg')
    this.str = str

    if (!box) {
      var box = document.createElement('div')
      box.classList.add('msg')
    }
    this.newDom(box)
  }

  newDom(box) {
    var style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      'background-color': 'rgba(0, 0, 0, .4)',
      padding: '3px',
      'font-size': '14px',
      color: '#fff',
      'text-align': 'center',
      width: '100px',
      height: '24px',
      'border-radius': '5px',
      'margin-left': '-50px',
      'margin-top': '-12px',
      'line-height': '24px',
      transition: 'all .5s'
    }

    var str = ``
    for (let i in style) {
      str += i + `:` + style[i] + ';'
    }
    // console.log(str)
    box.style = str
    box.innerHTML = this.str
    document.body.appendChild(box)

    setTimeout(() => {
      box.style.display = 'none'
      // box.removeChild(box.firstChild)
    }, 2000)
  }
}
import Header from './components/header'
import moment from 'moment'
export default {
  components: {
    'top-header': Header
  },
  name: 'HelloWorld',
  data() {
    return {
      setMeal: [
        { cte: '定制', day: 4, is_select: false },
        { cte: '非定制', day: 4, is_select: true }
      ],
      obj: {},
      isDialog: false,
      dateNav: [],
      week: ['日', '一', '二', '三', '四', '五', '六'],
      days: [],
      goodsClick: false,
      list: [
        { cte: '成人', price: '6199', num: 1 },
        { cte: '儿童', price: '9999', num: 1 }
      ],
      goodsBool: false,
      listBool: false,
      totalPrice: 0,
      item: {},
      cardsList: [],
      userInfo: {
        route_id: 1
      },
      mask: 0,
      adult: '成人(不占床)',
      children: '儿童(不占床)',
      custome_code: '',
      params: {}
    }
  },
  computed: {
    // totalPrice: function() {
    //   return this.cardsList.reduce((num, item) => {
    //     console.log(num, item)
    //     return item.num * item.adult_price + item.num1 * item.children_price
    //   }, 0)
    //   this.$forceUpdate()
    // }
  },
  created() {
    this.schedulePage()
  },
  mounted() {
    // console.log(moment().format('MMM Do YY'))
  },
  watch: {
    cardsList: {
      handler(val, oldVal) {
        this.totalPrice =
          val[0].num * val[0].adult_price + val[0].num1 * val[0].children_price
      },
      deep: true, //true 深度监听
      immediate: false
    }
  },
  methods: {
    customSchedule() {
      this.$http
        .get(this.base_url + 'custom/schedule', {
          params: this.custome_code
        })
        .then(res => {
          if (res.data.code == 200) {
          }
        })
    },

    schedulePage() {
      this.$http
        .get(this.base_url + '/select/schedule', {
          params: this.userInfo
        })
        .then(res => {
          if (res.data.code == 200) {
            if (res.data.data.length > 0) {
              // console.log(new Date('2020-01-13').getDate())
              // console.log(res.data.data[0].trip_data[0].tripDate)
              res.data.data.forEach((val, idx) => {
                var obj = {}
                obj['moth'] = Number(val.month)
                obj['total_price'] = val.min_price
                if (idx == 0) {
                  obj['is_select'] = true
                } else {
                  obj['is_select'] = false
                }
                val.trip_data.filter(item => {
                  item.tripDate = new Date(item.tripDate).getDate()
                })
                obj['trip_data'] = val.trip_data
                this.dateNav.push(obj)
              })
              if (this.dateNav.length > 0) {
                this.public(this.dateNav)
              }
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
      // console.log(1111)
    },
    // 选择套餐
    chioseNav(idx) {
      this.setMeal.filter((item, index) =>
        idx == index ? (item.is_select = true) : (item.is_select = false)
      )
      idx == 0 ? (this.isDialog = true) : (this.isDialog = false)
      console.log(idx)
      this.public(this.dateNav)
      this.goodsBool = false
      this.listBool = false
      this.goodsClick = false
    },
    // 选择出行日期
    chioseDate(idx) {
      // console.log(this.dateNav)
      this.dateNav.filter((item, index) =>
        idx == index ? (item.is_select = true) : (item.is_select = false)
      )
      this.mask = idx
      this.public(this.dateNav, idx)
      this.goodsBool = false
      this.listBool = false
      this.goodsClick = false
      new Msg('选择出行日期')
    },
    // 选择票
    chiosePiao(idx) {
      this.item = this.days.filter((item, index) =>
        index == idx ? (item.is_select = true) : (item.is_select = false)
      )[0]
      // console.log(this.item)
      // this.list.filter(item => (item.num = 1)) // 将出行人数重置
      this.goodsBool = true
      this.listBool = false
      this.goodsClick = false
      this.dateNav[this.mask].trip_data.forEach((val, i, arr) => {
        if (val.tripDate === this.item.num) {
          this.cardsList = val.item
          for (var k = 0; k < this.cardsList.length; k++) {
            if (this.cardsList[k]['voucher_type'] !== 1) {
              this.adult = '成人(占床)'
              this.children = '儿童(占床)'
            }
            this.cardsList[k]['num'] = 1
            this.cardsList[k]['num1'] = 1
          }
        }
      })
      console.log(this.cardsList)
      this.handle()
    },
    goodsChiose(item, index) {
      this.params = item
      console.log(this.params)
      this.goodsClick = true
      this.listBool = true
    },
    // 处理出行日期
    handle() {
      var sDate = '',
        eDate = '',
        curMothDay = this.mothCorres(this.item.moth),
        setMeal = this.setMeal.filter(item => item.is_select && item)[0]

      if (this.item.moth < 10) {
        // this.item.moth = '0' + this.item.moth
        this.item.moth = this.item.moth
        sDate = this.item.moth + '/' + this.item.num
        // console.log(this.item.moth)
        // console.log(eDate)
      }
      if (this.item.num < 10) {
        // this.item.num = '0' + this.item.num
        this.item.num = this.item.num
        // sDate = this.item.moth + '/' + this.item.num
      }
      if (this.item.num + setMeal.day > curMothDay) {
        var cha = this.item.num + setMeal.day - curMothDay
        eDate = (parseInt(this.item.moth) % 12) + 1 + '/' + cha
      } else {
        eDate = this.item.moth + '/' + (this.item.num + setMeal.day)
      }
      this.item.str = sDate + ' - ' + eDate
    },
    // 加
    adultJian(idx) {
      if (this.cardsList[idx].num > 0) this.cardsList[idx].num--
      this.cardsList[idx].num
      // console.log(this.cardsList)
      this.totalPrice =
        this.cardsList[idx].num * this.cardsList[idx].adult_price -
        this.cardsList[idx].num1 * this.cardsList[idx].children_price
      console.log(this.totalPrice)
      this.$forceUpdate()
    },
    // 减
    adultJia(idx) {
      this.cardsList[idx].num++
      this.totalPrice =
        this.cardsList[idx].num * this.cardsList[idx].adult_price +
        this.cardsList[idx].num1 * this.cardsList[idx].children_price
      this.$forceUpdate()
    },
    // 加
    childJian(idx) {
      if (this.cardsList[idx].num1 > 0) this.cardsList[idx].num1--
      this.totalPrice =
        this.cardsList[idx].num * this.cardsList[idx].adult_price -
        this.cardsList[idx].num1 * this.cardsList[idx].children_price
      this.$forceUpdate()
    },
    // 减
    childJia(idx) {
      this.cardsList[idx].num1++
      this.totalPrice =
        this.cardsList[idx].num * this.cardsList[idx].adult_price +
        this.cardsList[idx].num1 * this.cardsList[idx].children_price
      this.$forceUpdate()
    },
    // 处理月份对应天数
    mothCorres(day) {
      var da = [1, 3, 5, 7, 8, 10, 12],
        xiao = [4, 6, 9, 11]

      if (da.includes(day)) {
        return 31
      } else if (xiao.includes(day)) {
        return 30
      } else {
        if (year % 4 == 0) {
          // 闰年
          return 29
        } else {
          // 瑞年
          return 28
        }
      }
    },
    // 处理日期开始空格期
    dateEmpty(moth) {
      var str = year + '/' + moth + '/1',
        arr = [],
        num = new Date(Date.parse(str)).getDay()
      for (let i = 0; i < num; i++) {
        var o = { num: ' ' }
        arr.push(o)
      }
      return arr
    },
    public(dateList, sub) {
      var sub
      sub === undefined ? (sub = 0) : sub
      var curMoth = dateList.filter(item => {
          return item.is_select && item
        }),
        days = this.mothCorres(curMoth[0].moth)
      this.days = []
      for (let i = 1; i <= days; i++) {
        var o = { num: i } // 无票
        dateList[sub].trip_data.forEach((item, index, arr) => {
          if (i == item.tripDate) {
            o = {
              num: item.tripDate,
              is_select: false,
              price: item.total_price,
              cte: `余${item.numofSignup}`,
              moth: curMoth[0].moth
            }
          }
        })
        this.days.push(o)
      }
      this.days.unshift(...this.dateEmpty(curMoth[0].moth))
    },
    nextStep() {
      if (sessionStorage.getItem('userid') != null) {
        this.params.userId = sessionStorage.getItem('userid')
      } else {
        this.params.userId = '10126'
      }
      if (this.params.hasOwnProperty('scheduleId')) {
        var posi_num
        var posi_num1
        if (this.cardsList[0].voucher_type == 1) {
          posi_num = ''
          posi_num1 = ''
        } else {
          posi_num = this.params.num
          posi_num1 = this.params.num1
        }
        var param = {
          userId: this.params.userId, //Int	是	用户id
          routeId: this.params.routeId, //路线id
          scheduleId: this.params.scheduleId, //Int	是	排期id
          adultNum: this.params.num, //int	是	成人数量
          childNum: this.params.num1, //int	是	儿童数量
          adultNum_no_bed: posi_num, //int	是	成人占床数量
          childNum_no_bed: posi_num1, //int	是	儿童占床数量
          orderAmount: this.totalPrice
        }
        sessionStorage.setItem('dates', JSON.stringify(param))
        this.$router.push({
          path: '/payment'
        })
      } else {
        new Msg('请选择具体时间')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @media screen and (max-width: 700rem) { */
.top-nav {
  width: 100%;
  padding: 0 0.32rem;
  height: 1rem;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.top-nav > a img {
  /* width: 1.45rem; */
  height: 0.6rem;
}

.top-nav .perpo > img {
  /* width: 1.2rem !important; */
}

.logo {
  height: 0.6rem;
}

/* 选择套餐 */
.chiose-tc {
  width: 100%;
  padding: 0.4rem 0.6rem 0.3rem 0.3rem;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 0.2rem;
  color: #333;
  font-weight: 700;
  font-size: 0.4rem;
}

.chiose-tc .list {
  margin-top: 0.25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.26rem;
  font-weight: 400;
}

.chiose-tc .list .single {
  padding: 0 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border: 0.0625rem solid #f1f1f1;
  border-radius: 0.1rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}

.chiose-tc .list .select {
  color: #fff;
  background-color: #ff911b;
  border-color: #ff911b;
}

/* 选择出现日期 */
.chiose-date {
  width: 100%;
  background-color: #fff;
  font-size: 0.3rem;
  color: #333;
}

.chiose-date .chiose-d-title {
  width: 100%;
  padding: 0 0.3rem;
  height: 1rem;
  line-height: 1rem;
  font-weight: 700;
  box-sizing: border-box;
}

.chiose-date .date-nav {
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.chiose-date .date-nav .date-n-single {
  text-align: center;
  font-size: 0.26rem;
  padding: 0 0.2rem;
  margin-top: 0.15rem;
  border-bottom: 0.07rem solid transparent;
}

.chiose-date .date-nav .date-n-select {
  border-color: #fe9525;
  color: #fe9525;
}

.date-box {
  transition: all 0.5s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.date-box .calendar {
  background-color: #fff;
  padding: 0 0.1875rem;
}

.date-box .calendar .week {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.date-box .calendar .week > span {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  color: #777;
  /* font-size: ; */
}

.date-box .calendar .date-num {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.calendar .date-num .alone {
  width: 14.285%;
  text-align: center;
  font-size: 0.26rem;
  height: 1.6rem;
  color: #777;
  padding: 0.08rem;
  box-sizing: border-box;
}

.calendar .date-num .alone-select {
  background-color: #ff911b;
  border-radius: 0.3125rem;
}

.date-num .alone .box {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.date-num .alone .box > span {
  width: 100%;
  line-height: 10px;
}

/* 选中日期 - 购买 */
.goods {
  width: 100%;
  padding: 0.3rem 0.6rem 0.3rem 0.3rem;
  box-sizing: border-box;
  background-color: #fff;
  border-top: 1px solid #ececec;
}

.goods .g-box {
  width: 3.2rem;
  border-radius: 0.1rem;
  border: 1px solid #ececec;
  box-sizing: border-box;
  padding: 0.15rem 0 0.05rem 0.2rem; /* 8 0 3 10 */
  font-size: 0.24rem;
  color: #333;
}

.goods .goods-select {
  border-color: #ff911b;
  background-image: url('../../../assets/icon_04.png');
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 0.7rem;
}

.ren-num {
  width: 100%;
  margin-top: 0.2rem;
  background-color: #fff;
  padding: 0.25rem 0.3rem 0.4rem;
  box-sizing: border-box;
  color: #333;
  font-size: 0.4rem;
}

.ren-num .r-n-single section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
  box-sizing: border-box;
  font-size: 0.26rem;
}

.ren-num .r-n-single .price- {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.r-n-single .price- > div {
  margin-left: 0.75rem;
  color: #ff911b;
}

.r-n-single .price- .edit {
  width: 0.6rem;
  height: 0.6rem;
  margin-left: 0.4rem;
}

/* 支付 */
.pay {
  width: calc(100% - 1.875rem);
  height: 2.5rem;
  position: fixed;
  bottom: 1.25rem;
  left: 0.9375rem;
  border-radius: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.pay .left {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 0.6rem;
  background-color: #333;
  color: #fff;
  font-weight: 700;
  align-items: center;
  border-radius: 500px 0 0 500px;
  font-size: 0.3rem;
}

.pay .right {
  width: 2.5rem;
  height: 100%;
  background-color: #ff911b;
  text-align: center;
  line-height: 1rem;
  border-radius: 0 500px 500px 0;
  color: #fff;
}

/* }
@media screen and (max-width: 20rem) { */
.pay {
  height: 1rem;
  position: fixed;
  bottom: 0.5rem;
  left: 0.4rem;
  border-radius: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* } */
</style>
