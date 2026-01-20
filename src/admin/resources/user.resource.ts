/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { User } from 'src/user/entities/user.entity';
import { Components } from './../componentLoader';
import CustomAction from '../components/custom-action';

// гард для проверки является ли ресурс владельцем или админом
export const onlyForOwnerOrAdmit = (request, response, context) => {
  const { record, currentAdmin } = context;
  return currentAdmin.role === 'admin' || record.ownerId === currentAdmin.id;
};

// const testFeature = (admin, opts): any => {
//   console.log('✅ Этот фича-функция вызвана!');
//   return opts;
// };

// const bootLoggerFeature = async () => {
//   return await import('@adminjs/logger').then((data) => {
//     const loggerFeature = data.default;
//     console.log('запуск логгера');
//     loggerFeature({
//       componentLoader,
//       propertiesMapping: {
//         user: 'userId',
//       },
//       userIdAttribute: 'id',
//     });
//   });
// };

// const customBeefore = (request, context) => {
//   const { query = {} } = request;
//   const newQuery = {
//     ...query,
//     ['filters.name']: 'active',
//   };
//   request.query = newQuery;
//   return request;
// };

// const customAfter = (originalResponse, request, context) => {
//   console.log(originalResponse.meta);
//   return originalResponse;
// };

export const createUserResource = () => ({
  resource: User,
  options: {
    listProperties: ['id', 'name', 'email', 'createdAt'],
    filterProperties: ['id', 'name', 'createdAt'],
    editProperties: ['name', 'email', 'gender', 'randomPicture', 'description'],
    showProperties: [
      'id',
      'name',
      'email',
      'gender',
      'randomPicture',
      'createdAt',
    ],
    sort: {
      sortBy: 'updatedAt',
      direction: 'asc',
    },
    // may be as variable usersNavigation, this create menu sections
    navigation: {
      name: 'Пользователи',
      icon: 'User',
    },
    actions: {
      myCustomAction: {
        actionType: 'record',
        component: Components.MyCustomAction, // see "Writing your own Components"
        handler: (request, response, context) => {
          const { record, currentAdmin } = context;

          return {
            record: record.toJSON(currentAdmin),
            msg: 'Hello world',
          };
        },
      },
      customAction: CustomAction,
      // list: {
      //   // before: [customBeefore],
      //   after: [customAfter],
      // },
      // edit: {
      //   isAccessible: () => {
      //     // const { record } = context;
      //     // alert(record);
      //     // позволяет редактировать свойство только если сущность создана текущим пользователем
      //     return 'someidadmin' === 'someidadmin';
      //   },
      //   isVisible: true,
      // },
    },
    properties: {
      randomPicture: {
        type: 'string',
        components: {
          list: Components.MyCustomAction, // see "Writing your own Components"
          show: Components.MyCustomAction,
        },
      },
      // gender: {
      //   availableValues: [
      //     { value: 'male', label: 'Male' },
      //     { value: 'female', label: 'Female' },
      //     { value: 'other', label: 'Other' },
      //     { value: 'notSay', label: 'Rather not say' },
      //   ],
      // },
    },
  },
  features: [],
});
