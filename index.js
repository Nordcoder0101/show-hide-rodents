$(document).ready(()=> {
  $('img').click(function() {
    $(this).hide();
  })

  $('button').click(()=>{
    $('img').show();
  })
})

