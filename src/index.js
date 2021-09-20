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

  //完了ボタンタグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //完了ボタンを押したら完了リストに追加する
    const addTarget = completeButton.closest("li");
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンタグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    //親タグを取得
    deleteFromIncompleteList(deleteButton.closest);
    // const deleteTarget = deleteButton.closest("li");
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //共通化したい
  //未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    //完了ボタンを押したら未完了リストから削除する
    document.getElementById("incomplete-list").removeChild(target);
  };

  //liタグの子要素に各要素を設定
  li.appendChild(div);

  //divタグに追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//クリックイベントを付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
