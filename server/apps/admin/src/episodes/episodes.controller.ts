import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Episode } from '@libs/db/models/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Video } from '@libs/db/models/video.model';

@Crud({
  model: Episode,
})
@Controller('episodes')
@ApiTags('分集')
export class EpisodesController {
  constructor(
    @InjectModel(Episode)
    private readonly model: ReturnModelType<typeof Episode>,
    @InjectModel(Video)
    private readonly VideoModel: ReturnModelType<typeof Video>,
  ) {}

  @Get('option')
  async option() {
    const videos = (await this.VideoModel.find()).map(v => ({
      label: v.name,
      value: v._id,
    }));
    return {
      title: '分集管理',
      translate: false,
      column: [
        {
          prop: 'video',
          label: '所属',
          type: 'select',
          dicData: videos,
        },
        { prop: 'index', label: '集号', span: 6 },
        {
          prop: 'file',
          label: '视频源',
          span: 16,
          width: '120px',
          row: true,
        },
      ],
    };
  }
}
