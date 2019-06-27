<template>
  <div id="product">
    <p class="text-1">Solid Wood Furniture</p>
    <div class="appbar">
      <img class="left-btn" @click="navigateBack" src="../assets/left.png" alt>
      <h1 class="p-name">{{productName}}</h1>
    </div>
    <div class="showcase-phone">
      <div class="product-img">
        <div
          class="img"
          v-bind:style="{ 'background-image': 'url(' + productImages[selectedImg] + ')' }"
        ></div>
      </div>
      <div class="views">
        <img
          v-for="(img,index) in productImages"
          :key="index"
          :src="img"
          @click="selectedImg=index"
          :class="{active:index === selectedImg}"
        >
      </div>
      <hr>
      <div class="details">
        <h1>{{productName}}</h1>
        <p>{{productDesc}}</p>
        <!-- <h4>Dimensions : As Per Your Requirement</h4> -->
        <div class="polish">
          <h4>Available Polish Type :</h4>
          <ul>
            <li v-for="polish in polishTypes" :key="polish.name">
              <img :src="polish.img" alt>
              <span>{{polish.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <p style="margin:8px 0;">*Fabrics available as per your choices.</p>
      <hr>
    </div>
    <div class="showcase-desktop">
      <div class="one">
        <img
          v-for="(img,index) in productImages"
          :key="index"
          :src="img"
          @click="selectedImg=index"
          :class="{active:index === selectedImg}"
        >
      </div>
      <div class="two">
        <v-zoomer class="img">
          <img
           :src="productImages[selectedImg]"
            style="object-fit: contain; width: 100%; height: 100%;"
            id="myimage"
          >
        </v-zoomer>
        <img  >
      </div>
      <div class="three">
        <h1>{{productName}}</h1>
        <p>{{productDesc}}</p>
        <!-- <h4>Dimensions : As Per Your Requirement</h4> -->
        <div class="polish">
          <h4>Available Polish Type :</h4>
          <ul>
            <li v-for="polish in polishTypes" :key="polish.name">
              <img :src="polish.img" alt>
              <span>{{polish.name}}</span>
            </li>
          </ul>
        </div>
        <!-- <p class="fabric">*Fabrics available as per your choices.</p> -->
      </div>
    </div>
    <div class="showall phone-only">
      Show All Products
      <strong>>></strong>
    </div>
    <FooterForm/>
  </div>
</template>

<script>
import FooterForm from "@/components/FooterForm/FooterForm";
import app from "../firebase";
export default {
  name: "SingleProductView",
  components: { FooterForm },
  props: ["productId"],
  data() {
    return {
      productName: "Doncaster Chair",
      selectedImg: 0,
      zoomerShown: false,
      productImages: [],
      productDesc: ``,
      productDimen: "as per your requirement",
      polishTypes: [
        {
          img: require("../assets/Polish/rosewood.jpg"),
          name: "Rose Wood"
        },
        {
          name: "Teak",
          img: require("../assets/Polish/teak.jpg")
        },
        {
          name: "Wallnut",
          img: require("../assets/Polish/wallnut.jpg")
        },
        {
          name: "Wenge",
          img: require("../assets/Polish/wenge.jpg")
        }
      ]
    };
  },
  methods: {
    navigateBack: function() {
      this.$router.go(-1);
    },
    mouseover: function() {
      this.zoomerShown = true;
    },
    mouseleave: function() {
      this.zoomerShown = false;
    },
    initZoom: function(imgID, resultID) {
      var img, lens, result, cx, cy;
      img = document.getElementById(imgID);
      result = document.getElementById(resultID);
      /* Create lens: */
      lens = document.createElement("DIV");
      lens.setAttribute("class", "img-zoom-lens");
      /* Insert lens: */
      img.parentElement.insertBefore(lens, img);
      /* Calculate the ratio between result DIV and lens: */
      cx = result.offsetWidth / lens.offsetWidth;
      cy = result.offsetHeight / lens.offsetHeight;
      /* Set background properties for the result DIV */
      result.style.backgroundImage = "url('" + img.src + "')";
      result.style.backgroundSize =
        img.width * cx + "px " + img.height * cy + "px";
      /* Execute a function when someone moves the cursor over the image, or the lens: */
      lens.addEventListener("mousemove", moveLens);
      img.addEventListener("mousemove", moveLens);
      /* And also for touch screens: */
      lens.addEventListener("touchmove", moveLens);
      img.addEventListener("touchmove", moveLens);
      function moveLens(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        /* Calculate the position of the lens: */
        x = pos.x - lens.offsetWidth / 2;
        y = pos.y - lens.offsetHeight / 2;
        /* Prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) {
          x = img.width - lens.offsetWidth;
        }
        if (x < 0) {
          x = 0;
        }
        if (y > img.height - lens.offsetHeight) {
          y = img.height - lens.offsetHeight;
        }
        if (y < 0) {
          y = 0;
        }
        /* Set the position of the lens: */
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /* Display what the lens "sees": */
        result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
      }
      function getCursorPos(e) {
        var a,
          x = 0,
          y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
      }
    },
    getImagesFromServer: function() {
      const products = [];
      const product = this.$store.state.products.find(item => {
        return item.id == this.productId;
      });

      this.productName = product.name;
      this.productDesc = product.description;
      product.imgs.forEach(imgRef => {
        app.storage
          .getURL({
            fileId: imgRef.id
          })
          .then(res => {
            products.push(res);
          });
      });

      this.productImages = products;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getImagesFromServer();
  }
};
</script>

<style lang="scss" scopped >
.hide {
  display: none;
}
.show {
  display: inline-block;
}
.text-1 {
  font-size: 12px;
  font-weight: 600;
  padding: 8px 0;
  border-top: 0.2px solid rgb(190, 190, 190);
  border-bottom: 0.2px solid rgb(190, 190, 190);
  text-align: center !important;

  @include for-tablet-portrait-up {
    display: none;
  }
}

#product {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 1px;
  .showcase-phone {
    @include for-tablet-portrait-up {
      display: none;
    }
  }

  .appbar {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;

    @include for-tablet-portrait-up{
      height: 80px;
    }

    .left-btn {
      object-fit: contain;
      width: 40px;
      height: 40px;
      margin-left: 16px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: 0.3s all ease;
      padding: 8px;

      @include for-tablet-portrait-up{
        width: 48px;
        height: 48px;
        
      }
    }
    .left-btn:hover{
      border: 1px solid #9e866a;
    }
  }

  .p-name {
    font-family: Exo;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-top: 16px;
    text-align: center;
    color: #9e866a;
    text-transform: uppercase;
     margin-bottom: 16px;
     margin-left: 16px;

    @include for-tablet-portrait-up {
      font-size: 24px;
      text-align: left;
      margin-left: 32px;
     
    }
  }
  .product-img {
    width: 100%;
    position: relative;
    background: #f1f1f1;
    padding: 11px;
    margin-top: 16px;


    @include for-phone-only{
      margin-top: 8px;
    }

    .img {
      width: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 50vh;
      transition: 0.2s ease background;

      @include for-phone-only {
        height: 250px;
      }
    }
  }
  .views {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 16px 0;
    align-items: center;
    justify-content: center;

    .active {
      border: 2px solid black;
    }

    img {
      transition: 0.2s ease all;
      width: 100px;
      height: 100px;
      margin: 0 16px;

      @include for-phone-only {
        width: 57px;
        height: 57px;
        margin: 0 8px;
      }
    }
  }

  hr {
    margin: 0 16px;
    overflow: hidden;
  }

  .details {
    text-align: left;
    padding: 20px;
    h1 {
      font-weight: 600;
      font-size: 24px;
      letter-spacing: 0.04em;
      color: black;
      margin: 8px 0;
    }

    p {
      font-weight: normal;
      font-size: 11px;
      color: #8a8a8a;
    }

    h4 {
      font-weight: normal;
      color: black;
      margin: 8px 0;
    }

    ul {
      list-style: none;

      li {
        margin: 9px 0;

        span {
          font-weight: 600;
          font-size: 14px;
          color: #9e866a;
          margin: 0 12px;
        }
      }
    }
  }

  .showcase-desktop {
    width: 100%;
    display: flex;
    height: 439px;
    margin: 80px 0;

    @include for-phone-only {
      display: none;
    }

    .one {
      width: 80px;
      align-self: flex-end;
      margin: 0 32px 0 64px;
      img {
        width: 78px;
        height: 78px;
        margin: 12px;
        border: 1.5px solid transparent;
        transition: 0.2s ease all;
        object-fit: cover;
        object-position: center;
      }

      img:last-child {
        margin-bottom: 0;
      }

      .active {
        border-color: black;
      }
    }

    .two {
      width: 620px;
      height: 100%;
      position: relative;

      .img {
        width: 600px;
        height: 100%;
        object-position: bottom;
        background-position: center;
        background-repeat: no-repeat;
        align-self: flex-end;
        transition: all 0.2s ease;
        overflow: hidden;
        position: relative;
      }
      .img:hover{
        cursor: zoom-in;

        &::after{
          content: "User Scroll To Zoom";
          position: absolute;
          top:0;
          left:0;
          color: black;
        }
      }
    }

    .three {
      width: 500px;
      text-align: left;
      padding-left: 43px;
      margin-left: 16px;
      border-left: 1px solid rgb(161, 161, 161);

      h1 {
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
        letter-spacing: 0.04em;
        color: #000000;
        margin-bottom: 12px;
      }

      p {
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #8a8a8a;
        margin-bottom: 16px;
      }

      h4 {
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        margin-bottom: 16px;
      }

      ul {
        list-style: none;
        li {
          margin: 16px 0;
          img {
            margin-right: 8px;
          }
          span {
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: #9e866a;
          }
        }
      }

      .fabric {
        margin-top: 32px;
        padding: 9px 0;
        border-top: 1px solid rgb(221, 221, 221);
        border-bottom: 1px solid rgb(221, 221, 221);
      }
    }
  }

  .showall {
    background: #efefef;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.06em;
    color: #9e866a;
    text-transform: uppercase;
    padding: 8px 0;
    margin-top: 8px;
  }
}

</style>
