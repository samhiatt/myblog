/*
 Header tag link extraction script copied from:
 https://github.com/pages-themes/leap-day/blob/2378f92b7cbede0703231d2e63a85b536585f260/assets/js/main.js
 CC0 license: https://github.com/pages-themes/leap-day/blob/2378f92b7cbede0703231d2e63a85b536585f260/LICENSE
*/
$(".post-content h1, .post-content h2, .post-content h3").each(function(){
  $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
  $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
  $("nav ul li:first-child a").parent().addClass("active");
});
