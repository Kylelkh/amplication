import { InputType } from '@nestjs/graphql';
import { BlockTypeWhereInput } from '../../block/dto';

@InputType({
  isAbstract: true,
  description: undefined
})
export class EntityPageWhereInput extends BlockTypeWhereInput {}
