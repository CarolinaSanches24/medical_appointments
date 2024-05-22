import { DrizzleError } from "drizzle-orm";

export class DuplicateEntryError extends DrizzleError {
    static readonly entityKind: string = 'DuplicateEntryError';

    constructor(message: string,  cause?: unknown) {
        super({ message,  cause });
    }
}

export class DatabaseWRONGValue extends DrizzleError{
    static readonly entityKind: string = 'DatabaseWRONGValue';

    constructor(message: string,  cause?: unknown) {
        super({ message,  cause });
    }
}