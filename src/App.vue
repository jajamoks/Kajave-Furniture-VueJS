<template>
  <div id="app">
    <Toolbar/>
    <div class="app-content">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar/Toolbar.vue";
import app from "./firebase";
export default {
  name: "App",
  components: {
    Toolbar
  },
  mounted() {
    
  },
  created(){
    app.content
      .get({ schemaKey: "5OXzHGfHvLxrybi3VGTq" })
      .then(res => {
        for (var key in res) {
          if (res.hasOwnProperty(key)) {
            var val = res[key];
            this.$store.commit('addProductToState',{name:val.name,imgs:val.imgs,type:val.type,img:val.img,id:key,number:parseInt(val.number,10)})
          }
        }
        
      })
      .catch(err => {
        console.log("ERR", err);
      });
  }
};
</script>


<style lang="scss" scopped>
* {
  font-family: "Exo", sans-serif;
  margin: 0;
  padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-content {
  width: 100%;
  padding-top: 1px;
  box-sizing: border-box;
  @include for-phone-only {
    padding-top: 54px;
  }
  @include for-tablet-portrait-up {
    padding-top: 80px;
  }
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
