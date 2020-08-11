<template>
    <div>
        <mt-swipe id="mtpic" :auto="0" :showIndicators="true">
        <mt-swipe-item v-for="(item, index) in lbs" :key="index">
            <img :src="'../static/imgs/' + item + '.jpg'"/>
        </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <div class="container">
            <router-link :to="module.route" class="link" v-for="module in modules" :key='module.id'>
                <div class="items" :class="module.class"></div>
                <span class="text">{{module.text}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Swipe',
    data() {
        return {
            lbs: [
                'lb1',
                'lb2',
                'lb3'
            ],
            modules: [
                {route: {name: "Home"}, class:'backgroundImg',text: '拍照', id: 1},
                {route: {name: "Test"}, class:'backgroundImg',text: '拍照', id: 2},
                {route: {name: "Test"}, class:'backgroundImg',text: '拍照', id: 3},
                {route: {name: "Test"}, class:'backgroundImg',text: '拍照', id: 4},
                {route: {name: "Test"}, class:'backgroundImg',text: '拍照', id: 5},
                {route: {name: "Test"}, class:'backgroundImg',text: '拍照', id: 6},
                {route: {name: "Test"}, class:'backgroundImg',text: '拍照', id: 7},
                {route: {name: "Test"}, class:'backgroundImg',text: '拍照', id: 8},
                {route: {name: "Test"}, class:'backgroundImg',text: '拍照', id: 9},
            ]
        }
    }
}
</script>

<style>
#mtpic {
  width: 100%;
  height: 200px;
  background-color: coral;
}
.backgroundImg {
    background-size: contain;
    background-image: url('../../static/icons/ic_camera.png');
    background-repeat: no-repeat;
}
.container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin-top: 2rem;
}
.items {
    width: 5rem;
    margin: 1rem 1rem 0 1rem;
    height: 4rem;
}
.text{
    padding-left: 2.2rem;
}
.link{
    text-decoration: none;
}
</style>