# React-Redux

## 2019-04-02

- 「React 入門 React・Redux の導入からサーバサイドレンダリングによる UX の向上まで」購入
  - 発売日
    - 2018 年 02 月 19 日
  - ISBN
    - 9784798153353
  - 章数
    - 全 13 章
  - 以下、React 入門と記述

## 2019-04-03

- React 入門読み進める
  - 第四章の 75p まで読み進めた

## 2019-04-04

- React 入門読み進める
  - 第四章読了。
    - コンポーネントと function・state の bind についての知識が不足している感があるので、おさらいとして Redux を用いない React アプリケーションを作ってみることに決めた。

## 2019-04-06, 2019-04-07

- React入門第一章〜大三章の内容を復習するために、Reactを、手を動かして作ってみた。
  * https://github.com/shoutatani/my-react-testing-app
    * 166f6cb6228904b19171b0e97e7dc929d8767a13 まで。
  * propへの値の引き渡し・展開に強くなった。
  * 関数コンポーネント・クラスコンポーネントも改めて理解。
  * prop-typesを使った型制限にも触れてみた。

## 2019-04-09

- React入門第一章〜第三章の内容を復習するために、Reactを、手を動かして作ってみた。
  * 本編で、stateを解説するために、TodoListを使っているが、stateを手を動かして学ぶとともに。ReactTutorialの中で見た関数の受け渡しの方法で実装してみた。
    * が、関数の受け渡しの部分について曖昧な理解だということがわかったので、そこを明日以降突き止める。
    * 気になって、その後寝る前に調べた。
      * ReactTutorialの中、以下の箇所を見て関数について理解。
        * https://reactjs.org/tutorial/tutorial.html#lifting-state-up
          * ポイントは、`we’re passing a function as the onClick prop. React will only call this function after a click.` というところ。ここを抑えてpropsでの関数受け渡しがよくわかった。
        * https://reactjs.org/tutorial/tutorial.html#lifting-state-up

          * こちらは、以下を抑えて、関数のコールの流れがわかった。

          ```
          The onClick prop on the built-in DOM <button> component tells React to set up a click event listener.
 
          When the button is clicked, React will call the onClick event handler that is defined in Square’s render() method.

          This event handler calls this.props.onClick(). The Square’s onClick prop was specified by the Board.

          Since the Board passed onClick={() => this.handleClick(i)} to Square, the Square calls this.handleClick(i) when clicked.
          ```
  * アロー関数について再理解。単一行で終わる場合は{}とreturnが不要であるが、単一行ではない三行での実装の場合は、{}とreturnが必要。

## 2019-04-20
  * thisのコンテキストをReactコンポーネントに定義したメソッドにbindする箇所があったので、JavaScriptのbind(call/apply)について再度学習。
    * [初めてのJavaScript 第3版 ―ES2015以降の最新ウェブ開発](https://www.amazon.co.jp/dp/4873117836)に記述があったのでそちらで。
      * const xxx = メソッド.bind(オブジェクト)で、関数を呼んだときに、指定したオブジェクトに束縛されることを学んだ。
        * 関数を受け渡ししていくのも、それはそれで分かりやすいかと思った。。。
        * reduxのreducerとの兼ね合いで、ベストプラクティスは何か見極めていくつもり。

## 2019-04-22
  * React入門の第五章を105ページまで呼んだ。
    * Reduxの基本的なメソッドを学んだ。
      * createStore(reducer, [preloadedState, enchancer])
      * store.dispatch(action)
      * store.getState()
      * store.replaceReducer(reducer)
      * unsubscribe = store.subscribe(function)
        * storeの状態が変更したときにfunctionが呼ばれるようになる。
        * unsubscribeを呼ぶことで、止まる。
    * combineReducerで、子Storeも使えるらしい。

## 2019-04-26
  * React入門の第五章を実際に手を動かして覚える。
    * reduxを実際に導入してみた。
      * 今回は、store.subscribeの機能で、初期化時に作成したstoreを渡して描画させる手法で行った。(本の内容)
    * Todoアプリにreduxの適用ができた。
    * が、actionやreducerをどこに定義すべきかまだベストプラクティスがつかめていないので、React入門の106ページ以降を読み進めることとする。