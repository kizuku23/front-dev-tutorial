const arry = [1,2,3,4,5,6];

for(let i in arry) {
    console.log(i, arry[i]);
}

for(let v of arry) {
    console.log(v);
}

for(let i in arry) {
    let v = arry[i];
    console.log(v);
}

// in 添字　of 値