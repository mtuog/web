function solveQuadraticEquation() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const discriminant = b * b - 4 * a * c;
    let result = "";

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        result = `Phương trình có một nghiệm kép: x = ${x}`;
    } else {
        result = "Phương trình vô nghiệm.";
    }

    document.getElementById("result").textContent = result;
}

document.getElementById("solveButton").addEventListener("click", solveQuadraticEquation);
