(() => {
  'use strict';

  const copy = {
    ru: {
      title: 'DALA — лист. Вода. И ничего лишнего.',
      description: 'DALA — витрина вымышленного бренда зелёного чая. Выберите сорт и соберите демо-набор на русском или казахском языке.',
      skip: 'Перейти к выбору чая', home: 'DALA — на главную', navigation: 'Основная навигация',
      languageLabel: 'Язык сайта', close: 'Закрыть окно', newTab: ' (откроется в новой вкладке)',
      nav: { catalog: 'Выбор чая', brew: 'Как заварить', about: 'О бренде', set: 'Набор' },
      hero: {
        demo: 'Демовитрина', title1: 'Лист.', title2: 'Вода.', title3: 'И ничего лишнего.',
        description: 'Зелёный чай DALA для неспешной чашки. Три сорта, понятный вкус и ни одного сложного правила.',
        cta: 'Выбрать чай', note: 'Листовой чай · 50 г в пачке · Цены демонстрационные',
        photo: 'White Monkey · прозрачный настой', leafCaption: 'Всё начинается с листа', gram: 'г', seal: 'зелёного чая'
      },
      catalog: {
        title: 'Найдите свой зелёный.',
        description: 'Три сорта с разным характером. Загляните в лист, выберите вкус и соберите чайный набор.',
        note: 'Фотографии показывают реальные сорта. Магазин и цены — демо.',
        end: 'Лист. Вода. Ваш любимый вкус.', viewSet: 'Посмотреть набор',
        add: 'Добавить', more: 'Добавить ещё', added: 'добавлен в набор', kind: 'Листовой зелёный чай'
      },
      brew: {
        title: 'Дайте листу раскрыться.', intro: 'Начните с простого рецепта, а следующую чашку сделайте по своему вкусу.',
        tea: 'Чай', water: 'Вода', temperature: 'Температура', time: 'Время', ml: 'мл', minutes: 'мин',
        step1: 'Отмерьте чай и положите его в чайник.', step2: 'Залейте горячей, но не кипящей водой.',
        step3: 'Подождите 2–3 минуты. Попробуйте и найдите своё время.', caption: 'Сэнтя · первая заварка', credit: 'О фотографии'
      },
      about: {
        label: 'Наша идея', title: 'Хороший чай не нужно усложнять.',
        description: 'Просто открыть пачку, заварить и попробовать. DALA — вымышленный бренд, созданный для этой демонстрационной витрины.', cta: 'Собрать набор'
      },
      footer: {
        tagline: 'Ваша следующая чашка начинается здесь.', up: 'Наверх ↑',
        demo: 'Это демонстрационный сайт. Заказы и оплата не выполняются.', credits: 'Фото и лицензии'
      },
      set: {
        kicker: 'Ваш чайный набор', title: 'Вы выбрали', disclaimer: 'Демо-режим: настоящий заказ и оплата не выполняются.',
        emptyTitle: 'Здесь ждут ваши сорта', emptyDescription: 'Добавьте чай из каталога — соберём его в одну заявку.', browse: 'Перейти к чаям',
        total: 'Итого за демо-набор', priceNote: 'Цены условные, списывать деньги неоткуда и незачем.',
        copy: 'Скопировать заявку', clear: 'Очистить набор', copyHint: 'Список скопируется на текущем языке. Его можно отправить в сообщении или сохранить.',
        copied: 'Заявка скопирована. Настоящий заказ не отправлен.', cleared: 'Набор очищен', remove: 'Убрать', removeLabel: 'Убрать из набора',
        decrease: 'Уменьшить количество', increase: 'Увеличить количество', quantity: 'Количество', pack: 'пачка'
      },
      copy: {
        title: 'Скопируйте заявку вручную', description: 'Браузер не разрешил автоматическое копирование. Выделите текст и скопируйте его сами.',
        label: 'Текст демо-заявки', retry: 'Попробовать скопировать снова', success: 'Заявка скопирована', manual: 'Текст выделен. Скопируйте его сочетанием клавиш.'
      },
      credits: {
        kicker: 'Открытые изображения', title: 'Фото и лицензии',
        intro: 'Фотографии реальных чаёв используются как предметные иллюстрации. Исходники сохранены локально. Для WebP выполнены изменение размера и сжатие; в интерфейсе применяется кадрирование.',
        source: 'Исходник', license: 'Лицензия', fonts: 'Шрифты Onest и Golos Text распространяются по SIL Open Font License 1.1. Их лицензии и исходники находятся в репозитории.'
      },
      images: {
        teapot: 'Зелёный чай White Monkey в стеклянном чайнике и чашке', leaf: 'Листья зелёного чая лунцзин крупным планом',
        brewed: 'Вид сверху на белую пиалу со светлым настоем сэнтя'
      },
      order: {
        heading: 'DALA — демо-заявка', disclaimer: 'Демонстрационный список. Это не заказ. Оплата не требуется.', total: 'Итого (демонстрационные цены)'
      }
    },
    kk: {
      title: 'DALA — жапырақ. Су. Артық ештеңе жоқ.',
      description: 'DALA — ойдан шығарылған жасыл шай брендінің витринасы. Шай сұрыпын таңдап, демо-жинақ құрыңыз. Сайт қазақ және орыс тілдерінде.',
      skip: 'Шай таңдауға өту', home: 'DALA — бас бетке', navigation: 'Негізгі навигация',
      languageLabel: 'Сайт тілі', close: 'Терезені жабу', newTab: ' (жаңа қойындыда ашылады)',
      nav: { catalog: 'Шай таңдау', brew: 'Демдеу тәсілі', about: 'Бренд туралы', set: 'Жинақ' },
      hero: {
        demo: 'Демовитрина', title1: 'Жапырақ.', title2: 'Су.', title3: 'Артық ештеңе жоқ.',
        description: 'DALA жасыл шайы — асықпай, рақаттана ішетін бір кесе шайға арналған. Үш сұрып. Түсінікті дәм. Күрделі ереже жоқ.',
        cta: 'Шай таңдау', note: 'Жапырақ шай · қаптамада 50 г · Бағалар демонстрациялық',
        photo: 'White Monkey · мөлдір сусын', leafCaption: 'Бәрі жапырақтан басталады', gram: 'г', seal: 'жасыл шай'
      },
      catalog: {
        title: 'Өз жасыл шайыңызды табыңыз.',
        description: 'Дәмі әртүрлі үш шай. Жапырағына қарап, дәмін таңдап, өз шай жинағыңызды құрыңыз.',
        note: 'Фотосуреттерде нақты шай сұрыптары көрсетілген. Дүкен мен бағалар — демонстрациялық.',
        end: 'Жапырақ. Су. Сіздің сүйікті дәміңіз.', viewSet: 'Жинақты көру',
        add: 'Қосу', more: 'Тағы қосу', added: 'жинаққа қосылды', kind: 'Жапырақ жасыл шай'
      },
      brew: {
        title: 'Жапырақтың ашылуына мүмкіндік беріңіз.', intro: 'Алдымен оңай рецепттен бастаңыз, келесі кесені өз талғамыңызға сай демдеңіз.',
        tea: 'Шай', water: 'Су', temperature: 'Температура', time: 'Уақыт', ml: 'мл', minutes: 'мин',
        step1: 'Шайды өлшеп, шәйнекке салыңыз.', step2: 'Ыстық, бірақ қайнап тұрмаған су құйыңыз.',
        step3: '2–3 минут күтіңіз. Дәмін татып көріңіз де, өзіңізге ұнайтын демдеу уақытын табыңыз.', caption: 'Сенча · бірінші демдеу', credit: 'Фото туралы'
      },
      about: {
        label: 'Біздің идея', title: 'Жақсы шайды күрделендірудің қажеті жоқ.',
        description: 'Қаптаманы ашып, шайды демдеп, дәмін татып көріңіз. DALA — осы демонстрациялық витрина үшін ойдан шығарылған бренд.', cta: 'Жинақ құру'
      },
      footer: {
        tagline: 'Келесі кесе шайыңыз осы жерден басталады.', up: 'Жоғары ↑',
        demo: 'Бұл — демонстрациялық сайт. Тапсырыс берілмейді және төлем жасалмайды.', credits: 'Фото мен лицензиялар'
      },
      set: {
        kicker: 'Сіздің шай жинағыңыз', title: 'Сіз таңдадыңыз', disclaimer: 'Демо-режим: нақты тапсырыс берілмейді және төлем жасалмайды.',
        emptyTitle: 'Мұнда сіздің шайларыңыз болады', emptyDescription: 'Каталогтан шай таңдаңыз — біз оларды бір өтінімге жинаймыз.', browse: 'Шайларға өту',
        total: 'Демо-жинақтың құны', priceNote: 'Бағалар шартты, нақты ақша алынбайды.',
        copy: 'Өтінімді көшіру', clear: 'Жинақты тазалау', copyHint: 'Тізім ағымдағы тілде көшіріледі. Оны хабарлама арқылы жіберуге немесе сақтауға болады.',
        copied: 'Өтінім көшірілді. Нақты тапсырыс жіберілмеді.', cleared: 'Жинақ тазаланды', remove: 'Алып тастау', removeLabel: 'Жинақтан алып тастау',
        decrease: 'Санын азайту', increase: 'Санын көбейту', quantity: 'Саны', pack: 'қаптама'
      },
      copy: {
        title: 'Өтінімді қолмен көшіріңіз', description: 'Браузер автоматты көшіруге рұқсат бермеді. Мәтінді белгілеп, өзіңіз көшіріңіз.',
        label: 'Демо-өтінім мәтіні', retry: 'Қайта көшіріп көру', success: 'Өтінім көшірілді', manual: 'Мәтін белгіленді. Пернелер тіркесімі арқылы көшіріңіз.'
      },
      credits: {
        kicker: 'Ашық суреттер', title: 'Фото мен лицензиялар',
        intro: 'Нақты шай сұрыптарының фотосуреттері өнімді көрсету үшін қолданылады. Түпнұсқа файлдар жергілікті түрде сақталған. WebP суреттерінің өлшемі өзгертіліп, сығымдалды; интерфейсте суреттер кадрға сай қиылады.',
        source: 'Түпнұсқа', license: 'Лицензия', fonts: 'Onest және Golos Text қаріптері SIL Open Font License 1.1 бойынша таратылады. Олардың лицензиялары мен түпнұсқалары репозиторийде бар.'
      },
      images: {
        teapot: 'Шыны шәйнек пен кеседегі White Monkey жасыл шайы', leaf: 'Лунцзин жасыл шайының жапырақтары жақыннан түсірілген.',
        brewed: 'Ақ кеседегі ашық түсті сенча шайының үстінен көрінісі'
      },
      order: {
        heading: 'DALA — демо-өтінім', disclaimer: 'Демонстрациялық тізім. Бұл тапсырыс емес. Төлем қажет емес.', total: 'Барлығы (демонстрациялық бағалар)'
      }
    }
  };

  const products = [
    {
      id: 'longjing', price: 3900, image: 'leaf', position: 'center', name: { ru: 'Лунцзин', kk: 'Лунцзин' },
      taste: { ru: 'Мягкие ореховые ноты и тёплое, округлое послевкусие.', kk: 'Жұмсақ жаңғақ ноталары бар, ауызда жылы әрі толық дәм қалдырады.' },
      alt: { ru: 'Листья лунцзина в ткани', kk: 'Матадағы лунцзин жапырақтары' }
    },
    {
      id: 'sencha', price: 3500, image: 'brewed', position: 'center', name: { ru: 'Сэнтя', kk: 'Сенча' },
      taste: { ru: 'Свежие травяные ноты и лёгкая, чистая терпкость.', kk: 'Жаңа шабылған шөптің иісі бар, дәмінде жеңіл, таза қабыршақтық сезіледі.' },
      alt: { ru: 'Настой сэнтя в белой пиале', kk: 'Ақ кеседегі сенча сусины' }
    },
    {
      id: 'white-monkey', price: 4200, image: 'teapot', position: '60% center', name: { ru: 'White Monkey', kk: 'White Monkey' },
      taste: { ru: 'Деликатный вкус, мягкая сладость и прозрачный настой.', kk: 'Нәзік дәм, жұмсақ тәттілік және мөлдір сусын.' },
      alt: { ru: 'Чай White Monkey в прозрачном чайнике и чашке', kk: 'Мөлдір шәйнек пен кеседегі White Monkey шайы' }
    }
  ];

  const storageKey = 'dala-demo-state-v1';
  const maximum = 20;
  let language = 'ru';
  let selected = new Map();
  let toastTimer;
  let copyRequestId = 0;
  let returnToSet = false;

  const byId = id => document.getElementById(id);
  const setDialog = byId('set-dialog');
  const copyDialog = byId('copy-dialog');
  const creditsDialog = byId('credits-dialog');

  function readState() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || '{}');
      language = stored.language === 'kk' ? 'kk' : 'ru';
      const rawItems = stored.items && typeof stored.items === 'object' ? stored.items : {};
      selected = new Map(products.filter(product => Number.isInteger(rawItems[product.id]) && rawItems[product.id] > 0).map(product => [product.id, Math.min(rawItems[product.id], maximum)]));
    } catch {
      selected = new Map();
    }
  }

  function saveState() {
    copyRequestId++;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ language, items: Object.fromEntries(selected) }));
    } catch {
      return;
    }
  }

  const t = key => key.split('.').reduce((value, part) => value?.[part], copy[language]) ?? key;
  const quantity = () => [...selected.values()].reduce((total, amount) => total + amount, 0);
  const total = () => products.reduce((sum, product) => sum + product.price * (selected.get(product.id) || 0), 0);
  const money = value => new Intl.NumberFormat(language === 'kk' ? 'kk-KZ' : 'ru-RU', { style: 'currency', currency: 'KZT', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).format(value);
  const plusIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  const picture = product => `<picture><source srcset="./assets/images/${product.image}/tea.webp" type="image/webp"><img src="./assets/images/${product.image}/source.jpg" width="1920" height="${product.image === 'brewed' ? '1536' : '1280'}" alt="${product.alt[language]}" style="object-position:${product.position}" loading="lazy" decoding="async"></picture>`;


  function renderProducts() {
    byId('product-list').innerHTML = products.map(product => {
      const count = selected.get(product.id) || 0;
      return `<article class="product-row" data-product="${product.id}">
        <div class="product-image">${picture(product)}</div>
        <div class="product-description"><h3 class="product-title">${product.name[language]}</h3><p class="product-kind">${t('catalog.kind')} · 50 ${t('hero.gram')}</p></div>
        <p class="product-taste">${product.taste[language]}</p>
        <div class="product-action"><p class="product-price">${money(product.price)}<span class="product-weight">50 ${t('hero.gram')} · ${t('set.pack')}</span></p><button class="add-button" type="button" data-action="add" data-id="${product.id}" data-selected="${count > 0}" aria-label="${t(count ? 'catalog.more' : 'catalog.add')}: ${product.name[language]}" ${count >= maximum ? 'disabled' : ''}>${plusIcon}<span>${t(count ? 'catalog.more' : 'catalog.add')}</span></button></div>
      </article>`;
    }).join('');
  }

  function renderSet() {
    const count = quantity();
    byId('open-set').setAttribute('aria-label', `${t('nav.set')}. ${t('set.quantity')}: ${count}`);
    byId('set-count').textContent = String(count);
    byId('set-count').hidden = count === 0;
    byId('set-empty').hidden = count > 0;
    byId('set-summary').hidden = count === 0;
    byId('set-total').textContent = money(total());
    byId('set-items').innerHTML = products.filter(product => selected.has(product.id)).map(product => {
      const amount = selected.get(product.id);
      return `<article class="set-item"><div class="set-item-image">${picture(product)}</div><div><div class="set-item-top"><div><h3>${product.name[language]}</h3><p class="set-item-meta">50 ${t('hero.gram')} · ${money(product.price)} / ${t('set.pack')}</p></div><button class="remove-button" type="button" data-action="remove" data-id="${product.id}" aria-label="${t('set.removeLabel')}: ${product.name[language]}">${t('set.remove')}</button></div><div class="set-item-bottom"><div class="quantity-control" role="group" aria-label="${t('set.quantity')}: ${product.name[language]}"><button type="button" data-action="decrease" data-id="${product.id}" aria-label="${t('set.decrease')}: ${product.name[language]}">−</button><output aria-label="${t('set.quantity')}">${amount}</output><button type="button" data-action="increase" data-id="${product.id}" aria-label="${t('set.increase')}: ${product.name[language]}" ${amount >= maximum ? 'disabled' : ''}>+</button></div><p class="set-item-price">${money(product.price * amount)}</p></div></div></article>`;
    }).join('');
  }

  function renderInteractive() {
    const active = document.activeElement?.closest('#product-list [data-action], #set-items [data-action]');
    const identity = active ? { container: active.closest('#product-list, #set-items').id, action: active.dataset.action, id: active.dataset.id } : null;
    renderProducts();
    renderSet();
    if (!identity) return;
    const candidate = document.querySelector(`#${identity.container} [data-action="${identity.action}"][data-id="${identity.id}"]`);
    const fallback = identity.container === 'product-list'
      ? document.querySelector('#product-list [data-action="add"]:not(:disabled)') || byId('catalog-open-set')
      : byId('set-items').querySelector('button:not(:disabled)') || byId('empty-browse') || byId('close-set');
    (candidate && !candidate.disabled ? candidate : fallback).focus({ preventScroll: true });
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    document.title = t('title');
    document.querySelector('meta[name="description"]').content = t('description');
    document.querySelector('meta[property="og:title"]').content = t('title');
    document.querySelector('meta[property="og:description"]').content = t('description');
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => { element.setAttribute('aria-label', t(element.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-alt]').forEach(element => { element.alt = t(element.dataset.i18nAlt); });
    document.querySelectorAll('[data-language]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.language === language)); });
    renderProducts();
    renderSet();
  }

  function announce(message) {
    clearTimeout(toastTimer);
    const toast = byId('toast');
    document.querySelectorAll('.dialog-status').forEach(status => { status.textContent = ''; });
    toast.textContent = '';
    toast.classList.remove('visible');
    const activeDialog = [setDialog, copyDialog, creditsDialog].find(dialog => dialog.open);
    const target = activeDialog?.querySelector('.dialog-status') || toast;
    target.textContent = message;
    if (target === toast) toast.classList.add('visible');
    toastTimer = setTimeout(() => { target.textContent = ''; target.classList.remove('visible'); }, 4000);
  }

  function syncBodyLock() {
    document.body.classList.toggle('modal-open', [setDialog, copyDialog, creditsDialog].some(dialog => dialog.open));
  }

  function openDialog(dialog) {
    if (!dialog.open) dialog.showModal();
    syncBodyLock();
  }

  function addProduct(id) {
    const product = products.find(item => item.id === id);
    if (!product || (selected.get(id) || 0) >= maximum) return;
    selected.set(id, (selected.get(id) || 0) + 1);
    saveState();
    renderInteractive();
    announce(`${product.name[language]} ${t('catalog.added')}`);
  }

  function changeQuantity(id, delta) {
    if (!selected.has(id)) return;
    const next = Math.min(maximum, Math.max(0, selected.get(id) + delta));
    if (next === 0) selected.delete(id);
    else selected.set(id, next);
    saveState();
    renderInteractive();
  }

  function orderText() {
    const lines = products.filter(product => selected.has(product.id)).map(product => {
      const amount = selected.get(product.id);
      return `• ${product.name[language]} — 50 ${t('hero.gram')} × ${amount} — ${money(product.price * amount)}`;
    });
    return [t('order.heading'), ...lines, `${t('order.total')}: ${money(total())}`, t('order.disclaimer')].join('\n');
  }

  function showManualCopy(text) {
    returnToSet = true;
    byId('copy-text').value = text;
    setDialog.close();
    openDialog(copyDialog);
    byId('copy-text').focus();
    byId('copy-text').select();
  }

  async function copyOrder() {
    if (quantity() === 0) return;
    const text = orderText();
    const request = ++copyRequestId;
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      if (request === copyRequestId && setDialog.open) announce(t('set.copied'));
    } catch {
      if (request === copyRequestId && setDialog.open) showManualCopy(text);
    }
  }

  byId('open-set').addEventListener('click', () => openDialog(setDialog));
  byId('catalog-open-set').addEventListener('click', () => openDialog(setDialog));
  byId('close-set').addEventListener('click', () => setDialog.close());
  byId('empty-browse').addEventListener('click', () => {
    setDialog.close();
    byId('catalog').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    document.querySelector('#product-list [data-action="add"]:not(:disabled)')?.focus({ preventScroll: true });
  });
  byId('copy-order').addEventListener('click', copyOrder);
  byId('clear-set').addEventListener('click', () => {
    selected.clear();
    saveState();
    renderProducts();
    renderSet();
    byId('empty-browse').focus();
    announce(t('set.cleared'));
  });
  byId('close-copy').addEventListener('click', () => copyDialog.close());
  byId('retry-copy').addEventListener('click', async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(byId('copy-text').value);
      if (!returnToSet || !copyDialog.open) return;
      copyDialog.close();
      announce(t('copy.success'));
    } catch {
      if (!returnToSet || !copyDialog.open) return;
      byId('copy-text').focus();
      byId('copy-text').select();
      announce(t('copy.manual'));
    }
  });
  [byId('open-credits'), byId('footer-credits')].forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    openDialog(creditsDialog);
  }));
  byId('close-credits').addEventListener('click', () => creditsDialog.close());

  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.language === language) return;
    language = button.dataset.language;
    saveState();
    applyLanguage();
  }));

  byId('product-list').addEventListener('click', event => {
    const button = event.target.closest('[data-action="add"]');
    if (button) addProduct(button.dataset.id);
  });

  byId('set-items').addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    if (button.dataset.action === 'increase') changeQuantity(button.dataset.id, 1);
    if (button.dataset.action === 'decrease') changeQuantity(button.dataset.id, -1);
    if (button.dataset.action === 'remove') changeQuantity(button.dataset.id, -maximum);
  });

  copyDialog.addEventListener('close', () => {
    if (!returnToSet) return;
    returnToSet = false;
    openDialog(setDialog);
    byId(quantity() > 0 ? 'copy-order' : 'empty-browse').focus();
  });
  setDialog.addEventListener('close', () => { copyRequestId++; });

  [setDialog, copyDialog, creditsDialog].forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', syncBodyLock);
  });

  readState();
  applyLanguage();
})();
