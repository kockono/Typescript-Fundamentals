"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
console.log("Hola mundo");
$(document).ready(function () {
    console.log("Pagina lista");
    console.log("Sigue funcionando ?");
    $("h1").text("Hola desde Typescript");
    $("p").text("Hola desde p con jQuery y Typescript");
    $("h1").css("background-color", "red");
});
$("#botAlerta").on("click", function () {
    alert("Hola mundo desde Typescript");
});
