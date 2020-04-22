'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;                            //starttimeを再代入
  let timeoutId;
  let elapsedTime  = 0;                     //elapsedTimeを定義する　初期値は0とする

  function countUp() {                     //countUpの定義をする
    // console.log(Date.now() - startTime);   //現在ーstatTime　で経過の時間を割り出す
    const d = new Date(Date.now() - startTime + elapsedTime);//dは現在時刻からstrtTimeを引いてelapsedTimeを足したものとする
    const m = String(d.getMinutes()) .padStart(2, '0');//mは文字列としてｄの分の数値を2桁で返す。noneとき0で返す
    const s = String(d.getSeconds()) .padStart(2, '0');//sは以下略
    const ms = String(d.getMilliseconds()) .padStart(3, '0');//ms以下略
    timer.textContent = `${m}:${s}.${ms}`;   //timer　に表示させる値は、m：s：ms とする

    timeoutId = setTimeout(() => {                     //setTimeoutを使って１０ミリ秒後に　countUpを呼び出す 
      countUp();                                       //timeoutIdにこれらの処理を取得させる
    }, 10);
  }

  function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }
  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }
  function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }

  setButtonStateInitial();                  //まず、setButtonStateInitialを反映させる

  start.addEventListener('click', () => {   //startをクリックしたときの動作を定義する
    setButtonStateRunning();                //setButtonStateRunningを反映させる
    startTime = Date.now();                 //startTime＝現在時刻と定義する
    countUp();                              //countUｐを実行
  });

  stop.addEventListener('click', () => {   //stopをクリックしたときの動作を定義する
    setButtonStateStopped();               //setButtonStateStoppedを反映させる
    clearTimeout(timeoutId);               //timeoutIdの処理を解除する
    elapsedTime += Date.now() - startTime;  //ストップををクリックした時間ースタートをクリックした時間
  });

  reset.addEventListener('click', () => {  //resetをクリックしたときの動作を定義する
    setButtonStateInitial();               //setButtonStateInitialを反映させる
    timer.textContent = '00:00.000';       //timerのテキストを00：00.000にする
    elapsedTime = 0;                       //elapsedTimeを0とする
  });

}


//【復習】
//const   書き換え不可の変数を宣言する
//getElementById あらかじめidで定義した要素を抽出する
//function 関数を定義する
//addEventListener ユーザーの動作を定義する
//Date.now  現在時刻
//setTimeout  一定時間後に特定の処理をする（繰り返さない）
//new Date 指定した時刻を表す日付オブジェクトを生成する
//getMinutes 「分」を返す
//getSeconds 「秒」を返す
//getMilliseconds 「ミリ秒」を返す
//textContent 表示させるテキストを表す
//padStart 文字列に対して〇桁で表示させる
//String 文字列として認識させる
//clearTimeout 指定したtimeoutIdの処理を解除する
//.disabled 指定した要素を無効化させる？プロパティ
//【疑問】
//let startTime→なぜletなのか