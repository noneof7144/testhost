const jsonData=require('./users.json');
exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  const userid=event.body.userid;
  const passw=event.body.password;
  return {
    statusCode: 200,

    headers:{ 'Content-Type': 'text/plain;charset=utf-8'},
    body: JSON.stringify({message:'Account successfully created', user:
	    { user_id : userid, password: passw}
    }
    ),
  };
};

