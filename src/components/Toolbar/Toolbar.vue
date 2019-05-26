<template>
  <div id="nav-container">
    <div class="menu-expanded phone-menu" :class="[{active:menuShown}]">
      <ul>
        <li @click="navigateTo(item.link)" v-for="item in menuItems" :key="item.link">{{item.name}}</li>
      </ul>
    </div>

    <div class="bg"></div>
    <div id="toggle" @click="menuShown = !menuShown" v-bind:class="{ on : menuShown }">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
    <div class="logo" @click="navigateTo('/')"></div>
    <div class="desktop-menu">
      <ul>
        <li v-for="item in menuItems" :key="item.link">
          <router-link :to="item.link">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      menuShown: false,
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
          name: "About Us",
          link: "/about"
        },
        {
          name: "Contact Us",
          link: "/contact"
        }
      ]
    };
  },
  methods: {
    navigateTo: function(link) {
      this.$router.push(link);
      this.menuShown = false;
    }
  }
};
</script>

<style lang="scss" scopped>
#nav-container {
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 1000;
  border-bottom: 1px solid rgb(190, 190, 190);

  a {
    text-decoration: none;
    color: #80776a;
    position: relative;
    &.router-link-exact-active {
      color: black;
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

  a::after {
    content: "";
    width: 0;
    position: absolute;
    height: 2px;
    background: #80776a;
    bottom: -2px;
    left: 0;
    transition: all 0.3s ease;
  }
  a:hover {
    text-decoration: none !important;
    &::after {
      width: 100%;
    }
  }

  .phone-menu {
    @include for-tablet-portrait-up {
      display: none;
    }
  }

  .desktop-menu {
    color: black;
    position: absolute;
    bottom: 16px;
    left: 200px;

    ul {
      li {
        font-size: 18px;
        padding: 8px 0;
        transition: 0.3s ease all;
        user-select: none;
        font-weight: normal;
        display: inline;
        margin: 0 12px;
      }

      li:hover {
        cursor: pointer;
      }
    }

    @include for-phone-only {
      display: none;
    }
  }

  @include for-phone-only {
    height: 54px;
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
  }

  @import "menu-btn";

  .logo {
    background-image: url("../../assets/brand/nav-logo.png");
    width: 100px;
    height: 41px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @include for-tablet-portrait-up {
      height: 80px;
      left: 27px;
      transform: translateY(-50%);
    }
  }

  span {
    color: #80776a;
    position: absolute;
    right: 16px;
    font-size: 12px;
    bottom: 6px;
  }

  .menu-expanded {
    color: #80776a;
    background: #fff;
    position: absolute;
    width: 100%;
    top: 54px;
    transform: translateY(-500px);
    transition: 0.5s all ease;

    li {
      font-size: 18px;
      padding: 8px 0;
      transition: 0.3s ease all;
      user-select: none;
      font-weight: normal;
    }

    li:hover {
      background: #c4a989;
      color: white;
    }
  }

  .active {
    transform: translateY(0);
  }
}
</style>
