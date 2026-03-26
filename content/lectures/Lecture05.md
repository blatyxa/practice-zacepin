
---

## 📘 **Лекция 5 — Flexbox и адаптивная верстка**

```markdown
# Lecture 5 — Flexbox и адаптивная верстка

**Тема:** Гибкая верстка с помощью Flexbox и создание адаптивных сайтов с медиазапросами.  
**Цель урока:** Научиться создавать гибкие макеты, которые корректно отображаются на разных устройствах.  
**Время:** ~20 мин.  
**Ключевые понятия:** Flexbox, flex-container, flex-items, justify-content, align-items, flex-direction, медиазапросы, адаптивная верстка.

---

### 1) Введение

Раньше для создания сложных макетов использовали float и position, что было сложно и непредсказуемо. Flexbox (Flexible Box Layout) — это современный способ верстки, который позволяет легко выравнивать элементы, распределять пространство и создавать гибкие макеты. В сочетании с медиазапросами мы можем создавать сайты, которые отлично выглядят на любом устройстве.

---

### 2) Основная часть

**Что такое Flexbox?**

Flexbox состоит из родительского контейнера (flex-container) и его дочерних элементов (flex-items).

```html
<div class="container">  <!-- flex-container -->
    <div class="item">1</div>  <!-- flex-item -->
    <div class="item">2</div>  <!-- flex-item -->
    <div class="item">3</div>  <!-- flex-item -->
</div>

.container {
    display: flex;
    
    /* Направление оси */
    flex-direction: row;        /* по умолчанию — горизонтально */
    flex-direction: column;     /* вертикально */
    flex-direction: row-reverse; /* справа налево */
    
    /* Выравнивание по главной оси */
    justify-content: flex-start;  /* слева (по умолчанию) */
    justify-content: center;      /* по центру */
    justify-content: flex-end;    /* справа */
    justify-content: space-between; /* равномерно, края по краям */
    justify-content: space-around;  /* равномерно с отступами по краям */
    justify-content: space-evenly;  /* абсолютно равномерно */
    
    /* Выравнивание по поперечной оси */
    align-items: stretch;   /* растянуть (по умолчанию) */
    align-items: center;    /* по центру */
    align-items: flex-start; /* вверх */
    align-items: flex-end;   /* вниз */
    
    /* Перенос строк */
    flex-wrap: nowrap;      /* без переноса (по умолчанию) */
    flex-wrap: wrap;        /* с переносом */
    
    /* Расстояние между элементами */
    gap: 20px;
}
``` Медиазапросы — адаптивная верстка:
/* Базовые стили для мобильных устройств (mobile first) */
body {
    font-size: 14px;
}

.container {
    flex-direction: column;
}

/* Планшеты (ширина >= 768px) */
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
    .container {
        flex-direction: row;
    }
}

/* Десктопы (ширина >= 1024px) */
@media (min-width: 1024px) {
    body {
        font-size: 18px;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```
### 3) Пример/практика
Полный пример адаптивного сайта с Flexbox:
```<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox + Адаптивная верстка</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        /* Навигация */
        .navbar {
            background-color: #2c3e50;
            padding: 1rem;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap;
        }
        
        .logo {
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .nav-links {
            display: flex;
            gap: 20px;
            list-style: none;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
        }
        
        .nav-links a:hover {
            color: #3498db;
        }
        
        /* Герой секция */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 80px 20px;
        }
        
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        
        /* Карточки */
        .cards {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            max-width: 1200px;
            margin: 60px auto;
            padding: 0 20px;
            justify-content: center;
        }
        
        .card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            flex: 1 1 300px;
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .card-content {
            padding: 20px;
        }
        
        .card h3 {
            margin-bottom: 10px;
            color: #2c3e50;
        }
        
        .btn {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 15px;
        }
        
        .btn:hover {
            background-color: #2980b9;
        }
        
        /* Футер */
        .footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 30px;
            margin-top: 60px;
        }
        
        /* Адаптивность */
        @media (max-width: 768px) {
            .nav-container {
                flex-direction: column;
                gap: 15px;
            }
            
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .cards {
                gap: 20px;
            }
        }
        
        @media (max-width: 480px) {
            .nav-links {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
            
            .hero {
                padding: 40px 20px;
            }
            
            .hero h1 {
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">FlexSite</div>
            <ul class="nav-links">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Портфолио</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </div>
    </nav>
    
    <section class="hero">
        <h1>Flexbox + Адаптивная верстка</h1>
        <p>Сайты, которые отлично выглядят на любых устройствах</p>
    </section>
    
    <div class="cards">
        <div class="card">
            <img src="https://via.placeholder.com/300x200" alt="Flexbox">
            <div class="card-content">
                <h3>Гибкая верстка</h3>
                <p>Flexbox позволяет создавать сложные макеты с минимальным кодом.</p>
                <a href="#" class="btn">Подробнее</a>
            </div>
        </div>
        
        <div class="card">
            <img src="https://via.placeholder.com/300x200" alt="Адаптивность">
            <div class="card-content">
                <h3>Адаптивный дизайн</h3>
                <p>Медиазапросы адаптируют сайт под разные экраны.</p>
                <a href="#" class="btn">Подробнее</a>
            </div>
        </div>
        
        <div class="card">
            <img src="https://via.placeholder.com/300x200" alt="Современность">
            <div class="card-content">
                <h3>Современный подход</h3>
                <p>Используйте современные технологии для лучшего результата.</p>
                <a href="#" class="btn">Подробнее</a>
            </div>
        </div>
    </div>
    
    <footer class="footer">
        <p>&copy; 2026 Flexbox Course. Все права защищены.</p>
    </footer>
</body>
</html>
```
### Задание:

Создайте адаптивный футер с 3 колонками:

Колонка 1: О компании (текст)

Колонка 2: Ссылки (быстрые ссылки)

Колонка 3: Контакты (телефон, email)

Используйте Flexbox для расположения колонок

На мобильных устройствах (менее 768px) колонки должны располагаться вертикально

Добавьте эффект при наведении на ссылки в футере

### Источники:

MDN Web Docs: Flexbox

MDN Web Docs: Медиазапросы

CSS-Tricks: Полное руководство по Flexbox

### Автор: Кудря С.А / Дата: 2026-03-26