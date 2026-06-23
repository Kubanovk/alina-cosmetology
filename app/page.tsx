"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  ChevronDown,
  Instagram as InstagramIcon,
  Send,
} from "lucide-react";

const telegram = "https://t.me/alinashidakova";
const instagram = "https://instagram.com/iamdoctoralya";

const categories = [
  {
    title: "Эстетическая косметология",
    items: [
      ["Чистка механическая", "6 000 ₽"],
      ["Чистка комбинированная", "7 500 ₽"],
      ["Чистка комедональной формы", "11 500 ₽"],
    ],
  },
  {
    title: "Пилинги",
    items: [
      ["Peach peel", "5 000 ₽"],
      ["BioRePeelCl3", "5 000 ₽"],
      ["Raynovate Angeladin", "6 000 ₽"],
      ["M.E.Line", "5 000 ₽"],
      ["Желтый (ретиноевый)", "6 000 ₽"],
      ["Джесснера", "6 000 ₽"],
      ["Комбо пилинг (джесснера + желтый)", "8 000 ₽"],
      ["Салициловый Angiopharm", "5 000 ₽"],
    ],
  },
  {
    title: "Биоревитализация",
    items: [
      ["Коктейль Монако", "15 000–18 000 ₽"],
      ["Meso-Xanthin F199", "17 000 ₽"],
      ["Meso-Wharton P199", "17 000 ₽"],
      ["MesoEye", "16 000 ₽"],
      ["PROFHILO", "19 000 ₽"],
      ["Neauvia Hydro de luxe 2.5 ml", "23 000 ₽"],
      ["Novacutan Sbio", "17 000 ₽"],
      ["Novacutan Ybio", "17 000 ₽"],
      ["Novacutan Sbio + Ybio", "31 000 ₽"],
      ["Novacutan Prima", "19 000 ₽"],
      ["Novacutan Master", "23 000 ₽"],
      ["Novacutan Bright", "17 000 ₽"],
      ["Novacutan Eye", "16 000 ₽"],
      ["Revi silk 1 ml / 2 ml", "15 000 / 18 000 ₽"],
      ["Revi eyes 1 ml", "15 000 ₽"],
      ["Revi strong 1 ml / 2 ml", "18 000 / 20 000 ₽"],
      ["Jalupro Super Hydro", "15 000 ₽"],
      ["Jalupro young eye", "15 000 ₽"],
      ["Atlantis Lift", "15 000 ₽"],
      ["Atlantis Classic", "15 000 ₽"],
      ["Atlantis Amber", "15 000 ₽"],
      ["Aquashine classic (soft)", "16 000 ₽"],
      ["Aquashine btx", "15 000 ₽"],
      ["Aquashine br", "15 000 ₽"],
      ["Skin DNA Glow", "15 000 ₽"],
    ],
  },
  {
    title: "Биоревитализация на основе PDRN",
    items: [
      ["Plinest FAST", "18 000 ₽"],
      ["Plinest", "18 000 ₽"],
      ["Nucleoform", "18 000 ₽"],
      ["Nucleoform rich", "18 000 ₽"],
    ],
  },
  {
    title: "Контурная пластика — губы",
    items: [
      ["Stylage M 1 ml", "18 000 ₽"],
      ["Belotero Lips Shape 0,6 ml", "17 000 ₽"],
      ["Belotero Lips Contour 0,6 ml", "17 000 ₽"],
      ["Juviderm Ultra Smile 0,6 ml", "22 000 ₽"],
    ],
  },
  {
    title: "Контурная пластика — увлажнение губ",
    items: [
      ["Belotero Hydro 1 ml", "16 000 ₽"],
      ["Stylage Hydro Max 1 ml", "18 000 ₽"],
    ],
  },
  {
    title: "Контурная пластика — носогубные складки",
    items: [
      ["Stylage M 1 ml", "18 000 ₽"],
      ["Stylage L 1 ml / 2 ml", "22 000 / 35 000 ₽"],
      ["Belotero Balance 1 ml", "23 000 ₽"],
    ],
  },
  {
    title: "Контурная пластика — кольца Венеры",
    items: [
      ["Belotero Soft 1 ml", "20 000 ₽"],
      ["Belotero Balance 1 ml", "23 000 ₽"],
    ],
  },
  {
    title: "Контурная пластика — скулы, подбородок, углы нижней челюсти",
    items: [
      ["Stylage XL 1 ml / 2 ml", "22 000 / 42 000 ₽"],
      ["Stylage XXL 1 ml / 2 ml", "25 000 / 50 000 ₽"],
      ["Belotero Volume 1 ml", "23 000 ₽"],
      [
        "* В работе с данной зоной обычно необходимо по 1 мл в каждую сторону. Окончательный объем обсуждается на консультации.",
        "",
      ],
      ["Выведение филлера", "15 000 ₽"],
    ],
  },
  {
    title: "Коллагенотерапия",
    items: [
      ["Collost Micro", "27 000 ₽"],
      ["Collost 7% 0,5 ml", "13 000 ₽"],
      ["Collost 7% 1 ml", "15 000 ₽"],
      ["Collost 7% 1,5 ml", "18 000 ₽"],
      ["Collost 15% 1 ml", "23 000 ₽"],
      ["Collost 15% 1,5 ml", "25 000 ₽"],
      ["Radiesse 1,5 ml", "31 000 ₽"],
      ["Radiesse 3 ml", "60 000 ₽"],
    ],
  },
  {
    title: "Плазмотерапия",
    items: [
      ["Обычная пробирка", "9 000 ₽"],
      ["Regenlab синяя пробирка (PRP)", "20 000 ₽"],
      ["PRP терапия T-Lab", "15 000 ₽"],
    ],
  },
  {
    title: "Липолитики",
    items: [
      ["Lipilong 1 флакон / 2 флакона", "13 000 / 26 000 ₽"],
      ["Mesosculpt 1 ml", "21 000 ₽"],
      ["Липолитики по телу 10 ml", "16 000 ₽"],
    ],
  },
  {
    title: "Ботулинотерапия",
    items: [
      ["Релатокс 400 / 1 ед.", "400 ₽"],
      ["Лечение гипергидроза", "20 000 ₽"],
      ["Лоб / межбровье / глаза", "15 000 ₽"],
      ["Лоб / межбровье", "13 000 ₽"],
      ["Подбородок", "3 000 ₽"],
      ["Десневая улыбка", "3 000 ₽"],
      ["Жевательные мышцы", "13 000 ₽"],
      ["Платизма", "10 000–15 000 ₽"],
      ["Full face", "25 000 ₽"],
    ],
  },
];

export default function Home() {
  const [openCategory, setOpenCategory] = useState(categories[0].title);

  const toggleCategory = (title: string) => {
    setOpenCategory((current) => (current === title ? "" : title));
  };

  const buildTelegramMessage = () => {
    const consent = (document.getElementById("consent") as HTMLInputElement)
      ?.checked;

    if (!consent) {
      alert("Пожалуйста, подтвердите согласие на обработку персональных данных.");
      return;
    }

    const name = (document.getElementById("name") as HTMLInputElement)?.value || "";
    const contact =
      (document.getElementById("contact") as HTMLInputElement)?.value || "";
    const service =
      (document.getElementById("service") as HTMLSelectElement)?.value || "";
    const date = (document.getElementById("date") as HTMLInputElement)?.value || "";
    const comment =
      (document.getElementById("comment") as HTMLTextAreaElement)?.value || "";

    const text = `Здравствуйте, Алина! Хочу записаться на процедуру.%0A%0AИмя: ${name}%0AКонтакт: ${contact}%0AУслуга: ${service}%0AЖелаемая дата/время: ${date}%0AКомментарий: ${comment}`;

    window.open(`${telegram}?text=${text}`, "_blank");
  };

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#">
            Алина Шидакова
          </a>

          <nav className="nav-links">
            <a href="#services">Прайс</a>
            <a href="#booking">Запись</a>

            <a
              className="button secondary nav-social"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={16} />
              <span>Instagram</span>
            </a>

            <a
              className="button primary nav-social"
              href={telegram}
              target="_blank"
              rel="noreferrer"
            >
              <Send size={16} />
              <span>Telegram</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="kicker">Врач-косметолог в Москве</div>
              <h1>Алина Шидакова</h1>
              <p className="lead">
                Эстетическая косметология, инъекционные процедуры и индивидуальный
                подбор ухода для естественного результата.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#booking">
                  <CalendarDays size={18} /> Записаться
                </a>
                <a className="button secondary" href="#services">
                  Прайс
                </a>
              </div>
            </div>

            <div className="hero-card">
              <Image
                src="/images/hero-injection.png"
                alt=""
                width={320}
                height={320}
                className="hero-card-image"
                priority
              />

              <div className="hero-card-top">
                <span className="pill">@iamdoctoralya</span>
              </div>

              <div className="hero-card-content">
                <div className="signature">Алина Шидакова</div>
                <div className="card-title">врач-косметолог</div>
                <div className="mini-list">
                  <span>Москва</span>
                  <span>Запись через Telegram: @alinashidakova</span>
                  <span>Консультация и подбор процедуры</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <h2>Прайс</h2>
            </div>

            <div className="services">
              {categories.map((category) => {
                const isOpen = openCategory === category.title;

                return (
                  <div
                    className={`service-card ${isOpen ? "is-open" : ""}`}
                    key={category.title}
                  >
                    <h3>
                      <button
                        className="service-toggle"
                        type="button"
                        onClick={() => toggleCategory(category.title)}
                        aria-expanded={isOpen}
                      >
                        <span>{category.title}</span>
                        <ChevronDown size={20} className="service-chevron" />
                      </button>
                    </h3>

                    <div className="service-items">
                      {category.items.map(([name, price]) => (
                        <div
                          className={`service-row ${
                            price === "" ? "service-note" : ""
                          }`}
                          key={name}
                        >
                          <span>{name}</span>
                          {price && <span className="price">{price}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="section-text" style={{ marginTop: "22px" }}>
              Все процедуры подбираются индивидуально. Возможны противопоказания.
              Перед процедурой проводится консультация специалиста.
            </p>
          </div>
        </section>

        <section className="section" id="booking">
          <div className="container booking">
            <div>
              <div className="kicker">Онлайн запись</div>
              <h2>Записаться на процедуру</h2>

              <p className="section-text">
                Заполните форму — она откроет Telegram с готовым сообщением для
                Алины.
              </p>

              <p className="section-text">
                Instagram:{" "}
                <a href={instagram} target="_blank" rel="noreferrer">
                  @iamdoctoralya
                </a>
                <br />
                Telegram:{" "}
                <a href={telegram} target="_blank" rel="noreferrer">
                  @alinashidakova
                </a>
              </p>
            </div>

            <div className="form">
              <input id="name" placeholder="Ваше имя" />
              <input id="contact" placeholder="Телефон или Telegram" />

              <select id="service" defaultValue="">
                <option value="" disabled>
                  Выберите услугу
                </option>

                {categories.flatMap((category) =>
                  category.items
                    .filter(([, price]) => price !== "")
                    .map(([name]) => (
                      <option key={`${category.title}-${name}`} value={name}>
                        {name}
                      </option>
                    ))
                )}
              </select>

              <input id="date" placeholder="Желаемая дата и время" />

              <textarea
                id="comment"
                placeholder="Комментарий: что беспокоит, была ли процедура раньше и т.д."
              />

              <label className="consent-row">
                <input id="consent" type="checkbox" />
                <span>
                  Я соглашаюсь на обработку персональных данных и ознакомлен(а) с{" "}
                  <a href="/privacy" target="_blank">
                    политикой конфиденциальности
                  </a>{" "}
                  и{" "}
                  <a href="/consent" target="_blank">
                    согласием на обработку персональных данных
                  </a>
                  .
                </span>
              </label>

              <button className="button primary" onClick={buildTelegramMessage}>
                Отправить в Telegram
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            © {new Date().getFullYear()} Alina Shidakova — врач-косметолог,
            Москва
          </div>

          <div className="footer-links">
            <a href="/privacy">Политика конфиденциальности</a>
            <a href="/consent">Согласие на обработку персональных данных</a>
          </div>
        </div>
      </footer>
    </>
  );
}