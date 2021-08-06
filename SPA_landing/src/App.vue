<template>
  <div id="app">
    <span id="arrow-up"><i class="fas fa-chevron-circle-up fa-3x arrow-up" ></i></span>
    <header class="header">
      <div class="blur">
        <div class="container header__top ">
          <div class="header__logo">
            <a href="#">
              <img src="../src/assets/images/logo.svg" alt=""></a>
            <div class="logo__desc">
              <p>Сайдинг.Мгн</p>
              <p>Доверься профессионалам</p>
            </div>
          </div>
          <div class="header__nav">
            <li class="nav__list">
              <a href="#" class="nav__link" data-section="main">Главная</a>
              <a href="#" class="nav__link" data-section="advant">Преимущства</a>
              <a href="#" class="nav__link" data-section="services">Услуги</a>
              <a href="#" class="nav__link" data-section="works">Портфолио</a>
              <a href="#" class="nav__link" data-section="reviews">Отзывы</a>
              <a href="#" class="nav__link" data-section="footer">Контакты
              </a>
            </li>
          </div>
          <div class="header__phone display__phone" id="phone">+7(999)999-99-99</div>
        </div>
      </div>
      <div class="center header__main">
        <div class="info__siding">
          <h1 class="siding__main">Монтаж сайдинга</h1>
          <h2 class="siding__main__bot">В Магнитогорске</h2>
          <p class="siding__desc">Вы можете доверить установку сайдинга профессионалам и не вникать во все тонкости работы.</p>
          <a class="btn" href="#">Заказать</a>
        </div>
        <div class="header__man"></div>
      </div>
    </header>
    <div class="advant">
      <div class="container__advant">
        <div class="advant__top">
          <h1 class="text advant-title">Преимущества</h1>
        </div>
        <div class="advant__cardlist">
          <div class="advant__card"><img src="../src/assets/images/card1.svg" alt="" class="card__image">
            <p>Решаем проблемы</p>
          </div>
          <div class="advant__card"><img src="../src/assets/images/card2.svg" alt="" class="card__image">
            <p>Оперативная работа</p>
          </div>
          <div class="advant__card"><img src="../src/assets/images/card3.svg" alt="" class="card__image">
            <p>Скорость работы</p>
          </div>
          <div class="advant__card"><img src="../src/assets/images/card4.svg" alt="" class="card__image">
            <p>Ответственность</p>
          </div>
        </div>
      </div>
    </div>
    <div class="services">
      <div class="container">
        <h1 class="text">Наши услуги</h1>
        <div class="list">
          <div class="cart">
            <div class="cart1">
              <div class="nadpis">
                <p>Монтаж сайдинга</p>
              </div>
            </div>
            <a class="btn" type="submit" href="">Заказать</a>
          </div>
          <div class="cart">
            <div class="cart1 window">
              <div class="nadpis">
                <p>Пластиковые окна</p>
              </div>
            </div>
            <a class="btn" type="submit" href="">Заказать</a>
          </div>
          <div class="cart">
            <div class="cart1 video">
              <div class="nadpis">
                <p>Видеонаблюдение</p>
              </div>
            </div>
            <a class="btn" type="submit" href="">Заказать</a>
          </div>
        </div>
      </div>
    </div>
    <div class="form">
      <div class="form__inner"><input placeholder="Ваш телефон" name="user_phone" class="form__input" type="tel">
        <button class="btn" type="submit">ЗАКАЗАТЬ </button></div>
      <div class="form__parallax">

      </div>

    </div>
    <div class="works ">
      <div class="container__works">
        <div class="works__top">
          <h1 class="text">Наши работы</h1>
          <div class="works__slider">
            <a href="" class="slide">Монтаж сайдинга</a>
            <a href="" class="slide">Пластиковые окна</a>
            <a href="" class="slide">Видеонаблюдение</a>
          </div>
        </div>
        <div class="works__bot">
          <pfitem
          v-for="item in this.goods"
          v-bind:key="item.id"
          :item = item
          ></pfitem>
        </div>
      </div>
    </div>
    <div class="reviews">
      <div class="container__reviews">
        <h1 class="text">Отзывы клиентов</h1>
        <div class="reviews__list">
          <a href=""><img src="../src/assets/images/angle.svg" alt=""></a>
          <div class="reviews__card">
            <img class="avatar" src="../src/assets/images/avatar1.svg" alt="">
            <p class="review">Вот это я понимаю мастер, настоящий профессионал, всё подробно объяснил, отрегулировал и ощущение как-будто к тебе давний приятель приехал окна ремонтировать, а не как большинство сейчас – лишь бы приехать побыстрее закончить и денег
              взять
            </p>
          </div>
          <div class="reviews__card display">
            <img class="avatar " src="../src/assets/images/avatar2.svg" alt="">
            <p class="review">
              Отличная работа ребят. Быстро сделали замеры, все рассчитали, скидку хорошую предложили. В общем все очень понравилось, рекомендую!
            </p>
          </div>
          <a class="angle" href=""><img src="../src/assets/images/angle.svg" alt=""></a>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__wrap">
        <div class="container container__footer">
          <h1 class="text white">
            Связаться с нами
          </h1>
          <div class="footer__content">
            <div class="footer__form">
              <input placeholder="Имя" name="user_phone" class="form__input footer__form" type="tel">
              <input placeholder="Телефон" name="user_phone" class="form__input footer__form" type="tel">
              <input placeholder="Услуга" name="user_phone" class="form__input footer__form" type="tel">
              <textarea placeholder="Ваш комментарий" class="form__input footer__textarea" name="textarea" rows="10" cols="50"></textarea>
              <p class="footer__checkbox"><input class="checkbox" type="checkbox" name="a" value=""> Принимаю условия обработки персональных данных</p>
              <button class="btn footer__btn" type="submit">Отправить </button>
            </div>
            <div class="footer__tabs">
              <p class="tabs__callus">Вы можете позвонить или написать нам!</p>
              <p class="footer__text">+7(999)999-99-99</p>
              <p class="footer__text">MyEmail@mail.ru</p>
              <ul class="footer__tablist">
                <a href=""><img src="../src/assets/images/vk.svg" alt=""></a>
                <a href=""><img src="../src/assets/images/wa.svg" alt=""></a>
                <a href=""><img src="../src/assets/images/call.svg" alt=""></a>
                <a href=""><img src="../src/assets/images/inst.svg" alt=""></a>
                <a href=""><img src="../src/assets/images/tg.svg" alt=""></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="blur__footer">
        <div class="container blur-list">
          <div class="header__logo">
            <a href="">
              <img src="../src/assets/images/logo.svg" alt=""></a>
            <div class="logo__desc">
              <p>Сайдинг.Мгн</p>
              <p>Доверься профессионалам</p>
            </div>
          </div>
          <div class="blur-list__title display display__phone2">
            2021 | Сайдинг в Магнитогорске <br> Сайт разработал
              <a class="developer" href="">Бронников Вячеслав</a>
          </div>
          <div class="header__phone header-phone__footer" >+7(999)999-99-99</div>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>
import axios from "axios";
import rellax from "rellax"
import pfitem from "./components/pfitem.vue";


export default {
  name: 'App',
  data(){
    return{
      goods:[]
    }
  },
  components: {
  pfitem
  },
  methods:{

  },
  computed :{
    getJson(){
      return axios.get('http://localhost:5555/')
    }
  },
  mounted() {
    this.getJson.then(({data})=>{
      this.goods = data
    })
    var c1 = new rellax('.form__parallax', {
      speed: 3.5,
    });
    c1;
  }
}
</script>

<style>

</style>
