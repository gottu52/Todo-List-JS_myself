import "./styles.css";

// クリックイベントを定義
const onClickAdd = () => {
  // 入力内容を取得、入力欄のリセット
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  // 未完了リストへの追加
  addIncompTodo(inputText);
};

// 未完了リストへの追加（関数）
const addIncompTodo = (text) => {
  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liを生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 完了ボタンのクリックイベント
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromIncomp(completeButton.parentNode);
    // divを生成
    const div = document.createElement("div");
    div.className = "list-row";
    // liを生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻るボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    // 戻るボタンのクリックイベント
    backButton.addEventListener("click", () => {
      // 完了リストからの削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // 未完了リストへの追加
      addIncompTodo(text);
    });
    // divに子要素を追加
    div.appendChild(li);
    div.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンのクリックイベント(未完了リストから削除)
  deleteButton.addEventListener("click", () => {
    deleteFromIncomp(deleteButton.parentNode);
  });

  // divに子要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから削除（関数）
const deleteFromIncomp = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 追加ボタンにクリックイベントを追加
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
