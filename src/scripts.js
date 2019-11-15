import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';
import {
    Human
  } from './src/human.js';


  $(document).ready(function () {
    $("form#generator").submit(function () {
      event.preventDefault();
      let ageInput = parseInt($("#humanAge").val());
      let newHuman = new Human(ageInput);
      newHuman.calcAge();

      $("#ageOnMercury").text(newHuman.ageOnMercury);
    });
  });