<template>
  <div>
    <div v-if="!cacheuser" class="oh">请登录您的帐号</div>
    <div v-if="cacheuser">
      <div class="top">购物车</div>
      <div v-if="arr.length === 0"><van-empty description="购物车为空" /></div>
      <div style="margin-top: 50px">
        <div v-for="(item, index) in arr" :key="index" class="one">
          <van-checkbox
            checked-color="#ff0000"
            shape="square"
            style="margin-left: 10px"
            v-model="item.check"
            @change="changecheck"
          ></van-checkbox>
          <div class="two">
            <div><img :src="item.image_path" width="100" alt="" /></div>
            <div class="three" style="width: 230px">
              <div class="col">
                {{ item.name }}
              </div>
              <div class="both">
                <div class="first">￥{{ item.mallPrice }}</div>
                <div class="second">
                  <div>
                    <van-stepper
                      v-model="item.count"
                      theme="round"
                      button-size="20"
                      min="1"
                      max="50"
                      integer
                      @change="changeadd(item.count, item.cid, item.mallPrice)"
                    />
                  </div>
                  <div class="son">
                    <!-- <van-icon name="close" @click="del(item.cid)" /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <van-submit-bar
          :price="allcount * 100"
          button-text="去结算"
          @submit="onSubmit"
          style="margin-bottom: 50px"
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
            style="background: #f7392c; color: white; margin-left: 10px