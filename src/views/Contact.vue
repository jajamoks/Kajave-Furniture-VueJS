<template>
  <div id="conta">
     <h1 class="heading">Contact Us</h1>
      <img class="lines_dot" src="../assets/Categories/lines_dot.png" alt>
      <div class="contact-flex">
        <div v-for="item in addresses" :key="item.address" class="single">
          <h1>{{item.city}}</h1>
          <div class="addr"><i class="fa fa-map-marker" aria-hidden="true"></i> <p> {{item.address}}</p> </div>
          <!-- <hr> -->
          <div class="cont">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <div class="text">
              <p v-if="item.landline">{{item.landline}}</p>
              <p v-if="item.mobile">{{item.mobile}}</p>
              <p v-if="item.mobile2">{{item.mobile2}}</p>
            </div>
          </div>

        </div>
      </div>
      <div class="email">
        <span> <i class="fa fa-envelope" aria-hidden="true"></i>  Kajave.indu@gmail.com</span>
      </div>
      <FormFooter/>
      <Footer/>
  </div>
</template>

<script>
import FormFooter from '@/components/FooterForm/FooterForm'
import Footer from '@/components/Footer/Footer';
export default {
  name:"ContactView",
  components:{
    FormFooter,
    Footer
  },
  data(){
    return{
      addresses:[
        {
          city:'Kolhapur:',
          address:`9/1/3, Lonar Vasahat,Near Menon and Menon, kolhapur 416005`,
          landline:`0231-2665525`,
          mobile:`9822453544`
        },
        {
          city:'Satara:',
          address:`Yashoda Boys Hostel,Dalvi Complex, Near Hotel Pranjali,NH4,Khed Chowk Satara`,
          mobile2:`9595254747`,
          mobile:`9822072080`,
        },
        {
          city:'Pune:',
          address:`Soulwood Ventures
            Tiny Industrial Cooperative Estate Ltd,Plot no-3&4,Kondhwa Pisoli Road,Kondhwa Budrukh,
            Near Khadi machine chowk,Pune-411048.`,
          mobile:`7020331895`
        }
      ]
    }
  },
  mounted(){
    window.scrollTo(0,0);
  }
}
</script>

<style lang="scss" scopped>
#conta{
  background: #fff;
  width: 100%;
  position: relative;
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
      margin-top: 32px;
      margin-bottom: 10px;
    }
  }

  .contact-flex{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @include for-phone-only{
      padding: 0 16px;
    }

    @include for-tablet-portrait-up{
      margin-top: 32px;
    }

    .single{
      width: 400px;
      padding: 16px;

      
      h1{
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
        text-align: left;
        margin-bottom: 8px;
        color: #9E866A;

        @include for-phone-only{
          font-size: 20px;
        }
      }

      hr{
        width: 80%;
        margin: 14px 0;
      }
      .addr{
        display: flex;
        text-align: left;
        margin-bottom: 8px;

        i{
          font-size: 28px;
          margin-right: 8px;;
        }


        .fa{
          color:#9E866A;
        }
        p{
          display: inline;
          text-align: left;
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #3C3C3C;

          @include for-phone-only{
            font-size: 14px;    
          }
        }
      }

      .cont{
        display: flex;
        text-align: left;

        i{
          font-size: 22px;
          margin-right: 8px;
        }


        .fa{
          color:#9E866A;
        }
        p{
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #3C3C3C;
          @include for-phone-only{
            font-size: 14px;    
          }

        }
      }
    }

  }

  .email{
    background: #f1f1f1;
    padding: 16px 0;
    span{
      font-weight: 300;
      font-size: 18px;
      line-height: 24px;

      color: #3C3C3C;

      .fa{
          color:#9E866A;
        }
    }
  }
}
</style>
