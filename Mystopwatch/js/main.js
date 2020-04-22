'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;                            //starttimeを再代入

  function countUp() {                     //countUpの定義をする
    // console.log(Date.now() - startTime);   //現在ーstatTime　で経過の時間を割り出す
    const d = new Date(Date.now() - startTime)//dはユーザーがクリックしたときの時刻から現在時刻を引いたものとする
    const m = String(d.getMinutes()) .padStart(2, '0');//mは文字列としてｄの分の数値を2桁で返す。noneとき0で返す
    const s = String(d.getSeconds()) .padStart(2, '0');//sは以下略
    const ms = String(d.getMilliseconds()) .padStart(3, '0');//ms以下略
    timer.textContent = `${m}:${s}.${ms}`;   //timer　に表示させる値は、m：s：ms とする

    setTimeout(() => {                     //setTimeoutを使って１０ミリ秒後に　countUpを呼び出す
      countUp();
    }, 10);
  }


  start.addEventListener('click', () => {   //クリックしたときの動作を定義する
    startTime = Date.now();                  //startTime＝現在時刻と定義する
    countUp();                              //countUｐを実行
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

//【疑問】
//let startTime→なぜletなのか