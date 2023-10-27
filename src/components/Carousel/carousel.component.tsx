"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Button from "../Button";
import CarouselButton from "../CarouselButton";

import cupraBorn from "@/assets/cupra_born.png";
import cupraFormentor from "@/assets/cupra_formentor.png";
import cupraFormentorVZ from "@/assets/cupra_formentor_vz.png";
import cupraAteca from "@/assets/cupra_ateca.png";
import cupraLeon from "@/assets/cupra_leon.png";
import cupraLeonSportstourer from "@/assets/cupra_leon_sportstourer.png";

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
          <h3 className={styles.headline}>CUPRA Formentor</h3>
          <Image
            src={cupraFormentor}
            alt="CUPRA Formentor"
            width={667}
            height={261}
          />
          <div className={styles.details}>
            <p className={styles.description}>
              Maksymalna prędkość: 204 KM/H Moc silnika: 150 KM
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>1439 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>127 800 zł</strong>
              </p>
            </div>
          </div>
          <Button href="#" variant="primary">
            Umów jazdę próbną
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h3 className={styles.headline}>CUPRA Formentor VZ</h3>
          <Image
            src={cupraFormentorVZ}
            alt="CUPRA Formentor VZ"
            width={667}
            height={261}
          />
          <div className={styles.details}>
            <p className={styles.description}>
              Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>1553 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>152 400 zł</strong>
              </p>
            </div>
          </div>
          <Button href="#" variant="primary">
            Umów jazdę próbną
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h3 className={styles.headline}>CUPRA Ateca</h3>
          <Image src={cupraAteca} alt="CUPRA Ateca" width={667} height={261} />
          <div className={styles.details}>
            <p className={styles.description}>
              Maksymalna prędkość: 247 KM/H Moc silnika: 300 KM
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>2334 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>220 700 zł</strong>
              </p>
            </div>
          </div>
          <Button href="#" variant="primary">
            Umów jazdę próbną
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h3 className={styles.headline}>Leon</h3>
          <Image src={cupraLeon} alt="Leon" width={667} height={261} />
          <div className={styles.details}>
            <p className={styles.description}>
              Maksymalna prędkość: 245 KM/H Moc silnika: 300 KM
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>1553 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>152 400 zł</strong>
              </p>
            </div>
          </div>
          <Button href="#" variant="primary">
            Umów jazdę próbną
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h3 className={styles.headline}>Leon Sportstourer</h3>
          <Image src={cupraLeon} alt="Leon" width={667} height={261} />
          <div className={styles.details}>
            <p className={styles.description}>
              Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM
            </p>
            <div className={styles.detailsRow}>
              <p>Dostępny w leasingu z 0% opłaty własnej</p>
              <p>
                Rata netto/mies. od*
                <br />
                <strong>1601 zł</strong>
              </p>
              <p>
                Cena brutto już od
                <br />
                <strong>156 200 zł</strong>
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
