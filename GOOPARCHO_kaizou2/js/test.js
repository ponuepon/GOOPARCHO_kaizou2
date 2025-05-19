function play(userhand) {
  const hands = ["グー", "チョキ", "パー"];
  const random = Math.floor(Math.random() * 3);
  const pchand = hands[random];

  $("#pc_hands").text(pchand);

  if (userhand === pchand) {
      $("#judgment").text("あいこ！");
      return;
  }

  if (
      (userhand === "グー" && pchand === "チョキ") ||
      (userhand === "チョキ" && pchand === "パー") ||
      (userhand === "パー" && pchand === "グー")
  ) {
      $("#judgment").text("あなたの勝ち！");
  } else {
      $("#judgment").text("あなたの負け！");
  }
}

// ボタンがクリックされたら play 関数を実行
$("#gu_btn").on("click", function() {
  play("グー");
});

$("#cho_btn").on("click", function() {
  play("チョキ");
});

$("#par_btn").on("click", function() {
  play("パー");
});
