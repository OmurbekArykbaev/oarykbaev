export const description = [
  "Я Омурбек, мне 22 года. Увлекаюсь и занимаюсь программированием, а именно Front-End направлением. В 2020 окончил Технический Университет им И.Раззакова по специальности системный аналитик-программист. ",
]

export const skills = [
  "JavaScript",
  "React",
  "Redux",
  "Sass-Scss",
  "Bootstrap 4+",
  "GIT-GitHub",
  "Docker",
]

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
    href: "https://www.linkedin.com/in/oarykbaev/",
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
    image: "/img/2-website.jpg",
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
    image: "/img/1-website.jpg",

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

  {
    id: 3,
    image: "/img/3-website.jpg",
    title: "45 mini projects, DOM JS",
    date: "Август 2021",
    description:
      "Несколько маленьких работ написаные на JavaScript при участии DOM (Document Object Model). Стилизованно в ванильном html, css.",
    tools: ["HTML", " CSS", "JavaScript ES6", "DOM", "JSON-API", "Async/Await"],

    demoBtn: {
      visible: true,
      href: "https://jsdom-mini-projects.netlify.app/",
    },
    srcCode: {
      visible: true,
      href: "https://github.com/OmurbekArykbaev/vanilaDom-50-mini-projects",
    },
  },
  {
    id: 4,
    image: "/img/4-website.jpg",
    title: "Todo List built on React-Redux",
    date: "Ноябрь 2021",
    description:
      "Я прекрасно понимаю что Менеджер состояний Redux для простого Туду листа будет трудозатратно и бессмысленно, но в качестве моей практики оно было необходимо.",
    tools: ["React", "Redux", "SCSS"],

    demoBtn: {
      visible: true,
      href: "https://todomodernapp.netlify.app/",
    },
    srcCode: {
      visible: true,
      href: "https://github.com/OmurbekArykbaev/todoModern-react-redux",
    },
  },
  {
    id: 5,
    image: "/img/5-website.jpg",
    title: "FullStack, E-Commerce Shop (MERN)",
    date: "Декабрь 2021",
    description:
      "Магазин электронных устройств, на подобий Amazon. Имеются возможности: просмотреть товар, положить в корзину, оформить и заказать. Регистрация либо вход в систему. Добавлено пагинация страниц, учетная запись для администратора с возможностями добавить/удалить товар, заблокировать пользователя и т.д.",
    tools: [
      "React",
      "Redux",
      "Bootstrap 4",
      "MongoDB, Mongoose",
      "NodeJs",
      "Express",
    ],

    demoBtn: {
      visible: true,
      href: "https://proshop-oarykbaev.herokuapp.com/",
    },
    srcCode: {
      visible: true,
      href: "https://github.com/OmurbekArykbaev/mern-proshop",
    },
  },

  {
    id: 6,
    image: "/img/6-website.jpg",
    title: "CV-Portfolio",
    date: "Январь 2022",
    description:
      "Сайт портфолио для предоставлений сведений о себе, выступает в роле электронного резюме. Краткая информация о моих пет-проектах и о моих навыках.",
    tools: ["React", "Scss", "React-Router"],

    demoBtn: {
      visible: true,
      href: "https://oarykbaev.netlify.app/",
    },
    srcCode: {
      visible: true,
      href: "https://github.com/OmurbekArykbaev/oarykbaev",
    },
  },
]
