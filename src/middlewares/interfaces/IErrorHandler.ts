export interface Error {
  statusCode: number,
  message: string,
}

export default interface ErrorHandler extends Error {
  isJoi: boolean,
  details: { message: string, type: string }[],
}
