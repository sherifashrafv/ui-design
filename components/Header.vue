<template>
  <div>
    <nav class="nav mt-4 shadow-sm">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <ul
              class="nav-informations align-items-end d-flex flex-row justify-content-between"
            >
              <li
                class="item p-2 rounded-pill d-flex flex-row justify-content-between"
              >
                <span class="icon-awesome">
                  <i class="fa-solid fa-earth-africa"></i>
                </span>
                <span>
                  <b-nav-item-dropdown
                    class="languages list-unstyled"
                    :text="`${$i18n.locale}`"
                    right
                  >
                    <b-dropdown-item @click="setlocale(`en`)">
                      {{ $t('key.en') }}
                    </b-dropdown-item>
                    <b-dropdown-item @click="setlocale('عربي')">{{
                      $t('key.ar')
                    }}</b-dropdown-item>
                  </b-nav-item-dropdown>
                </span>
              </li>
              <li
                class="item p-2 rounded-pill d-flex flex-row justify-content-between"
              >
                <span class="icon-awesome">
                  <i class="fa-solid fa-user-plus"></i>
                </span>
                <div>
                  <b-button @click="modalShow = !modalShow">
                    {{ $t('signup.new') }}</b-button
                  >

                  <b-modal v-model="modalShow">
                    <div class="head text-center pt-0 p-5">
                      <h4>سجل دخول بواسطة مواقع التواصل</h4>
                      <hr />
                      <ul class="social-links p-0 d-flex flex-column">
                        <li
                          class="google w-100 d-flex flex-row justify-content-end text-center p-2"
                        >
                          <div
                            class="finaly d-flex align-items-center flex-row justify-content-between"
                          >
                            <span class="text-center">google</span>
                            <span class="icon-fa fa-brands fa-google"></span>
                          </div>
                        </li>

                        <li
                          class="twitter w-100 d-flex flex-row justify-content-end text-center p-2"
                        >
                          <div
                            class="finaly d-flex align-items-center flex-row justify-content-between"
                          >
                            <span class="text-center">twitter</span>
                            <span class="icon-fa fa-brands fa-twitter"></span>
                          </div>
                        </li>

                        <li
                          class="facebook w-100 d-flex flex-row justify-content-end text-center p-2"
                        >
                          <div
                            class="finaly d-flex align-items-center flex-row justify-content-between"
                          >
                            <span class="text-center">twitter</span>
                            <span class="fa-brands fa-facebook-square"></span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <!-- login  -->
                    <div class="head text-center pt-0 p-5">
                      <h4>أو من خلال البريد الالكترونى</h4>
                      <hr />

                      <form class="form-action">
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="email"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="password"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                      <h6 class="mt-4 sign-up-nuxt-link">
                        جديد فى فورسيرف ؟
                        <nuxt-link role="button" tag="span" to="signup">
                          تسجيل</nuxt-link
                        >
                      </h6>
                    </div>
                  </b-modal>
                </div>
              </li>
              <li
                class="item p-2 rounded-pill d-flex flex-row justify-content-between"
              >
                <span class="icon-awesome">
                  <i class="fa-solid fa-user"></i>
                </span>
                <div>
                  <b-button @click="modalShow = !modalShow">
                    {{ $t('signup.login') }}</b-button
                  >

                  <b-modal v-model="modalShow">
                    <div class="head text-center pt-0 p-5">
                      <h4>سجل دخول بواسطة مواقع التواصل</h4>
                      <hr />
                      <ul class="social-links p-0 d-flex flex-column">
                        <li
                          class="google w-100 d-flex flex-row justify-content-end text-center p-2"
                        >
                          <div
                            class="finaly d-flex align-items-center flex-row justify-content-between"
                          >
                            <span class="text-center">google</span>
                            <span class="icon-fa fa-brands fa-google"></span>
                          </div>
                        </li>

                        <li
                          class="twitter w-100 d-flex flex-row justify-content-end text-center p-2"
                        >
                          <div
                            class="finaly d-flex align-items-center flex-row justify-content-between"
                          >
                            <span class="text-center">twitter</span>
                            <span class="icon-fa fa-brands fa-twitter"></span>
                          </div>
                        </li>

                        <li
                          class="facebook w-100 d-flex flex-row justify-content-end text-center p-2"
                        >
                          <div
                            class="finaly d-flex align-items-center flex-row justify-content-between"
                          >
                            <span class="text-center">twitter</span>
                            <span class="fa-brands fa-facebook-square"></span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <!-- login  -->
                    <div class="head text-center pt-0 p-5">
                      <h4>أو من خلال البريد الالكترونى</h4>
                      <hr />

                      <form class="form-action">
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="email"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="password"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                      <h6 class="mt-4 sign-up-nuxt-link">
                        جديد فى فورسيرف ؟
                        <nuxt-link role="button" tag="span" to="signup">
                          تسجيل</nuxt-link
                        >
                      </h6>
                    </div>
                  </b-modal>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <div
              class="logo d-flex flex-row justify-content-end align-items-center"
            >
              <div class="text-logo">
                <h1>عوضين</h1>
              </div>
              <div class="image-icon">
                <img src="../static/Header/logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav ref="navbar" class="navbar m-3 navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand ml-4" href="#">منطقة العميل</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <b-nav-item-dropdown text="الاستضافة" right>
              <b-dropdown-item href="#">من نحن</b-dropdown-item>
              <b-dropdown-item href="#">فريقنا</b-dropdown-item>
              <b-dropdown-item href="#">اتفاقية الخصوصية</b-dropdown-item>
              <b-dropdown-item href="#">اتفاقية مستوي الخدمة</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="البرمجة" right>
              <b-dropdown-item href="#"
                >النسخ الاحتياطي الخارجي</b-dropdown-item
              >
              <b-dropdown-item href="#">شهادات SSL</b-dropdown-item>
              <b-dropdown-item href="#">حماية من ال-DDoS</b-dropdown-item>
              <b-dropdown-item href="#">قواعد البيانات الموزعة</b-dropdown-item>
              <b-dropdown-item href="#">حلول النشرة البريدية</b-dropdown-item>
              <b-dropdown-item href="#">دعم المنتديات</b-dropdown-item>
              <b-dropdown-item href="#">دعم ووردبريس</b-dropdown-item>
            </b-nav-item-dropdown>

            <nuxt-link
              tag="li"
              :to="localePath('/child', `${$i18n.locale}`)"
              class="nav-item"
            >
              <a class="nav-link active" aria-current="page" href="#"
                >المدونة</a
              >
            </nuxt-link>

            <nuxt-link tag="li" to="/xx" class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >اتصل بنا</a
              >
            </nuxt-link>

            <nuxt-link
              :to="localePath('/', `${$i18n.locale}`)"
              tag="li"
              exact
              class="nav-item"
            >
              <a class="nav-link active" aria-current="page" href="#"
                >الرئيسية</a
              >
            </nuxt-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalShow: false,
      scrolled: false,
      windowTop: 0,
    }
  },

  methods: {
    setlocale(locale) {
      localStorage.setItem('lang', locale)
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale },
      })
    },
    onScroll() {
      this.$refs.navbar.classList.toggle('scroll-fixed', window.scrollY > 500)

      // console.log(window.scrollY)
      // console.log({ top: this.windowTop })
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
<style scoped>
nav.navbar.m-3.navbar-expand-lg.navbar-light.bg-light {
  transition: 0.3s ease-in-out !important;
}
nav.navbar.m-3.navbar-expand-lg.navbar-light.bg-light.scroll-fixed {
  top: 0;
  position: fixed;
  width: 100%;
  left: 0 !important;
  margin: 0 !important;
  padding-top: 15px;
  box-shadow: -4px 7px 15px -9px #ececec;
  z-index: 999999999999999;
}
.nav {
  /* box-shadow: -4px 7px 15px -9px #ececec; */
}
.logo {
  gap: 10px;
}
.logo .image-icon {
  height: 33px;
  width: 30px;
}
.logo .image-icon img {
  max-width: 100%;
}
.nav-informations {
  max-width: 466px;
}
.item {
  width: 127px;
  border: 1px solid #ececec;
  cursor: pointer;
}
.item div {
  width: 100%;
}
.item li {
  width: 100%;
}
.icon-awesome {
  position: relative;
  width: 40px;
  text-align: center;
  cursor: pointer;
}
.icon-awesome::after {
  content: '';
  top: -33%;
  right: -25%;
  position: absolute;
  width: 1px;
  height: 100px - 1.5px;
  background: #ececec;
  height: 100% - 0.5rpx;
  height: 163%;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1337px;
  }
}
nav.navbar.navbar-expand-lg.navbar-light.bg-light {
  background: white !important;
}
.navbar-brand {
  background: #24273a;
  color: #fff;
  border-radius: 50px;
  padding: 5px 10px;
  transition: 0.5s;
  font-weight: bold;
}

li.nav-item a {
  font-weight: bolder;
  font-size: 16px;
  color: #24273a !important;
}
li.nav-item.nuxt-link-exact-active.nuxt-link-active a {
  color: #fd9139 !important;
}
ul.navbar-nav.ml-auto.mb-2.mb-lg-0 {
  width: 734px !important;
  justify-content: space-between !important;
}
>>> .dropdown-toggle::after {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: -10%;
}
>>> .navbar-light .navbar-nav .nav-link {
  outline: none;
  font-weight: bolder;
  font-size: 16px;
  opacity: 1;
  color: #24273a !important;
}

>>> ul.dropdown-menu.show {
  position: absolute;
  border-top: 3px solid #fd9139;
  top: 59% !important;
  text-align: right;
}
>>> .languages a {
  margin: 0 !important;
  padding: 0 !important;
}
>>> .languages a::after {
  display: none;
}
>>> .languages .nav-link {
  font-weight: bold;
  color: #24273a;
  outline: none;
}
>>> button.btn.modal-sign-up.btn-secondary {
  background: none !important;
  outline: none;
  border: none;
  color: #24273a;
  padding: 0;
  margin: 0;
  font-weight: bold;
  width: 100%;
}
>>> button.btn.btn-secondary {
  background: none;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #24273a;
}
button.btn.btn-secondary:focus {
  box-shadow: none;
}
.head hr {
  height: 3px !important;
  margin: 0px;
  border: 0;
  border-radius: 15px;
  background-image: linear-gradient(
    to right,
    #24273a 0%,
    #24273a 50%,
    #fd9139 50%,
    #fd9139 100%
  );
  margin: 20px 0px;
  opacity: 1;
}
.finaly {
  width: 200px;
}
.google {
  background: #dd4b39;
}
.twitter {
  background: #55acee;
}
.social-links {
  gap: 15px;
}
.icon-fa {
  font-size: 15px;
  margin: 0;
  padding: 0;
  margin-right: 5px;
}
.facebook {
  background: #3b5998;
}
.google,
.twitter,
.facebook {
  width: 100%;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  height: 50px;
}
.social-links li {
  cursor: pointer;
  transition: 0.3s;
}
.social-links li:hover {
  background-color: #fd9139;
  color: #fff;
}
.form-action {
  text-align: right !important;
}
.form-action div input {
  border-radius: 50px;
  outline: none;
  color: #acacac;
  border: 1px solid #e3e6e9;
  text-align: right;
  padding: 10px;
}
.form-action button {
  height: 50px;
  width: 100%;
  color: #fff;
  border-radius: 50px;
  transition: 0.5s;
  background-color: transparent;
  border: 1px dashed #fff;
  font-size: 16px;
  font-weight: bold;
  background: #24273a;
}
.form-action button:hover {
  background: #fff;
  border-color: #24273a;
  color: black;
}
>>> .modal {
  background: rgb(36 39 58 / 46%) !important;
}

.sign-up-nuxt-link {
  text-align: right;
}
.sign-up-nuxt-link span {
  color: #fd9139;
  font-weight: bold;
}
>>> button.close {
  background: no-repeat;
  color: black;
  font-weight: bold;
  font-size: 30px;
  border: none;
}
>>> .modal-footer {
  display: none !important;
}
</style>
