<template>
  <div id="ff">
    <div class="nav-top">
      <ul>
        <li v-for="menu in menuItems" :key="menu.name">
          <router-link :to="menu.link">{{menu.name}}</router-link>
        </li>
      </ul>
      <div class="info">
        <p>
          <span style="color:#9E866A; font-weight:500">Email:</span>kajavefurniture@gmail.com
        </p>
        <p>
          <span style="color:#9E866A; font-weight:500">Address:</span> 9/1/3, Lonar vasahat, Near Menon and Menon, Kolhapur, Maharashtra 416005
        </p>
      </div>
    </div>
    <MyForm/>
    <div class="nav-bottom">
      <div class="social">
        <!-- <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a> -->
        <!-- <i class="fa fa-google-plus" aria-hidden="true"></i> -->
        <a target="_blank" href="https://www.facebook.com/kajavefurniturekop/">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/kajavefurniturekolhapur/?hl=en" target="_blank">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <div class="bni-mem">
        <div class="line l"></div>
        <img class="bni" src="../../assets/brand/bni.webp">
        <div class="line r"></div>
      </div>
      <ul>
        <li v-for="menu in menuItems" :key="menu.name">
          <router-link :to="menu.link">{{menu.name}}</router-link>
        </li>
      </ul>
      <div class="info">
        <p>
          <span style="color:#9E866A; font-weight:500">Email:</span>kajavefurniture@gmail.com
        </p>
        <p>
          <span style="color:#9E866A; font-weight:500">Address:</span> 9/1/3, Lonar vasahat, Near Menon and Menon, Kolhapur, Maharashtra 416005
        </p>
        <p class="copyright">Kajave Furniture | Copyright {{date}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import MyForm from "@/components/GetQuote/ContactForm";
export default {
  name: "FooterForm",
  components: {
    MyForm
  },
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Products",
          link: "/allproducts"
        },
        {
          name: "Factory",
          link: "/factory"
        },

        {
          name: "About",
          link: "/about"
        },
        {
          name: "Contact Us",
          link: "/contact"
        },
        {
          name: "FAQ & Policy",
          link: "faq"
        }
      ],
      date: new Date().getFullYear()
    };
  },
  methods: {
    navigateTo: function(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style lang="scss" scopped>
#ff {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #232323;
  position: relative;
  padding-top: 0.2px;

  a {
    text-decoration: none;
    color: #80776a;
    position: relative;
    &.router-link-exact-active {
      color: rgb(173, 173, 173);
      text-decoration: none;
      &::after {
        content: "";
        width: 100%;
        position: absolute;
        height: 2px;
        background: #80776a;
        bottom: -2px;
        left: 0;
      }
    }
    &.router-link-active {
      text-decoration: none;
    }
  }

  a:hover {
    color: rgb(173, 173, 173);
  }

  a::after {
    display: none;
  }

  .nav-top {
    @include for-tablet-portrait-up {
      display: none;
    }
  }

  .nav-bottom {
    background: #000;
    width: 100%;

    .social {
      font-size: 22px;

      i {
        margin: 24px 16px;
        transition: 0.3s ease all;
        cursor: pointer;
        color: #696969;
      }
      i:hover {
        color: #9e866a;
      }
    }

    .bni-mem {
      display: flex;
      justify-content: center;
      align-items: center;
      @include for-tablet-portrait-up{
        margin-bottom: 16px;
      }
      
      @include for-phone-only{
        margin-bottom: 24px;
      }
      .bni {
        width: 50px;
        height: 50px;
        border: 1px solid #696969;
        border-radius: 50%;
        position: relative;
      }

      .line{
        width: 100px;
        height: 0.5px;
        background: rgba(255, 255, 255, 0.411);
        margin: 0 8px;
      }
    }

    ul {
      padding: 0;

      @include for-phone-only {
        display: none;
      }

      li {
        font-size: 13px;
      }
    }

    .info {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      @include for-phone-only {
        display: none;
      }
      p {
        display: inline;
        margin: 0 8px;
      }
    }
  }

  ul {
    width: 100%;
    padding: 16px 0;

    li {
      display: inline;
      font-size: 12px;
      font-weight: normal;
      margin: 8px;
      color: #9e866a;
      cursor: pointer;
    }
  }

  .info {
    text-align: left;
    background: #000;
    padding: 16px 26px;

    p {
      color: #898989;
      font-weight: 300;
      font-size: 14px;
      margin: 8px 0;
      letter-spacing: 0.05em;
    }
  }
}
</style>
