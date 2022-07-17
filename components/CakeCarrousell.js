import Cake from "./Cake";
import styles from "../styles/Carrousell.module.css";

// swiper
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

const CakeCarrousell = ({ cakes }) => {
  return (
    <div className={`swipercarrousell ${styles.cake_carrousell}`}>
      <Swiper
        className={styles.cake_carrousell_swiper}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 780px
          780: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        // navigation
        // pagination={{
        //   type: "progressbar",
        // }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {cakes.map((cake) => (
          <SwiperSlide key={cake.id}>
            <Cake key={cake.id} cake={cake} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CakeCarrousell;
