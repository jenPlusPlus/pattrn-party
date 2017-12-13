$('.tab-title').on('click', (event) => {
  console.log(event.target);
  console.log(`tab-${event.target.id[event.target.id.length-1]}`);
  $(event.target).siblings().removeClass('tab-title-active');
  $(event.target).addClass('tab-title-active');
  $('.expand-tab').html('+');
  $(event.target).find('span').html('&#8211');
  $(event.target).find('span').toggleClass('expand-tab-active');
  $(`#tab-${event.target.id[event.target.id.length-1]}`).addClass('tab-active');
  $(`#tab-${event.target.id[event.target.id.length-1]}`).siblings().removeClass('tab-active');

})
