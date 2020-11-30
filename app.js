var items = [
  {
    name: "鉛筆",
    price: 300,
    quantity: 0,
  },
  {
    name: "ノート",
    price: 400,
    quantity: 0,
  },
  {
    name: "消しゴム",
    price: 500,
    quantity: 0,
  },
];

var arr = ["い", "ろ", "は"];

console.assert(typeof Vue !== "undefined");
var vm = new Vue({
  el: "#app",
  data: {
    items: items,
    arr: arr,
  },
  filters: {
    //フィルタを追加
    numberWithDelimiter: function (value) {
      if (!value) {
        return "0";
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    },
  },
  methods: {
    doBuy: function () {
      //本来はここで、サーバと通信を行う
      alert(this.totalPriceWithTax + "円のお買い上げ！");
      this.items.forEach(function (item) {
        item.quantity = 0;
      });
    },
  },
  computed: {
    totalPrice: function () {
      //this経由でインスタンス内のデータにアクセス
      return this.items.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
      }, 0);
    },
    totalPriceWithTax: function () {
      //算出プロパティに依存した算出プロパティも定義できる
      return Math.floor(this.totalPrice * 1.08);
    },
    canBuy: function () {
      return this.totalPrice >= 1000; //1000円以上から購入可能にする
    },
    errorMessageStyle: function () {
      //canBuyがfalseの時赤く表示する
      return {
        border: this.canBuy ? "" : "1px solid red",
        color: this.canBuy ? "" : "red",
      };
    },
  },
});

window.vm = vm;
