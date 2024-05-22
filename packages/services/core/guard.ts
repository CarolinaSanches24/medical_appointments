import {HttpError} from './httpError';

export class GuardError extends HttpError {
	constructor(error: string, body: object) {
		super(422, error, body);
		this.name = 'GuardError';
	}
}

export class Guard {
	private readonly argumentName: string;

	constructor(argumentName: string) {
		this.argumentName = argumentName;
	}

	public againstRegex(regex: RegExp, argument: string) {
		if (!regex.test(argument)) throw new GuardError(`${this.argumentName} is invalid`, {argument});
	}

	public againstAtLeast(numChars: number, argument: string) {
		if (argument.length < numChars) throw new GuardError(`${this.argumentName} must be at least ${numChars} characters`, {argument});
	}

	public againstAtMost(numChars: number, argument: string) {
		if (argument.length > numChars) throw new GuardError(`${this.argumentName} must be at most ${numChars} characters`, {argument});
	}

	public againstNullOrUndefined(argument: any) {
		if (argument === null || argument === undefined) throw new GuardError(`${this.argumentName} is null or undefined`, {argument});
	}

	public againstBadJson<T>(json: JSON) {
		for (const key in json) {
			if (json.hasOwnProperty(key) === false) throw new GuardError(`${this.argumentName} is not valid json`, {});
		}
	}

	public againstBadEnum(e: {[s: number]: string}, argument: any) {
		if (Object.keys(e).some((key) => e[key] === argument) === false) throw new GuardError(`${this.argumentName} is not a valid enum`, {argument});
	}
}