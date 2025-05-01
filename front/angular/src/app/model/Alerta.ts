  export class Alerta {
    constructor(
      public fecha: string,
      public titulo: string = '',
      public url: string = '',
      public descripcion: string = ''
    ) {}
  }