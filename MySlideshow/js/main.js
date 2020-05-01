'use strict';

{
  const images = [   //imagesという定数を定義
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];
  let currentIndex = 0;//currentIndexという変数を定義

  const mainImage = document.getElementById('main');//mainを、mainImage(定数)として取得
  mainImage.src = images[currentIndex];             //mainImageをimagesのcurrentIndex番目の要素とする

  images.forEach((image, index) => { //imagesの範囲のindex番目のアイテムをimageとしこれらの処理を繰り返す
    const img = document.createElement('img');      //imgという定数にimgを与えて生成する
    img.src = image;                                //imgのソースをimageとする
    
    const li = document.createElement('li');        //liという定数をliに与えて生成する
    if (index === currentIndex) {                   //indexがcuttentindexの値と同じだったとき
      li.classList.add('current');                  //liにcurrentクラスを追加
    }
    li.addEventListener('click', () => {            //liがクリックされたとき
      mainImage.src = image;                        //mainimageのソースをimageとする
      const thumbnails = document.querySelectorAll('.thumbnails > li');//thumbnailsにliの要素をすべて取得
      thumbnails[currentIndex].classList.remove('current');  //thumbnailsのcurrentIndex番目の要素からcurrentを取り除く
      currentIndex = index;                                  //indexをcurrentIndexとする
      thumbnails[currentIndex].classList.add('current');     //thumbnailsのcurrentIndex番目の要素にcuttentを追加
    });

    li.appendChild(img);                            //liの子要素としてimgを追加する
    document.querySelector('.thumbnails').appendChild(li);// thumbnailsの子要素としてliを追加する
  });

  const next = document.getElementById('next');   //nextという定数にnextを取得する
  next.addEventListener('click', () => {          //nextをクリックしたとき
    let target = currentIndex + 1;              //定数(target)にcurrentIndex+1を取得する
    if (target === images.length) {               //tergetがimagesの要素数の値と同じになったら
      target = 0;                                 //tergetを０とする
    }
    document.querySelectorAll('.thumbnails > li')[target].click();//thumbnailsのliのtarget番目にclickされたときの処理を実行する
  });

  const prev = document.getElementById('prev');   //prevという定数にprevを取得する
  prev.addEventListener('click', () => {          //prevをクリックしたとき
    let target = currentIndex - 1;  //定数(target)にcurrentIndex-1を取得する
    if (target < 0) {               //tergetが0より小さくなったら
      target = images.length - 1;  //tergetをimagesのアイテムの数-1とする
    }
    document.querySelectorAll('.thumbnails > li')[target].click();//thumbnailsのliのtarget番目にclickされたときの処理を実行する
  });

  let timeoutId;

  function playSlideshow() {  //playSlideshowという関数を定義。
    timeoutId = setTimeout(() => {        //1秒後に実行
      next.click();           //nextをクリックしたときと同じ動作をする
      playSlideshow();        //paySlideshowを実行する
    }, 1000);
  }

  let isPlaying = false;                        //isPlayingという変数を定義。初期値をfalse

  const play = document.getElementById('play'); //playという定数にplayを取得
  play.addEventListener('click', () => {        //playをクリックしたとき
    if (isPlaying === false) {                  //isPlayingがfalseの場合
      playSlideshow();                          //playSlideshowを実行する
      play.textContent = 'Pause';               //playのテキストをPauseとする
    } else {                                    //そうでないとき
      clearTimeout(timeoutId);                   
      play.textContent = 'Play';
    }
    isPlaying = !isPlaying                    //isPlayingの値を反転させる
  });
}