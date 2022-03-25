<template>
  <div>
    <!-- section-1 -->
    <section class="main-block-images">
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center text-white">
                <h1>تبحث عن نطاق عالي الجودة ؟</h1>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12">
              <div class="text-center text-white">
                <span>
                  ابحث عن نطاق موقعك الذى تريد انشائه على شبكة الانترنت مع
                  فورسيرف, فهى تتيح لك أكثر من 6 امتدادات لنطاقك.
                </span>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-12">
              <form class="form-search m-auto">
                <div class="input">
                  <input type="text" placeholder="ادخل نطاقك" />
                </div>
                <div class="submit">
                  <button>افحص النطاق</button>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="m-auto">
              <ul class="links mt-4 list-unstyled d-flex flex-row">
                <li>ادارة نطاق</li>
                <li>تسجيل نطاق</li>
                <li>ادارة نطاق</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Section-1 -->

    <!-- start section-2 -->
    <section class="section-2">
      <div class="container">
        <div class="services my-5">
          <h3>خدمات فورسيرف المتاحه</h3>
          <p class="text-muted">فورسيرف تقدم لك الخدمات بجودة عالية وتمييز</p>
          <hr />
        </div>
        <div class="row gy-5">
          <div class="col-lg-3 service-blogs col-md-6 col-sm-12">
            <i class="fa-brands fa-windows"></i>
            <h6>ويندوز سيرفر</h6>
            <p class="text-muted">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها.
            </p>
          </div>
          <div class="col-lg-3 service-blogs col-md-6 col-sm-12">
            <i class="fa-brands fa-linux"></i>
            <h6>ويندوز سيرفر</h6>
            <p class="text-muted">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها.
            </p>
          </div>
          <div class="col-lg-3 service-blogs col-md-6 col-sm-12">
            <i class="fa fa-envelope"></i>
            <h6>ويندوز سيرفر</h6>
            <p class="text-muted">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها.
            </p>
          </div>
          <div class="col-lg-3 service-blogs col-md-6 col-sm-12">
            <i class="fa fa-globe"></i>
            <h6>ويندوز سيرفر</h6>
            <p class="text-muted">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- end section-2 -->

    <!-- section-3 -->

    <!-- end-section-3 -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.service-blogs {
  text-align: center;
  transition: 0.3s linear;
}
.service-blogs i {
  position: relative;
  overflow: hidden;
  display: block;
  width: 90px;
  height: 90px;
  font-size: 32px;
  line-height: 90px;
  text-align: center;
  margin: 0 auto 30px;
  border-radius: 50%;
  border: 3px solid #fd9139;
  color: #fd9139;
  transition: all 0.5s;
}
.service-blogs i:hover {
  background: #fd9139;
  color: white;
}
.service-blogs i:hover h6 {
  color: #fd9139 !important;
}

.service-blogs h6 {
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: 700;
}

.main-block-images {
  background: url('../static/Home/slider.jpg') fixed;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}
.content {
  padding: 100px 0;
}

.form-search {
  padding: 17px 0px;
  background: rgba(255, 255, 255, 0.288);
  width: 800px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: center;
  border: 1px solid #777b86;
}
.form-search div input,
.form-search .submit button {
  padding: 15px;
  border-radius: 50px;
  width: 100%;
}
.form-search .input {
  width: 60%;
  height: 100%;
}
.form-search .submit {
  width: 30%;
  height: 100%;
}
.form-search .input input {
  border: none;
  outline: none;
}
.form-search .submit button {
  width: 100%;
  background: #24273a;
  border: 1px dashed white;
  color: white;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}
.form-search .submit button:hover {
  background: white;
  border-color: #24273a;
  color: black;
}
.services {
  width: fit-content;
  margin: auto;
  text-align: center;
  overflow: hidden;
}
.services hr {
  height: 3px;
  background-image: linear-gradient(
    to right,
    #24273a 0%,
    #24273a 50%,
    #fd9139 50%,
    #fd9139 100%
  );
}
.links {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 35px;
}
.links li {
  color: #fff;
  opacity: 0.3;
  font-size: 16px;
  position: relative;
  transition: 0.3s ease-in;
}

.links li:not(:last-child)::after {
  content: '|';
  position: absolute;
  right: -25%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.links li:hover {
  color: #fd9139;
  opacity: 1;
  cursor: pointer;
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
