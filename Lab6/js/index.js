function toggleStrikethrough() {
  $(this).siblings("p").first().toggleClass("crossed-text");
}

function deleteElement() {
  $(this).parent().remove();
}

function createNewElement(text) {
  $(".Lista").first()
    .append(
      $('<div/>', { class: "shopping-elem" }).append(
        $('<p/>', { text }),
        $('<button/>', { text: "check" }).on("click", toggleStrikethrough),
        $('<button/>', { text: "delete" }).on("click", deleteElement),
      )
    );
}

$(".agregar").on("click", (e) => {
  e.preventDefault();
  createNewElement($("#newText").first().val());
});