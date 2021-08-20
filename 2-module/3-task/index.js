let calculator = {
 
  read(a, b) {
    this.a_value = a;
    this.b_value = b;
  },

  sum () {
    return this.a_value + this.b_value;
  },

  mul() {
    return this.a_value * this.b_value;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
