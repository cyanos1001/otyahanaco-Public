'use strict';

{
  const word = 'apple';  //word でappleと初期化
  let loc = 0;            //locで今何文字目を売っているかをカウントする。初期値として0を代入
  let score = 0;          //scoreという変数を定義する。初期値は０
  let miss = 0;           //missという変数を定義する。初期値は0

  const target = document.getElementById('target'); //taergetの要素を取得
  const scoreLabel = document.getElementById('score');//scoreLabelにscoreを取得する
  const missLabel = document.getElementById('miss');  //missLabelにmissを取得する
  target.textContent = word;                        //targetのテキストコンテントにwordを設定

  window.addEventListener('keydown', (e) => { //キーが押されたときの処理
   console.log(e.key);                        //押し込まれたキーの値を取得する
   if (e.key === word[loc]) {                 //もし、e.keyの値とwordのloc番目の値が等しいとき
     loc++;                                   //locを一ずつ増やす
     score++;                                 //scoreを1づつ増やす
     scoreLabel.textContent =  score;         //scoreLabelのテキストに 更新されたscoreを代入する
   } else {                                   //そうでない場合
     miss++;                                 //missを1づつ増やす
     missLabel.textContent =  miss;          //missLabelのテキストに 更新されたmissを代入する
   }
  });
}