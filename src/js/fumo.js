console.log(
`  ／l、
（ﾟ､ ｡ ７ UwU :3
  l  ~ヽ
  じしf_,)ノ`
);

$(window).scroll(function() {
  let fumo = $("#fumo");
  const OFFSET_PX = $("footer").innerHeight();
  const DEFAULT_MARGIN_PX = 10;

  const scrollDiff = document.body.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDiff < OFFSET_PX) {
    fumo.css("margin-bottom", `${OFFSET_PX - scrollDiff + DEFAULT_MARGIN_PX}px`);
  } else {
    fumo.css("margin-bottom", '');
  }
});
