$(document).ready(()=> {
  // $('img').click(function() {
  //   $(this).hide();
  // })

  // $('button').click(()=>{
  //   $('img').show();
  // })
  

  $('img').click(function() {
    let originalPic = $('img').attr('src')
    let altImg = $(this).attr('alt_img_src');
    
   if ($(this).attr({
     src: originalPic
   })){
     $(this).attr({
      alt_img_src: originalPic, 
      src: altImg
     })
   } else {
     $(this).attr({
       alt_img_src: originalPic,
       src: altImg
     })
   }

  })

  $('button').click(()=>{
    let originalPic = $('img').attr('alt_img_src')
    $('img').attr({
      src: originalPic
    })
  })
})

