import Image from "next/image";
import styles from "../styles/Carrousell.module.css";

// swiper
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const SwiperBlog = () => {
  return (
    <div className={styles.carrousell}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            priority="true"
            layout="responsive"
            width={200}
            height={150}
            src="/img/cake2.jpg"
            alt="cake image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            priority="true"
            layout="responsive"
            width={200}
            height={150}
            src="/img/cake.jpg"
            alt="cake image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            priority="true"
            layout="responsive"
            width={200}
            height={150}
            src="/img/cake1.jpg"
            alt="cake image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            priority="true"
            layout="responsive"
            width={200}
            height={150}
            src="/img/cake3.jpg"
            alt="cake image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            priority="true"
            layout="responsive"
            width={200}
            height={150}
            src="/img/cake4.jpg"
            alt="cake image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            priority="true"
            layout="responsive"
            width={200}
            height={150}
            src="/img/cake5.jpg"
            alt="cake image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBlog;
