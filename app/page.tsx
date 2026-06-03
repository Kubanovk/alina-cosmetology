
"use client";

import { CalendarDays, Instagram, Send } from "lucide-react";

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
      ["PRX-T33 (лицо)", "6 000 ₽"],
      ["BioRePeelCl3", "5 000 ₽"],
      ["RevitaPeel", "5 000 ₽"],
      ["Азелаиновый", "5 000 ₽"],
      ["M.E.Line", "8 500 ₽"],
      ["Желтый (ретиноевый)", "5 000 ₽"],
      ["Джесснера", "5 000 ₽"],
      ["Комбо пилинг (джесснера + желтый)", "8 000 ₽"],
      ["Салициловый Angiopharm", "4 000 ₽"],
    ],
  },
  {
    title: "Биоревитализация",
    items: [
      ["Meso-Xanthin F199", "18 000 ₽"],
      ["Meso-Wharton P199", "18 000 ₽"],
      ["MesoEye", "16 000 ₽"],
      ["PROFHILO", "21 000 ₽"],
      ["Neauvia Hydro de luxe 2.5 ml", "25 000 ₽"],
      ["Novacutan Sbio/Ybio", "16 000 ₽"],
      ["Revi silk 1 ml / 2 ml", "16 000 / 17 000 ₽"],
      ["Revi eyes 1 ml", "17 000 ₽"],
      ["Revi strong 1 ml / 2 ml", "18 000 / 20 000 ₽"],
      ["Jalupro Super Hydro", "20 000 ₽"],
      ["Jalupro young eye", "19 000 ₽"],
      ["Atlantis Lift", "20 000 ₽"],
      ["Atlantis Classic", "20 000 ₽"],
      ["Atlantis Amber", "19 000 ₽"],
      ["Aquashine classic (soft)", "16 000 ₽"],
      ["Aquashine btx", "18 000 ₽"],
      ["Aquashine br", "16 000 ₽"],
      ["Skin DNA Glow", "19 000 ₽"],
    ],
  },
  {
    title: "Биоревитализация на основе PDRN",
    items: [
      ["Plinest FAST", "20 000 ₽"],
      ["Plinest", "20 000 ₽"],
      ["Nucleoforn", "19 000 ₽"],
      ["Nucleoforn rich", "19 000 ₽"],
      ["Mirancy PDRN Shain", "16 000 ₽"],
      ["Mirancy PDRN Boost", "16 000 ₽"],
      ["Mirancy PDRN Eye", "16 000 ₽"],
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
  const buildTelegramMessage = () => {
    const name = (document.getElementById("name") as HTMLInputElement)?.value || "";
    const contact = (document.getElementById("contact") as HTMLInputElement)?.value || "";
    const service = (document.getElementById("service") as HTMLSelectElement)?.value || "";
    const date = (document.getElementById("date") as HTMLInputElement)?.value || "";
    const comment = (document.getElementById("comment") as HTMLTextAreaElement)?.value || "";

    const text = `Здравствуйте, Алина! Хочу записаться на процедуру.%0A%0AИмя: ${name}%0AКонтакт: ${contact}%0AУслуга: ${service}%0AЖелаемая дата/время: ${date}%0AКомментарий: ${comment}`;
    window.open(`${telegram}?text=${text}`, "_blank");
  };

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#">Alina Shidakova</a>
          <nav className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#booking">Запись</a>
            <a href={instagram} target="_blank">Instagram</a>
            <a className="button primary" href={telegram} target="_blank"><Send size={16}/> Telegram</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="kicker">Врач-косметолог в Москве</div>
              <h1>Эстетическая косметология с медицинским подходом</h1>
              <p className="lead">
                Чистки, пилинги, биоревитализация, PDRN-препараты и ботулинотерапия.
                Индивидуальный подбор процедур и аккуратный естественный результат.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#booking"><CalendarDays size={18}/> Записаться</a>
                <a className="button secondary" href="#services">Посмотреть цены</a>
              </div>
            </div>

            <div className="hero-card">
              <span className="pill">@iamdoctoralya</span>
              <div className="signature">Алина Шидакова</div>
              <div className="card-title">врач-косметолог</div>
              <div className="mini-list">
                <span>Москва</span>
                <span>Запись через Telegram: @alinashidakova</span>
                <span>Консультация и подбор процедуры</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <h2>Услуги и цены</h2>
              <p className="section-text">Цены указаны в рублях. Финальная процедура подбирается после консультации.</p>
            </div>
            <div className="services">
              {categories.map((category) => (
                <div className="service-card" key={category.title}>
                  <h3>{category.title}</h3>
                  {category.items.map(([name, price]) => (
                    <div className="service-row" key={name}>
                      <span>{name}</span>
                      <span className="price">{price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="booking">
          <div className="container booking">
            <div>
              <div className="kicker">Онлайн запись</div>
              <h2>Записаться на процедуру</h2>
              <p className="section-text">
                Заполните форму — она откроет Telegram с готовым сообщением для Алины.
              </p>
              <p className="section-text">
                Instagram: <a href={instagram} target="_blank">@iamdoctoralya</a><br/>
                Telegram: <a href={telegram} target="_blank">@alinashidakova</a>
              </p>
            </div>

            <div className="form">
              <input id="name" placeholder="Ваше имя" />
              <input id="contact" placeholder="Телефон или Telegram" />
              <select id="service" defaultValue="">
                <option value="" disabled>Выберите услугу</option>
                {categories.flatMap(c => c.items.map(([name]) => (
                  <option key={`${c.title}-${name}`} value={name}>{name}</option>
                )))}
              </select>
              <input id="date" placeholder="Желаемая дата и время" />
              <textarea id="comment" placeholder="Комментарий: что беспокоит, была ли процедура раньше и т.д." />
              <button className="button primary" onClick={buildTelegramMessage}>Отправить в Telegram</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Alina Shidakova — врач-косметолог, Москва</div>
      </footer>
    </>
  );
}
