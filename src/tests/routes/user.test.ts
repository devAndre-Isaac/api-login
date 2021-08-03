import test from 'ava';
import sinon from 'sinon';
import * as controllers from '../../controllers/user';

test('POST /api/company', async t => {
    sinon.stub(controllers, 'create').resolves({
        msg: 'controllers.create',
    } as any);

    const body = {
        name: 'a',
        email: 'a',
        company: '12412411111111',
        password: '1243124',
    };
    const res = await request()
        .post('/users/createUser')
        .send(body)
    const expected = {
        msg: 'controllers.create',
    };
    t.is(res.status, 201);
    t.deepEqual(res.body, expected);
});