$('.tab-title').on('click', (event) => {
  $(event.target).siblings().removeClass('tab-title-active');
  $(event.target).toggleClass('tab-title-active');

  $(event.target).siblings().find('span').removeClass('expand-tab-active');
  $(event.target).find('span').toggleClass('expand-tab-active');
  $('.expand-tab').html('+');
  $('.expand-tab-active').html('&#8211');

  $(`#tab-${event.target.id[event.target.id.length-1]}`).toggleClass('tab-active');
  $(`#tab-${event.target.id[event.target.id.length-1]}`).siblings().removeClass('tab-active');
})
