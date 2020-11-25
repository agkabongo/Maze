const board = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`
board.split("\n");
board.split('');

//Creation array multilines
console.log(board)
/*createBlankMaze()*/

for (let sign of board) {
    if (sign != '\n') {
        let boxes = document.createElement("div");
        boxes.className = "box"
        if (sign === '*') {
            boxes.classList.add('wall')
            boxes.style.backgroundColor = "#a15562"
        } else if (sign === '.') {
            boxes.classList.add('path')
            boxes.style.backgroundColor = "#e8e8e8";
        } else if (sign === 'S') {
            let player = document.createElement("div")
            boxes.classList.add('path')
            player.className = 'player'
            boxes.style.backgroundColor = "#e8e8e8"
            boxes.appendChild(player)

        } else if (sign === 'T') {
            let tresor = document.createElement("div")
            boxes.classList.add('path', 'fin')
            tresor.className = 'tresor'
            tresor.innerHTML = "&#128970;"
            boxes.style.backgroundColor = "#e8e8e8";
            boxes.appendChild(tresor)
        }
        document.getElementById('maze_container').appendChild(boxes)
    }
}



/* MOVE LITTLE DOT WHEN WE PRESS ON A KEY*/
document.addEventListener('keydown', logKey);
let y = 14;

function logKey(e) {

    let newBox = document.querySelectorAll('.box')
    let playerMove = document.querySelector('.player')

    if (e.keyCode === 37) { // ArrowLeft
        // if class contain wall "*" on fait rien if class contain path ".", then append child to board[y-1]

        if (newBox[y - 1].classList.contains('wall') === true) {
            console.log("Tu as un mur à gauche")

        } else if (newBox[y - 1].classList.contains('path') === true) {
            newBox[y - 1].appendChild(playerMove)
            console.log(y)
            y = y - 1
        }


    } else if (e.keyCode === 39) { //ArrowRight
        // if class contain wall "*" on fait rien if class contain ".", then append child to board[(y+1]

        if (newBox[y].classList.contains('wall') === true) {
            console.log("Tu as un mur à droite")
        } else if (newBox[y + 1].classList.contains('path') === true) {
            newBox[y + 1].appendChild(playerMove) //append player to the next div
            console.log(y)
            y = y + 1
        }



    } else if (e.keyCode === 40) { //ArrowBottom
        // if class contain wall "*" on fait rien if class contain ".", then append child to board[y+13]

        if (newBox[y + 13].classList.contains('wall') === true) {
            console.log("Tu as un mur à bas")
        } else if (newBox[y + 13].classList.contains('path') === true) {
            newBox[y + 13].appendChild(playerMove) //append player to the next div
            console.log(y)
            y = y + 13
        }




    } else if (e.keyCode === 38) {

        // ArrowUp
        // if class contain wall "*" on fait rien if class contain ".", then append child to board[y-13]
        if (newBox[y - 13].classList.contains('wall') === true) {
            console.log("Tu as un mur à bas")
        } else if (newBox[y - 13].classList.contains('path') === true) {
            newBox[y - 13].appendChild(playerMove) //append player to the next div
            console.log(y)
            y = y - 13
        }
    }

    if (newBox[y].classList.contains('fin') === true) {
        alert("Tu es sorti du labyrinthe")
    }
        
}