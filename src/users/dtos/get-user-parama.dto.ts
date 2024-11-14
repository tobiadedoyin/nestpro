import { Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class GetUserDto {
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isActive: boolean;
}
