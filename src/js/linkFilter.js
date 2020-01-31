// https://youtu.be/OFtyWS5L07M
// https://www.youtube.com/watch?v=OFtyWS5L07M?autoplay=1
// https://www.youtube.com/embed/OFtyWS5L07M?autoplay=1

let link = $('.linkInput'),
    submitLink = $('.linkSubmit'),
    removeLink = $('.linkRemove'),
    clearLink = $('.linkClear'),
    removeBtn = $('.linkRemoveBtn'),
    wall = $('#wallFrame'),
    linkPlayer = $('.wrapper'),
    cid = 0

submitLink.on('mouseup', function() {
  let thisLink = $.trim(link.val()), getLink
  !Cookies.get('cid', { path: '' }) && (cid = 0)

  thisLink = link.val().split('/')
  thisLink[0] != 'https:' ?
    (getLink = thisLink[1]) :
    (getLink = thisLink[3])

  getLink.length > 11 && (
    getLink = getLink.split('watch?v=')[1]
  ) & (
    getLink = getLink.slice(0, 11)
  )

  let linkEmbed = `https://www.youtube.com/embed/${getLink}?autoplay=1`,
      chatEmbed = `https://www.youtube.com/live_chat?v=${getLink}&embed_domain=gaze9999.github.io`

  wall.append(
    `<div class="wrapper" data-id="${cid}">
      <div class="btnGroup hide">
        <button class="linkRemove frame_btn">刪除</button>
      </div>
      <iframe class="linkPlayer" type="text/html" src="${linkEmbed}" style="height: 405px;"></iframe>
      <iframe class="linkChat" type="text/html" src="${chatEmbed}" style="height: 405px;"></iframe>
    </div>`
  )
  // if ()
  link.val('')
  Cookies.set(`link_${cid}`, getLink, { expires: 365, path: '' })
  changeHeight()
  cid += 1
  Cookies.set('cid', cid, { expires: 365, path: '' })
})

wall.on('mouseup', '.linkRemove', function() {
  let thisObj = $(this).parents('.wrapper'),
      thiscId = thisObj.data('id')
  Cookies.remove(`link_${thiscId}`, { path: '' })
  getCount = thisObj.remove()
  changeHeight()
})

clearLink.on('mouseup', function() {
  let cookies = Cookies.get()
  for (let i in cookies) {
    Cookies.remove(i, { path: '' })
  }
  Cookies.remove('cid', { path: '' })
  linkPlayer = $('.wrapper')
  linkPlayer.remove()
})

removeBtn.on('mouseup', function() {
  let rmvBtn = $('.wrapper').find('.btnGroup')
  $(this).hasClass('hide') ?
  $(this).removeClass('hide') &
  rmvBtn.removeClass('hide') :
  $(this).addClass('hide') &
  rmvBtn.addClass('hide')
})

// wall.on('change', function() {
//   changeHeight()
// })

function changeHeight() {
  let playerFrame = $('.wrapper').find('iframe'),
      height = playerFrame.width() * 0.5625
  playerFrame.css('height', height + 'px')
  // playerFrame.eq(-1).css('height', '405px')
}