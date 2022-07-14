let userInput: unknown;
let anyUserInput: any;
let userName: string;

userInput = 'input';

if (typeof userInput === 'string') {
	userName = userInput;
}

userName = anyUserInput;

function genErr(msg: string, code: number): never {
	throw { message: msg, errorCode: code };
}

genErr('Not found ', 404);
