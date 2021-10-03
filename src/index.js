import "./styles.css";

// クリックイベントを定義
const onClickAdd = () => {
  // 入力内容を取得、入力欄のリセット
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  // divを生成
  const div = document.createElement("div");

  // liを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divに子要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("complete-list").appendChild(div);
};

// 追加ボタンにクリックイベントを追加
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
