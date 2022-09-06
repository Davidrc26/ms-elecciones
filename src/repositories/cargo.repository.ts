import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Cargo, CargoRelations, Eleccion} from '../models';
import {EleccionRepository} from './eleccion.repository';

export class CargoRepository extends DefaultCrudRepository<
  Cargo,
  typeof Cargo.prototype.id,
  CargoRelations
> {

  public readonly eleccion: BelongsToAccessor<Eleccion, typeof Cargo.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('EleccionRepository') protected eleccionRepositoryGetter: Getter<EleccionRepository>,
  ) {
    super(Cargo, dataSource);
    this.eleccion = this.createBelongsToAccessorFor('eleccion', eleccionRepositoryGetter,);
    this.registerInclusionResolver('eleccion', this.eleccion.inclusionResolver);
  }
}
