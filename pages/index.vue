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
          @click="
            videosSrc =
              'https://storage.googleapis.com/loaz-store/videos/vid-1.mp4'
            videoIndex = 1
          "
        ></span>
        <span
          :class="['vid-btn', { active: videoIndex == 2 }]"
          @click="
            videosSrc =
              'https://storage.googleapis.com/loaz-store/videos/vid-2.mp4'
            videoIndex = 2
          "
        ></span>
        <span
          :class="['vid-btn', { active: videoIndex == 3 }]"
          @click="
            videosSrc =
              'https://storage.googleapis.com/loaz-store/videos/vid-3.mp4'
            videoIndex = 3
          "
        ></span>
        <span
          :class="['vid-btn', { active: videoIndex == 4 }]"
          @click="
            videosSrc =
              'https://storage.googleapis.com/loaz-store/videos/vid-4.mp4'
            videoIndex = 4
          "
        ></span>
        <span
          :class="['vid-btn', { active: videoIndex == 5 }]"
          @click="
            videosSrc =
              'https://storage.googleapis.com/loaz-store/videos/vid-5.mp4'
            videoIndex = 5
          "
        ></span>
      </div>

      <div class="video-container">
        <video :src="videosSrc" id="video-slider" loop autoplay muted></video>
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
          <!-- <div class="inputBox">
            <h3>Ngày khởi hành</h3>
            <input type="date" />
          </div>
          <div class="inputBox">
            <h3>Ngày kết thúc</h3>
            <input type="date" />
          </div> -->
          <input type="submit" class="btn" value="Đặt vé" />
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
      <div class="box-container d-flex flex-wrap">
        <div
          v-for="tour in topToutList"
          :key="`topTour-${tour.id}`"
          class="col-4"
        >
          <TourCard :tour="tour" />
        </div>
      </div>
      <div class="flex-center mt-3">
        <div class="btn" @click="$router.push('/tours')">Xem tất cả</div>
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
            Dịch vụ của chúng tôi luôn có giá cả hợp lý với túi tiền cũng như
            nhu cầu của khách hàng.
          </p>
        </div>
        <div class="box">
          <i class="fas fa-utensils"></i>
          <h3>ẩm thực</h3>
          <p>
            Ẩm thực phong phú, bổ dưỡng, chúng tôi luôn chọn nhà hàng tốt nhất
            cho khách hàng.
          </p>
        </div>
        <div class="box">
          <i class="fas fa-bullhorn"></i>
          <h3>hướng dẫn chi tiết</h3>
          <p>
            hướng dẫn viên nhiệt tình và dày dặn kinh nghiệm, truyền đạt trọn
            vẹn được giá trị của tour du lịch mang lại.
          </p>
        </div>
        <div class="box">
          <i class="fas fa-globe-asia"></i>
          <h3>Khắp việt nam</h3>
          <p>
            Hoạt dộng khắp Việt Nam, luôn lựa chọn những điểm du lịch độc đáo và
            đẹp nhất Việt Nam.
          </p>
        </div>
        <div class="box">
          <i class="fas fa-plane"></i>
          <h3>di chuyển nhanh nhất</h3>
          <p>
            đầy đủ phương tiện từ hàng không đến đường thủy, quãng đường di
            chuyển hợp lý, an toàn và nhanh chóng nhất.
          </p>
        </div>
        <div class="box">
          <i class="fas fa-hiking"></i>
          <h3>chuyến đi</h3>
          <p>
            mang lại chuyến đi tuyệt vời nhất cho khách hàng. chúng tôi luôn đặt
            trải nghiệm của khách hàn hàng lên trên hết.
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
        <div
          v-for="(location, index) in topLocationList"
          :key="`location-${index}`"
          class="box"
        >
          <img :src="location.img" alt="" />
          <div class="content">
            <h3>{{ location.location }}</h3>
            <p class="line-clamp-3">
              {{ location.sumary }}
            </p>
            <a href="#" class="btn">Xem thêm</a>
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
import TourCard from '~/components/TourCard.vue'
export default {
  components: {
    TourCard,
  },
  data() {
    return {
      videoIndex: 1,
      videosSrc: 'https://storage.googleapis.com/loaz-store/videos/vid-1.mp4',
      topToutList: [
        {
          id: '1',
          img: 'https://thuathienhue.gov.vn/Portals/0/Medias/Nam2021/T6/2021_06_11Ditich.jpg',
          location: 'Huế',
          info: 'Di sản văn hóa thế giới gồm: Kỳ Đài, Ngọ Môn, lầu Ngũ Phụng, Điện Thái Hoà, Thế Miếu, Cửu Đỉnh và Hiển Lâm Các – hoàng cung của 13 vị vua triều Nguyễn',
          currentPrice: 2000000,
          oldPrice: 2500000,
          stars: 4,
        },
        {
          id: '2',
          img: 'https://vietsensetravel.com/view/at_sapa-mua-dong-co-gi-dep-co-nen-di-sapa-vao-mua-dong_dcf760d384f760e039b92456d8d5685f.jpg',
          location: 'Sapa',
          info: 'Chương trình nghỉ tết âm lịch SAPA - Cát cát - Fansipan - Cầu kính rồng mây',
          currentPrice: 2000000,
          oldPrice: 2500000,
          stars: 5,
        },
        {
          id: '3',
          img: 'https://timchuyenbay.com/assets/uploads/2020/12/vinh-ha-long-5e563331d21df-848x477-1.jpg',
          location: 'hạ long',
          info: 'Vịnh Hạ Long - một trong 7 kỳ quan thiên nhiên mới của thế giới - nhiều lần được UNESCO công nhận là di sản thiên nhiên của thế giới với hàng nghìn hòn đảo được làm nên bởi tạo hoá kỳ vĩ và sống động.',
          currentPrice: 2000000,
          oldPrice: 2500000,
          stars: 4,
        },
        {
          id: '4',
          img: 'https://cdnmedia.thethaovanhoa.vn/Upload/tyTrfgkgEUQwPYuvZ4Kn1g/files/2019/07/1607/hoi-an.jpg',
          location: 'hội an',
          info: 'Hội an là 1 di sản văn hóa thế giới được UNESCO công nhận, gìn giữ và bảo tồn được các di tích cổ cũng như truyền thống văn hóa, là 1 địa điểm thú vị để khám phá',
          currentPrice: 2000000,
          oldPrice: 2500000,
          stars: 4,
        },
        {
          id: '5',
          img: 'https://media.ex-cdn.com/EXP/media.taichinhdoanhnghiep.net.vn/files/thanhtan/2020/06/30/kinh-nghiem-du-loch-da-nang-0-1138.jpg',
          location: 'đà nẵng',
          info: 'Đà nẵng thơ mộng với cảnh đẹp tuyệt vời, với những bãi biển đẹp nhất việt nam, ngoài ra đà nẵng còn được mệnh danh là nơi đáng sống nhất việt nam, ngại gì mà không 1 lần ghé qua đằng nẵng',
          currentPrice: 2000000,
          oldPrice: 2500000,
          stars: 5,
        },
        {
          id: '6',
          img: 'https://dulichkhatvongviet.com/wp-content/uploads/2019/03/du-lich-cat-ba.jpg',
          location: 'cát bà',
          info: 'Được mệnh danh là “hòn ngọc của vịnh Bắc Bộ”, Cát Bà luôn là điểm đến hấp dẫn của mọi du khách.',
          currentPrice: 2000000,
          oldPrice: 2500000,
          stars: 4,
        },
      ],
      topLocationList: [
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-2_1632671014.jpg',
          location: 'Hạ Long',
          sumary: 'một trong những điểm đến hấp dẫn bậc nhất nước ta',
        },
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-3_1632662626.jpg',
          location: 'Hội An',
          sumary: 'nhiều thắng cảnh đẹp cùng nền ẩm thực độc đáo',
        },
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-02_1632672193.jpg',
          location: 'Quảng Bình',
          sumary:
            'Quảng Bình là địa đến thú vị với bãi biển hoang sơ, hang động độc đáo, núi sông hùng vĩ cùng nhiều món đặc sản thơm ngon',
        },
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-5_1632662666.jpg',
          location: 'Hà Nội',
          sumary:
            'Thủ đô Hà Nội ngàn năm văn hiến là một trong những nơi mà bất kỳ người Việt Nam nào cũng muốn được đặt chân đến một lần',
        },
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-6_1632662692.jpg',
          location: 'Đà Nẵng',
          sumary:
            'thành phố của nhiều cây cầu đẹp như cầu sông Hàn, cầu Rồng, cầu Thuận Phước, cầu tình yêu',
        },
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-8_1632662742.jpg',
          location: 'Vũng Tàu',
          sumary:
            'Vũng Tàu có bờ biển trải dài, cảnh quan đẹp, cùng nhiều địa danh chứa đựng giá trị văn hóa',
        },
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-9_1632662759.jpg',
          location: 'Nha Trang',
          sumary:
            'Vẻ đẹp tựa như tranh của địa điểm du lịch Nha Trang để lại ấn tượng khó phai trong lòng du khách',
        },
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-10_1632662781.jpg',
          location: 'Huế',
          sumary:
            'vẻ đẹp trầm mặc, mộng mơ cùng nhiều giá trị văn hóa, lịch sử lâu đời',
        },
        {
          img: 'https://statics.vinpearl.com/diem-du-lich-04_1632671710.jpg',
          location: 'Đà Lạt',
          sumary:
            'Với cảnh đẹp thơ mộng, khí hậu mát mẻ cùng nhiều món ăn ngon',
        },
      ],
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
