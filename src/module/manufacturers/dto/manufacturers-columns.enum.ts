import { registerEnumType } from '@nestjs/graphql';

export enum QueryManufacturersOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryManufacturersOrderByColumn, {
  name: 'QueryManufacturersOrderByColumn',
});

export enum QueryManufacturersHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryManufacturersHasTypeColumn, {
  name: 'QueryManufacturersHasTypeColumn',
});