<template>
  <div class="page">
    <div class="page__container">
      <div class="page__top">
        <img ondrag="return false" ondragdrop="return false" ondragstart="return false"
             src="../assets/images/top-image.png" alt="" class="logo">
      </div>
      <div class="navigation">
        <div class="navigation__title">
          Схема
        </div>
        <router-link to="/" class="button" style="padding: 0;">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false"
               src="../assets/images/icons/close.svg" alt="" class="close">
        </router-link>
      </div>
      <div class="map">
        <pinch-zoom
          backgroundColor="transparent"
          :doubleTap="true"
          disableZoomControl="disable"
          :wheel="false"
          :limitZoom="2"
          :limitPan="true"
          ref="pinch"
        >
          <img class="pinch-img" src="../assets/images/2.png" alt="">

        </pinch-zoom>
      </div>
      <div class="page__bottom">
        <div class="mouse-container">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class=""
               src="../assets/images/icons/arrow-left.svg" alt="">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class=""
               src="../assets/images/icons/mouse.svg" alt="">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class=""
               src="../assets/images/icons/arrow-right.svg" alt="">
        </div>
        <div class="button-container">
          <img @click="zoomIn" :class="{disabled: zoom}" ondrag="return false" ondragdrop="return false"
               ondragstart="return false" class="plus"
               src="../assets/images/icons/plus.svg" alt="">
          <img @click="zoomOut" :class="{disabled: !zoom}" ondrag="return false" ondragdrop="return false"
               ondragstart="return false" class="minus"
               src="../assets/images/icons/minus.svg" alt="">
          <img @click="position" ondrag="return false" ondragdrop="return false" ondragstart="return false" class="tg"
               src="../assets/images/icons/tg.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scheme",
  data() {
    return {
      zoom: false,
    }
  },
  methods: {
    zoomOut() {
      this.zoom = false;
      this.$refs.pinch.toggleZoom()
    },
    zoomIn() {
      this.zoom = true;
      this.$refs.pinch.toggleZoom()
    },
    position() {
      const pinchContainer = document.querySelector('.pinch-zoom-content');
      let scrollToCenter = document.querySelector('.map');
      if (this.zoom) {
        scrollToCenter.scrollTo(400000, 0);
        pinchContainer.style.transform = 'matrix(2, 0, 0, 2, -2400, -1250)'
      } else {
        scrollToCenter.scrollTo(30000, 0);
        pinchContainer.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
      }
      //   ТУТ КОРОЧЕ НИЖЕ ДЛЯ ТОЧКИ КОТОРАЯ В ЦЕНТРЕ
      // if (this.zoom) {
      //   scrollToCenter.scrollTo(450, 0);
      //   pinchContainer.style.transform = 'matrix(2, 0, 0, 2, -1027.95, -669)'
      // } else {
      //   scrollToCenter.scrollTo(450, 0);
      //   pinchContainer.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
      // }
    }
  },
  mounted() {
    let scrollToCenter = document.querySelector('.map');
    scrollToCenter.scrollTo(825, 0);

    const pinchContainer = document.querySelector('.pinch-zoom-content');
    // this.$refs.pinch.toggleZoom()
    // this.$refs.pinch.toggleZoom()
    // pinchContainer.style.transform = 'matrix(2, 0, 0, 2, 0, 0)'
    document.oncontextmenu = function (e) {
      return false
    };


//Timeout
    function inactivityTime() {
      let time = 0;
      setInterval(() => {
        time++
        if (time >= 180) {
          window.location.href = '/';
          resetTimer();
        }
      }, 1000);
      // сюда можно добавить любой ивент.
      document.addEventListener('mousemove', resetTimer);
      document.addEventListener('keypress', resetTimer);
      document.addEventListener('touch', resetTimer);

      function resetTimer() {
        time = 0;
      }
    }

    inactivityTime();


  }
}
</script>

<style lang="scss">
img.disabled {
  opacity: 0.6;
  pointer-events: none;
}

.pinch-zoom-content,
.pinch-zoom-wrapper {
  width: 2600px !important;

  &::-webkit-scrollbar {
    display: none;
  }

}

.map {
  margin: 0 auto;
  width: 1080px;
  height: 1230px;
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

.pinch-img {
  width: 2600px;
  height: 1230px;
  max-width: 2600px;
}

.map-content::-webkit-scrollbar {
  display: none;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 2px solid #2D1F3C;
  padding: 18px 22px;
  border-radius: 70px;
}

.tg {
  margin-left: 50px;
  cursor: pointer;
}

.plus, .minus {
  cursor: pointer;
}

</style>



