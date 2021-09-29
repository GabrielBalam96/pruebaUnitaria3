const httpFunction = require('./index');
const context = require('../pruebaunitaria/testing/Context');

test('Http trigger example', async () => {
    const request = {
        query: { name: 'gabrielbalam'}

    };
    await httpFunction(context,request);
    expect(context.res.body).toContain('example');
    expect(context.res.body).toEqual('Welcome, gabrielbalam');
    expect(context.log.mock.calls.length).toBe(1);
});
