"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Button from "../Button";
import CarouselButton from "../CarouselButton";

import styles from "./carousel.module.css";

import "swiper/css";

import cars from "@/data/cars.json";

const Carousel = () => {
  return (
    <section className={styles.carousel}>
      <CarouselButton
        className={`${styles.prevBtn} prevBtn`}
        direction="prev"
      />
      <CarouselButton
        className={`${styles.nextBtn} nextBtn`}
        direction="next"
      />
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        slideNextClass={styles.nextSlide}
        slidePrevClass={styles.prevSlide}
        modules={[Navigation]}
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
      >
        {cars.map((car) => {
          return (
            <SwiperSlide className={styles.slide} key={car.id}>
              <h3>{car.display_name}</h3>
              <Image
                src={car.img}
                alt="Nowa Cupra Born"
                width={667}
                height={261}
              />
              <div className={styles.details}>
                <p className={styles.description}>{car.short_desc}</p>
                <div className={styles.detailsRow}>
                  <p>Dostępny w leasingu z 0% opłaty własnej</p>
                  <p>
                    Rata netto/mies. od*
                    <br />
                    <strong>{car.rate} zł</strong>
                  </p>
                  <p>
                    Cena brutto już od
                    <br />
                    <strong>
                      {car.gross_price.toLocaleString().replace(/,/g, " ")} zł
                    </strong>
                  </p>
                </div>
              </div>
              <Button href="#" variant="primary">
                Umów jazdę próbną
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
