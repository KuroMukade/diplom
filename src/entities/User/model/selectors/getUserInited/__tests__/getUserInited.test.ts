import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from '../getUserInited';

describe('getUserInited.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
        authData: {},
      },
    };
    expect(getUserInited(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserInited(state as StateSchema)).toEqual(undefined);
  });
});
