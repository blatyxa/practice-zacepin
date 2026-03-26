
---

## 📘 **Лекция 3 — Цвета, фон и шрифты**

```markdown
# Lecture 3 — Цвета, фон и шрифты

**Тема:** Оформление текста: цвета, фоны, шрифты, выравнивание и другие текстовые свойства.  
**Цель урока:** Научиться управлять внешним видом текста и фоновыми элементами страницы.  
**Время:** ~20 мин.  
**Ключевые понятия:** color, background-color, font-family, font-size, font-weight, text-align, line-height.

---

### 1) Введение

Внешний вид текста — это то, что пользователь видит в первую очередь. Цвета, шрифты и фон создают настроение страницы, выделяют важную информацию и делают сайт удобным для чтения. В этом уроке мы научимся управлять этими аспектами дизайна.

---

### 2) Основная часть

**Цвета в CSS:**

Существует несколько способов задать цвет:

```css
/* 1. Имя цвета (keyword) */
p {
    color: red;
    background-color: lightblue;
}

/* 2. Шестнадцатеричный код (HEX) */
h1 {
    color: #FF0000;  /* красный */
    color: #00FF00;  /* зеленый */
    color: #0000FF;  /* синий */
    color: #333333;  /* темно-серый */
}

/* 3. RGB (Red, Green, Blue) */
div {
    background-color: rgb(255, 0, 0);     /* красный */
    background-color: rgb(0, 255, 0);     /* зеленый */
    background-color: rgba(0, 0, 0, 0.5); /* полупрозрачный черный */
}

/* 4. HSL (Hue, Saturation, Lightness) */
span {
    color: hsl(0, 100%, 50%);     /* красный */
    color: hsl(120, 100%, 50%);   /* зеленый */
    color: hsla(240, 100%, 50%, 0.7); /* полупрозрачный синий */
}
 
Фоновые свойства: 
.card {
    /* Цвет фона */
    background-color: #f5f5f5;
    
    /* Фоновое изображение */
    background-image: url('image.jpg');
    
    /* Повторение фона */
    background-repeat: no-repeat; /* не повторять */
    background-repeat: repeat-x;   /* повторять по горизонтали */
    background-repeat: repeat-y;   /* повторять по вертикали */
    
    /* Позиция фона */
    background-position: center;
    background-position: top right;
    
    /* Размер фона */
    background-size: cover;   /* покрыть весь элемент */
    background-size: contain; /* вместить целиком */
    
    /* Сокращенная запись */
    background: #f0f0f0 url('image.jpg') no-repeat center;
}

Свойства шрифтов:
body {
    /* Семейство шрифтов */
    font-family: Arial, Helvetica, sans-serif;
    font-family: 'Times New Roman', serif;
    font-family: 'Courier New', monospace;
    
    /* Размер шрифта */
    font-size: 16px;        /* пиксели */
    font-size: 1.2em;       /* относительно родителя */
    font-size: 120%;        /* проценты */
    font-size: 1rem;        /* относительно корневого элемента */
    
    /* Жирность */
    font-weight: normal;    /* обычный */
    font-weight: bold;      /* жирный */
    font-weight: 700;       /* от 100 до 900 */
    
    /* Стиль */
    font-style: normal;     /* обычный */
    font-style: italic;     /* курсив */
    
    /* Межстрочный интервал */
    line-height: 1.5;       /* без единиц = множитель от размера шрифта */
    line-height: 24px;
    
    /* Выравнивание текста */
    text-align: left;       /* по левому краю */
    text-align: center;     /* по центру */
    text-align: right;      /* по правому краю */
    text-align: justify;    /* по ширине */
    
    /* Декорация текста */
    text-decoration: none;       /* без подчеркивания */
    text-decoration: underline;  /* подчеркивание */
    text-decoration: line-through; /* зачеркивание */
}
```

### 3) Пример/практика
Полный пример:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Стили текста и фона</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: #e0f7fa;
            margin: 0;
            padding: 20px;
        }
        
        h1 {
            color: #0d47a1;
            text-align: center;
            border-bottom: 3px solid #0d47a1;
            padding-bottom: 10px;
        }
        
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
            border-radius: 10px;
            margin-bottom: 30px;
        }
        
        .hero h2 {
            font-size: 36px;
            margin-bottom: 10px;
        }
        
        .card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .card h3 {
            color: #333;
            border-left: 4px solid #667eea;
            padding-left: 15px;
        }
        
        .highlight {
            background-color: #ffeb3b;
            padding: 2px 5px;
            border-radius: 3px;
            font-weight: bold;
        }
        
        footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background-color: #333;
            color: white;
            border-radius: 8px;
        }
        
        footer a {
            color: #ffeb3b;
            text-decoration: none;
        }
        
        footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Оформление текста и фона</h1>
    
    <div class="hero">
        <h2>Добро пожаловать!</h2>
        <p>Учимся работать с цветами, шрифтами и фонами в CSS</p>
    </div>
    
    <div class="card">
        <h3>Почему это важно?</h3>
        <p>Правильный выбор <span class="highlight">цветов и шрифтов</span> делает сайт не только красивым, но и удобным для чтения.</p>
    </div>
    
    <div class="card">
        <h3>Советы по выбору шрифтов</h3>
        <p>Используйте не более 2-3 шрифтов на странице. Для основного текста выбирайте шрифты без засечек (sans-serif).</p>
    </div>
    
    <footer>
        <p>&copy; 2026 | Сделано с ❤️ | <a href="#">Наверх</a></p>
    </footer>
</body>
</html>

### Задание:

Создайте HTML-страницу о своем любимом городе

Задайте фон всей странице: светло-голубой

Для заголовка h1: синий цвет, размер 32px, выравнивание по центру

Создайте класс .city-card с белым фоном, скругленными углами и тенью

Добавьте градиентный фон для блока с цитатой

Для ссылок уберите подчеркивание и добавьте зеленый цвет при наведении

### Источники:

MDN Web Docs: Цвета в CSS

MDN Web Docs: Шрифты

### Автор: Кудря С.А / Дата: 2026-03-26