"use client";
import { useState } from "react";

import styles from "./form.module.css";

import Container from "../Container";

import CustomSelect from "../CustomSelect";

import Button from "../Button";

const Form = () => {
  const [carModel, setCarModel] = useState("cupra_leon");
  const [name, setName] = useState("");
  const [secName, setSecName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [consentEmail, setConsentEmail] = useState(false);
  const [consentPhone, setConsentPhone] = useState(false);
  const [consentSMS, setConsentSMS] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(
      JSON.stringify({
        carModel,
        name,
        secName,
        email,
        phone,
        consent,
        consentEmail,
        consentPhone,
        consentSMS,
      })
    );
  };

  return (
    <section className={styles.form}>
      <Container narrow>
        <p className={styles.eyebrow}>Jazda próbna</p>
        <h2 className={styles.headline}>
          Umów się na bezpłatną jazdę&nbsp;próbną
        </h2>

        <div className={styles.field}>
          <CustomSelect setCarModel={setCarModel} />
        </div>

        <form>
          <div className={styles.field}>
            <label htmlFor="name">Imię *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Imię *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="secname">Nazwisko (opcjonalnie)</label>
            <input
              type="text"
              id="secname"
              name="secname"
              placeholder="Nazwisko (opcjonalnie)"
              onChange={(e) => setSecName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="secname">Adres e-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Adres e-mail *"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Nr. telefonu *</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Nr. telefonu *"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <p>* Pole wymagane</p>
          </div>
          <div className={styles.legal}>
            <p>
              Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w
              celu przedstawienia informacji handlowej w wybrany przez Ciebie
              sposób w związku <a href="#">Czytaj więcej</a>
            </p>
            <p>
              Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości
              przedstawiania Ci atrakcyjnych ofert / promocji produktów,
              akcesoriów i usług marki CUPRA w przyszłości.
            </p>
            <div className={styles.legalField}>
              <input
                type="checkbox"
                name="marketing"
                id="marketing"
                onChange={() => setConsent(!consent)}
                checked={consent}
              />
              <label htmlFor="marketing">
                Zgadzam się na przetwarzanie moich danych osobowych przez
                Plichta spółka z ograniczoną odpowiedzialnością Spółka
                Komandytowa w celu przedstawienia mi informacji marketingowych i
                handlowych dotyczących produktów i usług marki CUPRA oraz innych
                powiązanych z marką CUPRA akcesoriów, produktów i usług
                motoryzacyjnych za pomocą:
              </label>
            </div>
            <div className={styles.legalField}>
              <input
                type="checkbox"
                name="marketing-email"
                id="marketing-email"
                onChange={() => setConsent(!consentEmail)}
                checked={consentEmail}
              />
              <label htmlFor="marketing-email">E-mail</label>
            </div>
            <div className={styles.legalField}>
              <input
                type="checkbox"
                name="marketing-phone"
                id="marketing-phone"
                onChange={() => setConsent(!consentPhone)}
                checked={consentPhone}
              />
              <label htmlFor="marketing-phone">Telefon</label>
            </div>
            <div className={styles.legalField}>
              <input
                type="checkbox"
                name="marketing-sms"
                id="marketing-sms"
                onChange={() => setConsent(!consentSMS)}
                checked={consentSMS}
              />
              <label htmlFor="marketing-sms">Wiadomość SMS/MMS</label>
            </div>
            <p>
              Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i
              usunięcia swoich danych oraz do wycofania w każdym momencie swojej
              zgody.
            </p>
            <p>
              Twoje dane będą przetwarzane tylko w stopniu umożliwiającym
              realizację wymienionego celu.
            </p>
            <p>
              Administratorem Twoich danych jest Plichta spółka z ograniczoną
              odpowiedzialnością Spółka Komandytowa, z siedzibą w Wejherowie
              przy ulicy Gdańskiej 13c. Zapraszamy do zapoznania się z naszą
              polityką prywatności umieszczoną pod linkiem:{" "}
              <a
                href="https://www.plichta.com.pl/polityka-prywatnosci"
                target="_blank"
              >
                https://www.plichta.com.pl/polityka-prywatnosci
              </a>
            </p>
          </div>
          <button
            className={styles.formButton}
            onClick={(e) => handleSubmit(e)}
          >
            Umów jazdę próbną
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Form;
