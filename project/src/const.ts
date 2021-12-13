export enum AppRoute {
  Main = '/',
  Login = '/login',
  ProductId = '/product/:id',
  Favorites = '/favorites',
  Blog = '/blog',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Currencies {
  USD = 'USD',
  RUB = 'RUB',
  CNY = 'CNY',
}

export enum Languages {
  English = 'English',
  France = 'France',
  Germany = 'Germany',
}
