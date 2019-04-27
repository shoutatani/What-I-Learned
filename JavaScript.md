# JavaScript

## 2019-04-27

* thisキーワードについて学習した。
  * thisについての理解が曖昧だったので、改めて学習。
    * 使ったのは[このページ](https://jsprimer.net/basic/function-this/)。
  * JavaScriptには実行コンテキストとして"Script"と"Module"がある。
    + 実行コンテキストが"Script"である場合、トップレベルのスコープに書かれたthisはグローバルオブジェクトを参照。ブラウザならwindowオブジェクト、Node.jsならglobalオブジェクトとなる。
    + 実行コンテキストが"Module"である場合、そのトップレベルのスコープに書かれたthisは常にundefinedとなる。
  * 関数におけるthisの基本的な参照先（暗黙的に関数に渡すthisの値）はベースオブジェクトとなる。ベースオブジェクトとは「メソッドを呼ぶ際に、そのメソッドのドット演算子またはブラケット演算子のひとつ左にあるオブジェクト」のこと。ベースオブジェクトがない場合のthisはundefinedとなる。
    + メソッドとして定義した関数を、別の変数に代入して呼び出した場合は、undefinedとなる。(strict mode)
      * ただし、callメソッドで明示的にthisを指定して関数を呼ぶこともできる。
        + `関数.call(thisの値, ...関数の引数);`
      * bindメソッドでは、thisの値を束縛した新しい関数を作成できる。
        + `関数.bind(thisの値, ...関数の引数); // => thisや引数がbindされた関数`
  * コールバック関数内では、匿名関数をただの関数のように呼ぶため、thisはundefinedとなる。(ただしArrow Functionの場合は除く。)
    + 回避するには、`const that = this;`のようにthisを代入後、`that.xxx`のようにthisで呼び出そうとしていたオブジェクトを呼ぶことで回避もできる。
    + **Arrow Functionの場合は、暗黙的なthisの値を受け取らないため、Arrow Function内のthisは、スコープチェーンの仕組みと同様で外側の関数に探索を行うので、Arrow Function内のthisは外側の関数で意図するthisとなる**
    + したがって、Arrow Functionの関数式にはbindは使用できない。(thisは外側に探索していくため。)