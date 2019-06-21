<template>
  <div id="conta">
    <h1 class="heading">Contact Us</h1>
    <img class="lines_dot" src="../assets/Categories/lines_dot.png" alt>
    <div class="contact-flex">
      <div v-for="item in addresses" :key="item.address" class="single">
        <h1>{{item.city}}</h1>
        <div class="addr">
          <div class="content">
            <p v-if="item.p1">{{item.p1}}</p>
            <br>
            <p v-if="item.p2">{{item.p2}}</p>
            <br>
            <p v-if="item.p3">{{item.p3}}</p>
            <br>
            <p v-if="item.p4">{{item.p4}}</p>
            <hr>
          </div>
        </div>
        <!-- <hr> -->
        <div class="cont">
          <div class="text">
            <p v-if="item.landline">{{item.landline}}</p>
            <p v-if="item.mobile">{{item.mobile}}</p>
            <p v-if="item.mobile2">{{item.mobile2}}</p>
            <hr>
            <a :href="'mailto:'+item.email" target="_top">{{item.email}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="email">
      <!-- <span>
        <i class="fa fa-envelope" aria-hidden="true"></i> kajave.indu@gmail.com
      </span> -->
    </div>
    <FormFooter/>
    <Footer/>
  </div>
</template>

<script>
import FormFooter from "@/components/FooterForm/FooterForm";
import Footer from "@/components/Footer/Footer";
export default {
  name: "ContactView",
  components: {
    FormFooter,
    Footer
  },
  data() {
    return {
      addresses: [
        {
          city: "Kolhapur:",
          p1: "9/1/3, Lonar Vasahat,",
          p2: "Near Menon and Menon,",
          p3: " Kolhapur 416005",
          landline: `0231-2665525`,
          mobile: `9822453544`,
          email:'kolhapur@kajavefurniture.com'
        },
        {
          city: "Satara:",
          address: `  Satara`,
          p1: "Yashoda Boys Hostel, Dalvi Complex,",
          p2: "Near Hotel Pranjali, NH4,Khed Chowk,",
          p3: "Satara 415003",
          mobile2: `9595254747`,
          mobile: `9822072080`,
          email:'satara@kajavefurniture.com'
        },
        {
          city: "Pune:",
          p1: "Soulwood Ventures,",
          p2:
            "Tiny Industrial Cooperative Estate Ltd, Plot No-3 & 4, Kondhwa Pisoli Road, Kondhwa Budrukh,",
          p3: "Near Khadi Machine Chowk",
          p4:' Pune-411048',
          mobile: `7020331895`,
          email:'pune@kajavefurniture.com'
        }
      ]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scopped>
#conta {
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

    @include for-tablet-portrait-up {
      font-size: 36px;
      margin-top: 32px;
      margin-bottom: 10px;
    }
  }

  .contact-flex {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @include for-phone-only {
      padding: 0 16px;
    }

    @include for-tablet-portrait-up {
      margin-top: 32px;
    }

    .single {
      width: 400px;
      padding: 16px;

      h1 {
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
        text-align: left;
        margin-bottom: 8px;
        color: #393939;

        @include for-phone-only {
          font-size: 20px;
          margin: 0;
        }
      }

      hr {
        width: 80%;
        margin: 14px 0;
      }
      .addr {
        display: flex;
        text-align: left;
        margin-bottom: 8px;

        i {
          font-size: 28px;
          margin-right: 8px;
        }

        .fa {
          color: #9e866a;
        }
        p {
          display: inline;
          text-align: left;
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #3c3c3c;

          @include for-phone-only {
            font-size: 14px;
          }
        }
      }

      .cont {
        display: flex;
        text-align: left;

        i {
          font-size: 22px;
          margin-right: 8px;
        }

        .fa {
          color: #9e866a;
        }
        p {
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #3c3c3c;
          @include for-phone-only {
            font-size: 14px;
          }
        }
      }
    }
  }
  

  .email {
    background: #f1f1f1;
    padding: 16px 0;
    span {
      font-weight: 300;
      font-size: 18px;
      line-height: 24px;

      color: #3c3c3c;

      .fa {
        color: #9e866a;
      }
    }
  }
}
 a {
    color: #3c3c3c;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
