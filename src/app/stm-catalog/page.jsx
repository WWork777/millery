import Image from "next/image";
import Catalog from "@/components/Catalog/Catalog";
import stmProducts from "@/data/stmProducts.json"



export const metadata = {
  title: "Каталог СТМ продукции - Собственная торговая марка под заказ",
  description: "Разработка и производство СТМ (собственной торговой марки) под ваш бренд. Жидкое мыло, моющие средства, косметика с вашей упаковкой.",
  alternates: { canonical: "https://industrymillery.ru/stm-catalog" },
  keywords: ["СТМ производство", "собственная торговая марка", "private label", "белая марка", "производство под заказ", "жидкое мыло СТМ", "моющие средства СТМ", "косметика под собственный бренд"],
  openGraph: {
    title: "СТМ производство - Создание собственной торговой марки",
    description: "Полный цикл разработки СТМ продукции: от концепции до готового продукта с вашим брендом. Индивидуальные рецептуры, дизайн упаковки.",
    url: "https://industrymillery.ru/stm-catalog",
    images: [{ url: "/images/Hero/fon.jpg", alt: "СТМ производство Millery" }],
    type: "website",
  },
};

export default function Page({ searchParams }) {
  return (
    <>
        <Catalog
        filterON={false}
        productsList={stmProducts}
        title="Каталог СТМ"
        initialPurpose={searchParams.purpose ?? "all"}
        />
    </>
  );
}
