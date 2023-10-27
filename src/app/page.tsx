import Hero from "@/components/Hero/hero.component";
import Mosaic from "@/components/Mosaic";
import Carousel from "@/components/Carousel";
import HalfText from "@/components/HalfText";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Headline from "@/components/Headline";
import Form from "@/components/Form";

import feat1 from "@/assets/feat_1.png";
import feat2 from "@/assets/feat_2.png";
import feat3 from "@/assets/feat_3.png";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mosaic />
      <Carousel />
      <HalfText imageSrc={feat1} imageAlt="Technologia" paddingTop>
        <Eyebrow>Technologia</Eyebrow>
        <Headline>
          Poczuj pełną wolność jazdy dzięki licznym innowacjom.
        </Headline>
        <Button href="#" variant="primary-light">
          Umów jazdę próbną
        </Button>
      </HalfText>
      <HalfText imageSrc={feat2} imageAlt="Potęga Designu" reverse>
        <Eyebrow>Potęga Designu</Eyebrow>
        <Headline>
          Crossover emanujący gracją, dynamizmem i&nbsp;czystym wyrafinowaniem.
        </Headline>
        <Button href="#" variant="primary-light">
          Umów jazdę próbną
        </Button>
      </HalfText>
      <HalfText imageSrc={feat3} imageAlt="Design wnętrza">
        <Eyebrow>Design wnętrza</Eyebrow>
        <Headline>
          Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu CUPRY.
        </Headline>
        <Button href="#" variant="primary-light">
          Umów jazdę próbną
        </Button>
      </HalfText>
      <Form />
    </main>
  );
}
