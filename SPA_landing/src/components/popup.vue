<template>
  <div class="popup__wrapper" ref="popup__wrapper">
    <div class="popup">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  },
  name: "popup",
  mounted: function () {
    let ths = this
    document.addEventListener('click', function (e) {
      if (e.target === ths.$refs['popup__wrapper']){
        ths.closePopup();
      }
    })
  }
}
</script>

<style scoped>
.popup{
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  min-height:400px;
  background-color: #FFFFFF;
  border-radius: 5px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
}
.popup__wrapper{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

</style>