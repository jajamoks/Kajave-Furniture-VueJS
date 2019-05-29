<template>
  <div id="categories">
      <div class="flex">
        <div v-for="category in categories" :key="category.title" :style='{ backgroundImage: `url(${category.img})` }'  class="card" @click="showProducts(category)" >
        <div class="text-box">
          <p class="title">{{category.title}}</p>
          <img class="lines_dot" src="../../assets/Categories/lines_dot.png" alt="">
        </div>
      </div>
     <div class="showall" @click="navToAllProducts">
        <p>Show All Products  <img src="../../assets/right_arrow.png" alt=""> </p>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'CategoriesComponent',
  data(){
    return{
      categories:[
         {
          img:require('../../assets/Categories/sofa.webp'),
          title:'SOFAS',
          route:'sofas'
        },
         {
          img:'https://firebasestorage.googleapis.com/v0/b/kajave-furniture.appspot.com/o/flamelink%2Fmedia%2FelZeMjVsu8KDFD7cId88_UT7A0650ok.webp?alt=media&token=35fece62-0f01-4ebf-880f-e6f66628e18f',
          title:'CHAIRS',
          route:'chairs'
        },
         {
          img:require('../../assets/Categories/dining.jpg'),
          title:'DINING',
          route:'dining'
        },
        {
          img:'https://firebasestorage.googleapis.com/v0/b/kajave-furniture.appspot.com/o/flamelink%2Fmedia%2FrJfv76E1GfTwNMDuL8Eg_UT7A1387ok.webp?alt=media&token=874b3879-3f18-459c-a51e-b62454f0b38c',
          title:'BEDS',
          route:'beds'
        },
        
        
        
      ]
    }
  },
  methods:{
    showProducts:function(type){
      this.$router.push(`/products/${type.route}`)
    },
    navToAllProducts:function(){
      this.$router.push('/allproducts')
    }
  }
}
</script>

<style lang="scss" scopped>
#categories{
  width: 100%;
  padding-top: 1px;
  position: relative;
 
 .flex{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @include for-tablet-portrait-up{
      margin-top: 80px;
      padding: 48px 48px;
      background: #f1f1f1;
      justify-content: center;
      align-items: center;
    }

 }
  .card{
    transition: 0.3s ease all;
    

    @include for-tablet-portrait-up{
      width: 329px;
      position: relative;
      height: 217px;
      background-position: center;
      background-size: contain;
      margin: 0 24px;
      margin-bottom: 64px;
    }

    @include for-phone-only{
      width: 100%;
      position: relative;
      height: 217px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      margin: 0 24px;
      margin-bottom: 48px;
    }

    .text-box{
      width: 55%;
      background: #fff;
      min-height: 40px;
      color: black;
      padding: 8px 32px;
      position: absolute;
      bottom: 0;
      left:50%;
      transform: translate(-50%,50%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      transition: 0.3s ease all;


      .title{
        position: relative;
        width: 100%;
        font-weight: 600;
        font-size: 14px;  
      }
      .lines_dot{
        margin: 4px 0;
      }
    }
  }

  .card:hover{
    cursor: pointer;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);

    .text-box{
      bottom: 10px;
    }
  }

  .showall{
    width: 100%;
    padding: 8px;  
    background: #9E866A;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    @include for-phone-only{
      padding: 16px 0;
      display: none;
    }

    p{
      text-transform: uppercase;      
      text-align: center;
      margin: 0 auto;
    }


    img{
      margin-left: 8px;
      position: relative;
      transition: 0.3s ease all;
    }

  }

  .showall:hover{
    cursor: pointer;

    img{
      transform: translateX(10px);
    }
  }
  
}

</style>
