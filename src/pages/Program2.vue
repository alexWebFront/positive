<template>
  <div class="page">
    <div class="page__container">
      <div class="page__top">
        <img ondrag="return false" ondragdrop="return false" ondragstart="return false" src="../assets/images/top-image.png" alt="" class="logo">
      </div>
      <div class="navigation">
        <div class="navigation__title">
          Программа
        </div>
        <router-link to="/" class="button" style="padding: 0;">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" src="../assets/images/icons/close.svg" alt="" class="close">
        </router-link>
      </div>
      <div class="program">
        <div class="program__container">
          <div class="hall-name">
            <p class="hall-name__item">Воркшоп 2</p>
            <p class="hall-name__item" style="margin-left: 40px;">Воркшоп 3</p>
            <p class="hall-name__item" style="margin-left: 20px;">Воркшоп 4</p>
          </div>
          <div class="violet-block">
            <div class="time">9:00 — 10:00</div>
            <div class="theme">Регистрация, приветственный кофе-брейк</div>
          </div>
          <div class="red-block">
            <div class="time"></div>
            <div class="theme">Позитивные амбиции</div>
          </div>
          <div class="program__item border-bottom">
            <div class="time">10:00 – 11:00</div>
            <div class="content"></div>
          </div>
          <div class="program__item border-bottom">
            <div class="time">11:00 – 11:30</div>
            <div class="content"></div>
          </div>
          <div class="program__item ">
            <div class="time">11:30 – 12:30</div>
            <div class="content"></div>
          </div>
          <div class="violet-block">
            <div class="time">12:30 — 13:00</div>
            <div class="theme">Кофе-брейк</div>
          </div>
          <div class="program__item border-bottom">
            <div class="time">13:00 – 13:30</div>
            <div class="content"></div>
          </div>
          <div class="program__item border-bottom">
            <div class="time">13:30 – 14:15</div>
            <div class="content"></div>
          </div>
          <div class="program__item ">
            <div class="time">14:15 – 14:30</div>
            <div class="content"></div>
          </div>
          <div class="violet-block">
            <div class="time">14:30 — 15:00</div>
            <div class="theme">Кофе-брейк</div>
          </div>
          <div class="red-block">
            <div class="time"></div>
            <div class="theme">Продуктовый трек</div>
            <div class="theme" style="margin-left: 80px;">Партнерский трек <br>
              развитие совместного <br> бизнеса
            </div>
            <div class="theme" style="margin-left: 36px;">Продуктовые воркшопы</div>
          </div>
          <div class="program__item">
            <div class="time">15:00 – 15:30</div>
            <div class="content"></div>
          </div>
          <div class="program__item">
            <div class="time">15:30 – 16:00</div>
            <div class="content"></div>
          </div>
          <div class="program__item">
            <div class="time">16:00 – 16:30</div>
            <div class="program__item-wrap" style="position:relative;">
              <div class="content" style="position:absolute;top: -85px;left: 0;">
                <div class="theme">Управление уязвимостями.
                  Как&nbsp;безопасникам <br>
                  договориться с IT <br>
                </div>
                <div class="speaker">Антон Исаев</div>
              </div>
            </div>
            <div class="program__item-wrap" style="margin-left: 50px; position:relative;">
              <div class="content" style="position:absolute; top: -150px;right: -429px;">
                <div class="theme">Огненная защита <br>
                  приложений с PT <br>
                  Application Firewall 4: <br>
                  первые шаги в защите <br>
                  веб-приложений
                </div>
                <div class="speaker" style="margin-bottom: 20px;">Иван Павлов, Юрий Тарков</div>
                <div class="theme">OT Security глазами <br>
                  клиента: ожидание vs. <br>
                  реальность
                </div>
                <div class="speaker">Дмитрий Даренский</div>
              </div>
              <hr class="border-bottom" style="position:absolute; top: -16px;right: -431px; width: 233px;">
            </div>
            <div class="program__item-wrap" style="position:relative;">
              <div class="content" style="position:absolute;top: -80px;left: 440px;">
                <div class="theme">Траблшутинг&nbsp;MaxPatrol&nbsp;10</div>
                <div class="speaker">Олег Герцев, Лилия&nbsp;Кондратьева</div>
              </div>
            </div>
          </div>
          <div class="program__item">
            <div class="time">16:30 – 17:00</div>
            <div class="content"></div>
          </div>
          <div class="violet-block">
            <div class="time">17:00 — 17:30</div>
            <div class="theme">Кофе-брейк</div>
          </div>
          <div class="red-block">
            <div class="time"></div>
            <div class="theme">Продуктовый трек</div>
            <div class="theme" style="margin-left: 80px;">Партнерский трек</div>
            <div class="theme" style="margin-left: 70px;">Продуктовые воркшопы</div>
          </div>
          <div class="program__item">
            <div class="time">17:30 – 18:00</div>
            <div class="content"></div>
          </div>
          <div class="program__item">
            <div class="time">18:00 – 18:30</div>
            <div class="program__item-wrap" style="position:relative;">
              <div class="content" style="position:absolute;top: -85px;left: 0;">
                <div class="theme">XDR:&nbspОбнаружение
                  и реагирование
                  на актуальные тактики
                  и техники атак на Linux
                  и Windows по матрице
                  MITRE
                </div>
                <div class="speaker">Алексей&nbsp;Сивенков, Евгений Марков</div>
              </div>
            </div>
            <div class="program__item-wrap" style="margin-left: 50px; position:relative;">
              <div class="content" style="position:absolute; top: -75px;right: -429px;">
                <div class="theme">Хорошего детекта много <br>
                  не бывает: новые <br> возможности <br> PT Sandbox и как
                  они <br> помогают выявлять <br>
                  продвинутый <br>
                  вредоносный код
                </div>
                <div class="speaker" style="margin-bottom: 20px;">Иван Павлов, Юрий Тарков</div>

              </div>
            </div>
            <div class="program__item-wrap" style="position:relative;">
              <div class="content" style="position:absolute;top: -45px;left: 440px;">
                <div class="theme">Пайплайн&nbsp;безопасной разработки&nbsp;инструментами <br> PT
                  Application
                  Inspector<br> и PT BlackBox
                </div>
                <div class="speaker">Алексей Жуков</div>
              </div>
            </div>
          </div>
          <div class="program__item">
            <div class="time"></div>
            <div class="content"></div>
          </div>
          <div class="program__item">
            <div class="time"></div>
            <div class="content"></div>
          </div>
          <div class="program__item border-top">
            <div class="time">18:30 – 19:00</div>
            <div class="content"></div>
          </div>
          <div class="violet-block">
            <div class="time">19:00</div>
            <div class="theme">Окончание мероприятия</div>
          </div>
        </div>
      </div>
      <div class="page__bottom">
        <div class="mouse-container">
          <router-link to="/program" ondrag="return false" ondragdrop="return false" ondragstart="return false" class="button" style="padding: 0;">
            <img class="" style=" transform: rotate(180deg);" src="../assets/images/icons/program-arrow-right.svg" alt="">
          </router-link>
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class="" src="../assets/images/icons/mouse-top-bottom.svg" alt="">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class="" style=" transform: rotate(180deg); cursor: pointer"  src="../assets/images/icons/program-arrow-left.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Program2"
}
</script>

<style scoped>

</style>

<script>
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
</script>
