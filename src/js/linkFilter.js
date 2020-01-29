// https://youtu.be/OFtyWS5L07M
// https://www.youtube.com/watch?v=OFtyWS5L07M?autoplay=1
// https://www.youtube.com/embed/OFtyWS5L07M?autoplay=1

let link = $('.linkInput'),
    submitLink = $('.linkSubmit'),
    removeLink = $('.linkRemove'),
    wall = $('#wallFrame'),
    count = 0

submitLink.on('mouseup', function() {
  let thisLink = $.trim(link.val()), getLink

  thisLink = link.val().split('/')
  thisLink[0] != 'https:' ?
    (getLink = thisLink[1]) :
    (getLink = thisLink[3])

  getLink.length > 11 && (
    getLink = getLink.split('watch?v=')[1]
  ) & (
    getLink = getLink.split('?')[0]
  )

  let linkEmbed = `https://www.youtube.com/embed/${getLink}?autoplay=1`

  wall.append(
    `<div class="wrapper" data-count="${count}">      
      <button class="linkRemove">刪除</button>
      <iframe type="text/html" src="${linkEmbed}"></iframe>
    </div>`
  )
  link.val('')
  count += 1
})

wall.on('mouseup', '.linkRemove', function() {
  // console.log($(this));
  // let getCount = $(this).parent('div').data('count')
  // console.log(getCount)
  getCount = $(this).parent('div').remove()
})