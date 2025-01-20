const signs = {
    1: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.1.svg', 'Автомагістраль', '5.1'],
    2: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.2.svg', 'Кінець автомагістралі', '5.2'],
    3: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.3.svg', 'Дорога для автомобілів', '5.3'],
    4: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.4.svg', 'Кінець дороги для автомобілів', '5.4'],
    5: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.5.svg', 'Дорога з одностороннім рухом', '5.5'],
    6: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.6.svg', 'Кінець дороги з одностороннім рухом', '5.6'],
    7: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.7.1.svg', 'Виїзд на дорогу з одностороннім рухом', '5.7.1'],
    8: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.7.2.svg', 'Виїзд на дорогу з одностороннім рухом', '5.7.2'],
    9: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.8.svg', 'Дорога із смугою для руху маршрутних транспортних засобів', '5.8'],
    10: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.9.svg', 'Кінець дороги із смугою для руху маршрутних транспортних засобів', '5.9'],
    11: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.10.1.svg', 'Виїзд на дорогу із смугою для руху маршрутних транспортних засобів', '5.10.1'],
    12: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.10.2.svg', 'Виїзд на дорогу із смугою для руху маршрутних транспортних засобів', '5.10.2'],
    13: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.10.3.svg', 'Виїзд на дорогу із смугою для руху маршрутних транспортних засобів', '5.10.3'],
    14: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.10.4svg', 'Виїзд на дорогу із смугою для руху маршрутних транспортних засобів', '5.10.4'],
    15: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.11.svg', 'Смуга для руху маршрутних транспортних засобів', '5.11'],
    16: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.12.svg', 'Кінець смуги для руху маршрутних транспортних засобів', '5.12'],
    17: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.13.svg', 'Дорога з реверсивним рухом', '5.13'],
    18: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.14.svg', 'Кінець дороги з реверсивним рухом', '5.14'],
    19: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.15.svg', 'Виїзд на дорогу з реверсивним рухом', '5.15'],
    20: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.16.svg', 'Напрямки руху по смугах', '5.16'],
    21: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.17.1.svg', 'Напрямок руху по смугах', '5.17.1'],
    22: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.17.2.svg', 'Напрямок руху по смугах', '5.17.2'],
    23: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.18.svg', 'Напрямок руху по смузі', '5.18'],
    24: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.19.1.svg', 'Використання смуги руху', '5.19.1'],
    25: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.19.2.svg', 'Використання смуги руху', '5.19.2'],
    26: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.19.3.svg', 'Використання смуги руху', '5.19.3'],
    27: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.20.1.svg', 'Початок додаткової смуги руху', '5.20.1'],
    28: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.20.2.svg', 'Початок додаткової смуги руху', '5.20.2'],
    29: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.21.1.svg', 'Кінець додаткової смуги руху', '5.21.1'],
    30: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.21.2.svg', 'Кінець додаткової смуги руху', '5.21.2'],
    31: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.22.svg', 'Прилягання смуги для розгону транспортних засобів', '5.22'],
    32: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.23.svg', 'Прилягання додаткової смуги руху з правого боку', '5.23'],
    33: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.24.svg', 'Мінімальна швидкість на різних смугах руху', '5.24'],
    34: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.25.svg', 'Мінімальна швидкість на смузі руху', '5.25'],
    35: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.26.svg', 'Обмеження максимальної швидкості на різних смугах руху', '5.26'],
    36: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.27.1.svg', 'Зміна напрямку руху на дорозі з розділювальною смугою', '5.27.1'],
    37: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.27.2.svg', 'Зміна напрямку руху на дорозі з розділювальною смугою', '5.27.2'],
    38: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.28.svg', 'Смуга руху для аварійної зупинки', '5.28'],
    39: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.29.svg', 'Місце для розвороту', '5.29'],
    40: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.30.svg', 'Зона для розвороту', '5.30'],
    41: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.31.1.svg', 'Напрямок руху для вантажних автомобілів', '5.31.1'],
    42: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.31.2.svg', 'Напрямок руху для вантажних автомобілів', '5.31.2'],
    43: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.31.3.svg', 'Напрямок руху для вантажних автомобілів', '5.31.3'],
    44: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.32.1.svg', 'Тупик', '5.32.1'],
    45: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.32.2.svg', 'Тупик', '5.32.2'],
    46: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.32.3.svg', 'Тупик', '5.32.3'],
    47: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.33.svg', 'Рекомендована швидкість', '5.33'],
    48: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.34.svg', 'Житлова зона', '5.34'],
    49: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.35.svg', 'Кінець житлової зони', '5.35'],
    50: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.36.svg', 'Пішохідна зона', '5.36'],
    51: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.37.svg', 'Кінець пішохідної зони', '5.37'],
    52: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.38.1.svg', 'Пішохідний перехід', '5.38.1'],
    53: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.38.2.svg', 'Пішохідний перехід', '5.38.2'],
    54: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.39.svg', 'Діагональний пішохідний перехід', '5.39'],
    55: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.40.1.svg', 'Підземний пішохідний перехід', '5.40.1'],
    56: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.40.2.svg', 'Підземний пішохідний перехід', '5.40.2'],
    55: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.41.1.svg', 'Надземний пішохідний перехід', '5.41.1'],
    56: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.41.2.svg', 'Надземний пішохідний перехід', '5.41.2'],
    57: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.42.1.svg', 'Місце для стоянки', '5.42.1'],
    58: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.42.1.svg', 'Місце для стоянки', '5.42.2'],
    59: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.42.3.svg', 'Місце для стоянки', '5.42.3'],
    60: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.43.svg', 'Зона стоянки', '5.43'],
    61: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.44.svg', 'Кінець зони стоянки', '5.44'],
    62: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.45.1.svg', 'Пункт зупинки автобуса', '5.45.1'],
    63: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.45.2.svg', 'Кінець пункту зупинки автобуса', '5.45.2'],
    64: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.46.1.svg', 'Пункт зупинки трамвая', '5.46.1'],
    65: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.46.2.svg', 'Кінець пункту зупинки трамвая', '5.46.2'],
    66: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.47.1.svg', 'Пункт зупинки тролейбуса', '5.47.1'],
    67: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.47.2.svg', 'Кінець пункту зупинки тролейбуса', '5.47.2'],
    68: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.48.svg', 'Місце зупинки таксі', '5.48'],
    69: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.49.svg', 'Початок населеного пункту', '5.49'],
    70: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.50.svg', 'Кінець населеного пункту', '5.50'],
    71: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.51.svg', 'Початок населеного пункту', '5.51'],
    72: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.52.svg', 'Кінець населеного пункту', '5.52'],
    73: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.53.svg', 'Початок забудови населеного пункту', '5.53'],
    74: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.54.svg', 'Кінець забудови населеного пункту', '5.54'],
    75: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.55.svg', 'Загальні обмеження швидкості та строк застосування денних ходових вогнів (ближнього світла фар)', '5.55'],
    76: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.56.svg', 'Можливість використання дороги', '5.56'],
    77: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.57.svg', 'Попередній покажчик напрямків', '5.57'],
    78: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.58.svg', 'Попередній покажчик напрямку', '5.58'],
    79: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.59.svg', 'Покажчик напрямку', '5.59'],
    80: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.60.svg', 'Покажчик напрямку', '5.60'],
    81: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.61.svg', 'Покажчик відстаней (підтвердження маршруту)', '5.61'],
    82: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.62.svg', 'Схема руху', '5.62'],
    83: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.63.svg', 'Схема об’їзду', '5.63'],
    84: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.64.1.svg', 'Напрямок об’їзду', '5.64.1'],
    85: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.64.2.svg', 'Напрямок об’їзду', '5.64.2'],
    86: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.64.3.svg', 'Напрямок об’їзду', '5.64.3'],
    87: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.65.1.svg', 'Назва об’єкта', '5.65.1'],
    88: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.65.2.svg', 'Назва об’єкта', '5.65.2'],
    89: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.66.svg', 'Номер маршруту (дороги)', '5.66'],
    90: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.67.1.svg', 'Номер і напрямок маршруту (дороги)', '5.67.1'],
    91: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.67.2.svg', 'Номер і напрямок маршруту (дороги)', '5.67.2'],
    92: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.67.3.svg', 'Номер і напрямок маршруту (дороги)', '5.67.3'],
    93: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.68.svg', 'Кілометровий знак', '5.68'],
    94: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.69.svg', 'Місце зупинки', '5.69'],
    95: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.70.svg', 'Зміна схеми руху', '5.70'],
    96: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.71.svg', 'Аеропорт', '5.71'],
    97: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.72.svg', 'Залізничний вокзал чи пункт зупинки поїздів', '5.72'],
    98: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.73.svg', 'Автовокзал чи автостанція', '5.73'],
    99: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.74.svg', 'Тунель', '5.74'],
    100: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.75.svg', 'Закінчення тунелю', '5.75'],
    101: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.76.svg', 'Автоматична відеофіксація порушень Правил дорожнього руху ', '5.76'],
    102: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.77.svg', 'Морський (річковий) порт чи вокзал', '5.77'],
    103: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.78.svg', 'Радіостанції, що передають інформацію про дорожній рух', '5.78'],
    104: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.79.1.svg', 'Аварійний вихід', '5.79.1'],
    105: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.79.2.svg', 'Аварійний вихід', '5.79.2'],
    106: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.80.1.svg', 'Покажчик напрямку і відстані до аварійного виходу', '5.80.1'],
    107: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.80.2.svg', 'Покажчик напрямку і відстані до аварійного виходу', '5.80.2'],
    108: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.81.svg', 'Покажчик напрямків і відстані до аварійних виходів', '5.81'],
    109: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.82.1.svg', 'Платна дорога', '5.82.1'],
    110: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.83.1.svg', 'Платна дорога', '5.83.1'],
    111: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.82.2.svg', 'Кінець платної дороги', '5.82.2'],
    112: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.83.2.svg', 'Кінець платної дороги', '5.83.2'],
    113: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.84.svg', 'Початок прикордонної смуги', '5.84'],
    114: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.85.svg', 'Кінець прикордонної смуги', '5.85'],
    115: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.86.svg', 'Початок контрольованого прикордонного району', '5.86'],
    116: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.87.svg', 'Кінець контрольованого прикордонного району', '5.87'],
    117: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.88.svg', 'Велосипедна смуга', '5.88'],
    118: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.89.svg', 'Кінець велосипедної смуги', '5.89'],
    119: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.90.svg', 'Зона для пішоходів і велосипедистів', '5.90'],
    120: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.91.svg', 'Кінець зони для пішоходів і велосипедистів', '5.91'],
    121: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.92.1.svg', 'Велосипедний переїзд', '5.92.1'],
    122: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.92.2.svg', 'Велосипедний переїзд', '5.92.2'],
    123: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.93.1.svg', 'Суміжні пішохідний перехід та велосипедний переїзд', '5.93.1'],
    124: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.93.2.svg', 'Суміжні пішохідний перехід та велосипедний переїзд', '5.93.2'],
    125: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.94.1.svg', 'Дорога із зустрічною велосипедною смугою', '5.94.1'],
    126: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.94.2.svg', 'Кінець дороги із зустрічною велосипедною смугою', '5.94.2'],
    127: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.95.1.svg', 'Виїзд на дорогу з одностороннім рухом і зустрічною велосипедною смугою', '5.95.1'],
    128: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.95.2.svg', 'Виїзд на дорогу з одностороннім рухом і зустрічною велосипедною смугою', '5.95.2'],
    129: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.96.1.svg', 'Зона габаритно-вагового контролю', '5.96.1'],
    130: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/5.96.2.svg', 'Зона габаритно-вагового контролю', '5.96.2'],
};

let blacklist = [];
let count = 0;
let randomIndex = 0;

function nextImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (count === 130) {
        alert('Всі знаки показані');
        return;
    }

    blacklist.push(randomIndex);

    do {
        randomIndex = Math.floor(Math.random() * 130+1);
    } while (blacklist.includes(randomIndex));

    count++;
    counter.innerHTML = `Знаків: ${count}/130`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function backImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (blacklist.length <= 1) {
        alert('Немає попереднього знаку');
        return;
    }

    randomIndex = blacklist.pop();

    count--;
    counter.innerHTML = `Знаків: ${count}/130`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function showAnswer() {
    const answer = document.getElementById('answer');

    answer.innerHTML = signs[randomIndex][1];
};