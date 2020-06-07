import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from '@app/common';

@Module({
  imports: [
    CommonModule,
    MulterModule.register({
      dest: 'uploads'
    }),
    UsersModule, VideosModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
