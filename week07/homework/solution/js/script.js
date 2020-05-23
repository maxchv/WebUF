const run = document.getElementById("run");
run.addEventListener("click", function () {
    run.remove();
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
    values.sort(() => Math.random() - 0.5);
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell, i) => cell.append(document.createTextNode(values[i])));
});