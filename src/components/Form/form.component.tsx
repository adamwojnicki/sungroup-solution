"use client";
import styles from "./form.module.css";

import Container from "../Container";

const Form = () => {
  return (
    <section className={styles.form}>
      <Container>
        <p>Jazda próbna</p>
        <h2>Umów się na bezpłatną jazdę próbną</h2>
        <form onSubmit={() => console.log("submit")}>
          <div className="field">
            <label htmlFor="name">Imię *</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="field">
            <label htmlFor="secname">Nazwisko (opcjonalnie)</label>
            <input type="text" id="secname" name="secname" />
          </div>
          <div className="field">
            <label htmlFor="secname">Adren e-mail *</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="field">
            <label htmlFor="phone">Nr. telefonu *</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <p>* Pole wymagane</p>
          <div className="legal">
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
            <div className="legal-field">
              <input type="checkbox" name="marketing" id="marketing" />
              <label htmlFor="marketing">
                Zgadzam się na przetwarzanie moich danych osobowych przez
                Plichta spółka z ograniczoną odpowiedzialnością Spółka
                Komandytowa w celu przedstawienia mi informacji marketingowych i
                handlowych dotyczących produktów i usług marki CUPRA oraz innych
                powiązanych z marką CUPRA akcesoriów, produktów i usług
                motoryzacyjnych za pomocą:
              </label>
            </div>
            <div className="legal-field">
              <input
                type="checkbox"
                name="marketing-email"
                id="marketing-email"
              />
              <label htmlFor="marketing-email">E-mail</label>
            </div>
            <div className="legal-field">
              <input
                type="checkbox"
                name="marketing-phone"
                id="marketing-phone"
              />
              <label htmlFor="marketing-phone">Telefon</label>
            </div>
            <div className="legal-field">
              <input type="checkbox" name="marketing-sms" id="marketing-sms" />
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
        </form>
      </Container>
    </section>
  );
};

export default Form;
