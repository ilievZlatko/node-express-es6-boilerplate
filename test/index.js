/* eslint-disable */
import http from 'http';
import assert from 'assert';

import '../src/app';

describe('Example Node server', () => {
	it('should return 200', done => {
		http.get('http://127.0.0.1:5000', res => {
			assert.equal(200, res.statusCode);
			done();
		});
	});
});
