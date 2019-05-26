<template>
  <div id="carousel-container">
     <carousel class="carousel" :per-page="1" :loop="true"  :autoplay="true" :mouse-drag="true" :paginationEnabled="false">
      <slide class="slide" v-for="item in carouselItems" v-bind:key="item.text" :style='{ backgroundImage: `url(${item.img})` }'>
      </slide>    
  </carousel>
  <div class="nav-helper">
    <img class="arrow_small" src="../../assets/Carousel/arrow_small.svg" alt="">
    <img class="arrow_big" src="../../assets/Carousel/arrow_big.svg" alt="">
    <p>Scroll Down</p>
    <div class="gif"></div>
  </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name:"Carousel",
  components:{
    carousel:Carousel,
    slide:Slide
  },
  data(){
    return{
      carouselItems:[
         {
          
          text:'Quality Furniture every home needs',
          img:require('../../assets/Carousel/sofa.jpg')
        },
        {
          text:'Nothing like else !',
          img:require('../../assets/Carousel/slider_one.webp')
        },
       
        {
          
          text:'Crafting happiness since 1900',
          img:require('../../assets/Carousel/slider_three.webp')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scopped>
  #carousel-container{
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: -80px;
    

    .carousel{
      width: 100%;

      .slide{
        width: 100%;
        @include for-phone-only{
          height: 250px;
        }
        @include for-tablet-portrait-up{
          height: 99vh;
        }
        background-size: cover;
        background-position: center;
      }
    }

    .nav-helper{
      position: absolute;
      bottom: 0;
      width: 300px;
      height: 300px;
      background: #fff;
      overflow: hidden;
      border-radius: 50%;
      transform: translate(-50%,85%);
      left: 50%;

      p{
        position: absolute;
        top:8px;
        font-size: 12px;
        left:50%;
        transform: translateX(-50%);

        @include for-phone-only{
          display: none;
        }
      }

      @include for-phone-only{
        width: 140px;
        height: 140px;
      }
      

      .gif{
        background-image: url('https://static1.squarespace.com/static/5508a48ce4b05ef9ded22bbe/t/5c06a3a788251bb5298b9041/1547930497660/1510001409393.gif?format=500w');
        background-size: contain;
        width: 100px;
        height: 100px;
        background-position: top;
        margin: 0 auto;
        @include for-phone-only{
          display: none;
        }
      }
      
      img{
        display: block;
        margin: 0 auto;
      }

      .arrow_small{
        margin-top: 8px;
        animation: arrow-small 3s infinite ease-in-out;
        
        @include for-tablet-portrait-up{
          display: none;
        }
      }
      .arrow_big{
        animation: arrow-big 3s infinite ease-in-out;
        @include for-tablet-portrait-up{
          display: none;
        }
      }

      @keyframes arrow-small {
        0%{
          transform: translateY(0);
        }
        25%{
           transform: translateY(2px)
        }
        50%{
          transform: translateY(3px)
        }
        75%{
          transform: translateY(2px);
        }
        100%{
          transform: translateY(0);
        }
      }
      @keyframes arrow-big {
        0%{
          transform: translateY(0);
        }
        50%{
          transform: translateY(2px)
        }
        100%{
          transform: translateY(0);
        }
      }

      
      
    }
  }
</style>
