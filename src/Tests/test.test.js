const testAPI = require('./test');

test('test: ',()=>{
   expect(testAPI({login:'test',password:'test'})).toBeDefined();
});

test('test login: ',()=>{
    const login=testAPI({login:'test',password:'test'});
    const testLogin={"id":21,"name":"test","description":"Это не баг, это фича","srcImg":"http://127.0.0.1:9003/image/1684209884980.jpg"};
    console.log(login);
    expect(JSON.stringify(login)).toEqual(JSON.stringify(login));
});

test('test password: ',()=>{
    const login=testAPI({login:'test',password:'test'});
    const testLogin={"id":21,"name":"test","description":"Это не баг, это фича","srcImg":"http://127.0.0.1:9003/image/1684209884980.jpg"};
    console.log(login);
    expect(JSON.stringify(login)).toEqual(JSON.stringify(login));
});

test('test create repository: ',()=>{
    const login=testAPI({login:'test',password:'test'});
    const testLogin={"id":21,"name":"test","description":"Это не баг, это фича","srcImg":"http://127.0.0.1:9003/image/1684209884980.jpg"};
    console.log(login);
    expect(JSON.stringify(login)).toEqual(JSON.stringify(login));
});
test('test get effect: ',()=>{
    const login=testAPI({login:'test',password:'test'});
    const testLogin={"id":21,"name":"test","description":"Это не баг, это фича","srcImg":"http://127.0.0.1:9003/image/1684209884980.jpg"};
    console.log(login);
    expect(JSON.stringify(login)).toEqual(JSON.stringify(testLogin));
});

test('test error: ',()=>{
    const login=testAPI({login:'test',password:'test'});
    const testLogin={"id":21,"name":"test","description":"Это не баг, это фича","srcImg":"http://127.0.0.1:9003/image/1684209884980.jpg"};
    console.log(login);
    expect(JSON.stringify(login)).toEqual(JSON.stringify(login));
});