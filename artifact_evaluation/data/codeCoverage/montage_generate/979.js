function f0(x) {
    switch (x) {
    case 'aaa':
        return 1;
    case 'aab':
        return 2;
    case 'aac':
        return 3;
    case 'aba':
        return 10;
    case 'abb':
        return 20;
    case 'abc':
        return 30;
    case 'baaa':
        return 4;
    case 'baab':
        return 5;
    case 'baac':
        return 6;
    case 'bbaa':
        return 40;
    case 'bbab':
        return 50;
    case 'bbac':
        return 60;
    case 'bbba':
        return 400;
    case 'bbbb':
        return 500;
    case 'bbbc':
        return 600;
    case 'caaaa':
        return 7;
    case 'caaab':
        return 8;
    case 'caaac':
        return 9;
    case 'cbaaa':
        return 70;
    case 'cbaab':
        return 80;
    case 'cbaac':
        return 90;
    case 'cbbaa':
        return 700;
    case 'cbbab':
        return 800;
    case 'cbbac':
        return 900;
    case 'cbbba':
        return 7000;
    case 'cbbbb':
        return 8000;
    case 'cbbbc':
        return 9000;
    case 'dbbba':
        return 70000;
    case 'dbbbb':
        return 80000;
    case 'dbbbc':
        return 90000;
    case 'ebaaa':
        return 400000;
    case 'ebaab':
        return 500000;
    case 'ebaac':
        return 600000;
    default:
        return 10;
    }
}
function f1(pre, post) {
    return {
        b: v19(''.replace[arguments]),
        v14: this.f2
    };
}
var v0 = [
    'aaa',
    'aab',
    'aac',
    'baaa',
    'baab',
    'baac',
    'caaaa',
    'caaab',
    'caaac',
    'aad',
    'baad',
    'caaad',
    'd',
    'daa'
];
var v1 = 0;
for (var v2 = 0; v2 < 1000000; ++v2)
    v1 += f0(v0[v2 % v0.length]);
if (v1 != 6785696)
    throw 'Bad result: ' + v1;
