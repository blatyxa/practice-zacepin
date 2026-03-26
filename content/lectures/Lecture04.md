
---

## 📘 **Лекция 4 — Блочная модель и отступы**

```markdown
# Lecture 4 — Блочная модель и отступы

**Тема:** Понимание блочной модели CSS: контент, padding, border, margin.  
**Цель урока:** Научиться управлять размерами элементов и расстояниями между ними.  
**Время:** ~20 мин.  
**Ключевые понятия:** блочная модель, margin, padding, border, box-sizing, inline vs block.

---

### 1) Введение

Все элементы на веб-странице — это прямоугольники. CSS блочная модель описывает, как эти прямоугольники устроены и как они взаимодействуют друг с другом. Понимание блочной модели — основа верстки. Без нее невозможно создать аккуратный макет.

---

### 2) Основная часть

**Что такое блочная модель?**

Каждый элемент на странице состоит из четырех слоев:
┌─────────────────────────────────────────┐
│ margin (внешний отступ) │
│ ┌───────────────────────────────────┐ │
│ │ border (рамка) │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ padding (внутренний │ │ │
│ │ │ отступ) │ │ │
│ │ │ ┌───────────────────────┐ │ │ │
│ │ │ │ CONTENT │ │ │ │
│ │ │ │ (контент) │ │ │ │
│ │ │ └───────────────────────┘ │ │ │
│ │ └─────────────────────────────┘ │ │
│ └───────────────────────────────────┘ │
└─────────────────────────────────────────┘


**Свойства блочной модели:**

```css
.element {
    /* Контент */
    width: 300px;
    height: 200px;
    
    /* Внутренние отступы (padding) */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    
    /* Сокращенная запись padding */
    padding: 10px 20px;        /* верх/низ 10, лево/право 20 */
    padding: 10px 20px 15px;   /* верх 10, лево/право 20, низ 15 */
    padding: 10px 15px 10px 15px; /* верх, право, низ, лево */
    
    /* Рамка (border) */
    border-width: 2px;
    border-style: solid;
    border-color: black;
    
    /* Сокращенная запись border */
    border: 2px solid black;
    
    /* Внешние отступы (margin) */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    
    /* Сокращенная запись margin */
    margin: 10px 20px;         /* аналогично padding */
}

Важно! Свойство box-sizing:

По умолчанию width задает ширину только контента. Padding и border добавляются сверху, увеличивая общий размер элемента.

/* По умолчанию (content-box) */
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Общая ширина = 200 + 40 + 10 = 250px */
}

/* border-box — ширина включает padding и border */
.box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Общая ширина = 200px (padding и border внутри) */
}

/* Рекомендуется для всех элементов */
* {
    box-sizing: border-box;
}

Типы отображения элементов:
/* Блочные элементы (block) — занимают всю ширину, перенос строки */
.block {
    display: block;
}
/* Примеры: div, p, h1, section, header */

/* Строчные элементы (inline) — занимают только нужную ширину, без переноса */
.inline {
    display: inline;
}
/* Примеры: span, a, strong, em */

/* Инлайн-блоки (inline-block) — как inline, но можно задать ширину/высоту */
.inline-block {
    display: inline-block;
}
/* Примеры: button, input, img */ 
```
### 3) Пример/практика
Пример верстки карточек с использованием блочной модели:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Блочная модель CSS</title>
    <style>
        /* Сброс отступов по умолчанию и box-sizing */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 40px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto; /* центрирование контейнера */
        }
        
        h1 {
            text-align: center;
            margin-bottom: 40px;
            color: #333;
        }
        
        /* Карточка товара */
        .card {
            background: white;
            width: 300px;
            padding: 20px;
            margin: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            display: inline-block;
            vertical-align: top;
        }
        
        .card img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        
        .card h3 {
            margin-bottom: 10px;
            color: #2c3e50;
        }
        
        .card p {
            color: #666;
            line-height: 1.5;
            margin-bottom: 15px;
        }
        
        .price {
            font-size: 24px;
            font-weight: bold;
            color: #e67e22;
            display: inline-block;
        }
        
        .button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            float: right;
        }
        
        .button:hover {
            background-color: #2980b9;
        }
        
        /* Демонстрация разных margin */
        .demo-box {
            background-color: #ddd;
            margin: 30px 0;
            padding: 20px;
            border-left: 5px solid #e67e22;
        }
        
        .inner-box {
            background-color: white;
            margin: 20px;
            padding: 20px;
            border: 2px dashed #ccc;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Блочная модель в действии</h1>
        
        <div class="card">
            <img src="https://via.placeholder.com/260x150" alt="Товар">
            <h3>Товар 1</h3>
            <p>Описание товара. Здесь используется margin, padding и border.</p>
            <span class="price">1999 ₽</span>
            <button class="button">Купить</button>
        </div>
        
        <div class="card">
            <img src="https://via.placeholder.com/260x150" alt="Товар">
            <h3>Товар 2</h3>
            <p>Еще один товар с такими же отступами и рамками.</p>
            <span class="price">2999 ₽</span>
            <button class="button">Купить</button>
        </div>
        
        <div class="card">
            <img src="https://via.placeholder.com/260x150" alt="Товар">
            <h3>Товар 3</h3>
            <p>Третий товар в нашем каталоге.</p>
            <span class="price">3999 ₽</span>
            <button class="button">Купить</button>
        </div>
        
        <div class="demo-box">
            <h3>Вложенные отступы</h3>
            <div class="inner-box">
                Этот блок показывает, как margin и padding работают вместе.
                <p>У внешнего блока margin-bottom: 30px, у внутреннего margin: 20px.</p>
            </div>
        </div>
    </div>
</body>
</html>

### Задание:

Создайте блок .product-card со следующими параметрами:

Ширина: 280px

Внутренние отступы: 15px со всех сторон

Внешние отступы: 10px автоматически

Рамка: 1px сплошная светло-серая

Скругленные углы: 12px

Тень: 0 2px 5px rgba(0,0,0,0.1)

Создайте 3 такие карточки, расположенные горизонтально

Добавьте кнопку внутри карточки с отступом сверху 15px

Сделайте, чтобы при наведении на карточку появлялась тень большего размера

### Источники:

MDN Web Docs: Блочная модель

Современный учебник JavaScript: Блочная модель

### Автор: Кудря С.А / Дата: 2026-03-26