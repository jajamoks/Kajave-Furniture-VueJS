<template>
  <div id="about">
    <p class="text-1 phone-only">Solid Wood Furniture</p>

    <div class="dual-view">
      <div class="left" sticky-container>
        <div class="box" v-sticky :sticky-top="80" sticky-side="top">
          <p>
            Kajave Furniture is well known to provide
            <span
              style="color:#9E866A"
            >customized design solutions in traditional, ethnic, antique, contemporary and modern styles in solid wood.</span> With a successful beginning from initially a furniture distributor, to setting up our own factory and infrastructure to support, to manufacturing our branded furniture Kajave Furniture has taken a stride towards forwarding integrated progress.
          </p>
          <div class="shape">
            <div class="dot"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <h1 class="heading">About Us</h1>
        <img class="lines_dot" src="../assets/Categories/lines_dot.png" alt>
        <div class="section-1">
          <img  :src="loading == false ? shopPics[currentPic] :loadingImg " @load="loaded">
          <div class="nav-a">
          <div class="btn l" @click="slideIt('prev')">
            <div class="line"></div>
          </div>
          <div class="btn r" @click="slideIt('next')">
            <div class="line"></div>
          </div>
        </div>
          <p>
            Envisioned and Founded by Mr. Rajesh Maruti Kajave in the year 2010 with an honest initiative to provide
            <span
              style="color:#9E866A"
            >pure solid wooden, high quality finished furniture and furniture products</span> across Western Maharashtra and Pan India. Under the experienced guidance and nurturing of Mr. Rajesh Kajave and Mrs. Kavita R. Kajave, the brand "KAJAVE FURNITURE" is very ably managed by the next generation entrepreneurs Ar. Veeren R. Kajave and Ar. Mrunal V. Kajave.
          </p>          
        </div>
        <div class="section-2">
          <p class="pfirst">Kajave Furniture is the fastest growing process driven branded Solid Wooden Furniture Manufacturer having a physical presence in Kolhapur, Satara and Pune in Maharashtra, India. Kajave Furniture has its multifarious lavish furniture showroom in Lonar Vasahat, Kolhapur which is spread over 7500 sq. ft of area.</p>
          <p>We create, innovate and customize classy solid wood furniture. We offer a variety of exclusive versatile wooden home furniture ranging from beds and bedside tables to dining tables, chairs, center tables, wooden sofa sets, wardrobes, along with exclusively only customized pure solid wooden accessories to name a few. Customisation is only available at Kolhapur showroom. </p>
         
        </div>
        <img class="lines_dot" src="../assets/Categories/lines_dot.png" alt>
        <div class="carousel-wrapper">
          <Carousel/>
          <div class="bg">
            <p
              class="read-text"
            >The primary focus area is classy furniture for living room, bedroom, lounge, theme restaurants and sit-outs. We also provide made to order customized wooden furniture along with complete home décor interior solutions based on specific taste, designs, utility and requirements of our clients. We provide quality assurance and warranty for all our furniture products.</p>
          </div>
        </div>
        <ProcessComponent/>
        <p  style="color:#B04444; text-align:right; padding-right:16px"> *Customisation is only available at Kolhapur showroom.</p>
        <div class="below-process">
          <p>To contribute and give back to the society in some positive way the management team at Kajave Furniture has donated books to students of a local government school. Such social initiatives are a regularly undertaken by the organization.</p>
          <br>
          <p>To promote our brand and to communicate with our prospective customers we regularly participate in property Dalan exhibition at Kolhapur hosted by CREDAI Kolhapur. In the year 2018, we have also participated in the Aahar Ways exhibition at Goa.</p>
          <br>
          <p>
            The brand
            <strong style="color:#9E866A">"KAJAVE FURNITURE"</strong> therefore is well known and synonymous for firmly believing in
            <span>trues</span>,
            <span>honesty</span>,
            <span>transparency</span> and
            <span>ethical practices</span>.
          </p>
        </div>
        <Team/>
      </div>
    </div>

    <FooterForm/>
  </div>
</template>

<script>
import Carousel from "@/components/AboutCarousel/Carousel";
import Team from "@/components/Team/Team";
import FooterForm from "@/components/FooterForm/FooterForm";
import ProcessComponent from "@/components/Process/Process2";
export default {
  name: "AboutView",
  components: {
    Carousel,
    Team,
    FooterForm,
    ProcessComponent,
  },
  data(){
    return{
      loadingImg:require('../assets/loading.gif'),
      shopPics:[
        require('../assets/about/aboutimg.jpg'),
        require('../assets/about/shop2.jpg'),
        require('../assets/about/shop3.jpg'),

      ],
      currentPic:0,
      loading:false
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    slideIt: function(type) {
      this.loading = true;
      if (type === "prev") {
        this.currentPic == 0
          ? (this.currentPic = this.shopPics.length - 1)
          : this.currentPic--;
      } else {
        this.currentPic == this.shopPics.length - 1
          ? (this.currentPic = 0)
          : this.currentPic++;
      }
    },
    loaded: function() {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scopped>

.text-1 {
  font-size: 12px;
  font-weight: 600;
  padding: 8px 0;
  border-top: none;
}

.read-text {
  padding: 0 16px;
  text-align: justify;
  color: #8a8a8a;
  padding: 0 36px;
  font-size: 16px;
}

#about {
  width: 100%;
  position: relative;
  overflow: hidden;
  .heading {
    font-family: Exo;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-top: 16px;
    line-height: 24px;
    color: #9e866a;
    text-transform: uppercase;

    

    @include for-tablet-portrait-up {
      font-size: 36px;
      margin-top: 32px;
      margin-bottom: 10px;
    }
  }

  p{
    font-weight: 400 !important;
  }

  .lines_dot {
    margin-bottom: 20px;
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
        

        @include for-tablet-portrait-up{
          padding: 16px;
        }

        @include for-desktop-up{
          padding: 80px 59px 119px 70px;
        }

        p {
          margin-top: 16px;
          font-weight: 300;
          font-size: 20px;
          line-height: 27px;
          text-align: right;
          color: #8a8a8a;
          position: relative;

          @include for-tablet-portrait-up{
            margin-top: 80px;
            font-size: 18px;
            line-height: 24px;
          }

          @include for-desktop-up{
            margin-top: 16px;
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
        padding: 0 100px;
      }
      @include for-phone-only {
        width: 100%;
      }
    }
  }

  .section-1 {
    width: 100%;
    background: #f1f1f1;
    padding: 20px;

    img {
      height: 500px;
      width: 100%;
      object-fit: cover;
      @include for-phone-only{
        height: 200px;
      }
      @include for-tablet-portrait-up{
        height: 350px;
      }
      @include for-desktop-up{
        height: 500px;
      }
    }

    .nav-a {
        display: flex;

        justify-content: flex-end;
        align-items: center;
        position: relative;
        @include for-tablet-portrait-up {
          height: 96px;
          padding-right: 16px;
        }

        @include for-phone-only{
          padding : 16px 0;
          justify-content: center;
        }

        .btn {
          width: 48px;
          height: 48px;
          border: 1px solid transparent;
          margin: 0 8px;
          background: #c4a989;
          position: relative;
          cursor: pointer;

          .line {
            width: 20px;
            height: 1px;
            background: #000;
            position: absolute;
            top: 50%;
          }
        }

        .btn:hover {
          background: #ffeed3;
          border: 1px solid black;
          transition: 0.3s ease all;

          .line {
            transition: 0.3s ease all;
          }

          .line::after {
            transition: 0.3s ease all;
          }
        }

        .l {
          .line {
            transform: translate(-50%, 0);
            left: 50%;
          }
          .line::after {
            content: "";
            border: 1px solid black;
            border-right: none;
            border-bottom: none;
            width: 8px;
            height: 8px;
            position: absolute;
            left: 0;
            transform: translateY(-50%) rotateZ(-45deg);
            transform-origin: center;
          }
        }

        .r {
          .line {
            transform: translate(-50%, 0);
            left: 50%;
          }
          .line::after {
            content: "";
            border: 1px solid black;
            border-left: none;
            border-top: none;
            width: 8px;
            height: 8px;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%) rotateZ(-45deg);
            transform-origin: center;
          }
        }
      }

    p {
      text-align: justify;
      color: #8a8a8a;
      padding: 0 16px;
      font-size: 16px;

      @include for-tablet-portrait-up {
        font-size: 18px;
      }
    }
  }

  .section-2 {
    width: 100%;
    padding: 20px;
    text-align: left;
    .pfirst{
      @include for-tablet-portrait-up{
        margin-top:32px
      }
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      color: #8a8a8a;
      padding: 0 16px;
      margin-bottom: 16px;
      @include for-tablet-portrait-up {
        font-size: 18px;
        margin-bottom: 32px;
      }
    }
  }

  .carousel-wrapper {
    position: relative;

    @include for-tablet-portrait-up {
      margin-top: 32px;
    }
    .bg {
      width: 100%;
      padding-top: 300px;
      margin-top: -300px;
      background: #f1f1f1;

      @include for-phone-only {
        margin-top: -190px;
        padding-top: 190px;
      }
    }
    p {
      padding-bottom: 20px;
      @include for-tablet-portrait-up {
        margin-top: 32px;
        padding-bottom: 32px;
        margin: 32px 80px;
      }
    }
  }
  .below-process {
    width: 100%;
    text-align: left;
    margin: 32px 0;

    p {
      text-align: justify;
      color: #8a8a8a;
      font-weight: normal;
      padding: 0 16px;
      font-size: 16px;

      span {
        color: black;
      }

      @include for-tablet-portrait-up {
        font-size: 18px;
      }
    }
  }
}
</style>
