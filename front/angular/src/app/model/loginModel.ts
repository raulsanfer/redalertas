export class LoginModel {
    constructor(
      public username: string = '',
      public password: string = ''
    ) {}
  }

  export class Resultado<T> {
    constructor(
      public error: boolean = false,
      public mensaje: string = '',
      public data: T[] = []
    ) {}
  }