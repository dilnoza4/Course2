let lastExecutionTime = 0;

function throttle(callback, limit) {
    return function() {
        const now = Date.now();
        if (now - lastExecutionTime >= limit) {
            lastExecutionTime = now;
            callback.apply(this, arguments);
        }
    };
}

document.getElementById('throttleButton').onclick = throttle(function() {
    document.getElementById('result').innerText += "Button Clicked! ";
}, 2000);
