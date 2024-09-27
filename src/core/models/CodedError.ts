export class CodedError extends Error {
  code: number

  constructor(code: number, name: string) {
    super(name)
    this.code = code
  }
}
