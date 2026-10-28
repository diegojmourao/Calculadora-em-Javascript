function calculadora(op, a, b){
    switch(op){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? "Divisão por zero!": a / b;
        default: return "Operação inválida!";
        break;
    }
}

console.log(calculadora('*', 77, 22));

