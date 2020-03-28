window.addEventListener('load', function () { // когда документ загружен

    const wizard = document.getElementById("wizard"); // найти мага 

    const step = 10; // шаг мага
    wizard.stepLeft = function () { // движение влево
        this.style.transform = 'scaleX(-1)'; // повернуть в направление движения
        const left = parseInt(this.offsetLeft) || 0; // текущий отступ слева
        this.style.left = `${left - step}px`; // задать новый отступ
    };

    wizard.stepRight = function () { // движение вправо
        this.style.transform = 'scaleX(1)';
        const left = parseInt(this.offsetLeft) || 0;
        this.style.left = `${left + step}px`;
    };

    window.addEventListener('keydown', function (event) { // когда нажали на кнопку на клавиатуре
        console.log(event);
        switch (event.code) {
            case 'ArrowLeft': // если нажата кнопка влево '<-'
                wizard.stepLeft();
                break;
            case 'ArrowRight': // если нажата кнопка вправо '->'
                wizard.stepRight();
                break;
            default:
                break;
        }
    });
});