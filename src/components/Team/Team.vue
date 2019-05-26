<template>
  <div id="team">
  <div class="masonry">
  <div v-for="card in cards" :key="card.name" class="item">
    
    <div class="img">
      <img :src="card.img" alt="">
    </div>
    <div class="content">
      <p class="name">{{card.name}}</p>
      <p class="info" >{{card.p1}}</p>
      <br v-if="card.p2">
      <p v-if="card.p2" class="info" >{{card.p2}}</p>
      <br v-bind="card.p2">
      <p v-if="card.p3" class="info" >{{card.p3}}</p>
    </div>  
  </div>
</div>
  </div>
</template>

<script>
export default {
  name:'Team',
  data(){
    return{
      cards:[
        {
          name:"MR. RAJESH M. KAJAVE (Founder & M.D)",
          img:require('../../assets/team/1.png'),
          p1:`Mr. Rajesh M. Kajave is the founder and Managing Director of KAJAVE FURNITURE. He envisioned the trustworthy brand ‘KAJAVE FURNITURE” in the year 2009 with a successful leap in the furniture industry.`,
          p2:`His immense knowledge and awareness in the furniture industry along with very professional and systematic management of the company affairs for over 10 years since commencement, has won him many repeat happy customers, appreciations and accolades.`,
          p3:`He firmly believes in the philosophy that furniture is not just about a product, it’s a true reflection of a person’s nature.`
        },
        {
          name:"MRS. KAVITA R. KAJAVE (Director) ",
          p1:`She is our creative brain and heads all creative aspects in KAJAVE FURNITURE since inception. To add to it her caring and welcoming nature makes all our customers feel comfortable and at home. The foundations of happy relations are thereby built.`,
          img:require('../../assets/team/2.png')
        },
        {
          name:"AR. MRUNAL V. KAJAVE (Director)",
          p1:` 
            Ar. Mrunal V. Kajave is a born talented artist and professionally an architect as well as a successful interior designer by profession.
            She believes that every design speaks about one's personality and a soul brings liveliness in each product.  As a designer, her role is to make people feel comfortable with the product range. 
            `,
          img:require('../../assets/team/3.png')
        },
        {
          name:"AR. VEEREN R. KAJAVE (Director) ",
          img:require('../../assets/team/4.png'),
          p1:`Ar. Veeren R. Kajave has completed his formal education in the year 2015. He is the next generation entrepreneur and a strong force to propel brand KAJAVE FURNITURE to greater heights. He has a futuristic vision and also spearheads the strategy and design team. `,
          p2:` His focus is to make our customer's dreams come true with his creative ideas and experience. He believes in the principle that our customer’s interest and satisfaction is vital & of optimum importance.`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scopped >

#team{
  position: relative;
  padding: 32px;

  @include for-tablet-portrait-up{
    margin-top: 32px;
  }

  @include for-phone-only{
    padding:20px;
  }
}
.masonry { /* Masonry container */
  column-count: 2;
  column-gap: 1em;

  @include for-phone-only{
    column-count: 1;
    // padding: 24px;
  }
  
}

.item { /* Masonry bricks or child elements */
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  position: relative;

  @include for-phone-only{
    margin-bottom: 32px;
  }

  @include for-tablet-portrait-up{
    border-bottom: 0.2px solid #cacaca;
    padding-bottom: 24px;
    width: 80%;
    margin-bottom: 32px;
  }

  img{
    width: 178px;
    height: 178px;
    z-index: 1;
    @include for-phone-only{
      width: 130px;
      height: 130px;
    }
  }
  

  .content{
    z-index: 10;
    padding: 0 19px;
    background: #9E866A;
    border-radius: 15px;
    padding: 19px;
    padding-top: 90px;
    margin-top: -88px;

    @include for-phone-only{
      padding-top: 78px;
      margin-top: -75px;
    }
  }


  .name{
    font-style: italic;
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    color: #FFEED3;
    margin: 8px 0;

    @include for-tablet-portrait-up{
      margin: 16px 0;
    }
  }
  .info{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
    text-align: left;
  }
}
</style>
