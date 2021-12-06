export enum AppRoute {
  Main = '/',
  Login = '/login',
  ProductId = '/product/:id',
  Favorites = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
