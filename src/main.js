import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculate } from './weekdaycalculator.js';

$(document).ready(function () {
  $('#input').submit(function (event) {
    event.preventDefault();
    let year = parseInt($("input#year").val());
    let month = parseInt($("input#month").val());
    let day = parseInt($("input#day").val());
    let calculate2 = new Calculate(year, month, day);
    if (!calculate2.checkDay()) {
      alert("Please enter a valid date")
      return;
    }
    
    let calculate = new Calculate(year, month, day);
      $("#showResult").html(calculate.checkDate());

  });
});