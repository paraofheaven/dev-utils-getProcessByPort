// yarn test "getProcessByPort.test.js"

const getProcessByPort =require('../lib/getProcessByPort');

test('getProcessByPort.test.js', ()=>{
  expect(getProcessByPort.getProcessIdOnPort('3000').toBe('59929'));
});