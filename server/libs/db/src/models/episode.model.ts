import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger';
import { Video } from './video.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Episode {
  // @ApiProperty({ description: '分集名称', example: 'name' })
  // @prop()
  // name: string;

  @ApiProperty({ description: '分集序号', example: 'index' })
  @prop()
  index: string;

  @ApiProperty({ description: '分集视频源', example: 'm3u' })
  @prop()
  file: string;

  @ApiProperty({ description: '分集所属', example: 'of' })
  @prop({ ref: 'Video' })
  video: Ref<Video>
}