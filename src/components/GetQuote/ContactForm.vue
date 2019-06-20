<template>
  <div id="contact">
    <h1 class="quote-heading">GET IN TOUCH</h1>
    <div class="form">
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact">
        <input name="bot-field" hidden>
        <md-field md-theme="kajave">
          <label>Name</label>
          <md-input name="User Name" v-model="name" required></md-input>
        </md-field>
        <md-field md-theme="kajave">
          <label>Email</label>
          <md-input v-model="email" name="Email" type="email" required></md-input>
        </md-field>
        <md-field md-theme="kajave">
          <label for="city">City</label>
          <md-select v-model="city" name="City" id="city" required md-dense>
            <md-option class="select" value="Kolhapur">Kolhapur</md-option>
            <md-option class="select" value="Pune">Pune</md-option>
            <md-option class="select" value="Satara">Satara</md-option>
          </md-select>
        </md-field>

        <md-field md-theme="kajave">
          <label>Textarea</label>
          <md-textarea required name="Message" v-model="message"></md-textarea>
        </md-field>
        <button @click="submitForm"  class="submit">Submit
          <i v-if="sending" :class="[{sending:sending}]" class="fa fa-circle-o-notch fa-spin"></i>
        </button>
      </form>
    </div>

    <p class="copyright">Kajave Furniture | Copyright {{date}}</p>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      date: new Date().getFullYear(),
      city: "",
      sending:false
    };
  },
  methods: {
    submitForm: function() {
      event.preventDefault();
      if (
        this.email == "" ||
        this.message == "" ||
        this.city == "" ||
        this.name == ""
      ) {
        this.$toasted.show("Fields Cannot Be Empty", {
          theme: "toasted-primary",
          type: "error",
          position: "bottom-right",
          fitToScreen:true,
          duration: 2000
        });
      } else {
        this.sending = true;
        this.submitToServer()
          .then(response => {
            this.sending = false;
            const body = response.json();
            this.$toasted.show("Thank you for contacting us! We will respond you as soon.", {
              theme: "toasted-primary",
              type: "success",
              position: "bottom-right",
              duration: 2000
            });
          })
          .catch(() => {
            this.sending = false;
            this.$toasted.show("Fields Cannot Be Empty", {
              theme: "toasted-primary",
              type: "error",
              position: "bottom-right",
              duration: 2000
            });
          });
      }
    },
    submitToServer() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        city: this.city
      };
      return new Promise((resolve, reject) => {
        fetch(`.netlify/functions/notify`, {
          method: "POST",
          body: JSON.stringify(data)
        })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
</script>

<style lang="scss" scopped>

.sending{
  margin-left: 8px;
}
.md-menu-content-container {
  width: 100%;
}
.md-list-item-text {
  font-size: 16px !important;
  display: block;
  padding: 8px;
  width: 100%;
}

.md-field {
  margin-bottom: 13px !important;
  margin-top: 4px !important;
}

.md-field::after {
  height: 1px;
  background: rgba(255, 238, 211, 0.521) !important;
  border-color: rgba(255, 238, 211, 0.521) !important;
}
#contact {
  width: 100%;
  background: #232323;
  padding-top: 1px;
  padding-bottom: 1px;
  overflow: hidden;

  .copyright {
    font-style: normal;
    font-weight: 300;
    font-size: 9px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #8b8b8b;
    margin: 8px 0;

    @include for-tablet-portrait-up {
      display: none;
    }
  }

  .quote-heading {
    font-family: Exo;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.05em;
    margin-top: 16px;
    color: #9e866a;

    @include for-tablet-portrait-up {
      font-size: 36px;
      margin: 36px 0;
    }
  }

  .form {
    margin: 0 26px;
    // display: none;

    @include for-tablet-portrait-up {
      width: 70%;
      margin: 0 auto;
    }
    .submit {
      background: #c4a989;
      color: black;
      padding: 8px 20px;
      width: 100%;
      border: none;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin: 0;
      margin-bottom: 8px;
      cursor: pointer;

      @include for-tablet-portrait-up {
        padding: 16px 0;
        font-size: 18px;
        margin: 29px 0;
        margin-top: 10px;
      }
    }
  }
}
@import "~vue-material/dist/theme/engine";

@include md-register-theme(
  "kajave",
  (
    primary: #9e866a,
    // The primary color of your application
      accent: #c4a989,
    // The accent or secondary color
      theme: dark // This can be dark or light
  )
);

@import "~vue-material/dist/theme/all";
</style>
