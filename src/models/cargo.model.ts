import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Eleccion} from './eleccion.model';

@model()
export class Cargo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @belongsTo(() => Eleccion)
  eleccionId: number;

  constructor(data?: Partial<Cargo>) {
    super(data);
  }
}

export interface CargoRelations {
  // describe navigational properties here
}

export type CargoWithRelations = Cargo & CargoRelations;
