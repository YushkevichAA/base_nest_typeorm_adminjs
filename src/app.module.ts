/* eslint-disable @typescript-eslint/no-floating-promises */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { User } from './user/entities/user.entity';
// import { Database, Resource } from '@adminjs/typeorm';

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
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            rootPath: '/admin',
            resources: [
              {
                resource: User,
                options: {
                  id: 'users',
                  properties: {
                    id: {
                      isVisible: {
                        edit: false,
                        show: true,
                        list: true,
                        filter: false,
                      },
                    },
                  },
                },
              },
            ],
          },
        }),
      }),
    ),
    DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
