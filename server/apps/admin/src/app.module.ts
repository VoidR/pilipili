import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [DbModule, UsersModule, VideosModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
