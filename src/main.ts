import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { DocumentBuilder, SwagsgerModule } from '@nestjs/swagger';
async function bootstrap() {
  await import('adminjs').then(async ({ AdminJS }) => {
    const { Database, Resource } = await import('@adminjs/typeorm').then(
      ({ Database, Resource }) => ({ Database, Resource }),
    );
    AdminJS.registerAdapter({
      Resource,
      Database,
    });
  });

  const app = await NestFactory.create(AppModule);
  // const config = new DocumentBuilder()
  //   .setTitle('Cats example')
  //   .setDescription('The cats API description')
  //   .setVersion('1.0')
  //   .addTag('cats')
  //   .build();
  // const documentFactory = () => SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
