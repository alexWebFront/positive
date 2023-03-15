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
            <p class="hall-name__item">Большой зал</p>
            <p class="hall-name__item">Малый зал</p>
            <p class="hall-name__item">Воркшоп 1</p>
          </div>
          <div class="violet-block">
            <div class="time">9:00 — 10:00</div>
            <div class="theme">Регистрация, приветственный кофе-брейк</div>
          </div>
          <div class="red-block">
            <div class="time"></div>
            <div class="theme">Позитивные амбиции</div>
          </div>
          <div class="program__item program__item-double border-bottom">
            <div class="time time__double">
              <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class="time__double-item" src="../assets/images/double-time.png" alt="">
            </div>
            <div class="content content-double">
              <div class="theme">Открытие DOD 2023</div>
              <div class="speaker">Максим Филиппов, <br> Елена Бастанжиева</div>
            </div>
          </div>
          <div class="program__item ">
            <div class="time">11:30 — 12:00</div>
            <div class="content">
              <div class="theme">Церемония награждения <br> лучших партнеров <br> России и СНГ</div>
              <div class="speaker">Максим Филиппов, <br>Оксана Полякова</div>
            </div>
          </div>
          <div class="violet-block">
            <div class="time">12:30 — 13:00</div>
            <div class="theme">Кофе-брейк</div>
          </div>
          <div class="program__item border-bottom">
            <div class="time">13:00 — 13:30</div>
            <div class="content">
              <div class="theme">Стратегия развития <br> продуктового бизнеса</div>
              <div class="speaker">Эльман Бейбутов</div>
            </div>
          </div>
          <div class="program__item border-bottom">
            <div class="time">13:30 — 14:15</div>
            <div class="content">
              <div class="theme">Развитие продуктов PT: <br>маршрут построен</div>
              <div class="speaker">Ася Зуева, Олег Хныков, <br>Антон Исаев</div>
            </div>
          </div>
          <div class="program__item">
            <div class="time">14:15 — 14:30</div>
            <div class="content">
              <div class="theme">Платить хакерам — этично, <br> или Как комьюнити белых <br> хакеров
                повышает
                <br> устойчивость бизнеса
              </div>
              <div class="speaker">Дмитрий Ким</div>
            </div>
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
          <div class="program__item " style="position: relative;">
            <div class="time">15:00–15:30</div>
            <div class="program__item-wrap">
              <div class="content">
                <div class="theme">Технологическая <br>стратегия PT</div>
                <div class="speaker">Алексей Андреев</div>
              </div>
            </div>
            <div class="program__item-wrap" style="margin-left: 93px;">
              <div class="content">
                <div class="theme">Бизнес-планировние <br>с партнерами</div>
                <div class="speaker">Игорь Закурдаев, Роман <br>
                  Бочкарев
                </div>
              </div>
            </div>
            <hr class="border-bottom" style="position:absolute; top: 140px;right: 385px; width: 443px;">
          </div>
          <div class="program__item " style="position: relative;">
            <div class="time">15:30–16:00</div>
            <div class="program__item-wrap">
              <div class="content">
                <div class="theme">AppSec: синергетиче-<br>ская математика.<br>
                  1 + 1 = 3?
                </div>
                <div class="speaker">Денис Кораблев</div>
              </div>
            </div>
            <div class="program__item-wrap" style="margin-left: 50px;">
              <div class="content">
                <div class="theme">Поддержка партнера <br>
                  со стороны дистрибью- <br>тора. Работа с дистри- <br>бьюторами
                </div>
                <div class="speaker">Александр Мормуш
                </div>
              </div>
            </div>
            <div class="program__item-wrap" style="position: absolute; top: -40px; right: 58px">
              <div class="content">
                <div class="theme">PT NAD: как быстро <br>
                  развернуть на виртуаль- <br>ной машине
                </div>
                <div class="speaker">Владимир Клепче
                </div>
              </div>
              <hr class="border-bottom" style="position:absolute; top: 197px;right: -23px; width: 253px;">
            </div>
          </div>
          <div class="program__item " style="position: relative;">
            <div class="time">16:00–16:30</div>
            <div class="program__item-wrap">
              <div class="content">
                <div class="theme">Почему заказчики <br> реализуют сетевую <br> безопасность с помощью
                  <br>
                  PT Network Attack <br>
                  Discovery
                </div>
                <div class="speaker">Денис Батранков</div>
              </div>
            </div>
            <div class="program__item-wrap" style="margin-left: 14px; margin-top: -116px;">
              <div class="content">
                <div class="theme">Маркетинговая <br>
                  поддержка
                </div>
                <div class="speaker">Ксения Халилова
                </div>
              </div>
            </div>
            <hr class="border-bottom" style="position:absolute; top: 175px;right: 575px; width: 253px;">
          </div>
          <div class="program__item" style="position: relative;">
            <div class="time">16:30–17:00</div>
            <div class="program__item-wrap">
              <div class="content">
                <div class="theme">All-in PoC: почему надо <br>
                  ставить на MaxPatrol <br>
                  SIEM?
                </div>
                <div class="speaker">Анастасия Коннова, <br>
                  Илья Батетников
                </div>
              </div>
            </div>
            <div class="program__item-wrap" style="margin-left: 35px; margin-top: -110px;">
              <div class="content">
                <div class="theme">Технологическая <br>поддержка</div>
                <div class="speaker" style="margin-bottom: 12px;">Татьяна Овсянникова</div>
                <div class="theme">Карьерный хаб — <br>
                  образовательные <br>
                  инициативы
                </div>
                <div class="speaker" style="margin-bottom: 12px;">Мария Сигаева</div>
                <div class="theme">Новости Учебного <br>
                  Центра Positive <br>
                  Technologies
                </div>
              </div>
            </div>
            <div class="program__item-wrap" style="position: absolute; top: -50px; right: 95px">
              <div class="content">
                <div class="theme">PT NAD в зазеркалье <br>
                  SPAN и ERSPAN
                </div>
                <div class="speaker">Владимир Клепче
                </div>
              </div>
            </div>
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
          <div class="program__item " style="position: relative;">
            <div class="time">17:30–18:00</div>
            <div class="program__item-wrap">
              <div class="content">
                <div class="theme">PT XDR 2023: развитие <br>
                  продукта, роадмап <br>
                  и кое-что еще
                </div>
                <div class="speaker"> Егор Назаров, <br>
                  Никита Юдин
                </div>
              </div>
            </div>
            <div class="program__item-wrap" style="margin-left: 49px;">
              <div class="content">
                <div class="theme">Промышленный <br>
                  кибербез нужен всем, <br>
                  но каждому свой
                </div>
                <div class="speaker">Дмитрий Даренский
                </div>
              </div>
            </div>
            <hr class="border-bottom" style="position:absolute; top: 160px;right: 315px; width: 513px;">
          </div>
          <div class="program__item border-bottom" style="position: relative;">
            <div class="time">18:00–18:30</div>
            <div class="program__item-wrap">
              <div class="content">
                <div class="theme">Как стандарты <br>
                  PT Essentials помогут <br>
                  в построении реальной <br>
                  кибербезопасности?
                </div>
                <div class="speaker">Илья Батетников, <br>
                  Анна Цыбина
                </div>
              </div>
            </div>
            <div class="program__item-wrap" style="margin-left: 32px;">
              <div class="content">
                <div class="theme">AppSec по-партнерски <br>
                  с продуктами Positive <br>
                  Technologies
                </div>
                <div class="speaker">Иван Соломатин
                </div>
              </div>
            </div>
            <div class="program__item-wrap" style="position: absolute; top: -66px; right: 21px">
              <div class="content">
                <div class="theme">Как с помощью
                  MaxPatrol <br> SIEM
                  обрабатывать события <br>
                  из Yandex Cloud
                  и Kubernetes
                </div>
                <div class="speaker">Давид Никачадзе, <br>
                  Артур Шамсиев
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page__bottom">
        <div class="mouse-container">


          <img style="cursor: pointer" ondrag="return false" ondragdrop="return false" ondragstart="return false" class="" src="../assets/images/icons/program-arrow-left.svg" alt="">
          <img ondrag="return false" ondragdrop="return false" ondragstart="return false" class="" src="../assets/images/icons/mouse-top-bottom.svg" alt="">
          <router-link to="/program2" ondrag="return false" ondragdrop="return false" ondragstart="return false" class="button" style="padding: 0;">
            <img class="" src="../assets/images/icons/program-arrow-right.svg" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Program"
}
</script>

<style>
.program__container::-webkit-scrollbar {
  display: none;
}

</style>
<script>
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
</script>

