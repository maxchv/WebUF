window.addEventListener('load', function () {
    if (sessionStorage["html lesson for kids #4"] === undefined) {
        alert("Четверый и последний урок.\n\
Учим мага изменять размеры предметов.\n\
Для этого необходимо открыть файл Lesson04.html в VSCode.\n\
Внимательно читайте комментарии и выполняйте все инструкции.");
        sessionStorage["html lesson for kids #4"] = "loaded";
    }

    var body = document.body;
    var world = body.firstElementChild;
    var wizard = world.firstElementChild;
    var hippo = wizard.nextElementSibling;
    var mouse = world.lastElementChild;

    hippo.addEventListener('click', function (event) {
        //if(hippo.classList.contains('tosmall')) {
        hippo.classList.toggle('tosmall');
        //}
    });

    mouse.addEventListener('click', function (event) {
        mouse.classList.toggle('tobig');
    });

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
            case 67: // 'c'
                world.id = "world";
                break;
            case 72: // 'h'      
                hippo.id = 'hippo';
                break;
            case 77: // 'm'      
                mouse.id = 'mouse';
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