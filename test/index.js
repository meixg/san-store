
import './store.spec';
import './connect.san.spec';
import './connect.createConnector.spec';


import {store, Store, connect} from 'san-store';

describe('main', () => {
    it('store is a Store instance', () => {
        expect(store instanceof Store).toBeTruthy();
    });

    it('has san connect method', () => {
        expect(typeof connect.san).toBe('function');
    });
});


