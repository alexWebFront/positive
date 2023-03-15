<template>
  <div class="page">
    <div class="page__container">
      <div class="page__top">
        <img ondrag="return false" ondragdrop="return false" ondragstart="return false"
             src="../assets/images/top-image.png" alt="" class="logo">
      </div>
      <div class="navigation">
        <div class="navigation__title">
          Программа
        </div>
        <router-link to="/" class="button" style="padding: 0;">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false"
               src="../assets/images/icons/close.svg" alt="" class="close">
        </router-link>
      </div>
      <pinch-zoom
          backgroundColor="transparent"
          :doubleTap="false"
          disableZoomControl="disable"
          :zoomControlScale="1"
          :wheel="true"
          :limitZoom="10"
          :limitPan="false"
          :minScale="1"
      >
        <div class="map-content ">
          <div class="pinch-wrapper">
            <img class="map pinch-img" src="../assets/images/2.png" alt="">
          </div>
        </div>

      </pinch-zoom>
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
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class="plus"
               src="../assets/images/icons/plus.svg" alt="">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class="minus"
               src="../assets/images/icons/minus.svg" alt="">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class="tg"
               src="../assets/images/icons/tg.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scheme",
  mounted() {
    document.oncontextmenu = function (e) {
      return false
    };
    window.onload = function () {
      let scrollToCenter = document.querySelector('.map-content');
      scrollToCenter.scrollTo(825, 0);
    }

    let plus = document.querySelector('.plus');
    let minus = document.querySelector('.minus');
    let tg = document.querySelector('.tg');
    let scrollToPoint = document.querySelector('.map-content');
    let map = document.querySelector('.map');
    let initialScale = 1;
    let marginTop = 0;
    let marginLeft = 0;

    tg.onclick = () => {
      initialScale = 1;
      marginTop = 0;
      marginLeft = 0;
      scrollToPoint.scrollTo(2000, 0);
      map.style.transform = `scale(${initialScale})`;
      map.style.marginTop = `${marginTop}px`;
      map.style.marginLeft = `${marginLeft}px`;
    }

    plus.onclick = () => {
      initialScale += 0.1;
      marginTop += 100;
      marginLeft += 110;
      map.style.transform = `scale(${initialScale})`;
      map.style.marginTop = `${marginTop}px`;
      map.style.marginLeft = `${marginLeft}px`;

      if (initialScale === 1) {
        initialScale = 1;
        marginTop = 0;
        marginLeft = 0;
        map.style.marginLeft = `${marginLeft}px`;
        map.style.transform = `scale(${initialScale})`;
        map.style.marginTop = `${marginTop}px`;
      }

      if (initialScale < 1) {
        marginTop = 0;
        marginLeft = 0;
        map.style.marginLeft = `${marginLeft}px`;
        map.style.marginTop = `${marginTop}px`;
      }

      if (initialScale > 1.3) {
        initialScale = 1.3;
        marginTop = 300;
        marginLeft = 330;
        map.style.marginLeft = `${marginLeft}px`;
        map.style.transform = `scale(${initialScale})`;
        map.style.marginTop = `${marginTop}px`;
      }
    }

    minus.onclick = () => {

      initialScale -= 0.1;
      marginTop -= 100;
      marginLeft -= 110;
      map.style.transform = `scale(${initialScale})`;
      map.style.marginTop = `${marginTop}px`;
      map.style.marginLeft = `${marginLeft}px`;

      if (initialScale === 1) {
        marginTop = 0;
        marginLeft = 0;
        initialScale = 1;
        map.style.marginLeft = `${marginLeft}px`;
        map.style.marginTop = `${marginTop}px`;
        map.style.transform = `scale(${initialScale})`;
      }
      if (initialScale > 1) {
        // initialScale -= 0.1;
        map.style.transform = `scale(${initialScale})`;
      }

      if (initialScale === 1 || initialScale < 1) {
        marginTop = 0;
        marginLeft = 0;
        map.style.marginLeft = `${marginLeft}px`;
        map.style.marginTop = `${marginTop}px`;
      }

      if (initialScale <= 0.7) {
        initialScale = 0.7;
        map.style.transform = `scale(${initialScale})`;
      }
    }

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

<style>

.pinch-img {
  width: 3081px;
}

.map-content::-webkit-scrollbar {
  display: none;
}

.map-content {
  width: 100%;
  /*width: 3081px;*/
  height: 1229px;

  overflow-x: scroll;
  overflow-y: scroll;
  white-space: nowrap;
}

.map {
  width: 3081px;
  height: 1229px;
  transform: scale(1);
  transition: all 700ms;
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



