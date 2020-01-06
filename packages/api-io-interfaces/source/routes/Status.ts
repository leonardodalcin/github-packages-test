import { Route } from '../Route'

export interface Status extends Route {
  path: 'api/v2/account/status'
  method: 'GET'
  body: {}
  response: {}
}
