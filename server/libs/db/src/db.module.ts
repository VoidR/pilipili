import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Video } from './models/video.model';
import { Episode } from './models/episode.model';

const models = TypegooseModule.forFeature([User,Video,Episode]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        };
      },
    }),
    // TypegooseModule.forRoot(
    //   'mongodb://root:123456@localhost/pilipili?authSource=admin',
    //   {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //   },
    // ),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
