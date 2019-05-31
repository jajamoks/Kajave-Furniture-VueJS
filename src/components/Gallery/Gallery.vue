<template>
  <div id="gallery">
    <p class="text-1 phone-only">Solid Wooden Furniture</p>
    <div class="appbar">
      <img class="left-btn phone-only" @click="navigateBack" src="../../assets/Products/ic_left.png" alt>
      <h1 class="heading">{{title}}</h1>
      <img class="lines_dot" src="../../assets/Categories/lines_dot.png" alt>
    </div>

    <div class="flex">
      <div
        v-for="(product) in sortedProducts"
        :key="product.name"
        class="card"
        @click="goToProduct(product)">
        <div class="container " :class="[{landscape:title === 'SOFAS'},{landscape:title === 'BEDS'},,{landscape:title === 'DINING'},{landscape:title === 'Center Table'},{landscape:title === 'Indian Sitting'}]">
          <img :src="product.img">
          <h4>{{product.name}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryComp",
  components: {},
  props:['products','title'],
  data() {
    return {
    };
  },
  methods: {
    goToProduct: function(product) {
      this.$router.push(`/product/${product.id}`);
    },
    navigateBack: function() {
      this.$router.push("/");
    },  
  },
  
  computed:{
    sortedProducts: function(){
      return this.products.sort((a,b) => (a.number > b.number) ? 1 : ((b.number > a.number) ? -1 : 0));
    }
  }
};
</script>

<style lang="scss" scopped>
#gallery {
  width: 100%;
  position: relative;
  .text-1 {
    font-size: 12px;
    font-weight: 600;
    padding: 8px 0;
    border-top: 0.2px solid rgb(190, 190, 190);
    border-bottom: 0.2px solid rgb(190, 190, 190);
    text-align: center !important;
  }

  .appbar {
    width: 100%;
    position: relative;

    .left-btn {
      position: absolute;
      left: 16px;
    }
    
  }

  .heading {
    font-family: Exo;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-top: 16px;
    color: #9e866a;
    text-transform: uppercase;

    @include for-tablet-portrait-up{
      font-size: 36px;
      margin: 16px 0;
      margin-top: 32px;
    }
  }

  .lines_dot {
    margin-bottom: 20px;
  }

  .flex {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 32px;

    .card {
      max-width: 33%;
      box-sizing: border-box;
      border-bottom: 0.1px solid rgb(100, 100, 100);
      @include for-phone-only {
        width: 50%;
      }
      @include for-tablet-portrait-up{
        padding:0;
      }

      .container {
        padding: 8px;
        margin: 16px 0;
        transition: 0.3s ease all;
        border: 0.699405px solid transparent;
        

        @include for-tablet-portrait-up {
          padding: 8px;
          width: 208px;
        }

        h4 {
          font-weight: 600;
          font-size: 18px;
          display: inline-block;
          letter-spacing: 0.04em;
          text-align: left;
          color: black;
          margin: 8px 0;
          margin-bottom: 0;
          min-height: 50px;
          max-height: 50px;

          @include for-phone-only {
            font-size: 14px;
            min-height: 20px;
            max-height: 20px;
          }
        }

        img{
          width: 154px;
          height: 186px;
          object-fit: cover;
          object-position: center;
         @include for-tablet-portrait-up{
            width: 210px;
            height: 252px;
            
         }
        }
      }

      .container:hover {
        background: #f1f1f1;
        cursor: pointer;
        border-color: #9E866A;
        
      }
    }
  }
}
.landscape{
  width: 100% !important;
  img{
    width: 100% !important;
   @include for-phone-only{
      height: 120px !important;
   }
    object-fit: contain !important;
    
  }
}
</style>
