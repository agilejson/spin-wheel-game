/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-reserved-component-names */
import { createApp } from 'vue';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import PouchDBFind from 'pouchdb-find';
import PouchDB from 'pouchdb-browser';

import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import Divider from 'primevue/divider';
import Tooltip from 'primevue/tooltip';
import Sidebar from 'primevue/sidebar';
import ScrollPanel from 'primevue/scrollpanel';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Slider from 'primevue/slider';
import Dialog from 'primevue/dialog';
import DynamicDialog from 'primevue/dynamicdialog';
import DialogService from 'primevue/dialogservice';

//theme
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.scss';
import '@/assets/app.scss';

import SpinWheel from '@/components/SpinWheel.vue';
import ItemInputGroup from '@/components/sidebar-panel/ItemInputGroup.vue';
import SidebarPanel from '@/components/sidebar-panel/SidebarPanel.vue';
import CongratulationDialog from '@/components/CongratulationDialog.vue';
import Footer from '@/components/Footer.vue';
import { ItemService } from '@/services/ItemService';
import { SidebarService } from '@/services/SidebarService';
import { SettingService } from '@/services/SettingService';

const app = createApp(App);
app.use(PrimeVue);
app.use(ConfirmationService);

// PouchDB
// https://pouchdb.com/guides/databases.html
PouchDB.plugin(PouchDBFind);

const itemService = new ItemService();
await itemService.init();
app.provide('ItemService', itemService);

const settingService = new SettingService();
await settingService.init();
app.provide('SettingService', settingService);

const sidebarService = new SidebarService();
app.provide('SidebarService', sidebarService);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('ConfirmPopup', ConfirmPopup);
app.component('Dropdown', Dropdown);
app.component('Divider', Divider);
app.component('Sidebar', Sidebar);
app.component('ScrollPanel', ScrollPanel);
app.directive('tooltip', Tooltip);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Slider', Slider);
app.component('Dialog', Dialog);
app.component('DynamicDialog', DynamicDialog);
app.use(DialogService);

app.component('SpinWheel', SpinWheel);
app.component('ItemInputGroup', ItemInputGroup);
app.component('SidebarPanel', SidebarPanel);
app.component('CongratulationDialog', CongratulationDialog);
app.component('Footer', Footer);

app.mount('#app');
