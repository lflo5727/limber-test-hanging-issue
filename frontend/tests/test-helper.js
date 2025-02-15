import { getSettledState, resetOnerror, setApplication } from '@ember/test-helpers';
import { getPendingWaiterState } from '@ember/test-waiters';
import * as QUnit from 'qunit';
import { setup as setupDom } from 'qunit-dom';
import { start } from 'ember-qunit';

import Application from 'limber/app';
import config from 'limber/config/environment';

setApplication(Application.create(config.APP));

Object.assign(window, { getSettledState, getPendingWaiterState });

setupDom(QUnit.assert);

QUnit.testDone(resetOnerror);

start();
