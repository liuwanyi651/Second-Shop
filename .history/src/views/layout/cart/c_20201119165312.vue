<template>
  <div>
    <div v-if="!cacheuser" class="oh">请登录您的帐号</div>
    <div v-if="cacheuser">
      <div class="top">购物车</div>
      <div v-if="arr.length === 0"><van-empty description="购物车为空" /></div>
      <div style="margin-top: 50px">
        <div v-for="(item, index) in arr" :key="index" class="one">
          <van-checkbox
            checked-color="#ff0000"
            shape="square"
            style="margin-left: 10px"
            v-model="item.check"
            @change="changecheck"
          ></van-checkbox>
          <div class="two">
            <div><img :src="item.image_path" width="100" alt="" /></div>
            <div class="three" style="width: 230px">
              <div class="col">
                {{ item.name }}
              </div>
              <div class="both">
                <div class="first">￥{{ item.mallPrice }}</div>
                <div class="second">
                  <div>
                    <van-stepper
                      v-model="item.count"
                      theme="round"
                      button-size="20"
                      min="1"
                      max="50"
                      integer
                      @change="changeadd(item.count, item.cid, item.mallPrice)"
                    />
                  </div>
                  <div class="son">
                    <!-- <van-icon name="close" @click="del(item.cid)" /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <van-submit-bar
          :price="allcount * 100"
          button-text="去结算"
          @submit="onSubmit"
          style="margin-bottom: 50px"
        >
          <van-checkbox
            checked-color="#E6057F"
            shape="square"
            v-model="checked"
            @change="clickchecked"
            >全选</van-checkbox
          >
          <van-button
            size="small"
            round
            style="background: #f7392c; color: white; margin-left: 10px"
            @click="alldel"
            >删除</van-button
          >
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      cacheuser: "",
      v: 1,
      checked: false,
      arr: [],
      arr1: [],
      value: 1,
      flag: "",
    };
  },
  components: {},
  methods: {
    docart() {
      this.cacheuser = localStorage.getItem("user");
      // console.log(this.cacheuser)
    },
    onSubmit() {},
    changecheck() {
      this.checked = this.arr.every((item) => {
        return item.check === true;
      });
    },
    clickchecked() {
      this.arr.map((item) => {
        item.check = this.checked;
      });
    },
    getdata() {
      this.$api
        .cart()
        .then((res) => {
          console.log(res.shopList);
          this.arr = res.shopList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(cid) {
      console.log(cid);
      this.flag = cid;
      this.$api
        .deleteShop(this.flag)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.getdata();
    },
    alldel() {
      this.arr.map((item) => {
        if (item.check === true) {
          this.arr1.push(item.cid);
        }
      });
      this.$api
        .deleteShop(this.arr1)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.getdata();
    },
    changeadd(count, cid, mallPrice) {
      this.$api
        .editCart(count, cid, mallPrice)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
    this.docart();
  },
  computed: {
    allcount() {
      let sum = 0;
      this.arr.map((item) => {
        if (item.check) {
          sum = sum + item.mallPrice * item.count;
        }
      });
      return sum;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin-top: 11px;
}
.one {
  display: flex;
  justify-content: space-around;
}
.two {
  display: flex;
  justify-content: space-around;
}
.both {
  display: flex;
  margin-top: 30px;
  // margin-left: 20px;
  justify-content: space-around;
}
.col {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: red;
  font-size: 16px;
  margin-left: 30px;
  margin-top: 10px;
}
.both .first {
  font-size: 18px;
  color: #ff0000;
}
.oh {
  font-size: 32px;
  color: red;
  margin-left: -105px;
  margin-top: -30px;
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>