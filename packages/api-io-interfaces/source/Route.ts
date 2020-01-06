export interface Route {
  path: string
  method: 'GET' | 'POST'
  body: object
  response: object
}
