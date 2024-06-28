/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaskFlowWhereUniqueInput } from "./TaskFlowWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TaskFlowUpdateInput } from "./TaskFlowUpdateInput";

@ArgsType()
class UpdateTaskFlowArgs {
  @ApiProperty({
    required: true,
    type: () => TaskFlowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskFlowWhereUniqueInput)
  @Field(() => TaskFlowWhereUniqueInput, { nullable: false })
  where!: TaskFlowWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TaskFlowUpdateInput,
  })
  @ValidateNested()
  @Type(() => TaskFlowUpdateInput)
  @Field(() => TaskFlowUpdateInput, { nullable: false })
  data!: TaskFlowUpdateInput;
}

export { UpdateTaskFlowArgs as UpdateTaskFlowArgs };
