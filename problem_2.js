var first = 0;
var second = 1;
var temp = 0;
var sum = 0;
var max = 4000000;

while (second < max) {
    temp = first + second;
    if (temp % 2 === 0) {
        sum += temp;
    }
    first = second;
    second = temp;    
}
console.log(sum);
