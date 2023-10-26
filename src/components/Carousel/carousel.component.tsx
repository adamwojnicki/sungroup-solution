"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Button from "../Button";
import CarouselButton from "../CarouselButton";

import cupraBorn from "@/assets/cupra_born-sm.png";

import styles from "./carousel.module.css";

import "swiper/css";

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
        {/* TODO: FIX PREV SLIDE BUG */}
        <SwiperSlide className={styles.slide}>
          <h3>Nowa CUPRA Born</h3>
          <Image
            src={cupraBorn}
            alt="Nowa Cupra Born"
            width={667}
            height={261}
          />
          <div className={styles.details}>
            <p className={styles.description}>
              Akumulator 58 kWh moc do 204 KM²
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>1943 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>179 600 zł</strong>
              </p>
            </div>
          </div>
          <Button href="#" variant="primary">
            Umów jazdę próbną
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h3 className={styles.headline}>Nowa CUPRA Born</h3>
          <Image
            src={cupraBorn}
            alt="Nowa Cupra Born"
            width={667}
            height={261}
          />
          <div className={styles.details}>
            <p className={styles.description}>
              Akumulator 58 kWh moc do 204 KM²
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>1943 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>179 600 zł</strong>
              </p>
            </div>
          </div>
          <Button href="#" variant="primary">
            Umów jazdę próbną
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h3 className={styles.headline}>Nowa CUPRA Born</h3>
          <Image
            src={cupraBorn}
            alt="Nowa Cupra Born"
            width={667}
            height={261}
          />
          <div className={styles.details}>
            <p className={styles.description}>
              Akumulator 58 kWh moc do 204 KM²
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>1943 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>179 600 zł</strong>
              </p>
            </div>
          </div>
          <Button href="#" variant="primary">
            Umów jazdę próbną
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h3 className={styles.headline}>Nowa CUPRA Born</h3>
          <Image
            src={cupraBorn}
            alt="Nowa Cupra Born"
            width={667}
            height={261}
          />
          <div className={styles.details}>
            <p className={styles.description}>
              Akumulator 58 kWh moc do 204 KM²
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>1943 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>179 600 zł</strong>
              </p>
            </div>
          </div>
          <Button href="#" variant="primary">
            Umów jazdę próbną
          </Button>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
