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
    if(sign != '\n'){
    let boxes = document.createElement("div");
    boxes.className = "box"
    if (sign === '*'){
        boxes.classList.add('wall')
        boxes.style.backgroundColor = "#535252"
    } else if (sign === '.') {
        boxes.classList.add('path')
        boxes.style.backgroundColor = "rgb(0,150,150)";
    } else if (sign === 'S'){
        let player = document.createElement("div")
        player.className = 'player'
        boxes.style.backgroundColor = "rgb(250,0,0)"
        boxes.appendChild(player)
        
    } else if (sign === 'T'){
        let tresor = document.createElement("div")
        tresor.className = 'tresor'
        boxes.style.backgroundColor = "rgb(0,150,150)";
        boxes.appendChild(tresor)
    }
    document.getElementById('maze_container').appendChild(boxes)
}
}




function createBlankMaze() {

    var rowIndex, colIndex;

    for (rowIndex = 0; rowIndex <= board.length; rowIndex++) {
        var lines = document.createElement("div");

        for (colIndex = 0; colIndex <= board[rowIndex].length; colIndex++) {

            var boxes = document.createElement("div");
            //IF * draw a wall 
            if (board[rowIndex][colIndex] === '*') {

                boxes.className = "wall"
                boxes.style.backgroundColor = "#535252";
                boxes.style.width = "20px"
                boxes.style.height = "20px"
                boxes.style.display = "inline-block"


            } else if (board[rowIndex][colIndex] === '.') {

                boxes.style.backgroundColor = "rgb(0,150,150)";
                boxes.className = "path"
                boxes.style.width = "20px"
                boxes.style.height = "20px"
                boxes.style.display = "inline-block"

            } else if (board[rowIndex][colIndex] === 'S'){

                boxes.style.backgroundColor = "rgb(0,255,0)";
                boxes.className = "Start"
                boxes.style.width = "20px"
                boxes.style.height = "20px"
                boxes.style.display = "inline-block"

            } else if(board[rowIndex][colIndex] === 'T') {
                boxes.style.backgroundColor = "rgb(255,0,0)"
                boxes.className = 'Tresor'
                boxes.style.width = '20px'
                boxes.style.height = '20px'
                boxes.style.display = "inline-block"
            }
            lines.appendChild(boxes);
        }
        document.getElementById("maze_container").appendChild(lines);
    }
}