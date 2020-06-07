import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger';
import { Video } from './video.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Episode {
  @prop()
  name: string;

  @prop()
  index: string;

  @prop()
  file: string;

  @prop({ ref: 'video' })
  video: Ref<Video>
}