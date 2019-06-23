<template>
  <div id="testi">
    <div class="top">
      <img src="../../assets/Testimonials/quote.png" alt>
    </div>
    <div class="flex">
      <div class="left">
        <img :src="testimonials[currentTestimonial].img" alt>
        <h4>{{testimonials[currentTestimonial].name}}</h4>
      </div>
      <div class="right">
        <p>{{testimonials[currentTestimonial].message}}</p>
      </div>
    </div>
    <div class="navigation">
      <div class="btn l" @click="slideIt('prev')">
        <div class="line"></div>
      </div>
      <div class="btn r" @click="slideIt('next')">
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      currentTestimonial: 0,
      testimonials: [
        {
          name: "Ar. Vineet Patil",
          message: `The pleasure has always been ours working along with you.
              and we hope to collaborate more with many projects to
              come.
              Wishing you all the best!`,
          img: require("../../assets/Testimonials/ar vineet.jpg")
        },
        {
          name: "Id. Sonal Yadav",
          message:
            "Kajave furniture is just “ONE STOP SHOP” for your need of premium quality solid wood furniture. Ultimate service and the personal customer touch give us the best in what we are looking for. I would 100% suggest to go for kajave furniture only!",
          img: require("../../assets/Testimonials/sonal_yadav.jpg")
        },
        {
          name: "Ar. Sujay Kulkarni",
          message:`I have associated with kajave furniture for major of my
            projects, and have been satisfied for the product so far from
            the design, material and service point of view. It is always
            pleasure to work with the technical team in kajave industries
            for any kind of customisation in design.
            Best wishes`,
          img: require("../../assets/Testimonials/ar_sujay.jpg")
        },
        {
          name: "Mr. Nilesh Hankare",
          message:`काजवे म्हणजे कोल्हापूर मधील एक १००% क्वालिटी, गॅॅरंटी फर्निचर देणारे दालन. मी त्यांच्याकडून माझ्या नवीन हॉटेलसाठी फर्निचर विकत घेतले. माझ्या हॉटेलला सुंदर गेटअप आला. माझ्याकडे येणाऱ्या २०० ते ३०० ग्राहकानी विचारणा केली कि हे फर्निचर कोठून घेतले आहे. सर्वाना इतके आवडले आहे. तसेच काजवे फर्निचर ऑर्डर वेळेत पूर्ण करून देतात. मला आवडले तुम्हालाही आवडेल.`,
          img: require("../../assets/Testimonials/nilesh.jpg")
        },
        {
          name: "Mr. Kapil C. Bhingarde",
          message:`The only place in Kolhapur for unique and vast
            collection of solid wood furniture.
            We bought dinning table chairs which are of
            unique design and very well fit and finished.`,
          img: require("../../assets/Testimonials/kapil.jpg")
        }
      ]
    };
  },
  methods: {
    slideIt: function(type) {
      if (type === "prev") {
        this.currentTestimonial == 0
          ? (this.currentTestimonial = this.testimonials.length - 1)
          : this.currentTestimonial--;
      } else {
        this.currentTestimonial == this.testimonials.length - 1
          ? (this.currentTestimonial = 0)
          : this.currentTestimonial++;
      }
    }
  }
};
</script>

<style lang="scss" scopped>
#testi {
  width: 100%;
  padding: 16px 0;
  position: relative;

  @include for-tablet-portrait-up {
    padding: 36px 0;
  }

  .top {
    width: 100%;

    img {
      width: 400px;

      @include for-phone-only {
        width: 160px;
      }
    }
  }

  .flex {
    width: 100%;
    display: flex;
    min-height: 150px;
    margin: 16px 0;
    justify-content: center;
    align-items: center;
    min-height: 260px;

    @include for-tablet-portrait-up {
      margin-top: 32px;
    }

    .left {
      width: 50%;
      h4 {
        font-style: italic;
        font-weight: normal;
        font-size: 10px;
        letter-spacing: 0.05em;
        margin: 8px 0;

        @include for-tablet-portrait-up {
          font-size: 18px;
          margin: 16px 0;
        }
      }
      img {
        width: 98px;
        height: 98px;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
        filter: grayscale(1);

        @include for-tablet-portrait-up {
          width: 237px;
          height: 237px;
        }
      }
    }
    .right {
      width: 50%;
      align-self: center;
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        letter-spacing: 0.05em;
        color: #9e866a;
        text-align: left;


        @include for-tablet-portrait-up {
          font-size: 16px;
          
        }

        @include for-desktop-up{
          width: 450px;
        }
      }
    }
  }

  .navigation {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @include for-tablet-portrait-up {
      float: right;
    }

    .btn {
      width: 48px;
      height: 48px;
      border: 1px solid black;
      margin: 0 8px;
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
      background: #818181;
      border: none;
      transition: 0.3s ease all;

      .line {
        background: #fff;
        transition: 0.3s ease all;
      }

      .line::after {
        border-color: #fff;
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
}
</style>
