import { PartialType } from '@nestjs/mapped-types';
import { CreateDelMeDto } from './create-del-me.dto';

export class UpdateDelMeDto extends PartialType(CreateDelMeDto) {}
