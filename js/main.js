window.addEventListener('load', function () {
  let preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
});

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //------------------------------menu  icon and unfolding----------------------
  const menuToggle = document.querySelector("#menu-togle");

  menuToggle.addEventListener('click', function () {
    document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
    document.querySelector(".mobile-nav").classList.toggle("mobile-nav--active");
  });

  // --------------anchors------------------------------------------------------

  const anchors = document.querySelectorAll('a[href*="#"]');
  // console.log(anchors);
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

  //------------scroll----------------------------------------------------------
  let div = document.querySelector(".menu-wrapp"),
    tape = document.querySelectorAll(".tape__item-two"),
    progres = document.querySelectorAll(".tape__item-progres"),
    menu = document.querySelector(".menu"),
    first = document.querySelector(".first-screen");

  let tabMenu = document.querySelector('.tab-menu'),
    tabMenuItem = document.querySelectorAll('.tab-menu__text'),
    tabMenuLine = document.querySelectorAll('.underline'),
    tabContent = document.querySelectorAll('.projecr-exampel');

  let topButton = document.querySelector('.button-top');

  function showTopButton() {
    topButton.classList.add("show");
    topButton.classList.remove("hide");
  }

  function hideTopButton() {
    topButton.classList.remove("show");
    topButton.classList.add("hide");
  }



  window.addEventListener('scroll', function () {
    let scrolled = document.documentElement.scrollTop;

    if (scrolled < (first.offsetHeight - 80)) {
      div.style.top = '-82px';
      hideTopButton();
    } else if (scrolled > (first.offsetHeight - 80)) {
      div.style.top = '0';
      tape[0].style.width = "95%";
      tape[1].style.width = "95%";
      tape[2].style.width = "70%";
      tape[3].style.width = "40%";
      tape[4].style.width = "85%";
      tape[5].style.width = "40%";
      tape[6].style.width = "95%";
      tape[7].style.width = "85%";
      tape[8].style.width = "90%";
      tape[9].style.width = "50%";
      showTopButton();
    }
  });

  // ----------------------------- табы----------------------------
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  tabMenuLine[0].classList.add("tab-menu__active");

  tabMenu.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('tab-menu__text')) {
      for (let i = 0; i < tabMenuItem.length; i++) {
        if (target != tabMenuItem[i]) {
          tabMenuLine[i].classList.remove("tab-menu__active");
        } else if (target == tabMenuItem[i]) {
          tabMenuLine[i].classList.add("tab-menu__active");
          hideTabContent(0);
          showTabContent(i);
        }
      }
    }
  });

  let langFirstScreen = document.querySelector('.lang-first-screen'),
    langFitstScreenText = document.querySelectorAll('.lang-first');

  langFirstScreen.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('lang-first')) {
      for (let i = 0; i < langFitstScreenText.length; i++) {
        if (target == langFitstScreenText[i]) {
          switchLang(langFitstScreenText[i].textContent);
        }
      }
    }
  });

  let langDeckstop = document.querySelector('.lang-deckstop'),
    langDeckstopText = document.querySelectorAll('.lang-deckstop-text');

  langDeckstop.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('lang-deckstop-text')) {
      for (let i = 0; i < langDeckstopText.length; i++) {
        if (target == langDeckstopText[i]) {
          switchLang(langDeckstopText[i].textContent);
        }
      }
    }
  });

  let langMobile = document.querySelector('.lang-mobile'),
    langMobileText = document.querySelectorAll('.lang-mobile-text');

  langMobile.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('lang-mobile-text')) {
      for (let i = 0; i < langMobileText.length; i++) {
        if (target == langMobileText[i]) {
          switchLang(langMobileText[i].textContent);
        }
      }
    }
  });



  function switchLang(l) {
    if (l == 'RU') {
      langRu();
    } else if (l == 'EN') {
      langEn();
    } else if (l == 'UK') {
      langUk();
    }
  }

  let menuDeckstopLink = document.querySelectorAll('.menu__link'),
    menuMobileLink = document.querySelectorAll('.menu-mobile__link'),
    firstScreenOffer = document.querySelector('.offer'),
    firstScreenButtons = document.querySelectorAll('.button__text'),
    textTitles = document.querySelectorAll('.title__text'),
    photoTitle = document.querySelector('.photo-block__title'),
    photoContent = document.querySelector('.photo-block__content'),
    textStrip = document.querySelectorAll('.strip__text'),
    stepWorks = document.querySelectorAll('.part-work__text-title'),
    stepWorksContent = document.querySelectorAll('.part-work__text-content'),
    coverText = document.querySelectorAll('.cover__text'),
    coverButton = document.querySelectorAll('.cover__link'),
    titleContent = document.querySelector('.title__content'),
    formButton = document.querySelector('.form__button'),
    user = document.querySelectorAll('.form__item-input').placeholder,
    chooseFile = document.querySelector('.input__file-button-text'),
    sendMessage = document.querySelector('.form__button');


  function langUk() {
    menuDeckstopLink[1].innerHTML = 'Про мене';
    menuDeckstopLink[2].innerHTML = 'Етапи роботи';
    menuDeckstopLink[3].innerHTML = 'Проекти';
    menuDeckstopLink[4].innerHTML = 'Контакти';

    menuMobileLink[1].innerHTML = 'Про мене';
    menuMobileLink[2].innerHTML = 'Етапи роботи';
    menuMobileLink[3].innerHTML = 'Проекти';
    menuMobileLink[4].innerHTML = 'Контакти';

    firstScreenOffer.innerHTML = 'Привіт. Я Олександр. <br/> Веб-розробник повного циклу.';

    firstScreenButtons[0].innerHTML = 'Замовити сайт';
    firstScreenButtons[1].innerHTML = 'Детальніше';

    textTitles[0].innerHTML = 'Про мене';
    textTitles[1].innerHTML = 'Етапи роботи над проектом';
    textTitles[2].innerHTML = 'Проекти';
    textTitles[3].innerHTML = 'Контакти';

    photoTitle.innerHTML = 'Про себе за 10 секунд';

    photoContent.innerHTML = 'Я Front-End розробник з України, місто Київ. Займаюсь розробкою сайтів з 2016 року. Захоплююсь розробкою анімацій та візуальних ефектів для сайтів';

    textStrip[0].innerHTML = 'У Вас є ідея, яка підкорить Всесвіт? Я хотів би допомогти Вам втілити її в життя! <br/> Просто напишіть мені.';
    textStrip[1].innerHTML = 'Замовивши розробку сайту ви отримуєте не тільки гарний і сучасний сайт зроблений за правилами UX / UI дизайну, але і гарантію того, що відвідувачі цього сайту будуть в захваті.';

    stepWorks[0].innerHTML = 'Аналіз ринку і конкурентів';
    stepWorks[1].innerHTML = 'Прототипування сайту';
    stepWorks[2].innerHTML = 'Дизайн головної сторінки';
    stepWorks[3].innerHTML = 'Перерва на каву';
    stepWorks[4].innerHTML = 'Верстка сайту';
    stepWorks[5].innerHTML = 'Тестування сайту';
    stepWorks[6].innerHTML = 'Консультація';
    stepWorks[7].innerHTML = 'Оплата роботи';

    stepWorksContent[0].innerHTML = 'Мета цього етапу розробки - зрозуміти ситуацію в галузі, знайти свою нішу і зрозуміти, в якому напрямку розвиватися. Наприклад, можна проаналізувати вдалі рішення і помилки конкурентів, визначити, що в даному сегменті ринку користується популярністю і що нового можна запропонувати.';
    stepWorksContent[1].innerHTML = 'Мета цього етапу розробки - створення і представлення макета окремої сторінки або всього ресурсу за допомогою схематичних і умовних елементів. Цей етап роботи дуже важливий, він дозволяє показати орієнтовний варіант сайту, і внести правки.';
    stepWorksContent[2].innerHTML = 'Мета цього етапу розробки - створення ексклюзивного стилю майбутнього сайту і подання його у вигляді макету psd. Кількість правок не обмежена і робота ведеться до повного затвердження, адже це один з найголовніших етапів.';
    stepWorksContent[3].innerHTML = 'На цьому етапі роботи я розглядаю дизайн майбутнього сайту і шукаю шляхи його вдосконалення. Також тут нарізається макет і готується до верстки.';
    stepWorksContent[4].innerHTML = 'На даному етапі виконується верстка сайту валідно і кросбраузерно з урахуванням ваших вимог та моїх пропозицій.';
    stepWorksContent[5].innerHTML = 'Один з важливих етапів, після якого, вам надається готовий проект без помилок, з гарною читабельністю, легкістю сприйняття, зручністю і надійністю.';
    stepWorksContent[6].innerHTML = 'Після останніх змін в проекті і Вашого підтвердження того, що сайт працює ефективно і надійно, Ви отримаєте консультацію по роботі з сайтом.';

    tabMenuItem[0].innerHTML = 'Дизайн';
    tabMenuItem[1].innerHTML = 'Верстка';

    coverText[0].innerHTML = 'Цільова сторінка';
    coverText[1].innerHTML = 'Поштова розсилка';
    coverText[2].innerHTML = 'Браузерна гра';
    coverText[3].innerHTML = 'Цільова сторінка';
    coverText[4].innerHTML = 'Інформаційний портал';

    coverButton[0].innerHTML = 'Детальніше';
    coverButton[1].innerHTML = 'Детальніше';
    coverButton[2].innerHTML = 'Детальніше';
    coverButton[3].innerHTML = 'Детальніше';
    coverButton[4].innerHTML = 'Детальніше';
    titleContent.innerHTML = 'Якщо у Вас залишилися які-небудь питання або Ви хочете співпрацювати, просто напишіть мені.';
    formButton.innerHTML = 'Відправити';

    document.querySelectorAll('.form__item-input')[0].placeholder = "Ім'я";
    document.querySelectorAll('.form__item-input')[1].placeholder = 'Пошта';
    document.querySelector('.form__item-textarea').placeholder = 'Повідомлення';
    chooseFile.innerHTML = 'Оберіть файл';
    sendMessage.innerHTML = 'Відправити';

  }

  function langRu() {
    menuDeckstopLink[1].innerHTML = 'Обо мне';
    menuDeckstopLink[2].innerHTML = 'Этапы работы';
    menuDeckstopLink[3].innerHTML = 'Проекты';
    menuDeckstopLink[4].innerHTML = 'Контакты';

    menuMobileLink[1].innerHTML = 'Обо мне';
    menuMobileLink[2].innerHTML = 'Этапы работы';
    menuMobileLink[3].innerHTML = 'Проекты';
    menuMobileLink[4].innerHTML = 'Контакты';

    firstScreenOffer.innerHTML = 'Привет. Я Александр. <br/> Веб-разроботчик полного цикла.';

    firstScreenButtons[0].innerHTML = 'Заказать сайт';
    firstScreenButtons[1].innerHTML = 'Узнать больше';

    textTitles[0].innerHTML = 'Обо мне';
    textTitles[1].innerHTML = 'Этапы работы над проектом';
    textTitles[2].innerHTML = 'Проекты';
    textTitles[3].innerHTML = 'Контакты';

    photoTitle.innerHTML = 'О себе за 10 секунд';

    photoContent.innerHTML = 'Я Front-End разработчик с Украины, город Киев. Занимаюсь разработкой сайтов с 2016 года. Увлекаюсь разроботкой анимаций и визуальных эффектов на сайте.';

    textStrip[0].innerHTML = 'У Вас есть идея, которая покорит всех? Я хотел бы помочь Вам сделать это! <br/>  Просто напишите мне.';
    textStrip[1].innerHTML = 'Заказав разработку сайта вы получаете не только красивый и современый сайт зделаный за правилами UX/UI дизайна, но и гарантию того, что посетители этого сайта будут в восторге.';

    stepWorks[0].innerHTML = 'Анализ рынка и конкурентов';
    stepWorks[1].innerHTML = 'Прототипирование сайта';
    stepWorks[2].innerHTML = 'Дизайн главной страницы';
    stepWorks[3].innerHTML = 'Перерыв на кофеек';
    stepWorks[4].innerHTML = 'Верстка сайта.';
    stepWorks[5].innerHTML = 'Тестирование сайта';
    stepWorks[6].innerHTML = 'Обучение';
    stepWorks[7].innerHTML = 'Оплата работы';

    stepWorksContent[0].innerHTML = 'Цель этого этапа разработки — понять ситуацию в отрасли, найти свою нишу и понять, в каком направлении развиваться. Например, можно проанализировать удачные решения и ошибки конкурентов, определить, что в данном сегменте рынка пользуется популярностью и что нового можно предложить.';
    stepWorksContent[1].innerHTML = 'Цель этого этапа разработки — создание и представление макета отдельной страницы или всего ресурса с помощью схематических и условных элементов. Этот этап работы очень важен, он позволяет показать ориентировочный вариант сайта, и внести правки.';
    stepWorksContent[2].innerHTML = 'Цель этого этапа разработки — создание эксклюзивного стиля будущего сайта и представление его в виде макета psd. Количество правок не ограничено и работа ведется до полного утверждения, ведь это один из самых главных этапов.';
    stepWorksContent[3].innerHTML = 'На этом этапе работы я рассматриваю дизайн будущего сайта и ищу пути его усовершенствования. Также здесь нарезается макет и подготавливается к верстки.';
    stepWorksContent[4].innerHTML = 'На данном этапе выполняется верстка дизайна валидно и кроссбраузерно с учетом ваших требований моих предложений.';
    stepWorksContent[5].innerHTML = 'Один из важных жизненных этапов, после которого, вам предоставляется готовый проект без ошибок, с хорошей читабельностью, воспринимаемой легкостью, удобством и надежностью.';
    stepWorksContent[6].innerHTML = 'После последних изменений в проекте и вашего подтверждения того, что сайт работает эффективно и надежно , вы получите консультацию по работе с сайтом.';

    tabMenuItem[0].innerHTML = 'Дизайн';
    tabMenuItem[1].innerHTML = 'Верстка';

    coverText[0].innerHTML = 'Посадочная страничка';
    coverText[1].innerHTML = 'Почтовая рассылка';
    coverText[2].innerHTML = 'Браузерная игра';
    coverText[3].innerHTML = 'Посадочная страничка';
    coverText[4].innerHTML = 'Информационный сайт';

    coverButton[0].innerHTML = 'Посмотреть';
    coverButton[1].innerHTML = 'Посмотреть';
    coverButton[2].innerHTML = 'Посмотреть';
    coverButton[3].innerHTML = 'Посмотреть';
    coverButton[4].innerHTML = 'Посмотреть';

    titleContent.innerHTML = 'Если у Вас остались какие-либо вопросы или Вы хотите сотрудничать, просто напишите мне.';
    formButton.innerHTML = 'Отправить';

    document.querySelectorAll('.form__item-input')[0].placeholder = "Имя";
    document.querySelectorAll('.form__item-input')[1].placeholder = 'Почта';
    document.querySelector('.form__item-textarea').placeholder = 'Сообщение';

    chooseFile.innerHTML = 'Выберите файл';
    sendMessage.innerHTML = 'Отправить';
  }

  function langEn() {
    menuDeckstopLink[1].innerHTML = 'About me';
    menuDeckstopLink[2].innerHTML = 'Work stages';
    menuDeckstopLink[3].innerHTML = 'Projects';
    menuDeckstopLink[4].innerHTML = 'Contacts';

    menuMobileLink[1].innerHTML = 'About me';
    menuMobileLink[2].innerHTML = 'Work stages';
    menuMobileLink[3].innerHTML = 'Projects';
    menuMobileLink[4].innerHTML = 'Contacts';

    firstScreenOffer.innerHTML = 'Hey. I am Alexander. <br/>  Full-stack web developer.';

    firstScreenButtons[0].innerHTML = 'Order a site';
    firstScreenButtons[1].innerHTML = 'view more';

    textTitles[0].innerHTML = 'About me';
    textTitles[1].innerHTML = 'Work stages';
    textTitles[2].innerHTML = 'Projects';
    textTitles[3].innerHTML = 'Contacts';

    photoTitle.innerHTML = 'About me in 10 seconds';

    photoContent.innerHTML = 'I am a Front-End developer from Ukraine, the city of Kiev. I have been developing websites since 2016. I am fond of developing animations and visual effects on the site.';

    textStrip[0].innerHTML = 'Do you have an idea that will conquer everyone? I would like to help you do this! <br/> Just write to me.';
    textStrip[1].innerHTML = 'By ordering the development of the site, you get not only a beautiful and modern website created according to the rules of UX / UI design, but also a guarantee that visitors to this site will be delighted.';

    stepWorks[0].innerHTML = 'Market and competitor analysis';
    stepWorks[1].innerHTML = 'Website prototyping';
    stepWorks[2].innerHTML = 'Homepage Design';
    stepWorks[3].innerHTML = 'Coffee break';
    stepWorks[4].innerHTML = 'Site development';
    stepWorks[5].innerHTML = 'Site testing';
    stepWorks[6].innerHTML = 'Training';
    stepWorks[7].innerHTML = 'Payment for work';

    stepWorksContent[0].innerHTML = 'The purpose of this development phase is to understand the situation in the industry, find a niche and understand in which direction to develop. For example, you can analyze successful decisions and mistakes of competitors, determine what is popular in this market segment and what new can be offered.';
    stepWorksContent[1].innerHTML = 'The purpose of this development phase is to create and present a layout of a single page or the entire resource using schematic and conditional elements. This stage of work is very important, it allows you to show an indicative version of the site, and make changes.';
    stepWorksContent[2].innerHTML = 'The purpose of this development phase is to create an exclusive style for the future site and present it as a psd layout. The number of edits is not limited and the work is ongoing until full approval, because this is one of the most important stages.';
    stepWorksContent[3].innerHTML = 'At this stage of the work, I consider the design of the future site and look for ways to improve it. Also, a breadboard is cut here and prepared for work.';
    stepWorksContent[4].innerHTML = 'At this stage, the site is being developed validly and cross-browser, taking into account your requirements of my proposals.';
    stepWorksContent[5].innerHTML = 'One of the important life stages, after which you are presented with a finished project without errors, with good readability, perceived ease, convenience and reliability.';
    stepWorksContent[6].innerHTML = 'After the latest changes in the project and your confirmation that the site works efficiently and reliably, you will receive advice on working with the site.';

    tabMenuItem[0].innerHTML = 'Design';
    tabMenuItem[1].innerHTML = 'Development';

    coverText[0].innerHTML = 'Landing Page';
    coverText[1].innerHTML = 'Newsletter';
    coverText[2].innerHTML = 'Browser game';
    coverText[3].innerHTML = 'Landing Page';
    coverText[4].innerHTML = 'Web Portal';

    coverButton[0].innerHTML = 'VIEW MORE';
    coverButton[1].innerHTML = 'VIEW MORE';
    coverButton[2].innerHTML = 'VIEW MORE';
    coverButton[3].innerHTML = 'VIEW MORE';
    coverButton[4].innerHTML = 'VIEW MORE';

    titleContent.innerHTML = 'If you have any questions or want to cooperate, just email me.';
    formButton.innerHTML = 'Send';

    document.querySelectorAll('.form__item-input')[0].placeholder = "Name";
    document.querySelectorAll('.form__item-input')[1].placeholder = 'Mail';
    document.querySelector('.form__item-textarea').placeholder = 'Message';

    chooseFile.innerHTML = 'Select a file';
    sendMessage.innerHTML = 'Send';
  }


});