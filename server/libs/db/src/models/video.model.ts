import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
  },
})
export class Video {
  @ApiProperty({ description: '视频名称', example: 'name' })
  @prop()
  name: string;

  @ApiProperty({ description: '视频源' })
  @prop()
  detail: string;

  @arrayProp({
    ref: 'Episode',
    localField: '_id',
    foreignField: 'video',
  })
  episodes: Ref<Episode>[];
}