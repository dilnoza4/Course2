function deepClone() {
    const input = document.getElementById('objectInput').value;
    let obj;
    try {
        obj = JSON.parse(input);
    } catch (error) {
        document.getElementById('result').innerText = "Invalid JSON input.";
        return;
    }
    const clonedObj = JSON.parse(JSON.stringify(obj));

    document.getElementById('result').innerText = `Cloned Object: ${JSON.stringify(clonedObj)}`;
}
