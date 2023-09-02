let king = document.querySelector(".chess-piece");
let squares = document.querySelectorAll(".square");
let info = document.getElementById("info");
let dragged;

king.addEventListener("drag", dragging);
king.addEventListener("dragstart", dragStart);

squares.forEach((square) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dragDrop);
});

function dragStart(e) {
  dragged = e.target;
}

function dragDrop(e) {
  e.target.append(dragged);
}

function dragOver(e) {
  e.preventDefault();
}

function dragging() {
  info.textContent = "You are dragging a " + dragged.id;
}
