import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //ボタンタグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  console.log(completeButton);

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  //divタグに追加
  div.appendChild(p);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//クリックイベントを付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
