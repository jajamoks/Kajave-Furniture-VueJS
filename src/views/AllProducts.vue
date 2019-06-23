<template>
  <div id="categories">
    <p class="text-1">Solid Wooden Furniture</p>
    <div class="dual-view">
      <div class="left" sticky-container>
        <div class="box" v-sticky :sticky-top="80" sticky-side="top">
          <p>The primary focus area is classy furniture for living room, bedroom, lounge, theme restaurants and sit-outs. We also provide made to order customized wooden furniture along with complete home décor interior solutions based on specific taste, designs, utility and requirements of our clients. We provide quality assurance and warranty for all our furniture products.</p>
          <div class="shape">
            <div class="dot"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="flex">
          <div
            v-for="category in categories"
            :key="category.title"
            :style="{ backgroundImage: `url(${category.img})` }"
            class="card"
            @click="showProducts(category)"
          >
            <div class="text-box">
              <p class="title">{{category.title}}</p>
              <img class="lines_dot" src="../assets/Categories/lines_dot.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FormFooter/>
  </div>
</template>

<script>
import FormFooter from "@/components/FooterForm/FooterForm";
import Footer from "@/components/Footer/Footer";
export default {
  name: "CategoriesComponent",
  components: {
    FormFooter,
    Footer
  },
  data() {
    return {
      categories: [
        {
          img: require("../assets/Categories/sofa.jpg"),
          title: "SOFAS",
          route: "sofas"
        },

        {
          img: require("../assets/Categories/chair.jpg"),
          title: "CHAIRS",
          route: "chairs"
        },
        {
          img: require("../assets/Categories/dining.jpg"),
          title: "DINING",
          route: "dining"
        },
        {
          img: require("../assets/Categories/ct.jpg"),
          title: "Center Table",
          route: "centertable"
        },
        {
          img: require("../assets/Categories/bed.jpg"),
          title: "BEDS",
          route: "beds"
        },

        {
          img: require("../assets/Categories/cod.jpg"),
          title: "Chest Of Drawers",
          route: "chestofdrawers"
        },
        {
          img: require("../assets/Categories/ind_sit.jpg"),
          title: "Indian Siting",
          route: "indiansitting"
        }
      ]
    };
  },
  methods: {
    showProducts: function(type) {
      this.$router.push(`/products/${type.route}`);
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scopped>
#categories {
  width: 100%;
  padding-top: 1px;
  position: relative;


  .text-1 {
    font-size: 12px;
    font-weight: 600;
    padding: 8px 0;
    @include for-tablet-portrait-up {
      display: none;
    }
  }

  .dual-view {
    width: 100%;
    @include for-tablet-portrait-up {
      display: flex;
    }

    .left {
      width: 25%;
      position: relative;
      border-right: 1px solid #8a8a8a;

      @include for-phone-only {
        display: none;
      }

      .box {
        position: relative;

        @include for-tablet-portrait-up {
          padding: 16px;
          padding-top: 80px;
        }

        @include for-desktop-up {
          padding: 80px 59px 80px 70px;
        }

        p {
          font-weight: 300;
          text-align: right;
          color: #8a8a8a;
          position: relative;

          @include for-tablet-portrait-up {
            font-size: 18px;
          }

          @include for-desktop-up {
            line-height: 27px;
            font-size: 20px;
          }
        }

        .shape {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: 16px;
          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #9e866a;
            margin-right: 8px;
          }
          .line {
            width: 80px;
            height: 2px;
            background: #9e866a;
          }
        }
      }
    }

    .right {
      width: 75%;

      @include for-tablet-portrait-up {
        padding: 0 80px;
      }
      @include for-phone-only {
        width: 100%;
      }
    }
  }

  .flex {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @include for-tablet-portrait-up {
      margin-top: 80px;
      padding: 36px 72px;
      background: #f1f1f1;
      justify-content: center;
      align-items: center;
    }
  }
  .card {
    transition: 0.3s ease all;

    @include for-tablet-portrait-up {
      width: 329px;
      position: relative;
      height: 217px;
      background-position: center;
      background-size: contain;
      margin: 0 24px;
      margin-bottom: 64px;
    }

    @include for-phone-only {
      width: 100%;
      position: relative;
      height: 217px;
      background-position: center;
      background-size: contain;
      margin: 0 24px;
      margin-bottom: 48px;
    }

    .text-box {
      width: 55%;
      background: #fff;
      min-height: 40px;
      color: black;
      padding: 8px 32px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      transition: 0.3s ease all;

      .title {
        position: relative;
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
      }
      .lines_dot {
        margin: 4px 0;
      }
    }
  }

  .card:hover {
    cursor: pointer;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);

    .text-box {
      bottom: 10px;
    }
  }
}
</style>
