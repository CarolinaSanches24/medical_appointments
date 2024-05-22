import {Guard} from './guard';
import {HttpError} from './httpError';

export enum Types {
	'string',
	'number',
	'boolean',
	'json',
}

export class ValueObjectError extends HttpError {
	constructor(error: string) {
		super(422, error);
		this.name = 'ValueObjectError';
	}
}

export abstract class ValueObjectEval<Props> {
	public readonly guard: Guard;
	private readonly name: string;

	protected constructor(name: string) {
		this.name = name;
		this.guard = new Guard(this.name);
	}

	abstract evaluate(value: Props): ValueObject<Props>;
}

export class ValueObject<Props> {
	public readonly props: Props;

	get value(): Props {
		return this.props;
	}

	public to(outType: Types): string | number | boolean | object {
		switch (outType) {
			case Types.string:
				return String(this.props);
			case Types.number:
				return Number(this.props);
			case Types.boolean:
				return Boolean(this.props);
			case Types.json:
				if (typeof this.props !== 'string') throw new ValueObjectError('Invalid type');
				return JSON.parse(this.props);
			default:
				throw new ValueObjectError('Invalid type');
		}
	}

	protected constructor(props: Props) {
		this.props = props;
	}
}