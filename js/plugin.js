/* jslint plusplus: true, evil: true */
/* global console, alert, prompt */

var myCollapse = document.getElementById('Login')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})