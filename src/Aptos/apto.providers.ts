import { DataSource } from 'typeorm';
import { Apto } from './apto.entity';

export const aptoProviders = [
  {
    provide: 'APTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Apto),
    inject: ['DATA_SOURCE'],
  },
];