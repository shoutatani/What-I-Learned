## React-Redux

## 2019

### April

#### 2

- 「React 入門 React・Redux の導入からサーバサイドレンダリングによる UX の向上まで」購入
  - 発売日
    - 2018 年 02 月 19 日
  - ISBN
    - 9784798153353
  - 章数
    - 全 13 章
  - 以下、React 入門と記述

#### 3

- React 入門読み進める
  - 第四章の 75p まで読み進めた

#### 4

- React 入門読み進める
  - 第四章読了。
    - コンポーネントと function・state の bind についての知識が不足している感があるので、おさらいとして Redux を用いない React アプリケーションを作ってみることに決めた。

#### 6, 7

- React入門第一章〜大三章の内容を復習するために、Reactを、手を動かして作ってみた。
  * https://github.com/shoutatani/my-react-testing-app
    * 166f6cb6228904b19171b0e97e7dc929d8767a13 まで。
  * propへの値の引き渡し・展開に強くなった。
  * 関数コンポーネント・クラスコンポーネントも改めて理解。
  * prop-typesを使った型制限にも触れてみた。

#### 9

- React入門第一章〜大三章の内容を復習するために、Reactを、手を動かして作ってみた。
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