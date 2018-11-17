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
})
$(".intermedio").on("click", function () {
    movements = 12;
})
$(".experto").on("click", function () {
    movements = 9;
})

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
  $('.cardsImg').children('img').eq(i).attr('data-pos', i)
  $('.cardsImg').eq(i).attr('id', arr[i].id)
}

$('.cardsImg').on('click', function() {
  var visible = $(this).children('img').attr('data-img')
  $(this).children('img').attr('src', visible)
})

var clicks = 2;
var primerClick

$(".cardsImg").on ("click", function () {
    $(this).addClass("noPointer");
    clicks = clicks - 1
    var pos = $(this).children('img').attr('data-pos')
    if (clicks == 1) {
        primerClick = arr[pos]
    } else {
        console.log(arr[pos].url, primerClick.url)
        if (arr[pos].url == primerClick.url) {
            $(this).addClass("greyCard")
            $("#" + primerClick.id).addClass("greyCard")
            console.log('iguales')
        } else {
           $(this).children('img').removeAttr('data-img')
            console.log('distintas')
            clicks = 2
        }
    }  
})

// var paresEncontrados = 0; 

// function game () {
//     clicks;
//     mmovimientos <= clicks
//     if (click a una imag) {
// click++
//     }
//     click = 0
// }
