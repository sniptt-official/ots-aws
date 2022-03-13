class SecretError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class SecretNotFoundError extends SecretError {
  constructor() {
    super('Secret not found');
  }
}
