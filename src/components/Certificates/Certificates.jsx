"use client";

import "./Certificates.scss";

const CERTS = [
  { id: 1, name: "Гель для душа Millery, 300мл", link: "/files/shower-gel-mill-300.pdf", icon: "/images/Certificates/file.svg" },
  { id: 2, name: "Средство белизна гель Milffor, 2 л", link: "files/milffor.pdf", icon: "/images/Certificates/file.svg" },
  { id: 3, name: "Средство белизна гель Milffor, 1 л", link: "files/milffor.pdf", icon: "/images/Certificates/file.svg" },
  { id: 4, name: "Жидкое крем мыло Небесная чистота Millery, 1 л", link: "files/liquid-soap-cloud-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 5, name: "Жидкое крем мыло Небесная чистота Millery, 5 л", link: "files/liquid-soap-cloud-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 6, name: "Жидкое крем мыло Антибактериальное Millery, 5 л", link: "files/liquid-soap-cloud-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 7, name: "Средство для мытья посуды Яблоко Millery, 5 л", link: "files/dishwashing-liquid-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 8, name: "Средство для мытья посуды Яблоко Millery, 500 мл", link: "files/dishwashing-liquid-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 9, name: "Средство для мытья посуды Яблоко ECO Millery, 5 л", link: "files/dishwashing-liquid-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 10, name: "Средство для мытья посуды Лимон Super Millery, 5 л", link: "files/dishwashing-liquid-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 11, name: "Средство для мытья посуды Лимон Super Millery, 500 мл", link: "files/dishwashing-liquid-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 12, name: "СТМ Бегемаг Средство для мытья посуды Папайя, 500 мл", link: "files/dishwashing-liquid-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 13, name: "СТМ Бегемаг Средство для мытья посуды Цитрусовая свежесть, 500 мл", link: "files/dishwashing-liquid-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 14, name: "СТМ Бегемаг Средство для мытья посуды Цитрусовая свежесть, 500 мл", link: "files/dishwashing-liquid-mill.pdf", icon: "/images/Certificates/file.svg" },
  { id: 15, name: "Средство для уборки универсальное Прогресс, 1 л", link: "files/progress.jpg", icon: "/images/Certificates/file.svg" },
  { id: 16, name: "Средство для уборки универсальное Прогресс, 5 л", link: "files/progress.jpg", icon: "/images/Certificates/file.svg" },
  { id: 17, name: "Биоразлагаемый шампунь Millery, 300 мл", link: "files/shower-gel-mill-300.pdf", icon: "/images/Certificates/file.svg" },
];

export default function Certificates() {
  return (
    <section className="certs" aria-labelledby="certs-title">
      <div className="certs__container">
        <h1 className="certs__title" id="certs-title">Сертификаты</h1>

        <div className="certs__grid">
          {CERTS.map((cert) => (
            <div className="certs__item" key={cert.id}>
              <a download href={cert.link} className="certs__icon" target="_blank" rel="noopener noreferrer">
                <img src={cert.icon} alt={cert.name} />
              </a>
              <span className="certs__name">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
