import { ObjectType, Field } from '@nestjs/graphql';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { Manufacturer } from '../entities/manufacturer.entity';

@ObjectType()
export class ManufacturerPaginator {
  @Field(() => [Manufacturer])
  data: Manufacturer[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}