# Неделя 1

[Презентация](https://docs.google.com/presentation/d/1bE1KC_MdBQuTiLLqA_3-QYvg0X3vvNGD0jzJOtSqxd0/edit?usp=sharing)

## Основы HTML

Вы, конечно, уже знакомы с редакторами документов, вроде `Microsoft Word`, через который можно структурировать документ с помощью заголовков, абзацев, списков, таблиц, изображений, жирного и курсивного текста.

`HTML` предлагает примерно такие же элементы форматирования. Ключевым отличием является то, что форматирование текста в  `Microsoft Word` является визуальным, в то время как `HTML`-код является чисто семантическим: вы обеспечиваете свой текст смыслом.

Подобно использованию нот для записи музыки, вы используете `HTML` для написания веб-страниц.

### Синтаксис HTML

`HTML` расшифровывается как **H**yper**T**ext **M**arkup **L**anguage (язык разметки гипертекста):

* __язык__ означает, что он может быть прочитан как человеком, так и компьютером;
* __разметка__ означает, что написанный вами код помечается с помощью ключевых слов;
* __гипертекст__ означает, что он использует `HTTP` как часть Интернета.

Как и любой язык, `HTML` поставляется с набором правил. Эти правила относительно простые и сводятся к определению границ, чтобы знать, где что-то начинается и где заканчивается.

Ниже приведён пример абзаца в HTML:

```html
<p>Если Тетрис и научил меня чему-то,
так это тому, что ошибки накапливаются, а достижения исчезают.</p>
```

То, что вы видите в угловых скобках &lt; и > называется тегами `HTML`. Они определяют, где что-то начинается и где оно заканчивается.

Каждый из тегов несёт определённый смысл. В нашем случае &lt;р> обозначает абзац текста.

Как правило, они идут парами:

* открывающий тег &lt;р> определяет начало абзаца;
* закрывающий тег &lt;/p> определяет его конец.

Единственным различием между открывающим и закрывающим тегами является слэш /, который предшествует имени тега.

При объединении открывающего, закрывающего тегов и всего между ними, вы получите элемент HTML. Строка целиком представляет собой элемент HTML, который использует теги HTML &lt;р> и &lt;/p>.

Если вы просмотрите этот пример в вашем браузере, то заметите, что теги HTML в браузере не отображаются. Они читаются только браузером, чтобы знать, какой тип контента вы написали.

### Атрибуты

__Атрибуты__ действуют как дополнительная информация, привязанная к элементу `HTML`. Они пишутся внутри тега `HTML`. Таким образом, они также не отображаются в браузере.

Например, атрибут `href` используется для определения назначения ссылки (которая создаётся тегом &lt;a>):

```html
<a href="https://www.minecraft.net/ru-ru/download/">Скачать Minecraft</a>
```

Есть [16 атрибутов HTML](https://developer.mozilla.org/ru/docs/Web/HTML/%D0%9E%D0%B1%D1%89%D0%B8%D0%B5_%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B), которые могут быть использованы в любом элементе HTML. Все они не являются обязательными.

Вы в основном будете применять class (который используется для CSS) и title (подсказка, которая появляется при наведении курсора на объект, вроде этого).

Некоторые элементы HTML содержат обязательные атрибуты. Например, при вставке изображения вы должны указать его расположение с помощью атрибута `src`:

```html
<img src="#" alt="Описание изображения" />
```

### Комментарии

Если вы пишете что-то в своём коде без нарушения отображения страницы браузером, то вы можете писать комментарии. Они будут игнорироваться браузером и могут быть использованы только для людей, которые пишут код.

Комментарий начинается с &lt;!-- и заканчивается -->.

Пример:

```html
<!-- Это предложение будет игнорироваться браузером -->
<p>Привет, мир!</p>
```

### Самозакрывающиеся элементы

Некоторые элементы HTML имеют только открывающий тег:

```html
<br /> <!-- Перевод строки -->
<img src="http://placehold.it/50x50" alt="Описание" /> <!-- изображение -->
<input type="text" /> <!-- текстовое поле -->
```

Поскольку у них нет закрывающего тега и, следовательно, они не могут содержать ничего внутри, самозакрывающие элементы обычно несут с собой несколько атрибутов, которые предоставляют дополнительную информацию.

## Блочные и строчные элементы

В `HTML` вам, в основном, будут попадаться два типа элементов `HTML`.

**Блочные** элементы, вроде:

* абзацы &lt;р>;
* списки: неупорядоченные (с маркером) &lt;ul> или упорядоченные списки (с числами) &lt;ol>;
* заголовки: от первого уровня &lt;h1> до шестого уровня &lt;h6>;
* статьи &lt;article>;
* разделы &lt;section>;
* длинные цитаты &lt;blockquote>.

**Строчные** элементы, вроде:

* ссылки &lt;a>;
* выделенные слова &lt;em>;
* важные слова &lt;strong>;
* короткие цитаты &lt;q>;
* аббревиатуры &lt;abbr>.

**Блочные** элементы предназначены для структурирования основных частей вашей страницы, путём разделения содержимого на логически связанные блоки.

**Строчные** элементы предназначены, чтобы разграничить часть текста и придать ему определённую функцию или смысл. Строчные элементы, как правило, содержат одно или несколько слов.

### Открывающие и закрывающие теги

Все *блочные* элементы содержат **открывающие** и **закрывающие** теги.

Как результат, *самозакрывающие* элементы являются **строчными**, просто потому, что их синтаксис не позволяет им содержать любой другой элемент HTML.

### Другие типы элементов HTML

Есть несколько исключений у блочных/строчных элементов. Вот те, с которыми вы чаще всего столкнётесь:

* пункты списка &lt;li>;
* таблица &lt;table>;
* строки таблицы &lt;tr>;
* ячейки таблицы &lt;td>.

`HTML`-документ — это как большое семейное древо, с родителями, братьями, детьми, предками и потомками.

Всё это происходит из возможности вкладывать одни элементы HTML внутрь других.

### Вложения

Давайте напишем простой абзац и улучшим его путём разделения частей текста, вставив два строчных элемента:

```html
<p>Сэр <strong>Алекс Фергюсон</strong> однажды сказал о Филиппо Индзаги:
<q>Этот парень должен был родиться в положении вне игры</q>.</p>
```

В этой структуре:

* элемент &lt;strong> задаёт слова «Алекс Фергюсон» более важными;
* &lt;q> отмечает его цитату об Индзаги.

Тот факт, что &lt;strong> отображается жирным шрифтом, является только поведением браузера по умолчанию. Помните, что вы должны выбирать элементы `HTML` в соответствии с их значением, а не как они выглядят.

В данном случае:

* &lt;p> — **родительский** элемент для &lt;strong> и &lt;q>;
* &lt;strong> и &lt;q> — **дочерние** элементы для <р>;
* &lt;strong> и &lt;q> — **братские** элементы.

### Порядок

Как работает вложение, зависит от расположения открывающего и закрывающего тегов.

Поскольку элемент HTML содержит открывающий тег, закрывающий тег и всё между ними, дочерний элемент должен быть закрыт до закрытия родительского элемента.

```html
<!-- Это НЕВЕРНЫЙ код! :-( -->
<p>
  Этот код HTML не будет работать, потому что тег strong я открыл здесь, 
  <strong>но закрыл его только после абзаца.
</p></strong>
```

Поскольку &lt;strong> был открыт после &lt;р> (и, таким образом, считается потомком &lt;р>), элемент &lt;strong> должен быть закрыт перед родительским &lt;/р>.

```html
<!-- Это правильный код. :-) -->
<p>
  Этот код HTML будет работать, потому что тег strong я открыл <strong>и закрыл</strong> правильно.
</p>
```

### Глубина

Поскольку дочерние элементы сами по себе могут содержать другие дочерние элементы, то можно написать более глубокую иерархию внутри HTML-документа.

Наш абзац выше может быть частью статьи блога:

```html
<article>
  <h1>Известные футбольные цитаты</h1>
  <p>
    Сэр <strong>Алекс Фергюсон</strong> однажды сказал о Филиппо Индзаги: 
    <q>Этот парень должен был родиться в положении вне игры</q>.
  </p>
  <p>
    При критике со стороны Джона Карью, <strong>Златан Ибрагимович</strong> ответил: 
    <q>То, что делает Карью с мячом, я могу сделать с апельсином.</q>
  </p>
  <p>
    <strong>Джордж Бест</strong> сказал: 
    <q>Я потратил много денег на выпивку, девчонок и быстрые автомобили. 
       Остальное я просто промотал</q>, —  
    когда его спросили о его образе жизни.
  </p>
</article>
```

В этой структуре:

* &lt;article> является предком для любого другого элемента;
* &lt;article> является родителем для &lt;h1> и трёх <р>;
* &lt;h1> и три <р> являются братскими друг для друга;
* каждый &lt;р> является родителем для &lt;strong> и &lt;q>, которые в них содержатся;
* каждый &lt;h1>, &lt;p>, &lt;strong> и &lt;q> — это всё потомки &lt;article>.

Аналогия с семейным древом также применяется при прохождении нескольких слоёв вложений в `HTML`:

* потомок элемента X — это любой элемент внутри X;
* ребёнок — это просто прямой потомок;
* предком элемента Y является любой элемент;
* родитель — это лишь первый прямой предок.

### Вложения блоков и строк

Блочные элементы могут содержать блочные или строчные элементы.

Однако, строчные элементы могут содержать только другие строчные элементы (за исключением элемента &lt;a>).

```html
<!-- Это НЕВЕРНЫЙ код! :-( -->
<strong>
  <p>Вы не можете поместить абзац внутрь тега strong.
</strong>
```

Просто запомните — предок/потомок, родитель/ребёнок, братья. Эта иерархия будет полезна в `CSS`.

## Форматирование HTML

Существует разница между тем, что написано в вашем коде `HTML` и что отображается в браузере.

Как мы уже видели, теги `HTML`, такие как &lt;р>, только читаются браузером (чтобы знать, какой тип содержимого написан), но не отображаются в нём.

Мы также видели, как можно писать комментарии в коде HTML, чтобы помочь человеку с чтением кода, без необходимости отображать эти комментарии в браузере.

Другим видом написанного кода, который игнорируется браузером, является пробел, он включает в себя:

* переносы строк;
* пустые строки;
* табуляция (или отступы).

### Переносы строк

Переносы строк и пустые строки (которые представляют собой последовательность переносов строк) в коде HTML игнорируются браузером. Они составляют лишь единое пространство.

```html
<blockquote>
Первоначальная идея веба была в том, что он должен быть совместным


пространством,


где вы можете общаться путём обмена информацией.
</blockquote>
```

Чтобы реально вставить перенос строки вам нужно использовать элемент &lt;br>:

```html
<p>В лучшем случае, жизнь совершенно<br>непредсказуема</p>
```

### Пишите HTML для себя, чтобы его читать

Табуляция, пустые строки, набор пробелов и переносы строк опускаются компьютером и все они превращаются в один пробел.

`HTML`-документ пишется и читается человеком, но компьютером только читается. Учитывая, что табуляция, пробелы и переносы строк не влияют на то, как браузер будет читать и впоследствии отображать веб-страницу, вы можете отформатировать свой документ наиболее читаемым для себя способом.

Нет конкретных правил, касающихся форматирования `HTML`, но есть неявные соглашения, в частности:

* используйте табуляцию, чтобы помочь визуализировать вложения элементов `HTML`;
* вставляйте открывающие и закрывающие теги блочных элементов на отдельные строки;
* пишите строчные элементы в одну строку (включая открывающие и закрывающие теги).

## Валидный HTML-документ

До сих пор мы рассматривали отдельные фрагменты кода HTML. Но HTML-документ (или веб-страница, что означает то же самое) требует определённой структуры для того, чтобы стать валидным.

Почему мы заботимся о валидации HTML-документа?

* Правильность: валидный документ корректно отображается в браузере.
* Отладка: некорректный код HTML может вызвать ошибки, сложные для выявления.
* Поддержка: валидный документ легче обновлять позже, даже кому-то другому.

### Doctype

Первой информацией которую мы пишем, является тип HTML-документа — доктайп.

Подумайте о доктайпе как о версии автомобиля на протяжении многих лет: Ford Fiesta, купленный в 1986 году, был Fiesta 2. Если вы покупаете его сегодня, то это Fiesta 7.

Раньше сосуществовало несколько версий HTML (XHTML и HTML 4.01 были конкурирующими стандартами). В настоящее время нормой является HTML5.

Чтобы сообщить браузеру, что HTML-документ представляет собой HTML5, просто начните свой документ со следующей строки:

```html
<!DOCTYPE html>
```

Вот и всё. Просто установите и забудьте об этом.

### Элемент &lt;html>

Помимо строки с доктайпом, весь ваш HTML-документ должен располагаться внутри элемента &lt;html>:

```html
<!DOCTYPE html>
<html>
  <!-- Здесь остальная часть вашего кода HTML -->
</html>

<html> технически является предком всех элементов HTML.
```

### &lt;head>

Как атрибуты несут дополнительную информацию для элемента HTML, так и элемент &lt;head> несёт дополнительную информацию для всей веб-страницы.

Например, заголовок страницы (отображается на вкладке) находится в &lt;head>:

```html
<head>
  <title>Мой сказочный блог</title>
</head>

Следующие элементы HTML могут появляться в <head> и только в <head>:

    <link>
    <meta>
    <style>
```

### &lt;body>

В то время как &lt;head> содержит только метаданные, не предназначенные для отображения вообще (за исключением &lt;title>), то элемент &lt;body> это место, где мы пишем всё наше содержимое. Всё внутри &lt;body> будет отображаться в окне браузера.

### Полностью валидный HTML-документ

Объединив все эти требования, мы можем написать простой и валидный `HTML`-документ:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
    <meta name="description" content="Описание документа HTML">
  </head>
  <body>
    <p>Привет, мир!</p>
  </body>
</html>
```

W3C предлагает [Markup Validation Service](https://validator.w3.org/) для проверки любого HTML-документа на наличие ошибок и предупреждений.

## Вопросы

1. Что является элементом HTML?
    * &lt;p>
    * &lt;/p>
    * &lt;p> ... &lt;/p>

2. Паша написал следующий код HTML, но браузер не показал никакого текста. Почему?
    &lt;!-- &lt;p>Тетрис&lt;/p> -->

    * Не хватает атрибута title.
    * Это комментарий и он не отображается в браузере
    * Файл сохранен с расширением .txt
    * Неверное вложение тегов

3. Выберите все открывающие теги.

    * &lt;a>
    * &lt;/a>
    * &lt;p>
    * &lt;/p>

4. Выберите все закрывающие теги.

    * &lt;a>
    * &lt;/a>
    * &lt;p>
    * &lt;/p>

5. Назовите составляющие строки (тег, атрибут, ссылка):

    ```html
    <a href='http://itstep.dp.ua'>ItStep Dnipro</a>
    ```

6. Сопоставьте элемент и его тип

    &lt;table>
    &lt;td>
    &lt;ul>
    &lt;li>
    &lt;tr>
    &lt;strong>

7. Выберите все блочные элементы

    &lt;em>
    &lt;strong>
    &lt;q>
    &lt;ul>
    &lt;blockquote>
    &lt;p>

8. Выберите все строчные элементы

    &lt;article>
    &lt;section>
    &lt;h1>
    &lt;strong>
    &lt;em>
    &lt;q>

9. Укажите назначение каждого элемента

    &lt;ol>
    &lt;section>
    &lt;h1>
    &lt;strong>
    &lt;em>
    &lt;q>
10. Выберите правильное утверждение

    * Все самозакрывающие элементы являются блочными.
    * Все самозакрывающие элементы являются строчными.
    * Самозакрывающие элементы не относятся ни к блочным, ни к строчным.
    * Некоторые самозакрывающие элементы являются блочными.

11. Выберите правильное утверждение

    * Строчные элементы определяют основную статью и разделы документа.
    * Строчные элементы придают части текста определённый смысл.
    * Строчные элементы разбивают весь документ на отдельные строки.
    * Строчные элементы задают взаимосвязанные заголовки.

12. Для данного кода, какой элемент является братским &lt;h2>?

    ```html
    <article>
    <h1>Астрономия</h1>
    <section>
    <h2>Далёкий Тукан</h2>
    <p>Бесспорно, эффективный диаметр оценивает Тукан.</p>
    </section>
    </article>
    ```

13. Для данного кода, какой элемент является родителем &lt;section>?

    ```html
    <article>
    <h1>Астрономия</h1>
    <section>
    <h2>Далёкий Тукан</h2>
    <p>Бесспорно, эффективный диаметр оценивает Тукан.</p>
    </section>
    </article>
    ```

14. Для данного кода укажите всех предков для элемента &lt;p>.

    ```html
    <article>
    <h1>Астрономия</h1>
    <section>
    <h2>Далёкий Тукан</h2>
    <p>Бесспорно, эффективный диаметр оценивает Тукан.</p>
    </section>
    </article>
    ```

15. Для данного кода укажите все дочерние элементы у &lt;section>.

    ```html
    <article>
    <h1>Астрономия</h1>
    <section>
    <h2>Далёкий Тукан</h2>
    <p>Бесспорно, эффективный диаметр оценивает Тукан.</p>
    </section>
    </article>
    ```

## Тест

[Пройти тест](https://forms.gle/8Nz5NE5HBVrhpx9V6)

## Практическое задание

[Открыть](practice/README.md)

## Домашнее задание

[Открыть](homework/README.md)

## Ссылки

1. [Введение в HTML](https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML)
2. [Основы HTML](https://webref.ru/course/html-basics)
3. [HTML Tutorial](https://www.w3schools.com/html/)
4. [HTML Living Standard](https://html.spec.whatwg.org/multipage/)
5. [HTML 5.3 W3C Working Draft](https://www.w3.org/TR/2018/WD-html53-20181018/)