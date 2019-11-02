import "jquery"
import "popper.js"

import "./style.scss"

console.log('Hello')


$('.btn_pop_up').click(function()
{
  $('.bg').css('opacity','0.2');
  $('.overlay').fadeIn();
  $('.overlay').addClass('disabled');
});


$('.btn_cancel').click(function()
{
  $('.overlay').fadeOut();
  $('.bg').css('opacity', '1');
});


function addTodoItem() {
  var title = $("#titl").val();
  var description = $("#description").val();
  var popup_priority = $(".popup_priority").val();
  $("#todo-list").append("<li class = 'itemli'><textarea disabled class = 'to_do_title'> "+ title + "</textarea><textarea disabled class = 'descriptions'> "+ description +"</textarea><span class = 'left'> "+ popup_priority +" </span><button" + 
                         " name='todo-item-done'" + 
                         " class='todo-item-done'"+ 
                         " value='" + title + "' >Done</button>" +
                         " <button class='todo-item-delete'>"+
                         " Delete</button>"+
                         " <button class='todo-item-edit'>Edit</button></li>");
  
 $("#titl").val("");
}

function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function() { 
    $(item).parent().remove();
  });
}


                           
function completeTodoItem() {  
  $(this).parent().toggleClass("done");
}


$(function() {
 
   $(".btn_save").on('click', function(e){
     e.preventDefault();
     addTodoItem()
     $('.overlay').fadeOut();
     $('.bg').css('opacity', '1');
   });
  
//EVENT DELEGATION
//#todo-list is the event handler because .todo-item-delete doesn't exist when the document loads, it is generated later by a todo entry
//https://learn.jquery.com/events/event-delegation/
  $("#todo-list").on('click', '.todo-item-delete', function(e){
    var item = this; 
    deleteTodoItem(e, item)
  })
  
  $(document).on('click', ".todo-item-done", completeTodoItem)
  // $('textarea').on('click', ".todo-item-done", completeTodoItem)
  // rgba(0, 0, 0, 0.2)

  // $(".todo-item-edit").click(function()
  // {
  //   $('.bg').css('opacity','0.2');
  //   $('.overlay').fadeIn();
  //   $('.overlay').addClass('disabled');
  // });

  $("#todo-list").on('click', '.todo-item-edit', function(e){
    // var item = this;
    $('.bg').css('opacity','0.2');
    $('.overlay').fadeIn();
    $('.overlay').addClass('disabled');
  })


  $(document).on('click', ".todo-item-edit", function(){
    $('.bg').css('opacity','0.2');
    $('.overlay').fadeIn();
    $('.overlay').addClass('disabled');
  });
});

$(document).ready(function(){
  $('.search').on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#todo-list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

var fActive = '';
 
function filterColor(e){
 if(fActive != e){
 $('span').filter('.'+e);
 $('span').filter(':not(.'+e+')');
 fActive = e;
 }
}
 
$('.f-low').click(function(){ filterColor('low'); });
$('.f-normal').click(function(){ filterColor('normal'); });
$('.f-high').click(function(){ filterColor('high'); });
 
$('.f-all').click(function(){
 $('span').slideDown();
 fActive = 'all';
});