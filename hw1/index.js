
const util = (f, props) => {

    let promise = Promise.resolve();
    let queueLimit = (props.queueLimit || -2) + 1;

    return (...args) => {
        if (queueLimit) {
            --queueLimit;
            promise = new Promise((resolve) =>
                        promise.then(() => {
                            if (props?.delaySinceCompletion) {
                                f(...args);
                                setTimeout(resolve, props?.delay || 1000);
                            } else {
                                setTimeout(resolve, props?.delay || 1000);
                                if (props?.waitForPrevious) {
                                    f(...args);
                                } else {
                                    new Promise(() => f(...args));
                                }
                            }
                            ++queueLimit;
                        }));
        }
    };
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }

const f = (str) => {
    
    sleep(5000);
    console.log("I show ", str, "!");
}

const newF = util(f, { delay: 1000, delaySinceCompletion: true, queueLimit: 10, waitForPrevious: false });

newF("H");
newF("E");
newF("L");
newF("L");
newF("O");
newF("!");

setTimeout(() => {
    newF("H");
    newF("E");
    newF("L");
    newF("L");
    newF("O");
    newF("!");
}, 5000);
