import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store = createPinia();

store.use(piniaPluginPersistedstate);

export default store;

export * from './modules/auth';
export * from './modules/chat';
export * from './modules/design';
export * from './modules/files';
export * from './modules/keepAlive';
export * from './modules/loginForm';
export * from './modules/model';
export * from './modules/session';
export * from './modules/user';
