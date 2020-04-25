'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices')
  const btn = document.getElementById('btn')
  const result = document.getElementById('result')
  const scoreLabel = document.querySelector('#result > p')

  const quizSet = shuffle ([
    {q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖']},
    {q: '2の８乗は？', c: ['256', '64', '1024']},
    {q: '次のうち、最初にリリースされた言語は？', c: ['Python', 'JavaScript', 'HTML']},
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {  //shuffleという関数を定義してarrという引数を定義する

  for( let i = arr.length - 1; i > 0; i --) {// //iはarrの全体範囲から-1した値。 i>0の間i-1する
    const j = Math.floor(Math.random() * (i + 1)); //jはi+1個の要素からランダムに
    [arr[j], arr[i]] = [arr[i], arr[j]];           //arrのjとarrのiを入れ替える
  }
  return arr;              //繰り返すとき、計算したarrの値を戻り値とする
  }

  function checkAnswer(li) {      //checkAnswerという関数を定義。引数をliとする
    if (isAnswered === true) {    //もしisAnswerwdをtrueとするとき、
      return;                     //これらの処理をしない
    }
    isAnswered = true;            //isAnsweredをtrueとする

    if (li.textContent === quizSet[currentNum].c[0]) { //もしliのテキストがquizSetのcuttentNumのcの0番目と等しいとき
       li.classList.add('correct');                    //liクラスに”correct”と追加する
       score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled')             //disabledを反映させる
  }

  function setQuiz() {                           //setQuizという関数を定義する
    isAnswered = false;                          //isAnsweredをfalseとする
    question.textContent = quizSet[currentNum].q;//quwstionのテキストは　quizSetの上からcurrentNum番目のqの要素とする

    while (choices.firstChild) {                  //choicesの最初の子要素がfolseやNullになるまで次の処理をする
      choices.removeChild(choices.firstChild);   //choicesの最初の子要素を消す
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);//shuffledChoicesはquizSetのcurrentNum番目のcとする
    shuffledChoices.forEach(choice => {       //shuffledChoicesの各要素の数だけ
      const li = document.createElement('li');//HTML要素のliを定数として作成
      li.textContent = choice;                //liのテキストはchoiceとする
      li.addEventListener('click', () => {    //liをユーザーがクリックしたとき
        checkAnswer(li);                      //checkAnswerを実行する
      });
      choices.appendChild(li);   //これらのliはchoices(ul)の子要素とする
    });
    if (currentNum === quizSet.length - 1) { //もし、currentNumがクイズセットの数-1の値の場合
      btn.textContent = 'Show Score';        //btnのテキストをShow Scoreとする
    }
  }

  setQuiz();

  btn.addEventListener('click',() => {   //btnをクリックしたとき
    if (btn.classList.contains('disabled')) {  //もしbtnにdiaabledクラスがついていた場合
      return;                                  //これらの処理をしない
    }
    btn.classList.add('disabled');             //btnにdisabledクラスを追加

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');     //resultにhiddenクラスを追加
    } else {
      currentNum++;                        //currentNumを一づつ増やす
      setQuiz();                           //setQuizを実行する
    }
  });
}


//forEach  与えられた関数を配列の各要素にたいしてその数だけ一度づつ実行する
//document.createElement HTML要素を生成する。今回の場合はli
//length 範囲
//26について　　引き数自体が処理されてシャッフルされてしまうので、正解を要素の1番目とした場合、正誤判定がバグる。
//→よって、もとの引数の要素の配列を維持したまま、シャッフルの処理をして表示させるために
//→引数を[...引数]として囲う。すると、元の要素は維持される。
