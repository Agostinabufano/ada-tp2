var movements;
var arr = [];
var imgsLength = $('.cardsImg').length;
var clicks = 0;
var primerClick;
var intentos = 0;
var paresEncontrados = 0;
var nivel;

$(".level").on("click", function () {
    var name = $("#name").val();
    if (name == "") {
        $(".alertName").removeClass("ups");
        setTimeout(function () {
            $(".alertName").addClass("ups");
        }, 3000)
    } else {
        $(".game").removeClass("none");
        $(".welcome").addClass("none")
        $("#hello").html(`Hola ${name}`)
    }
})

$(".facil").on("click", function () {
    movements = 18;
    $("#tries").html("18");
    $("#level").html("FACIL");
    nivel = "facil";
})

$(".intermedio").on("click", function () {
    movements = 12;
    $("#tries").html("12");
    $("#level").html("INTERMEDIO");
    nivel = "intermedio";
})

$(".experto").on("click", function () {
    movements = 9;
    $("#tries").html("9");
    $("#level").html("EXPERTO");
    nivel = "experto";
})

function setArr(id, url) {
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

$(".cardsImg").on("click", function () {
    var id;
    id = arr[arr.length - 1].id + 1
})

arr.sort(function (a, b) {
    return Math.random() - 0.5;
})

for (var i = 0; i < imgsLength; i++) {
    $('.cardsImg').children('img').eq(i).attr('data-img', arr[i].url);
    $('.cardsImg').children('img').eq(i).attr('data-pos', i);
    $('.cardsImg').eq(i).attr('id', arr[i].id)
}

$('.cardsImg').on('click', function () {
    var visible = $(this).children('img').attr('data-img');
    $(this).children('img').attr('src', visible)
})

$(".cardsImg").on("click", function () {
    $(this).children("img").addClass("noPointer");
    $(this).addClass("animated flipInY");
    clicks = clicks + 1;
    var pos = $(this).children('img').attr('data-pos');
    if (clicks == 1) {
        primerClick = arr[pos]
    } else {
        intentos += 1;
        if (arr[pos].url == primerClick.url && primerClick.id != arr[pos].id) {
            $(this).addClass("found");
            $("#" + primerClick.id).addClass("found");
            paresEncontrados++;
            console.log(paresEncontrados);
        } else {
            setTimeout(function () {
                $("#" + primerClick.id).children("img").attr("src", "../imagenes/tapada.jpg");
                $("#" + arr[pos].id).children("img").attr("src", "../imagenes/tapada.jpg")
            }, 1000)  
        }
        if (win() == true) {
            $(".winner").removeClass("none");
            $(".game").addClass("overlaid")
            $(".numberIntentos").html(intentos);
            var obj = {
                nombre: $("#name").val(),
                nivel: nivel,
                intentos: intentos,
            }
            localStorage.setItem("nombre", JSON.stringify(obj.nombre));
            localStorage.setItem("nivel",JSON.stringify(obj.nivel));
            localStorage.setItem("intentos",JSON.stringify(obj.intentos));
            localStorage.getItem(JSON.stringify(obj.nombre),JSON.stringify(obj.nivel),JSON.stringify(obj.intentos));
            $(".names").append(obj.nombre);
            $(".levels").append(obj.nivel);
            $(".attemps").append(obj.intentos);
        } else if (win() == false){
            $(".lost").removeClass("none");
        }
        $(".lifes").children("p").html("<b>Intentos: </b>" + "<span class='number'>" + intentos + "</span>")
        clicks = 0
    }
})

function win () {
    if (paresEncontrados == 6 && intentos <= movements) {
        return true;
    }else if (paresEncontrados != 6 && intentos > movements) {
        return false;
    }
}
