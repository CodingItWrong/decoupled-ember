import Application from 'decoupled-frontend/app';
import config from 'decoupled-frontend/config/environment';
import {setApplication} from '@ember/test-helpers';
import {start} from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
