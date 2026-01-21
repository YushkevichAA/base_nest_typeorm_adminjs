/* eslint-disable @typescript-eslint/no-floating-promises */
import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user.module';
import { DatabaseModule } from '../database/database.module';
import { AdminModule } from '../admin/admin.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// import('adminjs').then(({ AdminJS }) =>
//   AdminJS.registerAdapter({
//     Resource,
//     Database,
//   }),
// );

// AdminJS.registerAdapter({
//   Resource,
//   Database,
// });

// const DEFAULT_ADMIN = {
//   email: 'admin@example.com',
//   password: 'password',
// };

// const authenticate = async (email: string, password: string) => {
//   if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
//     return Promise.resolve(DEFAULT_ADMIN);
//   }
//   return null;
// };

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveRoot: '/static',
    }),
    AdminModule,
    DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
