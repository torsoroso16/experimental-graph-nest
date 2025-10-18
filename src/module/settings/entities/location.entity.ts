import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('LocationInput', { isAbstract: true })
@ObjectType()
export class Location {
  @Field({ nullable: true }) lat?: number;
  @Field({ nullable: true }) lng?: number;
  @Field({ nullable: true }) city?: string;
  @Field({ nullable: true }) state?: string;
  @Field({ nullable: true }) country?: string;
  @Field({ nullable: true }) zip?: string;
  @Field({ nullable: true }) street_address?: string;
  @Field({ nullable: true }) formattedAddress?: string;
}
