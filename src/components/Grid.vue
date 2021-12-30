<template>
            <div id="grid-wrap">
               <Food     v-if="currentComponent === 'food'"></Food>
               <Weight   v-if="currentComponent === 'weight'"></Weight>
               <Toilet   v-if="currentComponent === 'toilet'"></Toilet>
               <Brushing v-if="currentComponent === 'brushing'"></Brushing>
            <ul>
                <!-- v-for="icon in icons" :key="icon.id" -->
                <li v-for="item in items" :key="item.id">
                    <picture class="list-ikon">
                       <!-- <source :srcset= 'image' type="image/webp"> -->
                        <img v-bind:src='item.icon'>
                    </picture>
                    <button class="list-name" v-scroll-to="'#bar-chart'" @click="currentComponent = 'food'">{{item.name}}</button>
                </li>
                <!-- <li>
                        <picture class="list-ikon">
                            <source srcset="@/assets/images/cat-food.webp" type="image/webp">
                            <img src="@/assets/images/cat-food.png">
                        </picture>
                        <button class="list-name" v-scroll-to="'#bar-chart'" @click="currentComponent = 'food'">ご飯</button>

                </li>
                <li>
                        <picture class="list-ikon">
                            <source srcset="@/assets/images/cat-weight.webp" type="image/webp">
                            <img src="@/assets/images/cat-weight.png">
                        </picture>
                      <button class="list-name" v-scroll-to="'#bar-chart'" @click="currentComponent = 'weight'">体重</button>
                </li>
                <li>
                        <picture class="list-ikon">
                            <source srcset="@/assets/images/cat-toilet.webp" type="image/webp">
                            <img src="@/assets/images/cat-toilet.png">
                        </picture>
                        <button class="list-name" v-scroll-to="'#bar-chart'" @click="currentComponent = 'toilet'">トイレの回数</button>
                </li>
                <li>
                        <picture class="list-ikon">
                            <source srcset="@/assets/images/grooming.webp" type="image/webp">
                            <img src="@/assets/images/grooming.png">
                        </picture>
                        <button class="list-name" v-scroll-to="'#bar-chart'" @click="currentComponent = 'brushing'">ブラッシング</button>
                </li> -->
            </ul>
        </div>
</template>


<script>
import Food from './Food.vue';
import Weight from './Weight.vue';
import Toilet from './Toilet.vue';
import Brushing from './Brushing.vue';
export default {
    components:{
        Food,
        Weight,
        Toilet,
        Brushing
    },
    data(){
        return{
            items:[
                { name:'ご飯',icon:require('@/assets/images/cat-food.png') },
                { name:'体重',icon:require('@/assets/images/cat-weight.png')},
                { name:'トイレの回数',icon:require('@/assets/images/cat-toilet.png')},
                { name:'ブラッシング',icon:require('@/assets/images/grooming.png')}
            ],
            currentComponent: "food",
        };
    }
}


</script>
<style lang="scss" scoped>
#grid-wrap{
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1em;
    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill,300px);
        justify-content: space-around;
        grid-template-rows: repeat(2,350px);
        grid-row-gap:3em;
        margin-top: 3em;
        li{
            list-style: none;
            border: solid 1px;
            background: rgba( 255, 255, 255, 0.25 );
            backdrop-filter: blur( 1px );
            -webkit-backdrop-filter: blur( 1px );
            border-radius: 10px;
            border: 2px solid rgba( 255, 255, 255, 0.18 );
            position: relative;
            text-align: center;
                .list-name{
                    background: rgba( 255, 255, 255, 0 );
                    backdrop-filter: blur( 20px );
                    -webkit-backdrop-filter: blur( 20px );
                    border-radius: 10px;
                    border: 1px solid rgba( 255, 255, 255, 0.18 );
                    text-decoration: none;
                    display: block;
                    text-align: center;
                    bottom: 30px;
                    right: 85px;
                    font-size: 15px;
                    margin: 0 auto;
                    padding: 8px 45px 7px 45px;
                    cursor: pointer;
                    transition: .2s;
                    &:hover{
                        background: #f0d1c6;
                        color: #fff;
                    }
                }
                .list-ikon{
                    display: block;
                    line-height: 155px;
                    margin-top: 5em;
                    img{
                        max-width: 90px;
                        width: 100%;
                    }
                }
        }
        li:nth-child(3){
            a{
                right: 55px;
            }
        }
        li:nth-child(4){
            a{
                right: 55px;
            }
        }
    }
}
</style>

