import { registerEnumType } from '@nestjs/graphql';

export enum QueryMyReportsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryMyReportsOrderByColumn, {
  name: 'QueryMyReportsOrderByColumn',
});

export enum QueryMyReportsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryMyReportsHasTypeColumn, {
  name: 'QueryMyReportsHasTypeColumn',
});