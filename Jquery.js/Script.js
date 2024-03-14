//   jQuery selectors
  


//    J-Query Event
// $(document).ready(function()
// {
//     $('p').click(function(){
//         $(this).hide();
//     })
// })

// $(document).ready(function()
// {
//     $('button').click(function(){                   element selector
//         $('p').hide();
//     })
// })

// $(document).ready(function()                         id selector
// {
//     $('button').dblclick(function(){
//         $('#test')
//         .css('background-color', 'red')
//         .hide(5000);
//     })
// })

// $(document).ready(function()
// {
//     $('button').click(function(){                   class selector
//         $('.head')
//         .css('color', 'yellow')
//         .toggle()
//     })
// })

$(document).ready(function()
{
    $('button').mouseover(function(){
        $('*')
        .css('background-color', 'blue')
        .slideUp(5000)
    })
})

