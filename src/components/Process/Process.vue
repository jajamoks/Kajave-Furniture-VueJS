<template>
  <div id="process-comp">
    <h1 class="title">PROCESS</h1>
    <img class="lines_dot" src="../../assets/Categories/lines_dot.png">
    <div class="top-flex">
      <div class="desc">
        <p>
          Our professional design team is happy to assist you in all aspects of your
          furniture selection and purchase experience. Right from the point of
          understanding a customer's unique taste, to the right selection of richest
          fabrics, to the polish shades with meticulous attention to the minute details to
          bring every product alive, our designers are happy to assist at every step.
        </p>
        <br>
        <p>
          These processes involve detailing and ensure standardization in volume, shape,
          figure, size and quality of the finished furniture product. Our clients range from
          all segments such as walk-in customers, word-of-mouth customers, high-networth individuals, interior designers, architects, consultants and so on.
        </p>
      </div>
      <div class="nav-area">
        <div class="btn l" @click="slideIt('prev')">
          <div class="line"></div>
        </div>
        <div class="btn r" @click="slideIt('next')">
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="img-wrapper">
      <img
      class="bottom"
      :src="processList[selectedProduct].img "
      @load="loaded"
    />
    <div v-if="showProgressBar" class="progressOverlay">
        <md-progress-spinner md-theme="kajave" :md-diameter="50" class="progressBar" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
     </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ProcessComponents",
  data() {
    return {
      selectedProduct: 0,
      showProgressBar:false,
      processList: [
        {
          desc:
            "If one of our existing designs does not work for you, we welcome the opportunity to create a custom piece of furniture for you.\nAfter we meet and get an idea either from a conversation or a photo or two we will provide preliminary drawings as needed to arrive at a desired outcome.",
          img:
            "https://firebasestorage.googleapis.com/v0/b/kajave-furniture.appspot.com/o/flamelink%2Fmedia%2FIPxz2S8xyQZVW4KqmOmo_sketch.jpeg?alt=media&token=b62844e8-927d-47b4-85a9-83c9704df9d5"
        },
        {
          desc: `After we meet and get an idea either from a conversation or a photo or two we will provide preliminary drawings as needed to arrive at a desired outcome.
            If one of our existing designs does not work for you, we welcome the opportunity to create a custom piece of furniture for you.`,
          img:
            "https://firebasestorage.googleapis.com/v0/b/kajave-furniture.appspot.com/o/flamelink%2Fmedia%2F7sgDgHrJMYABil1yFKB5_DSC_0598.webp?alt=media&token=30683e65-e21a-4b5a-9215-36a4a9e9178b"
        },
        {
          img:'https://firebasestorage.googleapis.com/v0/b/kajave-furniture.appspot.com/o/flamelink%2Fmedia%2FfAUmjkM1gZoaajJyddzj_FILE1920.webp?alt=media&token=d9dea9c4-cd54-4f2f-831a-4cf06eb5ed2f'
        },
        {
          img:'https://firebasestorage.googleapis.com/v0/b/kajave-furniture.appspot.com/o/flamelink%2Fmedia%2FKu4SG5t7bgJgiH7c8fpP_DSC_0635.webp?alt=media&token=c4df530d-df1e-49db-8938-7e6c7831a73a'
        },
        {
          img:'https://firebasestorage.googleapis.com/v0/b/kajave-furniture.appspot.com/o/flamelink%2Fmedia%2FiCEExBiOCkHyOCbiTS12_DSC_0647.webp?alt=media&token=4dd8a2e8-8675-413f-9a92-f723d0de8026'
        }
      ]
    };
  },
  methods: {
    slideIt: function(type) {
       this.showProgressBar = true;
      if (type === "prev") {
        this.selectedProduct == 0
          ? (this.selectedProduct = this.processList.length - 1)
          : this.selectedProduct--;
      } else {
        this.selectedProduct == this.processList.length - 1
          ? (this.selectedProduct = 0)
          : this.selectedProduct++;
      }
    },
    loaded:function(){
      this.showProgressBar = false;
    }
  }
};
</script>

<style lang="scss" scopped >
#process-comp {
  width: 100%;
  position: relative;
  background: #9e866a;
  padding: 8px 0;
  overflow: hidden;
  overflow: hidden;

  @include for-phone-only {
    padding-top: 16px;
  }

  .title {
    font-family: Exo;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-transform: uppercase;

    @include for-tablet-portrait-up {
      font-size: 36px;
      margin-top: 32px;
      margin-bottom: 10px;
    }
  }

  .lines_dot {
    @include for-tablet-portrait-up {
      margin-bottom: 20px;
    }
  }

  .top-flex {
    display: flex;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
    justify-content: space-evenly;
    @include for-tablet-portrait-up {
      margin-bottom: 16px;
    }

    @include for-phone-only {
      align-items: center;
      
      padding-top: 8px;
    }

    .count-bg {
      width: 30px;
      height: 30px;
      padding: 16px;
      background: #ffeed3;
      overflow: hidden;
      border-radius: 50%;
      box-sizing: border-box;
      position: relative;
      @include for-phone-only {
        margin-top: -8px;
        margin-bottom: 8px;
      }

      p {
        display: inline;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -48%);
      }
    }

    .desc {
      padding: 8px;
      width: 100%;
      @include for-tablet-portrait-up{
      padding: 0 100px;
      }
      p {
        font-weight: normal;
        font-size: 18px;
        color: #ffeed3;
        text-align: left;

        @include for-phone-only {
          width: 85%;
          font-size: 16px;
          text-align: justify;
          margin: 0 auto;
        }
      }
    }

    .nav-area {
      display: flex;
      @include for-phone-only {
        margin-top: 16px;
      }
      justify-content: center;
      align-items: flex-end;
      position: relative;
      @include for-tablet-portrait-up {
        height: 80px;
      }

      .btn {
        width: 48px;
        height: 48px;
        border: 1px solid transparent;
        margin: 0 8px;
        background: #c4a989;
        position: relative;
        cursor: pointer;

        .line {
          width: 20px;
          height: 1px;
          background: #000;
          position: absolute;
          top: 50%;
        }
      }

      .btn:hover {
        background: #ffeed3;
        border: 1px solid black;
        transition: 0.3s ease all;

        .line {
          transition: 0.3s ease all;
        }

        .line::after {
          transition: 0.3s ease all;
        }
      }

      .l {
        .line {
          transform: translate(-50%, 0);
          left: 50%;
        }
        .line::after {
          content: "";
          border: 1px solid black;
          border-right: none;
          border-bottom: none;
          width: 8px;
          height: 8px;
          position: absolute;
          left: 0;
          transform: translateY(-50%) rotateZ(-45deg);
          transform-origin: center;
        }
      }

      .r {
        .line {
          transform: translate(-50%, 0);
          left: 50%;
        }
        .line::after {
          content: "";
          border: 1px solid black;
          border-left: none;
          border-top: none;
          width: 8px;
          height: 8px;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) rotateZ(-45deg);
          transform-origin: center;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    object-fit: contain;
    height: 400px;
    transition: 0.3s all ease;
    margin-bottom: -8px;
    @include for-phone-only {
      height: 180px;
      margin-bottom: 16px;
    }
  }

  .img-wrapper{
    width: 100%;
    .progressOverlay{
    width: 100%;
    position: absolute;
    height: 300px;
    background: rgba(255, 255, 255, 0.644);
    left:0;
    bottom: 0;

    @include for-tablet-portrait-up{
      height: 405px;
    }

    @include for-phone-only{
      height: 205px;
    }
    
    .progressBar{
      top: 40%;

      @include for-tablet-portrait-up{
        bottom: 0;
      }
    } 
  }
  }
}
</style>
