/**
 * CodedError is a subclass of Error that includes a code property.
 */
export class CodedError extends Error {
  /**
   * A code that can be used to identify the error type.
   * @type {number}
   */
  code: number

  /**
   * Creates a new CodedError.
   * @param {number} code The error code.
   * @param {string} name The error name.
   */
  constructor(code: number, name: string) {
    super(name)
    this.code = code
  }
}
