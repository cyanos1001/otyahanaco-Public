'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices')
  const btn = document.getElementById('btn')

  const quizSet = [
    {q: 'What is A?', c: ['A0', 'A1', 'A2']},
    {q: 'What is B?', c: ['B0', 'B1', 'B2']},
    {q: 'What is C?', c: ['C0', 'C1', 'C2']},
  ];
  let currentNum = 0;
  let isAnswered;


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
    } else {
      li.classList.add('wrong');
    }
  }

  function setQuiz() {                           //setQuizという関数を定義する
    isAnswered = false;                          //isAnsweredをfalseとする
    question.textContent = quizSet[currentNum].q;//quwstionのテキストは　quizSetの上からcurrentNum番目のqの要素とする

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);//shuffledChoicesはquizSetのcurrentNum番目のcとする
    shuffledChoices.forEach(choice => {       //shuffledChoicesの各要素の数だけ
      const li = document.createElement('li');//HTML要素のliを定数として作成
      li.textContent = choice;                //liのテキストはchoiceとする
      li.addEventListener('click', () => {    //liをユーザーがクリックしたとき
        checkAnswer(li);                      //checkAnswerを実行する
      });
      choices.appendChild(li);   //これらのliはchoices(ul)の子要素とする
    });
  }

  setQuiz();
}


//forEach  与えられた関数を配列の各要素にたいしてその数だけ一度づつ実行する
//document.createElement HTML要素を生成する。今回の場合はli
//length 範囲
//26について　　引き数自体が処理されてシャッフルされてしまうので、正解を要素の1番目とした場合、正誤判定がバグる。
//→よって、もとの引数の要素の配列を維持したまま、シャッフルの処理をして表示させるために
//→引数を[...引数]として囲う。すると、元の要素は維持される。
