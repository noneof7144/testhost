const jsonData=require('./users.json');
exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  return {
    statusCode: 200,
    headers:{ 'Content-Type': 'text/plain;charset=utf-8'},
    body: 'Hello World'+JSON.stringify(jsonData)+JSON.stringify(event.body),
  };
};

