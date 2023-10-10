document.getElementById("countButton").addEventListener("click", function() {
    const textA = document.getElementById("textA").value;
    const textB = document.getElementById("textB").value;

    if (!textA || !textB) {
        alert("Vui lòng nhập đoạn văn và dòng cần đếm.");
        return;
    }

    const regex = new RegExp(textB, "g");
    const count = (textA.match(regex) || []).length;

    document.getElementById("result").textContent = `Số lần xuất hiện của '${textB}' trong '${textA}': ${count}`;

});
