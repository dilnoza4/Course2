const obj = {};

function manipulateObject() {
    const propName = document.getElementById('propertyName').value;
    const propValue = document.getElementById('propertyValue').value;
    obj[propName] = propValue;
    document.getElementById('result').innerText = `Updated Object: ${JSON.stringify(obj)}`;
}

function removeProperty() {
    const propName = document.getElementById('propertyName').value;
    delete obj[propName];
    document.getElementById('result').innerText = `Updated Object: ${JSON.stringify(obj)}`;
}
