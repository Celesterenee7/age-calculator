import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';
import {
    Human
} from './human.js';

$(document).ready(function () {
    $("form#formInput").submit(function () {
        event.preventDefault();
        const humanAge = parseInt($("#humanAge").val());
        const humanShape = parseInt($("input:radio[name=shape]:checked").val());
        const human = new Human(humanAge, humanShape);
        human.planetAge();

        $("#results").text();
    });
});