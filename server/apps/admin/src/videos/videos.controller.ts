import { Controller, Get } from '@nestjs/common';
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

  @Get("option")
  option(){
    return {
      title: '视频管理',
      column: [
        {
          prop: 'name',
          label: '视频名称',
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },
        { prop: 'detail', label: '视频详情', width: '650px', row: true },
        //{ prop: 'cover', label: '视频源', type: 'upload', width: 120, listType: 'picture-img', row: true, action: 'upload'},
      ],
    };
  }
}
