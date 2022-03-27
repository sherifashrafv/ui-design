<template>
  <footer>
    <!-- Start-Footer-1-->
    <section class="footer">
      <div class="first-head p-5">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="booking-model col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="main-parent d-flex flex-row align-items-center">
                <div><img src="../static/Home/arrow.png" alt="" /></div>
                <div>
                  <b-button class="button-booking" v-b-modal.modal-1
                    >احجز دسكرة</b-button
                  >

                  <b-modal id="modal-1" title="BootstrapVue">
                    <p class="my-4">Hello from modal!</p>
                  </b-modal>
                </div>
                <div><img src="../static/Home/arrow2.png" alt="" /></div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="text-model text-right text-white">
                <h3>فتح تذكرة جديدة</h3>
                <p>فورسيرف تقدم لك الخدمات بجودة عالية وتمييز</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End-Footer-1 -->

    <!-- Start-Footer-2 -->

    <section class="footer-2 pb-5">
      <div class="container">
        <!-- Head -->
        <div class="head-footer">
          <div class="row main-footer align-items-center">
            <div class="col-lg-7 col-md-12">
              <div class="button-group d-flex flex-row justify-content-end">
                <button>التحدث مباشرة</button>
                <button>رسالة نصية</button>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 mt-5 p-0">
              <div class="title text-white text-right w-100">
                <h3>اذا كان لديك سؤال او مشكلة ما , تواصل معنا بحرية</h3>
                <p>خدمة 24 ساعه على مدار أيام الاسبوع</p>
              </div>
            </div>
          </div>
        </div>
        <!-- End-Header -->
        <!-- Start-Footer-links -->
        <section class="end-footer">
          <div class="row">
            <div class="box text-right text-white col-lg-3 col-md-6 col-sm-12">
              <h6 class="mb-2">احنا مين</h6>
              <hr class="mb-5" />
              <p>
                بدات شركة فور سيرف سنة 2010 فى تقديم خدمات الويب , و مثل كل شركة
                كانت البداية فى تقديم الخدمات البسيطة و لكن كان لدينا هدف واحد
                هو الارتقاء ليس بالشركة فحسب بل بالويب العربى بأكملة من هذا
                المنطلق مع المعاملة المحترمة والمتبادلة معنا و مع عملائنا زادت
                قدرتنا على التوسع
              </p>
            </div>
            <div class="box text-right text-white col-lg-3 col-md-6 col-sm-12">
              <h6 class="mb-2">طرق الاتصال</h6>
              <hr class="mb-5" />
              <ul
                class="contact-us-ul p-0 m-0 d-flex flex-column align-items-end"
              >
                <li class="contact-us-links d-flex flex-row">
                  <span> التليفون : 011154464465 </span>
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                </li>
                <li class="contact-us-links d-flex flex-row">
                  <span>الدعم الفنى: 00201002345678 </span>
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                </li>
                <li class="contact-us-links d-flex flex-row">
                  <span
                    >:البريد الالكترونى
                    <br />
                    <span>forserv@support.com</span>
                  </span>
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                </li>
                <li class="contact-us-links d-flex flex-row">
                  <span>العنوان: مصر - الدقهلية - المنصورة</span>
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                </li>
              </ul>
            </div>
            <div class="box text-right text-white col-lg-3 col-md-6 col-sm-12">
              <h6 class="mb-2">خدماتنا</h6>
              <hr class="mb-5" />
              <ul
                class="contact-us-ul p-0 m-0 d-flex flex-column align-items-end"
              >
                <nuxt-link
                  tag="li"
                  role="button"
                  to="/station"
                  class="nuxt-links-to text-white font-weight-bold d-flex flex-row text-decoration-none"
                >
                  <span> البوابات الاكترونية </span>
                  <span>
                    <i class="fa fa-server"></i>
                  </span>
                </nuxt-link>
                <nuxt-link
                  tag="li"
                  to="/station"
                  role="button"
                  class="nuxt-links-to text-white font-weight-bold d-flex flex-row text-decoration-none"
                >
                  <span> المتاجر الالكترونية</span>
                  <span>
                    <i class="fa fa-sitemap"></i>
                  </span>
                </nuxt-link>
                <nuxt-link
                  tag="li"
                  to="/station"
                  role="button"
                  class="nuxt-links-to text-white font-weight-bold d-flex flex-row text-decoration-none"
                >
                  <span> تطبيقات الهواتف</span>
                  <span>
                    <i class="fa fa-paint-brush"></i>
                  </span>
                </nuxt-link>
                <nuxt-link
                  tag="li"
                  to="/station"
                  role="button"
                  class="nuxt-links-to text-white font-weight-bold d-flex flex-row text-decoration-none"
                >
                  <span>شهادات ssd</span>
                  <span>
                    <span class="fa fa-code"></span>
                  </span>
                </nuxt-link>
              </ul>
            </div>

            <div class="box text-right text-white col-lg-3 col-md-6 col-sm-12">
              <h6 class="mb-2">النشرة الاخبارية</h6>
              <hr class="mb-5" />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="البريد الالكتروني"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="البريد الالكتروني"
                />
              </div>
              <div class="open">
                <button type="button">أرسال</button>
              </div>
            </div>
          </div>
          <div class="text-center">
            <p class="text-white m-0 mt-5">
              حق النشر © 2016 فور سيرف. جميع الحقوق محفوظة.
            </p>
          </div>
        </section>
        <!-- start-footer-3 -->
      </div>
    </section>

    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="facebook text-center col-lg-2">
            <span class="fa-brands fa-facebook-square"></span>
          </div>
          <div class="twitter text-center col-lg-2">
            <span class="fa-brands fa-twitter"></span>
          </div>
          <div class="google text-center col-lg-2">
            <span class="fa-brands fa-google"></span>
          </div>
          <div class="linkedin text-center col-lg-2">
            <span class="fa-brands fa-linkedin-in"></span>
          </div>
          <div class="dribbble text-center col-lg-2">
            <span class="fa-brands fa-dribbble"></span>
          </div>
          <div class="wordpress text-center col-lg-2">
            <span class="fa-brands fa-wordpress"></span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
.facebook {
  background: #3b5997;
}
.twitter {
  background: #54abee;
}
.google {
  background: #de4b39;
}

.dribbble {
  background: #ea4c89;
}
.linkedin {
  background: #0a76b4;
}
.wordpress {
  background: #2c97c3;
}
.wordpress span {
  color: #ea4c89 !important;
}
.facebook span,
.linkedin span,
.wordpress span,
.twitter span,
.facebook span,
.google span,
.dribbble span {
  color: white;
  font-size: 25px;
  padding: 20px;
}
.form-control {
  border-radius: 50px;
  background: #24273a;
  border: none;
  color: #555;
  border: 1px solid #3e4259;
  text-align: right;
  padding: 25px 15px;
}
.open button {
  margin-top: 10px;
  padding: 15px;
  width: 130px;
  border: 1px dashed #24273a;
  background: white;
  color: #24273a;
  border-radius: 50px;
  font-weight: bold;
}
.open button:hover {
  border: 1px dashed #24273a;
  background: #fd9139;
  color: white;
}
.contact-us-ul {
  gap: 25px;
}
.contact-us-ul li {
  gap: 15px;
}
.nuxt-links-to {
  transition: 0.3s;
}
li.nuxt-links-to:hover {
  color: #fd9139 !important;
}

.box hr {
  background-image: linear-gradient(
    to right,
    #fff 0%,
    #fff 50%,
    #fd9139 50%,
    #fd9139 100%
  );
  height: 3px;
  border-radius: 5px;
}
.first-head {
  background: #fd9139;
}
.button-group {
  gap: 5px;
}
.button-group button {
  background: white;
  border: 1px dashed #24273a;
  color: black;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  border-radius: 50px;
  padding: 14px 55px;
  transition: 0.3s;
}
.button-group button:hover {
  border-color: #24273a;
  background: #fd9139;
  color: white;
  font-weight: bold;
}
.main-footer {
  background-image: url('../static/Home/support.png');
  height: 222px;
  margin-bottom: 25px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.footer-2 {
  background: #24273a;
}
.button-booking {
  width: 100%;
  background: #24273a;
  border: 1px dashed white;
  color: white;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  border-radius: 50px;
  padding: 18px 35px;
}
.button-booking:hover {
  background: white;
  color: black;
}
.main-parent {
  gap: 7px;
}
.footer-2 {
  padding-top: 100px;
  background: #24273a;
}

/* mediaQuery-mediam */
@media (min-width: 768px) {
}
/* Large */
@media (min-width: 992px) and (max-width: 1199.98px) {
}
</style>
