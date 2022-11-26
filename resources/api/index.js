const jsonData=require('./users.json');
exports.handler = async (event) => {

  return {
    statusCode: 200,
    headers:{ 'Content-Type': 'text/plain;charset=utf-8'},
    body: 'Hello World'+JSON.stringify(jsonData)+JSON.stringify(event.body),
  };
};

