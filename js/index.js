$(".level").on("click", function () {
    var name = $("#name").val()
    if (name == " ") {
        $(".alertName").removeClass("ups");
        setTimeout(function () {
            $(".alertName").addClass("ups");
        }, 3000)
    }
    $("#hello").html(`Hola ${name}`)
})

var movements;

$(".facil").on("click", function () {
    movements = 18;
    console.log(movements)
})
$(".intermedio").on("click", function () {
    movements = 12;
    console.log(movements)
})
$(".experto").on("click", function () {
    movements = 9;
    console.log(movements)
})

// function game () {
//     clicks;
//     mmovimientos <= clicks
//     if (click a una imag) {
// click++
//     }
//     clcik = 0
// }

var arr = [];

function setArr (id, url) {
    pieza = {
        id: id,
        url: url,
    }
    arr.push(pieza)
}

setArr(1, "../imagenes/alce.jpg")
setArr(2, "../imagenes/epelante.jpg")
setArr(3, "../imagenes/nena.jpg")
setArr(4, "../imagenes/peces.jpg")
setArr(5, "../imagenes/zapas.jpg")
setArr(6, "../imagenes/unichancho.jpg")
setArr(7, "../imagenes/zapas.jpg")
setArr(8, "../imagenes/unichancho.jpg")
setArr(9, "../imagenes/nena.jpg")
setArr(10, "../imagenes/peces.jpg")
setArr(11, "../imagenes/alce.jpg")
setArr(12, "../imagenes/epelante.jpg")

$(".cardsImg").on ("click", function () {
    var id;
    id = arr[arr.length - 1].id + 1
})

arr.sort(function (a,b) {
    return Math.random() - 0.5;
})

var imgsLength = $('.cardsImg').length

for (var i = 0; i < imgsLength; i++) {
  $('.cardsImg').children('img').eq(i).attr('data-img', arr[i].url)
}

$('.cardsImg').on('click', function() {
  var visible = $(this).children('img').attr('data-img')
  console.log(visible)
  $(this).children('img').attr('src', visible)
})