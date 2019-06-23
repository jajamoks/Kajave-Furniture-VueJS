<template>
  <div id="process2">
    <h1 class="title">Workflow</h1>
    <img class="lines_dot" src="../../assets/Categories/lines_dot.png">
    <div class="proc-flex">
      <div class="lf">
        <img  :src="loading == false ? processList[selectedProduct] : loadingImage " @load="loaded">
        <div class="nav-area">
          <div class="btn l" @click="slideIt('prev')">
            <div class="line"></div>
          </div>
          <div class="btn r" @click="slideIt('next')">
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="rr">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessComp2",
  data() {
    return {
      selectedProduct: 0,
      loading: false,
      loadingImage:require('../../assets/loading.gif'),
      processList: [
        require("../../assets/process/11.jpg"),
        require("../../assets/process/22.jpg"),
        require("../../assets/process/3.jpg"),
        require("../../assets/process/44.jpg"),
        require("../../assets/process/55.jpg"),
        require("../../assets/process/66.jpg"),
        
      ]
    };
  },
  methods: {
    slideIt: function(type) {
      this.loading = true;
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
    loaded: function() {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scopped>
#process2 {
  width: 100%;
  position: relative;
  background: #9e866a;
  padding-top: 32px;

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
      margin-bottom: 8px;
      
    }
  }

  .proc-flex {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .lf {
      width: 50%;

      @include for-phone-only{
        width: 100%;
      }

      img {
        width: 100%;
        height: 379px;
        object-fit: cover;
        background-repeat: no-repeat;
      }
      .nav-area {
        display: flex;

        justify-content: flex-end;
        align-items: center;
        position: relative;
        @include for-tablet-portrait-up {
          height: 96px;
          padding-right: 16px;
        }

        @include for-phone-only{
          padding : 16px 0;
          justify-content: center;
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
    .rr {
      width: 50%;
      background: #c3a989;
      text-align: left;
      padding: 45px;
      @include for-phone-only{
        width: 100%;
      }
      p {
        font-style: normal;
        font-weight: 400 !important;
        font-size: 16px;
        line-height: 21px;
        color: #ffffff;
      }
    }
  }
}
</style>
