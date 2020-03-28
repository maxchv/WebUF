window.addEventListener('load', function () {
    if (sessionStorage["html lesson for kids #3"] === undefined) {
        alert("Третий урок.\nУчим мага метать огненные шары.\n\
Для этого необходимо открыть файл Lesson03.html в VSCode.\n\
Внимательно читайте комментарии и выполняйте все инструкции.");
        sessionStorage["html lesson for kids #3"] = "loaded";
    }

    var body = document.body;
    var world = body.firstElementChild;
    var wizard = world.firstElementChild;
    var fireballs = [wizard.firstElementChild,
        wizard.firstElementChild.nextElementSibling,
        wizard.lastElementChild
    ];
    var targets = document.getElementsByClassName('target');
    var counter = 0;

    for (var i = 0; i < targets.length; i++) {
        targets[i].addEventListener('click', function (event) {
            console.log(event);
            if (event.target.classList.contains('target-right')) {
                fireballs[0].classList.add('fireball-1');
                counter++;
            } else if (event.target.classList.contains('target-top-right')) {
                fireballs[1].classList.add('fireball-2');
                counter++;
            } else if (event.target.classList.contains('target-top')) {
                fireballs[2].classList.add('fireball-3');
                counter++;
            }
            if (counter === 3) { // все шары выпущены
                setInterval(function () {
                    alert("Уровень пройден!");
                    window.location = "../Lesson4.html";
                }, 12000);
            }

        });
    }

    var width = body.clientWidth;

    window.addEventListener('resize', function () {
        width = body.clientWidth;
    });

    body.addEventListener('keydown', function (event) {
        var left = parseInt(wizard.offsetLeft) || 0;
        console.log(left);
        switch (event.keyCode) {
            case 67: // 'c'
                world.id = "world";
                break;
            case 70: // 'f'
                for (var i = 0; i < fireballs.length; i++) {
                    fireballs[i].classList.add('fireball');
                }
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