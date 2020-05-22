# Манипулирование DOM

Модификации DOM – это ключ к созданию «живых» страниц.

Здесь мы увидим, как создавать новые элементы «на лету» и изменять уже существующие.

## Пример: показать сообщение

Рассмотрим методы на примере – а именно, добавим на страницу сообщение, которое будет выглядеть получше, чем `alert`.

Вот такое:

```html
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<div class="alert">
  <strong>Всем привет!</strong> Вы прочитали важное сообщение.
</div>
```

Это был пример `HTML`. Теперь давайте создадим такой же `div`, используя `JavaScript` (предполагаем, что стили в `HTML` или во внешнем `CSS`-файле).

### Создание элемента

`DOM`-узел можно создать двумя методами:

```javascript
document.createElement(tag)
```

Создаёт новый элемент с заданным тегом:

```javascript
let div = document.createElement('div');
```

и

```javascript
document.createTextNode(text)
```

Создаёт новый текстовый узел с заданным текстом:

```javascript
let textNode = document.createTextNode('А вот и я');
```

## Создание сообщения

В нашем случае сообщение – это `div` с классом `alert` и `HTML` в нём:

```javascript
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
```

Мы создали элемент, но пока он только в переменной. Мы не можем видеть его на странице, поскольку он не является частью документа.

В приведенном выше примере для добавление содержимого элемента `div` используется атрибут `innerHTML`.
Такой способ не рекомендуется ввиду того, что содержит ряд недостатков.

### Методы вставки

Чтобы наш `div` появился, нам нужно вставить его где-нибудь в `document`. Например, в `document.body`.

Для этого есть метод `append`, в нашем случае: `document.body.append(div)`.

Вот полный пример:

```html
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

  document.body.append(div);
</script>
```

Вот методы для различных вариантов вставки:

* `node.append(...nodes or strings)` – добавляет узлы или строки в конец node,
* `node.prepend(...nodes or strings)` – вставляет узлы или строки в начало node,
* `node.before(...nodes or strings)` –- вставляет узлы или строки до node,
* `node.after(...nodes or strings)` –- вставляет узлы или строки после node,
* `node.replaceWith(...nodes or strings)` –- заменяет node заданными узлами или строками.

Вот пример использования этих методов, чтобы добавить новые элементы в список и текст до/после него:

```html
<ol id="ol">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  ol.before('before'); // вставить строку "before" перед <ol>
  ol.after('after'); // вставить строку "after" после <ol>

  let liFirst = document.createElement('li');
  liFirst.innerHTML = 'prepend';
  ol.prepend(liFirst); // вставить liFirst в начало <ol>

  let liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  ol.append(liLast); // вставить liLast в конец <ol>
</script>
```

Наглядная иллюстрация того, куда эти методы вставляют:

![before-prepend-append-after.svg](https://learn.javascript.ru/article/modifying-document/before-prepend-append-after.svg)

Итоговый список будет таким:

```javascript
before
<ol id="ol">
  <li>prepend</li>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>append</li>
</ol>
after
```

### Удаление узлов

Для удаления узла есть методы `node.remove()`.

Например, сделаем так, чтобы наше сообщение удалялось через секунду:

```html
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

  document.body.append(div);
  setTimeout(() => div.remove(), 1000);
</script>
```

Таким образом:

Методы для создания узлов:

* `document.createElement(tag)` – создаёт элемент с заданным тегом,
* `document.createTextNode(value)` – создаёт текстовый узел (редко используется),
* `elem.cloneNode(deep)` – клонирует элемент, если deep==true, то со всеми дочерними элементами.

Вставка и удаление:

* `node.append(...nodes or strings)` – вставляет в node в конец,
* `node.prepend(...nodes or strings)` – вставляет в node в начало,
* `node.before(...nodes or strings)` –- вставляет прямо перед node,
* `node.after(...nodes or strings)` –- вставляет сразу после node,
* `node.replaceWith(...nodes or strings)` –- заменяет node.
* `node.remove()` –- удаляет node.

## Тест

[Пройти тест]()

## Практическое задание

[Открыть](practice/README.md)

## Домашнее задание

[Открыть](homework/README.md)

## Ссылки

1. []()