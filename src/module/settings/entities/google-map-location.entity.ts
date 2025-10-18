import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Location } from './location.entity';

@InputType('GoogleMapLocationInput', { isAbstract: true })
@ObjectType()
export class GoogleMapLocation extends Location {
  @Field({ nullable: true }) street_number?: string;
  @Field({ nullable: true }) route?: string;
}
