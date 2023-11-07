import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './App/Data/app.module';
import * as session from 'express-session';


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);


  app.setBaseViewsDir(join(__dirname, '..', 'views'));


  // Set the view engine to EJS
  app.setViewEngine('ejs');

  // Serve static assets (e.g., CSS, JavaScript, images) from the 'static' folder
  app.useStaticAssets(join(__dirname, '..', 'static'));



  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true,
      cookie: {

        secure: false,

        maxAge: 1000 * 60 * 60 * 24 }, // 1 day


    })
  );
  await app.listen(3000);
}
bootstrap();
