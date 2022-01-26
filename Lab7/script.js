async function displayGifs() {
    $("#videogames").empty();

    const result = await $.ajax(
        `https://api.giphy.com/v1/gifs/search?api_key=iPEbBmZFdwpXI2sFTjzWfwzK1CRXATGg&q=${$(this).text()}&limit=10`
        ).promise();
    result.data.forEach(gif => {
        $("#videogames").append(
            $("<img/>", {
                "class": "videogame-item",
                "data-rating": gif.rating, 
                "data-url": gif.images.fixed_height.url, 
                "data-still-url": gif.images.fixed_height_still.url,
                "data-is-moving": false,
                "src": gif.images.fixed_height_still.url
            })
            .on("click", function() {
                const data = $(this).data();
                $(this).attr(
                    "src",
                    data.isMoving ? data.stillUrl : data.url
                );

                $(this).data("isMoving", !data.isMoving);
            })
        );
    });
}

function addNewTopic(text) {
    $("#videogame-buttons").first()
      .append(
        $('<button/>', { text }).on("click", displayGifs)
      );
  }

$(function() {

    $("#add-videogame").on("click", (e) => {
        e.preventDefault();
        addNewTopic($("#videogame-input").val());
    });

    // Start your code from here
    const temas = ["League of Legends", "Halo: Infinite", "Terraria", "Minecraft", "Call of Duty: Black Ops III"];

    temas.forEach(tema => {
        addNewTopic(tema);
    });

});