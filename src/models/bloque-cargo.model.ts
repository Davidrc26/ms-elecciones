import {Entity, model, property} from '@loopback/repository';

@model()
export class BloqueCargo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  bloqueId?: number;

  @property({
    type: 'number',
  })
  cargoId?: number;

  constructor(data?: Partial<BloqueCargo>) {
    super(data);
  }
}

export interface BloqueCargoRelations {
  // describe navigational properties here
}

export type BloqueCargoWithRelations = BloqueCargo & BloqueCargoRelations;
