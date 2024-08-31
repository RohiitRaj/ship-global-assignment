document.addEventListener("DOMContentLoaded", function () {
  const todoCards = document.querySelectorAll(".todo-card");
  const statusOrder = ["backlog", "todo", "ongoing", "done"];

  todoCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.classList.contains("nav-btn")) {
        const direction = e.target.classList.contains("right") ? 1 : -1;
        const currentCard = e.target.closest(".todo-card");
        const nextCardIndex = statusOrder.indexOf(currentCard.id) + direction;

        if (nextCardIndex >= 0 && nextCardIndex < statusOrder.length) {
          const nextCard = document.getElementById(statusOrder[nextCardIndex]);
          const task = e.target.parentElement;
          nextCard.querySelector(".todo-list").appendChild(task);
          adjustButtonStates(task, nextCardIndex);
        }
      }
    });
  });

  function adjustButtonStates(task, index) {
    const leftBtn = task.querySelector(".left");
    const rightBtn = task.querySelector(".right");
    leftBtn.disabled = index === 0;
    rightBtn.disabled = index === statusOrder.length - 1;
  }

  document.querySelectorAll(".todo-item").forEach((task) => {
    const parentId = task.closest(".todo-card").id;
    const index = statusOrder.indexOf(parentId);
    adjustButtonStates(task, index);
  });
});
