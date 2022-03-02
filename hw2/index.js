
const dynObj = (obj) => {
    return new Proxy(obj, {
        get(obj, prop) {
            if (prop in obj || prop === "toJSON") {
                    return obj[prop];
            } else {
                obj[prop] = dynObj({});
                return obj[prop];
            }
        }

    });
}


const newObj = dynObj({a: 10});

newObj.b.c.d = 25;
newObj.b.c.l = 17;
newObj.b.n.k = 98;
newObj.b.n.f;


console.log(JSON.stringify(newObj));