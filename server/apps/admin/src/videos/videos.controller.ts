import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Video } from '@libs/db/models/video.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Video,
})
@Controller('videos')
@ApiTags('视频')
export class VideosController {
  constructor(
    @InjectModel(Video) private readonly model: ReturnModelType<typeof Video>,
  ) {}
}
