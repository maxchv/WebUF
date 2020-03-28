window.addEventListener('load', function () {
    if (sessionStorage["html lesson for kids #2"] === undefined) {
        alert("Второй урок.\nУчим мага летать.\n\
Для этого необходимо открыть файл Lesson02.html в VSCode.\n\
Внимательно читайте комментарии и выполняйте все инструкции.");
        sessionStorage["html lesson for kids #2"] = "loaded";
    }

    var body = document.body;
    var world = body.firstElementChild;
    var tree = world.firstElementChild;
    var fence = tree.nextElementSibling;
    var wizard = world.lastElementChild;

    var width = body.clientWidth;

    window.addEventListener('resize', function () {
        width = body.clientWidth;
    });

    body.addEventListener('keydown', function (event) {
        var left = parseInt(wizard.offsetLeft) || 0;
        var wizard_width = wizard.style.width;
        var step = 5;
        var wizard_width = 96 + 15;
        console.log(left);
        switch (event.keyCode) {
            case 37: // '<-'
                left -= (left > 0) ? step : 0;
                wizard.style.left = left + 'px';
                break;
            case 39: // '->'
                left += (left < width - wizard_width) ? step : 0;
                console.log("tree: " + tree.offsetLeft);
                if (left >= tree.offsetLeft) {
                    alert("Уровень пройден!");
                    window.location = "../Lesson3.html";
                }
                wizard.style.left = left + 'px';
                break;
            case 67: // 'c'
                world.id = "world";
                break;
            case 70: // 'f'
                fence.classList.add('fence');
                fence.classList.add('fence-1');
                break;
            case 76: // 'l'
                wizard.classList.add('levitate');
                setInterval(function () {
                    alert("Уровень проейден!");
                    window.location = "../Lesson3.html";
                }, 10000);
                break;
            case 84: // 't'
                tree.classList.add("tree");
                break;
            case 87: // 'w'
                wizard.id = "wizard";
                break;
            default:
                console.log(event.keyCode);
                break;
        }
    });
});