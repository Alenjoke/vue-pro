<template>
    <div>
        <mt-swipe id="mtpic" :auto="0" :showIndicators="true">
        <mt-swipe-item v-for="(item, index) in lbs" :key="index">
            <img :src="'../static/imgs/' + item + '.jpg'"/>
        </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <div class="container">
            <router-link to="/test" v-for="index in count" :key='index'>
                <div  class="items">
                    {{index}}
                </div>
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
            count: 9
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
.icon {
  width: 50px;
  height: 50px;
  background-size: cover;
}
.container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin-top: 2rem;
}
.items {
    width: 5rem;
    margin: 1rem;
    height: 4rem;
    background-color: rgba(33, 33, 33, 0.3);
    border: 1px solid transparent;
}
.items:hover {
    border: rgba(33, 33, 33, 0.9) solid 1px;
    background-color: rgba(33, 33, 33, 0.5);

    transition-property: all;
    transition-duration: 0.5s;
}
</style>