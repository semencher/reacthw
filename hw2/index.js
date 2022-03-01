
const dynObj = (obj) => {
    return new Proxy(obj, {
        get(obj, prop) {
            if (prop in obj) {
                return obj[prop];
            } else {
                obj[prop] = dynObj({});
                return obj[prop];
            }
        }

    });
}


const newObj = dynObj({a: 10});

newObj.b.c.d;

console.log(JSON.stringify(newObj));