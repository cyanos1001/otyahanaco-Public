'use strict';

{
  const words = [        //wordsを定義する
    "apple",
    "sky",
    "blue",
    "middle",
    "set",
  ];
  let word;
  let loc;            //locで今何文字目を売っているかをカウントする。初期値として0を代入
  let score;             //scoreという変数を定義する。初期値は０
  let miss;              //missという変数を定義する。初期値は0
  const timeLimit = 6 * 1 * 10000;//timeLimit という定数を定義する 6*1*10000(1分)で初期化する
  let startTime;             //startTimeという変数を定義する
  let isPlaying = false;     //isPlayingという変数をで意義　初期値をfalseとする

  const target = document.getElementById('target');   //taergetの要素を取得
  const scoreLabel = document.getElementById('score');//scoreLabelにscoreを取得する
  const missLabel = document.getElementById('miss');  //missLabelにmissを取得する
  const timerLabel = document.getElementById('timer');//timerLabelにtimerを取得する


  function updateTarget() {                   //updateTargetを定義する
    let placeholder = '';                    //placeholderという変数を定義する。初期値は空
    for (let i = 0; i < loc; i++) {          //iはloc番目まで１づつ増やす 初期値は0
      placeholder += '_';                    //placeholder に_を追加していく
    }
    target.textContent = placeholder + word.substring(loc);//targetのテキストをsubstringのloc番目の文字列までpaceholderで上書きする
  }

  function updateTimer(){
    const timeLeft = startTime + timeLimit - Date.now();   //クリックされたときの時刻StartTime+timeLimit -現在時刻
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);//timerLabelのテキストを　timeLeft/1000した値の小数点2桁とする

    const timeoutId = setTimeout(() => { //timeoutIDは10ミリ秒後に
      updateTimer();                     //updateTimerを実行する
    }, 10);

    if (timeLeft < 0) {                    //もし、timeleftが0より小さい場合
      isPlaying = false;                   //isPlayingをfalseとする

      clearTimeout(timeoutId);             //timeoutIdをリセットする
      timerLabel.textContent = "0.00";     //timerLabelのテキストを　0.00とする
      setTimeout (() => {                  //100ミリ秒後に
        shoeResult();                      //shoeResultを定義
      }, 100);
      target.textContent = "click to replay";//targetのテキストを初期値にする
    }
  }
  function shoeResult() {
     const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
     alert(`${score} letters, ${miss} misses ${accuracy.toFixed(2)}% accutacy!`);
   }
  target.addEventListener('click', () => {   //クリックされたとき、
    if (isPlaying === true) {                //もしisPlayingがtrueの場合、これらの処理をしない
      return;
    }
    
    isPlaying = true;                        //isPlaying をtrueとする

    loc = 0 ;                                //locの値を0にする
    score = 0;                               //scoreの値を0にする
    miss = 0;                                //missの値を0にする
    scoreLabel.textContent = score;          //scoreLabelのテキストを初期値にする
    missLabel.textContent = miss;            //missLabelのテキストを初期値にする
    word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word;               //targetのテキストをwordにする
    startTime = Date.now();                  //startTimeを現在時刻とする
    updateTimer();                           //updateTimerという残り時間を計算する関数を定義する
  });


  window.addEventListener('keydown', (e) => { //キーが押されたときの処理
    if (isPlaying !== true) {                 //もしisPlayingが trueでない場合、これらの処理をしない
      return;
    }

   if (e.key === word[loc]) {                 //もし、e.keyの値とwordのloc番目の値が等しいとき
     loc++;                                   //locを一ずつ増やす
     if (loc === word.length) {               //もし、locがwordの文字数と同じ数値になったとき
      word = words[Math.floor(Math.random() * words.length)]; //word=wordsのランダムな値とする
      loc = 0;                                                //locを０とする
     }
     updateTarget();                          //uodateTrgetの処理を実行する
     score++;                                 //scoreを1づつ増やす
     scoreLabel.textContent =  score;         //scoreLabelのテキストに 更新されたscoreを代入する
   } else {                                   //そうでない場合
     miss++;                                  //missを1づつ増やす
     missLabel.textContent =  miss;           //missLabelのテキストに 更新されたmissを代入する
   }
  });
}


//substring   部分文字列を取得するメソッド
//length   文字列の文字数を数値として認識してくれるメソッド
//toFixed  小数点以下を表示させる
//setTimeout ある処理を一定時間後に実行する
//clearTimeout  時間処理をクリアする
//alert  指定した要素をアラートとして表示させる　※仕様上重いので必要な処理を先に済ませて表示させるようにする。不具合の原因となる。

//【不明点】
//shoeResultの役割