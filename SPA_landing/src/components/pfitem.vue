<template>

  <div class="works__card" ref="popup">

    <popup
        v-if="showPopup"
        v-on:closePopup="showPopup = false"
    >

      <div><img  :src=item.img :alt=item.id ></div>
      <div>
        <p>{{item.workDescription}}</p>
        <p>{{item.masterName}}</p>
        <p>{{item.workingTime}}</p>
      </div>

    </popup>

    <div class="card__img">
      <img class="works__img" :src="item.img" alt="">
    </div>
    <div class="card__bottom">
      <p>{{item.title}}</p>
    </div>
    <a href="#" class="card__about" :data-id= item.id
    @click.prevent="showPopup = !showPopup"
    >Подробнее</a>
  </div>
</template>

<script>
import popup from "./popup.vue";
export default {
  data: function () {
    return {
      showPopup: false,
    }
  },
  name: 'portfolioItem',
  props: [
      'item'
  ],
  components:{
    popup
  },
}
</script>


<style scoped>
.card__about{
  text-decoration: none;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #FFFFFF;
  background-color: rgb(253 193 29);
  padding: 5px;
  display: inline-block;
}
</style>
