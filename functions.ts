function add(a: number, b: number) {
	return a + b;
}

function printRes(num: number): void {
	console.log('res: ' + num);
}

function addAndHandle(a: number, b: number, cb: (n: number) => void) {
	const res = a + b;
	cb(res);
}

printRes(add(10, 15));

let combineVal: (a: number, b: number) => number;

combineVal = add;

console.log(combineVal(5, 5));

addAndHandle(1, 2, (res) => {
	console.log(res);
});
