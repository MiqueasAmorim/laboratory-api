export class HTTPError extends Error {
    constructor(private HTTPErrorCode: number, message: string) {
        super(message);
    }
}