'use strict';

{
  const word = 'apple';  //word でappleと初期化
  let loc = 0;            //locで今何文字目を売っているかをカウントする。初期値として0を代入

  const target = document.getElementById('target'); //taergetの要素を取得
  target.textContent = word;                        //targetのテキストコンテントにwordを設定

  window.addEventListener('keydown', (e) => { //キーが押されたときの処理
   console.log(e.key);                        //押し込まれたキーの値を取得する
   if (e.key === word[loc]) {
     console.log('score');
   } else {
     console.log("miss")
   }
  });
}