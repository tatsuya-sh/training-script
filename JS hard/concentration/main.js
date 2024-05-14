"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //Cardクラスを作成
  class Card {
    constructor(suit, num) {
      //カードのスート(マーク=s:スペード、d:ダイヤ...etc)
      this.suit = suit;
      //カードの数字(1,2,3...13)
      this.num = num;
      //カードの画像
      this.front = `${suit}${num < 10 ? "0" : ""}${num}.gif`;
    }
  }

  //カード配列の作成
  const cards = [];
  //カードスーツ配列
  const suits = ["s", "d", "h", "c"];

  //二重for文で52枚のカードを作成
  for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j <= 13; j++) {
      //カードインスタンス生成(s1,s2...c13)
      let card = new Card(suits[i], j);
      //配列の末尾の追加
      cards.push(card);
    }
  }
  let firstCard = null; //1枚目のカードを保持(引いていない場合はnull)
  let secondCard = null; //2枚目のカードを保持(引いていない場合はnull)
  let currentPlayer = 1; //現在のプレイヤーを追跡する機能を追加
  let scores = [0, 0]; //プレイヤー１とプレイヤー２のスコアを追跡する機能を追加

  //クリックした際の関数を定義
  const flip = (eve) => {
    //クリックされた要素を特定
    let div = eve.target;
    //表のカードや3枚目のカードをクリックしても何も起こらない
    if (!div.classList.contains("back") || secondCard !== null) {
      return;
    }
    //カードを表にする
    div.classList.remove("back");
    //もしそれが1枚目だったらfirstCardに代入
    if (firstCard === null) {
      firstCard = div;
    } else {
      //2枚目だったらsecondCardに代入
      secondCard = div;
      //2枚のカードが同じ数字だったら
      if (firstCard.num === secondCard.num) {
        //2枚のカードにfadeoutクラスを付与
        firstCard.classList.add("fadeout");
        secondCard.classList.add("fadeout");
        //そしてfirstCard,secondCardをnullに戻す
        [firstCard, secondCard] = [null, null];
        scores[currentPlayer - 1]++;
      } else {
        //違った場合は0.5秒後に裏に戻す
        setTimeout(() => {
          firstCard.classList.add("back");
          secondCard.classList.add("back");
          [firstCard, secondCard] = [null, null];
          currentPlayer = currentPlayer === 1 ? 2 : 1;
          document.getElementById(
            "nextPlayer"
          ).textContent = `Player${currentPlayer}'の番です`;
        }, 500);
      }
      document.getElementById(
        "player1"
      ).textContent = `Player1:スコア${scores[0]}`;
      document.getElementById(
        "player2"
      ).textContent = `Player2:スコア${scores[1]}`;

      const allCards = document.querySelectorAll(".card");
      const remainingCards = Array.from(allCards).filter(
        (card) => !card.classList.contains("fadeout")
      );

      if (remainingCards.length === 0) {
        document.getElementById(
          "player1"
        ).textContent = `Player1:スコア${scores[0]}`;
        document.getElementById(
          "player2"
        ).textContent = `Player2:スコア${scores[1]}`;
        if (scores[0] > scores[1]) {
          alert("Player1の勝利!");
        } else if (scores[0] < scores[1]) {
          alert("Player2の勝利!");
        } else {
          alert("引き分け");
        }
      }
    }
  };
  //cardgridのDOMを取得
  const cardgrid = document.getElementById("cardgrid");
  //gridを初期化する処理
  const initgrid = () => {
    //cardgridに入ってる全ての要素を削除
    cardgrid.textContent = null;
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < 13; j++) {
        //1枚毎のトランプとなるdiv要素作成
        let div = document.createElement("div");
        //配列からcardを取り出す
        let card = cards[i * 13 + j];
        // div.textContent = card.suit + ":" + card.num;
        //背景画像に画像を設定
        div.style.backgroundImage = `url(images/${card.front})`;
        //divにcardとbackのクラスを追加
        div.classList.add("card", "back");
        //要素をクリックした際の挙動を登録
        div.onclick = flip;
        //divにnumプロパティを定義して、そこに数字を保存
        div.num = card.num;
        //cardgrid要素に追加
        cardgrid.append(div);
      }
    }
  };

  //カードシャッフル関数(Fisher-Yates shuffle)
  const shuffle = () => {
    let i = cards.length;
    while (i) {
      let index = Math.floor(Math.random() * i--);
      [cards[index], cards[i]] = [cards[i], cards[index]];
    }
  };

  //ボタンのDOM取得
  const startBtn = document.getElementById("startBtn");
  //ボタンを押した時の処理
  startBtn.addEventListener("click", () => {
    shuffle();
    initgrid();
    //ゲーム開始時にfirstCard,secondCardをnullにする
    [firstCard, secondCard] = [null, null];
    currentPlayer = 1;
    scores = [0, 0];
    document.getElementById(
      "nextPlayer"
    ).textContent = `Player${currentPlayer}'の番です`;
    document.getElementById(
      "player1"
    ).textContent = `Player1:スコア${scores[0]}`;
    document.getElementById(
      "player2"
    ).textContent = `Player2:スコア${scores[1]}`;
  });
});
