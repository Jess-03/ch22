function saludoConRecursion( b ) {
    if (b < 1) return 1;
    return saludoConRecursion(b - 1);
}

console.log("Saludo " + saludoConRecursion(4));

