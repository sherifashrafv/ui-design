<template>
  <div>
    <nav class="nav mt-4">
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
                <span> <strong>English</strong> </span>
              </li>
              <li
                class="item p-2 rounded-pill d-flex flex-row justify-content-between"
              >
                <span class="icon-awesome">
                  <i class="fa-solid fa-user-plus"></i>
                </span>
                <span> <strong>جديد</strong> </span>
              </li>
              <li
                class="item p-2 rounded-pill d-flex flex-row justify-content-between"
              >
                <span class="icon-awesome">
                  <i class="fa-solid fa-user"></i>
                </span>
                <span> <strong>تسجيل</strong> </span>
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
    <nav class="navbar m-3 navbar-expand-lg navbar-light bg-light">
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الاستضافة
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                البرمجة
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الحلول
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                من نحن
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>

            <nuxt-link tag="li" to="/child" class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >المدونة</a
              >
            </nuxt-link>
            <nuxt-link tag="li" to="/xx" class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >اتصل بنا</a
              >
            </nuxt-link>

            <nuxt-link tag="li" exact to="/" class="nav-item">
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
    return {}
  },
}
</script>
<style scoped>
.nav {
  box-shadow: -4px 7px 15px -9px #ececec;
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
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  position: absolute;
  top: 50%;
  left: -23%;
  transform: translate(0, -50%);
}
li.nav-item a {
  font-weight: bolder;
  font-size: 16px;
  color: #24273a !important;
}
li.nav-item.dropdown a {
  position: relative;
  transition: 0.5s;
  color: #24273a;
}
li.nav-item.nuxt-link-exact-active.nuxt-link-active a {
  color: #fd9139 !important;
}
ul.navbar-nav.ml-auto.mb-2.mb-lg-0 {
  width: 700px !important;
  justify-content: space-between !important;
}
</style>
