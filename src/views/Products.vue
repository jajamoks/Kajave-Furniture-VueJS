<template>
  <div id="prods">
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
        <Gallery :title="title" v-bind:products="products"/>
      </div>
    </div>
    <FooterForm/>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery/Gallery";
import FooterForm from "@/components/FooterForm/FooterForm";
export default {
  components: {
    Gallery,
    FooterForm
  },
  data() {
    return {
      products: [],
      title: ""
    };
  },
  props: ["id"],
  mounted() {
    window.scrollTo(0, 0);

    switch (this.id) {
      case "chairs":
        this.title = "Chairs";
        this.products = [];
        this.products = this.$store.state.products.filter(product => {
          return product.type == "chair";
        });
        break;
      case "beds":
        this.title = "BEDS";
        this.products = this.$store.state.products.filter(product => {
          return product.type == "bed";
        });
        break;

      case "dining":
        this.title = "DINING";
        this.products = this.$store.state.products.filter(product => {
          return product.type == "dining";
        });
        break;
      case "sofas":
        this.title = "SOFAS";
        this.products = this.$store.state.products.filter(product => {
          return product.type == "sofa";
        });
        break;

      case "chestofdrawers":
        this.title = "CHEST OF DRAWERS";
        this.products = this.$store.state.products.filter(product => {
          return product.type == "chestofdrawers";
        });
        break;
      case "wardrobe":
        this.title = "Wardrobe";
        this.products = this.$store.state.products.filter(product => {
          return product.type == "wardrobe";
        });
        break;
      case "indiansitting":
        this.title = "Indian Sitting";
        this.products = this.$store.state.products.filter(product => {
          return product.type == "indiansitting";
        });
        break;
        case "centertable":
        this.title = "Center Table";
        this.products = this.$store.state.products.filter(product => {
          return product.type == "centertable";
        });
        break;

      default:
        break;
    }
  }
};
</script>

<style lang="scss" scopped>
#prods {
  width: 100%;
  position: relative;

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
        padding: 119px 59px 119px 70px;
        position: relative;

        p {
          margin-top: 20px;
          font-weight: 300;
          font-size: 20px;
          line-height: 27px;
          text-align: right;
          color: #8a8a8a;
          position: relative;
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
        padding: 0 100px;
      }
      @include for-phone-only {
        width: 100%;
      }
    }
  }
}
</style>
