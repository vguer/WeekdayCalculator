import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Date } from './weekdaycalculator.js';




$(document).ready(function () {
  $('#input').submit(function (event) {
      event.preventDefault();
      let year = parseInt($("input#year").val());
      let month = parseInt($("input#month").val());
      let day = parseInt($("input#day").val());

      let calculate = new Date(year, month, day);
      console.log("hello");
      $("#showResult").html(calculate.myDate());

  });
});