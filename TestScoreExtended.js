class TestScoreExtended extends TestScoreWithConstructor {
  // コンストラクタ。
  constructor(name = "", english = 0, math = 0, japanese = 0, science = 0, social = 0) {
    // 親クラスのコンストラクタの呼び出し。
    super(name, english, math, japanese);
    // プロパティの定義、および初期データ格納。
    this.science = science;
    this.social = social;
  }

  // 5教科の合計を計算するメソッド
  calctotalscore() {
    // 3教科の合計を親クラスメソッドを使って計算
    let sum3 = this.calcsum();
    // 理科と社会の点を計算して合計を算出。
    let total = sum3 + this.science + this.social;
    return total;
  }

  // 5教科の平均点を計算するメソッド。
  calctotalAve() {
    // calctotalscore()の戻り値を５で割って平均点を算出。
    let ave = this.calctotalscore() / 5;
    return ave;
  }

  // 合計点と平均点を表示するメソッド。
  printScore() {
    // 親クラスのprintScore()メソッドの呼び出し。
    super.printScore();
    // このクラス内のメソッドを使って合計点と平均点を取得。
    let total = this.calctotalscore();
    let ave = this.calctotalAve();
    // 表示。
    console.log(this.name + "さんの５教科合計：" + total + "平均：" + ave);
  }
}

