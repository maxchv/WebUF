# Работа с событиями

`Событие` – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).

Вот список самых часто используемых DOM-событий, пока просто для ознакомления:

События мыши:

* `click` – происходит, когда кликнули на элемент левой кнопкой мыши.
* `contextmenu` – происходит, когда кликнули на элемент правой кнопкой мыши.
* `mouseover` / `mouseout` – когда мышь наводится на / покидает элемент.
* `mousedown` / `mouseup` – когда нажали / отжали кнопку мыши на элементе.
* `mousemove` – при движении мыши.

События на элементах управления:

* `submit` – пользователь отправил форму &lt;form>.
* `focus` – пользователь фокусируется на элементе, например нажимает на &lt;input>.

Клавиатурные события:

* `keydown` и `keyup` – когда пользователь нажимает / отпускает клавишу.

Существует множество других событий.

## Обработчики событий

Событию можно назначить `обработчик`, то есть функцию, которая сработает, как только событие произошло.

Именно благодаря обработчикам JavaScript-код может реагировать на действия пользователя.

Есть несколько способов назначить событию обработчик. Сейчас мы их рассмотрим, начиная с самого простого.

### Использование атрибута HTML

Обработчик может быть назначен прямо в разметке, в атрибуте, который называется on&lt;событие>.

Например, чтобы назначить обработчик события `click` на элементе `input`, можно использовать атрибут `onclick`, вот так:

```html
<input value="Нажми меня" onclick="alert('Клик!')" type="button">
```

При клике мышкой на кнопке выполнится код, указанный в атрибуте `onclick`.

Обратите внимание, для содержимого атрибута `onclick` используются одинарные кавычки, так как сам атрибут находится в двойных. Если мы забудем об этом и поставим двойные кавычки внутри атрибута, вот так: `onclick="alert("Click!")"`, код не будет работать.

### Использование свойства DOM-объекта

Можно назначать обработчик, используя свойство DOM-элемента on<событие>.

К примеру, `elem.onclick`:

```html
<input id="elem" type="button" value="Нажми меня!">
<script>
  document.getElementById("elem").onclick = function() {
    alert('Спасибо');
  };
</script>
```

**Так как у элемента DOM может быть только одно свойство с именем onclick, то назначить более одного обработчика так нельзя.**

### Доступ к элементу через this

Внутри обработчика события `this` ссылается на текущий элемент, то есть на тот, на котором, как говорят, «висит» (т.е. назначен) обработчик.

В коде ниже button выводит своё содержимое, используя `this.innerHTML`:

```html
<button onclick="alert(this.innerHTML)">Нажми меня</button>
```

### addEventListener

Фундаментальный недостаток описанных выше способов назначения обработчика –- невозможность повесить несколько обработчиков на одно событие.

Например, одна часть кода хочет при клике на кнопку делать её подсвеченной, а другая – выдавать сообщение.

Разработчики стандартов достаточно давно это поняли и предложили альтернативный способ назначения обработчиков при помощи специальных методов `addEventListener` и `removeEventListener`. Они свободны от указанного недостатка.

Синтаксис добавления обработчика:

```javascript
element.addEventListener(event, handler[, options]);
```

* event - Имя события, например "click".
* handler - Ссылка на функцию-обработчик.

Для удаления обработчика следует использовать `removeEventListener`:

```javascript
element.removeEventListener(event, handler[, options]);
```

Метод `addEventListener` позволяет добавлять несколько обработчиков на одно событие одного элемента

## Объект события

Чтобы хорошо обработать событие, могут понадобиться детали того, что произошло. Не просто «клик» или «нажатие клавиши», а также – какие координаты указателя мыши, какая клавиша нажата и так далее.

Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

Пример ниже демонстрирует получение координат мыши из объекта события:

```html
<input type="button" value="Нажми меня" id="elem">

<script>
  elem.onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    alert(event.type + " на " + event.currentTarget);
    alert("Координаты: " + event.clientX + ":" + event.clientY);
  };
</script>
```

Некоторые свойства объекта event:

* `event.type` - Тип события, в данном случае "click".
* `event.currentTarget` - Элемент, на котором сработал обработчик. Значение – обычно такое же, как и у `this`, но если обработчик является функцией-стрелкой или при помощи `bind` привязан другой объект в качестве `this`, то мы можем получить элемент из `event.currentTarget`.
* `event.clientX` / `event.clientY` - Координаты курсора в момент клика относительно окна, для событий мыши.

## Действия браузера по умолчанию

Многие события автоматически влекут за собой действие браузера.

Например:

* Клик по ссылке инициирует переход на новый URL.
* Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
* Зажатие кнопки мыши над текстом и её движение в таком состоянии – инициирует его выделение.

Если мы обрабатываем событие в `JavaScript`, то зачастую такое действие браузера нам не нужно. К счастью, его можно отменить.

### Отмена действия браузера

Есть два способа отменить действие браузера:

* Основной способ – это воспользоваться объектом event. Для отмены действия браузера существует стандартный метод `event.preventDefault()`.
* Если же обработчик назначен через on<событие> (не через addEventListener), то также можно вернуть `false` из обработчика.

В следующем примере при клике по ссылке переход не произойдёт:

```html
<a href="/" onclick="return false">Нажми здесь</a>
или
<a href="/" onclick="event.preventDefault()">здесь</a>
```

<!-- ## Тест

[Пройти тест]() -->

## Практическое задание

[Открыть](practice/README.md)

<!-- ## Домашнее задание
[Открыть](homework/README.md) -->

## Ссылки

1. [Введение в события](https://learn.javascript.ru/events)
2. [HTML DOM События](https://html5css.ru/jsref/dom_obj_event.php)