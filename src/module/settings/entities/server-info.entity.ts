import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ServerInfoInputType', { isAbstract: true })
@ObjectType()
export class ServerInfo {
  @Field({ nullable: true }) memory_limit?: string;
  @Field({ nullable: true }) post_max_size?: number;
  @Field({ nullable: true }) max_input_time?: string;
  @Field({ nullable: true }) max_execution_time?: string;
  @Field({ nullable: true }) upload_max_filesize?: number;
}
