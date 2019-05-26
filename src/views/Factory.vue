<template>
  <div id="factory">
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
        <h1 class="heading">Factory</h1>
        <img class="lines_dot" src="../assets/Categories/lines_dot.png" alt>
        <div class="section-1">
          <img src="../assets/factory/factory.webp" alt>
          <p>Our team of dedicated experts consists of experienced professional designers, skilled craftsmen, carpenters, quality control team, sales &amp; marketing associates, material dispatch team and customer care executives. All our team members are regularly trained and groomed to ensure that they are all updated with the knowledge of latest designs, patterns, trends, types of equipment and essential know-how about our industry.</p>
          <br>
          <p>We ensure all compliances and statutory safety standards in our work environment. We do not employ child labor as per Govt. of Maharashtra, India directives. In order to keep our team members constantly motivated to perform and deliver, our management at regular intervals acknowledges their efforts and initiatives.</p>
        </div>

        <div class="section-2">
          <h2>Personalized Care &amp; Consulting at KAJAVE FURNITURE:</h2>
          <p>Our professional design team is happy to assist you in all aspects of your furniture selection and purchase experience. Right from the point of understanding a customer's unique taste, to the right selection of richest fabrics, to the polish shades with meticulous attention to the minute details to bring every product alive, our designers are happy to assist at every step.</p>
          <h3>We at Kajave Furniture firmly believe in our outlined USP's as follows:</h3>
        </div>

        <div class="usp">
          <div v-for="usp in usps" :key="usp" class="badge">
            <p>{{usp}}</p>
          </div>
        </div>

        <div class="section-4">
          <div class="card">
            <p>To be a leading and trusted brand of custom designed solid wooden lifestyle furniture products by providing world class manufacturing of finest quality products and superior customer service.</p>
            <h4>OUR VISION</h4>
          </div>
          <div class="card">
            <p>Our mission is to create value for our customers through Reliability, Flexibility, Integrity, and Speed in delivery. We want every KAJAVE FURNITURE experience to be warm, happy, worry-free, and comfortable through Confidence and Trust.</p>
            <h4>OUR MISSION</h4>
          </div>
        </div>

        <div class="section-5 phone-only">
          <p>Our centralized production infrastructure is based at Hupri Road, adjacent to Kolhapur Airport in Maharashtra, India. This infrastructure is fully equipped with the unit wise division of execution managed by skilled and trained craftsmen. We make use of all the latest machinery and processes for the production of our furniture products. The centralization of infrastructure, process, manpower and resources helps us in standardization and to maintain the grade of the finished products at par with international standards.</p>
          <hr style="margin: 0 20px;">
          <br>
          <div class="imgs">
            <img style="margin-right:16px;" src="../assets/factory/1.jpg" alt>
            <img src="../assets/factory/2.jpg" alt>
          </div>
          <br>
          <hr style="margin: 0 20px;">
          <p>We make use of European beech wood for various furniture requirements of our clients. Our target audience for solid wooden furniture is of all age groups spread across all income groups. We offer the facility of buying furniture on finance through association with Bajaj Capital.</p>
          <div class="imgs" style="justify-content:flex-end;">
            <img src="../assets/factory/3.jpg" alt>
            <img style="margin-left:16px" src="../assets/factory/4.jpg" alt>
          </div>
          <p>All process related to the production of our furniture right from the selection of the wood, cutting the wood, precision laser cutting, joinery, molding, sanding to polishing is done in our state of the art centralized workshop unit.</p>
          <p
            style="padding-top:0px;"
          >These processes involve detailing and ensure standardization in volume, shape, figure, size and quality of the finished furniture product. Our clients range from all segments such as walk-in customers, word-of-mouth customers, high-networth individuals, interior designers, architects, consultants and so on.</p>
        </div>
        <div class="desktop-section-5">
          <div class="factory-item">
            <img  src="../assets/factory/1.jpg" >
            <img src="../assets/factory/2.jpg">
            <p>We make use of European beech wood for various furniture requirements of our clients. Our target audience for solid wooden furniture is of all age groups spread across all income groups. We offer the facility of buying furniture on finance through association with Bajaj Capital. </p>
          </div>
          <hr>
          <div class="factory-item">
            <p>All process related to the production of our furniture right from the selection of the wood, cutting the wood, precision laser cutting, joinery, molding, sanding to polishing is done in our state of the art centralized workshop unit.
            </p>
            <img src="../assets/factory/3.jpg" alt>
            <img src="../assets/factory/4.jpg" alt>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <FooterForm/>
  </div>
</template>

<script>
import FooterForm from "@/components/FooterForm/FooterForm";
export default {
  name: "FactoryView",
  components: {
    FooterForm
  },
  data() {
    return {
      usps: [
        `PURITY OF MATERIAL`,
        `QUALITY ASSURANCE`,
        `NO-COMPROMISE APPROACH`,
        `ETHICAL DEALINGS`,
        `VALUE FOR MONEY`
      ]
    };
  },
  mounted(){
    window.scrollTo(0,0);
  }
};
</script>

<style lang="scss" scopped>
.text-1 {
  font-size: 12px;
  font-weight: 600;
  padding: 8px 0;
  border-top: 0.2px solid rgb(190, 190, 190);
  border-bottom: 0.2px solid rgb(190, 190, 190);
  text-align: center !important;
    @include for-tablet-portrait-up{
        display: none;
    }
}

.phone-only{
  @include for-tablet-portrait-up{
    display: none;
  }
}

#factory {
  width: 100%;
  padding-top: 1px;
  

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


  .lines_dot {
    margin-bottom: 20px;
  }

  .section-1 {
    background: #f1f1f1;
    @include for-phone-only{
      padding: 21px;
    }

    @include for-tablet-portrait-up{
      padding: 32px;
    }

    p {
      font-weight: normal;
      font-size: 18px;
      color: #3c3c3c;
      text-align: left;
      @include for-phone-only {
        font-size: 16px;
        padding: 0 8px;
      }
    }

    img {
      margin-bottom: 20px;

      @include for-tablet-portrait-up{
        width: 100%;
      }
    }
  }

  .section-2 {
    @include for-phone-only{
      padding: 21px;
    }
    @include for-tablet-portrait-up{
      padding: 32px;
    }
    p {
      font-weight: normal;
      font-size: 18px;
      color: #3c3c3c;
      text-align: left;

      @include for-phone-only {
        font-size: 16px;
        padding: 0 8px;
      }
    }

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      text-align: center;
      color: #9e866a;

      @include for-tablet-portrait-up{
        line-height: 48px;
        width: 600px;
        margin:0 auto;
        margin-bottom: 32px;
        
      }

      @include for-phone-only {
        font-size: 18px;
        margin-bottom: 16px;
      }
    }

    h3 {
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      color: #9e866a;
      margin-top: 16px;
    }
  }

  .usp {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 32px;

    .badge {
      width: 120px;
      height: 120px;
      background-image: url("../assets/factory/bgusp.png");
      position: relative;
      background-size: contain;
      box-sizing: border-box;

      @include for-phone-only {
        width: 86px;
        height: 86px;
        margin: 8px 8px;
      }

      @include for-tablet-portrait-up{
        margin: 8px 16px;
      }

      p {
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        text-align: center;
        padding: 0;
        color: #ffffff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        @include for-phone-only {
          font-size: 9px;
          text-align: center;
          padding: 0 8px;
        }
      }
    }
  }

  .section-4 {
    width: 100%;
    background: #f1f1f1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px;

    @include for-tablet-portrait-up{
      justify-content: space-evenly;
    }

    .card {
      border: 1px solid #9e866a;
      box-sizing: border-box;
      padding: 20px;
      padding-bottom: 32px;
      margin: 16px 0;
      position: relative;
      @include for-phone-only {
        width: 100%;
      }

      @include for-tablet-portrait-up{
        width: 45%;
        height: 230px;
      }

      p {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #9e866a;
        text-align: left;

        @include for-tablet-portrait-up{
          font-size: 18px;
          line-height: 24px;
        }
      }

      h4 {
        font-weight: normal;
        font-size: 16px;
        color: #ffffff;
        background: #9e866a;
        display: inline;
        position: absolute;
        right: -1px;
        bottom: -1px;
        padding: 5px;
      }
    }
  }

  .section-5 {


    p {
      font-weight: normal;
      font-size: 18px;
      color: #3c3c3c;
      text-align: left;
      @include for-phone-only {
        font-size: 16px;
        padding: 20px 29px;
      }
    }
  }


  .imgs {
    display: flex;
    img {
      @include for-phone-only {
        width: 135px;
        height: 194px;
        object-fit: cover;
      }
    }
  }


  .desktop-section-5{
    @include for-phone-only{
      display: none;
    }

    width: 100%;
    padding: 32px;
    align-items: center;

    .factory-item{
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 24px 0;

      img{
        max-height: 300px;
        margin: 8px;
      }

      p{
        text-align: left;
        margin:8px;
        font-weight: normal;
        line-height: 24px;
        color: #3C3C3C;
        margin: 2px 16px;
        font-size: 18px;
      }
    }
  }
}
</style>
