var v0 = this;
function f0(arr, v1) {
    v1 = v1 || {};
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return {};
    }
    arr.length++;
    var v2 = {
        next: function () {
            return {
                value: arr.shift(),
                done: arr.length <= 0
            };
        },
        'return': v1['return'],
        'throw': v1['throw']
    };
    var v3 = {};
    v3[Symbol.iterator] = function () {
        return v2;
    };
    return v3;
}
function f1() {
    var v4 = false;
    var v5 = v0.__createIterableObject([
        1,
        2,
        3
    ], {
        20: function () {
            v4 = true;
            return {};
        }
    });
    var [a, b] = v5;
    return v4;
}
if (!f1())
    throw new Error('Test failed');