class Calculator {
  private total: number;

  constructor(value : number) {
    this.total = value;
  }
    
  add(value : number) : Calculator {
    this.total += value;
    return this;
  }
    
  subtract(value : number) : Calculator {
    this.total -= value;
    return this;
  }
    
  multiply(value : number) : Calculator {
    this.total *= value;
    return this;
  }

  divide(value : number) : Calculator {
    if (value == 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.total /= value;
    return this;
  }
    
  power(value : number) : Calculator {
    this.total **= value;
    return this;
  }

  getResult() : number {
    return this.total;
  }
}