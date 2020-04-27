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
    li.addEventListener('click', () => {
      mainImage.src = image;
    });

    li.appendChild(img);                            //liの子要素としてimgを追加する
    document.querySelector('.thumbnails').appendChild(li);// thumbnailsの子要素としてliを追加する
  });
}
