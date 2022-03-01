
const dynObj = (obj) => {
    return new Proxy(obj, {
        get(obj, prop) {
            if (prop in obj) {
                return obj[prop];
            } else {
                obj[prop] = 1;
            }
        }

    });
}


const newObj = dynObj({a: 10});

newObj.b;

console.log(JSON.stringify(newObj));