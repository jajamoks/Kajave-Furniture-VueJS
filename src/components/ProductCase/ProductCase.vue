<template>
  <div id="product-case">
    <div class="carousel">
      <div class="left">
        <img v-show="!loading" :src="products[currentProduct].img" @load="loaded">
        <img  style="width:100px" src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" v-if="loading">
      </div>
      <div class="right">
        <h1>{{products[currentProduct].title}}</h1>
        <hr>
        <h4>{{products[currentProduct].subtitle}}</h4>
        <p>{{products[currentProduct].desc}}</p>
      </div>
    </div>
    <div class="navigation">
      <div class="nav-flex">
        <div class="nav-left" @click="slide('prev')"></div>
        <div class="dot"></div>
      </div>
      <div class="count">{{currentProduct + 1}}</div>
      <div class="nav-flex">
        <div class="dot"></div>
        <div class="nav-right" @click="slide('next')"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductShowcase",
  data() {
    return {
      loading: false,
      products: [
        {
          title: "Wiru Sidetable 1D",
          subtitle: "Bed & Bedsides",
          desc:
            "Oak veneered cabinet. Solid oak legs. One oak or white drawer. HProduct must be attached to the wall, the product have a readyness but not special fixing scrwes or dowels.",
          img: require("../../assets/ProductCase/table.png")
        },
        {
          title: "KDC 02",
          subtitle: "Chair",
          desc:
            "Oak veneered cabinet. Solid oak legs. One oak or white drawer. HProduct must be attached to the wall, the product have a readyness but not special fixing scrwes or dowels.",
          img: require("../../assets/ProductCase/111.webp")
        },
        {
          title: "KSO 19",
          subtitle: "Sofa",
          desc:
            "Oak veneered cabinet. Solid oak legs. One oak or white drawer. HProduct must be attached to the wall, the product have a readyness but not special fixing scrwes or dowels.",
          img: require("../../assets/ProductCase/333.webp")
        },

        {
          title: "KISO 02",
          subtitle: "Indian Sitting",
          desc:
            "Oak veneered cabinet. Solid oak legs. One oak or white drawer. HProduct must be attached to the wall, the product have a readyness but not special fixing scrwes or dowels.",
          img: require("../../assets/ProductCase/444.webp")
        },
        {
          title: "KDC 07",
          subtitle: "Chair",
          desc:
            "Oak veneered cabinet. Solid oak legs. One oak or white drawer. HProduct must be attached to the wall, the product have a readyness but not special fixing scrwes or dowels.",
          img: require("../../assets/ProductCase/222.webp")
        }
      ],
      currentProduct: 0
    };
  },
  methods: {
    slide: function(type) {
      this.loading = true;
      if (type == "prev") {
        this.currentProduct == 0
          ? (this.currentProduct = this.products.length - 1)
          : this.currentProduct--;
      } else {
        this.currentProduct == this.products.length - 1
          ? (this.currentProduct = 0)
          : this.currentProduct++;
      }
    },
    loaded: function() {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scopped>
#product-case {
  width: 100%;
  padding-top: 16px;
  position: relative;
  padding-bottom: 16px;


  @include for-tablet-portrait-up {
    height: 500px;
  }

  .carousel {
    width: 100%;
    display: flex;
    height: 100%;
    position: relative;

    .left {
      width: 50%;
      height: 100%;
      img {
        width: 80%;
        object-fit: contain;
        height: 100%;
        object-position: center;
      }
    }
    .right {
      width: 50%;
      text-align: left;
      box-sizing: border-box;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      hr {
        @include for-tablet-portrait-up {
          display: none;
        }
      }

      h1 {
        font-size: 18px;
        font-weight: 500;
        color: #9e866a;
        margin: 8px 0;

        @include for-tablet-portrait-up {
          font-size: 36px;
        }
      }

      h4 {
        color: black;
        margin: 8px 0;

        @include for-tablet-portrait-up {
          font-size: 22px;
        }
      }

      p {
        font-weight: 300;
        font-size: 12px;
        color: black;

        @include for-tablet-portrait-up {
          max-width: 450px;
          font-size: 16px;
          margin: 8px 0;
        }
      }
    }
  }
  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #c4a989;
      margin: 0 8px;
    }

    .nav-flex {
      display: flex;
      height: 100%;
      align-items: center;
      cursor: pointer;
    }

    .nav-left {
      background: url("../../assets/ProductCase/arrow_left.svg");
      width: 64px;
      height: 16px;
      position: relative;
      transition: 0.3s all ease;
    }

    .count {
      margin: 0 40px;
      @include for-tablet-portrait-up {
        font-size: 36px;
      }
    }

    .nav-right {
      background: url("../../assets/ProductCase/arrow_right.svg");
      width: 64px;
      height: 16px;
      position: relative;
      transition: 0.6s all ease;
    }

    .nav-left:hover {
      transform: translateX(-10px);
    }

    .nav-right:hover {
      transform: translateX(10px);
    }
  }
}
</style>
