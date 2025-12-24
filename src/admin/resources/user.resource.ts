/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { User } from 'src/user/entities/user.entity';
import MyCustomAction from '../components/my-custom-actions';

const usersNavigation = {
  name: 'Пользователи',
  icon: 'User',
};

export const createUserResource = () => ({
  resource: User,
  options: {
    listProperties: ['id', 'name', 'email', 'createdAt'],
    filterProperties: ['id', 'name', 'createdAt'],
    editProperties: ['name', 'email', 'createdAt'],
    showProperties: ['id', 'name', 'email', 'createdAt'],
    sort: {
      sortBy: 'updatedAt',
      direction: 'asc',
    },
    navigation: usersNavigation,
    actions: {
      myCustomAction: {
        actionType: 'record',
        component: MyCustomAction, // see "Writing your own Components"
        handler: (request, response, context) => {
          const { record, currentAdmin } = context;
          return {
            record: record.toJSON(currentAdmin),
            msg: 'Hello world',
          };
        },
        guard: 'do you realy want to do this',
      },
      edit: {
        isAccessible: () => {
          // const { record } = context;
          // alert(record);

          // позволяет редактировать свойство только если сущность создана текущим пользователем
          return 'someidadmin' === 'someidadmin';
        },
        isVisible: true,
      },
    },
  },
});
