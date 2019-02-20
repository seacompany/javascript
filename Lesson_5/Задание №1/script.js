'use strict';

/**1.Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

function startScript() {
    let pasteResult = document.getElementById('pasteResult'),
        pasteTd,
        // фигуры - белые
        figuresWhite = [
            // пешки
            ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;'],
            // основные фигуры
            ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']
        ],
        // фигуры - черные
        figuresBlack = [
            // основные фигуры
            ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'],
            // пешки
            ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;']
        ];
    // создаем <table>
    let boardTable = document.createElement('table');
    pasteResult.appendChild(boardTable);
    for (let row = 1; row <= 10; row++) {
        // создаем <tr>
        let boardTr = document.createElement('tr');
        boardTable.appendChild(boardTr);
        for (let col = 1; col <= 10; col++) {
            // создаем <td>
            let boardTd = document.createElement('td');
            pasteTd = '';
            // цифры по вертикали
            if (row > 1 && row < 10 && (col == 1 || col == 10)) {
                boardTd.className = 'boardNumbers';
                pasteTd += 8 - row + 2;
            }
            // столбцы в таблице со второго по девятый
            if (col > 1 && col < 10) {
                // раскраска доски
                if (((row % 2 != 0 && col % 2 == 0) || (row % 2 == 0 && col % 2 != 0)) && (row > 1 && row < 10)) {
                    boardTd.style.background = 'gray';
                }
                // буквы по горизонтали
                if (row == 1 || row == 10) {
                    boardTd.className = 'boardLetters';
                    pasteTd += '&#' + (65 + col - 2); // HTML - A-H
                }
                // фигуры - белые
               if (row == 8 || row == 9) {
                    boardTd.className = 'boardFigures';
                    pasteTd += figuresWhite[row - 8][col - 2];
                }
                // фигуры - черные
                if (row == 2 || row == 3) {
                    boardTd.className = 'boardFigures';
                    pasteTd += figuresBlack[row - 2][col - 2];
                }
            }
            boardTd.innerHTML = pasteTd;
            boardTr.appendChild(boardTd);
        }
    }
}