import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
// 共通化したい
// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //完了ボタンを押したら未完了リストから削除する
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");
  li.className = "list";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = text;

  //完了ボタンタグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //削除は一番最初に持ってくる
    // deleteFromIncompleteList(deleteButton.closest);

    //完了ボタンを押したら完了リストに追加する
    const addTarget = completeButton.closest("li");
    //テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // console.log(text);

    //li以下を初期化
    //最初の追加ボタンを押した挙動と戻るボタンを押した時の挙動を揃えるために上記のような実装をした
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    //liにtextを設定
    li.innerText = text;

    //戻すボタンタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.closest("li").firstElementChild.innerText;

      //戻すボタンのクリック時に未完了リストに追加する関数を発動してtextを引数で渡す
      createIncompleteList(text);
    });

    //liタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンタグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    //親タグを取得
    // deleteFromIncompleteList(deleteButton.closest);
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

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
