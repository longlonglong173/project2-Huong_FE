<template>
  <div>
    <!-- home section starts  -->
    <section class="home" id="home">
      <div class="content">
        <h3>Du lịch Việt Nam</h3>
        <p>khám phá những vùng đất mới, hãy đến với dịch vụ của chúng tôi</p>
        <a href="#" class="btn">Khám Phá</a>
      </div>

      <div class="controls">
        <span
          :class="['vid-btn', { active: videoIndex == 1 }]"
          @click="videoIndex = 1"
        ></span>
        <span
          :class="['vid-btn', { active: videoIndex == 2 }]"
          data-src="~assets/images/vid-2.mp4"
          @click="videoIndex = 2"
        ></span>
        <span
          :class="['vid-btn', { active: videoIndex == 3 }]"
          data-src="~assets/images/vid-3.mp4"
          @click="videoIndex = 3"
        ></span>
        <span
          :class="['vid-btn', { active: videoIndex == 4 }]"
          data-src="~assets/images/vid-4.mp4"
          @click="videoIndex = 4"
        ></span>
        <span
          :class="['vid-btn', { active: videoIndex == 5 }]"
          data-src="~assets/images/vid-5.mp4"
          @click="videoIndex = 5"
        ></span>
      </div>

      <div class="video-container">
        <video
          v-if="videoIndex == 1"
          src="~assets/images/vid-1.mp4"
          id="video-slider"
          loop
          autoplay
          muted
        ></video>
        <video
          v-else-if="videoIndex == 2"
          src="~assets/images/vid-2.mp4"
          id="video-slider"
          loop
          autoplay
          muted
        ></video>
        <video
          v-else-if="videoIndex == 3"
          src="~assets/images/vid-3.mp4"
          id="video-slider"
          loop
          autoplay
          muted
        ></video>
        <video
          v-else-if="videoIndex == 4"
          src="~assets/images/vid-4.mp4"
          id="video-slider"
          loop
          autoplay
          muted
        ></video>
        <video
          v-else
          src="~assets/images/vid-5.mp4"
          id="video-slider"
          loop
          autoplay
          muted
        ></video>
      </div>
    </section>

    <!-- home section ends -->

    <!-- book section starts  -->

    <section class="book" id="book">
      <h1 class="heading">
        <span>đ</span>
        <span>ặ</span>
        <span>t</span>
        <span class="space"></span>
        <span>v</span>
        <span>é</span>
      </h1>

      <div class="row">
        <div class="image">
          <img src="~assets/images/book-img.svg" alt="" />
        </div>

        <form action="">
          <div class="inputBox">
            <h3>điểm đến</h3>
            <input type="text" placeholder="Nhập điểm đến" />
          </div>
          <!-- <div class="inputBox">
            <h3>how many</h3>
            <input type="number" placeholder="number of guests" />
          </div> -->
          <div class="inputBox">
            <h3>Ngày khởi hành</h3>
            <input type="date" />
          </div>
          <div class="inputBox">
            <h3>Ngày kết thúc</h3>
            <input type="date" />
          </div>
          <input type="submit" class="btn" value="book now" />
        </form>
      </div>
    </section>

    <!-- book section ends -->

    <!-- packages section starts  -->

    <section class="packages" id="tours">
      <h1 class="heading">
        <span>t</span>
        <span>o</span>
        <span>u</span>
        <span>r</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="~assets/images/p-1.jpg" alt="" />
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i> Huế</h3>
            <p>
              Di sản văn hóa thế giới gồm: Kỳ Đài, Ngọ Môn, lầu Ngũ Phụng, Điện
              Thái Hoà, Thế Miếu, Cửu Đỉnh và Hiển Lâm Các – hoàng cung của 13
              vị vua triều Nguyễn
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">2.500.000đ <span>2.000.000đ</span></div>
            <a href="#" class="btn">Đặt ngay</a>
          </div>
        </div>

        <div class="box">
          <img src="~assets/images/p-2.jpg" alt="" />
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i> Sapa</h3>
            <p>
              Chương trình nghỉ tết âm lịch SAPA - Cát cát - Fansipan - Cầu kính
              rồng mây
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">2.500.000đ <span>2.000.000đ</span></div>
            <a href="#" class="btn">Đặt ngay</a>
          </div>
        </div>

        <div class="box">
          <img src="~assets/images/p-3.jpg" alt="" />
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i> hạ long</h3>
            <p>
              Vịnh Hạ Long - một trong 7 kỳ quan thiên nhiên mới của thế giới -
              nhiều lần được UNESCO công nhận là di sản thiên nhiên của thế giới
              với hàng nghìn hòn đảo được làm nên bởi tạo hoá kỳ vĩ và sống
              động.
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">2.500.000đ <span>2.000.000đ</span></div>
            <a href="#" class="btn">Đặt ngay</a>
          </div>
        </div>

        <div class="box">
          <img src="~assets/images/p-4.jpg" alt="" />
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i> hội an</h3>
            <p>
              Hội an là 1 di sản văn hóa thế giới được UNESCO công nhận, gìn giữ
              và bảo tồn được các di tích cổ cũng như truyền thống văn hóa, là 1
              địa điểm thú vị để khám phá
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">2.500.000đ <span>2.000.000đ</span></div>
            <a href="#" class="btn">Đặt ngay</a>
          </div>
        </div>

        <div class="box">
          <img src="~assets/images/p-5.jpg" alt="" />
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i> đà nẵng</h3>
            <p>
              Đà nẵng thơ mộng với cảnh đẹp tuyệt vời, với những bãi biển đẹp
              nhất việt nam, ngoài ra đà nẵng còn được mệnh danh là nơi đáng
              sống nhất việt nam, ngại gì mà không 1 lần ghé qua đằng nẵng
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">2.500.000đ <span>2.000.000đ</span></div>
            <a href="#" class="btn">Đặt ngay</a>
          </div>
        </div>

        <div class="box">
          <img src="~assets/images/p-6.jpg" alt="" />
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i> cát bà</h3>
            <p>
              Được mệnh danh là “hòn ngọc của vịnh Bắc Bộ”, Cát Bà luôn là điểm
              đến hấp dẫn của mọi du khách.
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">2.500.000đ <span>2.000.000đ</span></div>
            <a href="#" class="btn">Đặt ngay</a>
          </div>
        </div>
      </div>
    </section>

    <!-- packages section ends -->

    <!-- services section starts  -->

    <section class="services" id="services">
      <h1 class="heading">
        <span>d</span>
        <span>ị</span>
        <span>c</span>
        <span>h</span>
        <span class="space"></span>
        <span>v</span>
        <span>ụ</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <i class="fas fa-hotel"></i>
          <h3>Giá phải chăng</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div class="box">
          <i class="fas fa-utensils"></i>
          <h3>ẩm thực</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div class="box">
          <i class="fas fa-bullhorn"></i>
          <h3>hướng dẫn chi tiết</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div class="box">
          <i class="fas fa-globe-asia"></i>
          <h3>Khắp việt nam</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div class="box">
          <i class="fas fa-plane"></i>
          <h3>di chuyển nhanh nhất</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div class="box">
          <i class="fas fa-hiking"></i>
          <h3>chuyến đi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
      </div>
    </section>

    <!-- services section ends -->

    <!-- gallery section starts  -->

    <section class="gallery" id="gallery">
      <h1 class="heading">
        <span>đ</span>
        <span>ị</span>
        <span>a</span>
        <span class="space"></span>
        <span>đ</span>
        <span>i</span>
        <span>ể</span>
        <span>m</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="~assets/images/g-1.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
        <div class="box">
          <img src="~assets/images/g-2.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
        <div class="box">
          <img src="~assets/images/g-3.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
        <div class="box">
          <img src="~assets/images/g-4.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
        <div class="box">
          <img src="~assets/images/g-5.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
        <div class="box">
          <img src="~assets/images/g-6.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
        <div class="box">
          <img src="~assets/images/g-7.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
        <div class="box">
          <img src="~assets/images/g-8.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
        <div class="box">
          <img src="~assets/images/g-9.jpg" alt="" />
          <div class="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <a href="#" class="btn">see more</a>
          </div>
        </div>
      </div>
    </section>

    <!-- gallery section ends -->

    <!-- review section starts  -->

    <section class="review" id="review">
      <h1 class="heading">
        <span>r</span>
        <span>e</span>
        <span>v</span>
        <span>i</span>
        <span>e</span>
        <span>w</span>
      </h1>

      <div class="swiper-container review-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="box">
              <img src="~assets/images/avt1.jpg" alt="" />
              <h3>Dũng Đặng</h3>
              <p>
                Dịch vụ thật tuyệt vời, nhân viên hướng dẫn nhiệt tình, giúp
                minh đặt được tour 1 cách dễ dàng chỉ chưa đầy 5 phút. Chuyén đi
                này thật tuyệt vời, tôi sẽ sử dụng lại dịch vụ của công ty.
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="box">
              <img src="~assets/images/avt2.jpg" alt="" />
              <h3>Thảo Ly</h3>
              <p>
                tôi đã sử dụng dịch vụ của nhiều công ty nhưng tôi cảm nhận được
                là dịch vụ của công ty này thật sự tuyệt vời. thật sự relax với
                chuyến đi hạ long 2 ngày 1 đêm với gia đình
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="box">
              <img src="~assets/images/pic3.png" alt="" />
              <h3>cô gái tóc xanh</h3>
              <p>
                Chuyến đi thật tuyệt vời nếu không có sự tư vấn của nhân viên
                cũng như dịch vụ quá tuyệt vời của côn công ty du lịch. Niềm vui
                nhân đôi khi bạn chọn được địa điểm du lịch họp lý, mà dịch vụ
                lại trên cả tuyệt vời nữa
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- review section ends -->

    <!-- contact section starts  -->

    <section class="contact" id="contact">
      <h1 class="heading">
        <span>L</span>
        <span>i</span>
        <span>ê</span>
        <span>n</span>
        <span class="space"></span>
        <span>h</span>
        <span>ệ</span>
      </h1>

      <div class="row">
        <div class="image">
          <img src="~assets/images/contact-img.svg" alt="" />
        </div>

        <form action="">
          <div class="inputBox">
            <input type="text" placeholder="Nhập tên" />
            <input type="email" placeholder="Nhập email" />
          </div>
          <div class="inputBox">
            <input type="number" placeholder="Nhập số điện thoại" />
            <input type="text" placeholder="Nhập chủ đề" />
          </div>
          <textarea
            placeholder="Nội dung"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" class="btn" value="Gửi " />
        </form>
      </div>
    </section>

    <!-- contact section ends -->

    <!-- brand section  -->
    <section class="brand-container">
      <div class="swiper-container brand-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide mw-100px mx-auto">
            <img src="~assets/images/avt-bk.svg" alt="" class="w-100" />
          </div>
          <div class="swiper-slide mw-100px mx-auto mt-3">
            <img src="~assets/images/logo-soict.png" alt="" class="w-100" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoIndex: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.mw-100px {
  max-width: 100px;
}
.w-100 {
  width: 100%;
}
</style>
