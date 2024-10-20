function throttle(func, delay) {
    let lastTime = 0;

    return function(...args) {
        const now = new Date().getTime();

        if (now - lastTime >= delay) {
            func.apply(this, args);
            lastTime = now;
        }
    };
}

const log = () => console.log('Throttled Function called!');
const throttledLog = throttle(log, 2000);


setInterval(throttledLog, 500);
