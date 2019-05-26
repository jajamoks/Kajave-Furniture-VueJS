<template>
  <div class="home">
    <p class="text-1">Solid Wooden Furniture</p>
    <Carousel/>
    <div class="dual-view">
      <div class="left" sticky-container>
        <div class="box" v-sticky :sticky-top="80" sticky-side="top">
          <p>Kajave Furniture is well known to provide <span style="color:#9E866A">customized design solutions in traditional, ethnic antique, contemporary and modern styles in solid wood.</span>  With a successful beginning from initially a furniture distributor, to setting up our own factory and infrastructure to support, to manufacturing our branded furniture Kajave Furniture has taken a stride towards forwarding integrated progress.</p>
          <div class="shape">
            <div class="dot"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <ProductCase/>
        <Categories/>
        <WhyUs/>
        <Testimonials/>
      </div>
    </div>
    <FormFooter/>
    <Footer/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel'
import ProductCase from '@/components/ProductCase/ProductCase'
import Categories from '@/components/Categories/Categories'
import WhyUs from '@/components/WhyUs/WhyUs'
import Testimonials from '@/components/Testimonials/Testimonials'
import FormFooter from '@/components/FooterForm/FooterForm'
import Footer from '@/components/Footer/Footer';

export default {
  name: 'home',
  components: {
    Carousel,
    ProductCase,
    Categories,
    WhyUs,
    Testimonials,
    FormFooter,
    Footer
  },
  data(){
    return{
    }
  },
  mounted(){
    window.scrollTo(0,0);
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    @include for-phone-only{
      padding-bottom: 57px;
    }


    .text-1{
      font-size: 12px;
      font-weight: 600;
      padding: 8px 0;

      @include for-tablet-portrait-up{
        display: none;
      }
    }


    .dual-view{
      width: 100%;
      @include for-tablet-portrait-up{
        display: flex;
        
      }

      .left{
        width: 25%;
        position: relative;
        border-right: 1px solid #8a8a8a;

        @include for-phone-only{
          display: none;
        }

        .box{
          padding: 119px 59px 119px 70px;
          position: relative;
          
          p{
            margin-top: 20px;
            font-weight: 300;
            font-size: 20px;
            line-height: 27px;
            text-align: right;
            color: #8A8A8A;
            position: relative;
          }

          
          .shape{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 16px;
            .dot{
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #9E866A;
              margin-right: 8px;
            
            }
            .line{
              width: 80px;
              height: 2px;
              background: #9E866A;
            }
          }
        }
       

        
      }

      .right{
        width: 75%;

        @include for-tablet-portrait-up{
          padding: 0 100px;
        }
        @include for-phone-only{
          width: 100%;
        }
      }
    }
  }
</style>

