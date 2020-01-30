$(document).ready(function() {
  let cookies = Cookies.get()
  for (let i in cookies) {
    if (i.slice(0, 5) == 'link_') {
      let linkEmbed = `https://www.youtube.com/embed/${cookies[i]}?autoplay=1`,
          cookieId = i.slice(5)
      wall.append(
        `<div class="wrapper" data-id="${cookieId}">
          <div class="btnGroup hide">
            <button class="linkRemove frame_btn">刪除</button>
          </div>
          <iframe type="text/html" src="${linkEmbed}"></iframe>
        </div>`
      )
    }
  }
  cid = parseInt(Cookies.get('cid', { path: '' }))
  changeHeight()
})