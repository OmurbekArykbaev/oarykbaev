import imgFlex from "../Assets/img/1-website.jpg"
import imgGrid from "../Assets/img/2-website.jpg"

export const description = [
  "Я Омурбек, мне 22 года. Увлекаюсь и занимаюсь программированием, а именно Front-End направлением. В 2020 окончил Технический Университет им И.Раззакова по специальности системный аналитик-программист. ",
]

export const skills = ["JavaScript ES6", "HTML-CSS", "React", "Redux"]

export const SocialLinks = [
  {
    href: "https://github.com/OmurbekArykbaev",
    fontAwesome: "fab fa-github",
  },
  {
    href: "https://t.me/twonpix",
    fontAwesome: "fab fa-telegram",
  },
  {
    href: "mailto:firefoxer00@gmail.com",
    fontAwesome: "fas fa-envelope",
  },
  {
    href: "https://www.linkedin.com/in/%D0%BE%D0%BC%D1%83%D1%80%D0%B1%D0%B5%D0%BA-%D0%B0%D1%80%D1%8B%D0%BA%D0%B1%D0%B0%D0%B5%D0%B2-34ab56211/",
    fontAwesome: "fab fa-linkedin",
  },
]

export const pathLinks = [
  { id: 1, path: "/", class: "nav__link-logo", title: "ARYKBAEV" },
  { id: 2, path: "/", class: "nav__link", title: "Обо мне" },
  { id: 3, path: "/projects", class: "nav__link", title: "Работы" },
]

export const cardWork = [
  {
    id: 1,
    image: imgGrid,
    title: "NewsGrid, Landing Page",
    date: "Август 2021",
    description:
      "Презентационный одностраничный сайт, на ванильном HTML,CSS с позиционнирован на Grid. Дизайн и макет был предоставлен на образовательной платформе Udemy",
    tools: ["HTML", " CSS", "Grid"],

    demoBtn: {
      visible: true,
      href: "https://flamboyant-easley-1da46e.netlify.app/",
    },
    srcCode: {
      visible: true,
      href: "https://github.com/OmurbekArykbaev/newsgrid",
    },
  },
  {
    id: 2,
    image: imgFlex,
    title: "Simple Portfolio, Vanila HTML,CSS",
    date: "Сентябрь 2021",
    description:
      "Один из первых простых сайтов написанный мной, с использованием чистого HTML-CSS без дополнительных библиотек. Проходя курс на Udemy было задание написать свой сайт. Дизайн и макет сайта также был предоставлен платформой.",
    tools: ["HTML", " CSS", "FlexBox"],

    demoBtn: {
      visible: true,
      href: "https://portfolio-website-udemy.netlify.app/",
    },
    srcCode: {
      visible: true,
      href: "https://github.com/OmurbekArykbaev/website-portfolio",
    },
  },
]
