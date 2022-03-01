
const util = (f, props) => {

    let promise = Promise.resolve();
    let queueLimit = (props.queueLimit || -2) + 1;

    return async (...args) => {
        let res;
        if (queueLimit) {
            --queueLimit;
            promise = new Promise((resolve) =>
                        promise.then(() => {
                            if (props?.delaySinceCompletion) {
                                res = f(...args);
                                setTimeout(resolve, props?.delay || 1000);
                            } else {
                                setTimeout(resolve, props?.delay || 1000);
                                if (props?.waitForPrevious) {
                                    res = f(...args);
                                } else {
                                    console.log("hea");
                                    new Promise(() => res = f(...args));
                                    console.log("Ok");
                                }
                            }
                            ++queueLimit;
                        }));
        }
        await promise;
        return res;
    };
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }

const f = (str, index) => {
    console.log("I show ", str, "!");
    sleep(5000);

    return index;
}

const newF = util(f, { delay: 200, delaySinceCompletion: false, queueLimit: 10, waitForPrevious: false });


const asF =  () => {
    newF("H", 1);
    newF("E", 2);
    newF("L", 3);
};
asF();

newF("L", 4);
newF("O", 5);
newF("!", 6);

setTimeout(() => {
    newF("H", 7);
    newF("E", 8);
    newF("L", 9);
    newF("L", 10);
    newF("O", 11);
    newF("!", 12);
}, 5000);
