class TestScoreWithConstructor {
  // コンストラクタ
  constructor(name = "", english = 0, math = 0, japanese = 0) {
    this.name = name;
    this.english = english;
    this.math = math;
    this.japanese = japanese;
  }
  calcsum() {
    let sum = this.english + this.math + this.japanese;
    return sum;
  }

  calcAve() {
    let sum = this.calcsum();
    let ave = sum / 3;
    return ave;
  }

  printScore() {
    let sum = this.calcsum();
    let ave = this.calcAve();
    console.log(this.name + "さんの合計：" + sum + "平均：" + ave);
  }
}