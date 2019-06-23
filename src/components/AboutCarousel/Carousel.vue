<template>
  <div id="container">
     <img :src="imgs[currentImage]" @load="loaded">
    <div class="carousel-navi">
      <div class="button l" @click="slideIt('prev')">
        <div class="line"></div>
      </div>
      <div class="button r" @click="slideIt('next')">
        <div class="line"></div>
      </div>
    </div>
     <div v-if="showProgressBar" class="progressOverlay">
        <md-progress-spinner md-theme="kajave" :md-diameter="50" class="progressBar" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
     </div>
  </div>
</template>

<script>
export default {
  name:'ImageCarousel',
  data(){
    return{
      currentImage:0,
      showProgressBar:false,
      imgs:[
        require('../../assets/about/1.jpg'),
        require('../../assets/about/2.jpg'),
        require('../../assets/about/3.jpg'),
        require('../../assets/about/4.jpg'),
        require('../../assets/about/5.jpg')

      ]
    }
  },
  methods:{
    slideIt:function(type){
      this.showProgressBar = true;
      if(type === 'prev'){
        this.currentImage == 0 ? this.currentImage = this.imgs.length-1 : this.currentImage--
      }else{
        this.currentImage == this.imgs.length-1 ? this.currentImage = 0 : this.currentImage++
      }
    },
    loaded:function(){
      this.showProgressBar = false;
    }
  }
}
</script>

<style lang="scss" scopped >
#container{
  width: 100%;
  position: relative;
  padding-bottom: 1px;

  @include for-phone-only{
    padding: 20px;
    padding-bottom: 0;
  }

  .progressOverlay{
    width: 100%;
    position: absolute;
    height: 300px;
    background: rgba(255, 255, 255, 0.644);
    top:0;
    left:0;

    @include for-tablet-portrait-up{
      height: 500px;
    }
    
    .progressBar{
      top: 48px;

      @include for-tablet-portrait-up{
        top: 100px;
      }
    } 
  }
  

  img{
    
    @include for-phone-only{
      height: 192px;
      object-position: center;
      object-fit: contain;
    }

    @include for-tablet-portrait-up{
      height: 351px;
      width: 70%;
      object-position: center;
      object-fit: contain;
    }
  }
  
  .carousel-navi{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    .button{
      width: 48px;
      height: 48px;
      border: 1px solid black;
      margin: 0 8px;
      position: relative;
      cursor: pointer;

      .line{
        width: 20px;
        height: 1px;
        background: #000;
        position: absolute;
        top:50%;
      }
    }

    .button:hover{
      background: #818181;
      border:none;
      transition: 0.3s ease all;

      .line{
        background: #fff;
        transition: 0.3s ease all;
      }

      .line::after{
        border-color: #fff;
        transition: 0.3s ease all;
      }
    }
    

    .l{
      .line{
        transform: translate(-50%,0);
        left: 50%;

      }
      .line::after{
        content:'';
        border: 1px solid black;
        border-right: none;
        border-bottom: none;
        width: 8px;
        height: 8px;
        position: absolute;
        left:0;
        transform: translateY(-50%) rotateZ(-45deg);
        transform-origin: center;
      }
    }

    .r{
      .line{
        transform: translate(-50%,0);
        left: 50%;

      }
      .line::after{
        content:'';
        border: 1px solid black;
        border-left: none;
        border-top: none;
        width: 8px;
        height: 8px;
        position: absolute;
        right:0;
        top:50%;
        transform: translateY(-50%) rotateZ(-45deg);
        transform-origin: center;
      }
    }
  }

}
@import "~vue-material/dist/theme/engine";

@include md-register-theme("kajave", (
  primary: #9e866a, // The primary color of your application
  accent: #C4A989, // The accent or secondary color
  theme: dark // This can be dark or light
));

@import "~vue-material/dist/theme/all";
</style>
