# JavaScript

## 2019-04-27 A.M.

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

## 2019-04-27 P.M

* class構文について学習した。
  * .NETやJava, Rubyなどでオブジェクト指向は知っているが、JavaScriptについては詳しく理解していなかったため。
   * 使ったのは[このページ](https://jsprimer.net/basic/class/)。
  * コンストラクタ内でthisが指すものは、新しく作るインスタンスオブジェクトを指す。
  * クラス内で定義したメソッド(<==> コンストラクタ内で定義したメソッド)は、クラスの各インスタンスから共有されるメソッドなので、プロトタイプメソッド、またはインスタンスメソッドとも呼ばれる。
  * プロトタイプメソッドを定義する場合は、`functionName: () => {}`のように:区切りでのメソッド定義はできない。
  * コンストラクタ内で、`this.functionName = () => {}`のようにメソッドを定義すると、オブジェクト毎のメソッドとなる。
    * これは、プロトタイプメソッドに優先して呼ばれることになる。
  * コンストラクタ内で、インスタンスオブジェクトへのメソッド定義の際は、Arrow Functionが利用可能。(通常のプロトタイプメソッドではSyntax Errorになるため定義できない。)
    * メリットとしては、thisをインスタンス自身に固定できる。
      * thisの復習として、プロトタイプメソッド内でのthisの使用は、そのメソッドの呼ばれ方に依存する。
  * getter, setterキーワードをメソッドの前につけることで、アクセッサプロパティを表現できる。
  * staticキーワードをメソッドの前につけることで、静的メソッドを定義できる。
    * 呼び出し方は、クラス名.メソッド名()。
    * 静的メソッド内におけるthisは、クラス自身を指す。
  * クラスには必ずconstructorメソッドが定義されるが、これもプロトタイプオブジェクトの中に定義されることになり、クラス自身を参照する。
  * `Object.getPrototypeOf(object)`メソッドで、objectのプロトタイプオブジェクトを参照できる。ただ、読み書きができてしまうため変更はあまりしないほうが良い。
  * extendsキーワードで継承可能。
    * 継承した際、子のプロトタイプオブジェクトには、親クラスのプロトタイプオブジェクトが設定される。
    * 静的メソッドも継承される。
    * 親クラスのメソッドを呼ぶ場合、`super.methodName()`で呼び出し可能。
    * `オブジェクト instance_of クラス名`で、そのオブジェクトが指定したクラスを継承しているかどうか判断可能。

## 2019-04-28

* JavaScriptのES Modulesのexport/importについて学習した。
  * どのようなimport/exportの手法が取れるのかを学ぶため。
    * 使ったのか以下の2箇所。
      * https://jsprimer.net/use-case/module/
      * https://stackoverflow.com/questions/32558514/javascript-es6-export-const-vs-export-let
  * 宣言した変数は基本的にRead-Onlyになることは知らなかった。
    * が、同時にその変数を操作する関数をimportしていれば、その関数経由で変更はできる。
  * CSSのモジュール化についても存在だけはしっているので、細かい仕組みも学んでいきたい。

## 2019-05-02

* TypeScriptの学習を、React, Reduxを通して行った・
  + 使ったのは、TypeScriptの[ReactTutorial](https://github.com/Microsoft/TypeScript-React-Starter)。
  + JavaScriptのES&、React, Reduxの理解を先に行っていたおかげで、interfaceやtype, Type Assertionなどといった基本的な使い方を効率的に知ることができた。
  + が、TypeScriptに関しては型定義ファイルなどといった部分については紹介されていなかったので、別途学習する必要がありそう。

## 2019-05-03

* Object直下のthisの動きについて再確認した。
  + トップレベルスコープでのobjectを生成した場合、そのobject直下でthisキーワードを使用すると、thisを参照しようとしてトップレベルスコープまでスコープチェーンを参照しにいってしまうため、strict modeの場合、thisはundefinedとなる。
  + なので、Arrow Function内でthisを使用するメソッドを定義すると、そのthisは意図していないthisになる。


## 2019-05-04
  * りあクト！を48pまで読み進める
    + JavaScriptは大体飲み込めたハズ。
