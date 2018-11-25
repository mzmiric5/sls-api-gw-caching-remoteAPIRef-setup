const hello = (event, _, cb) => {
  const { name } = event.pathParameters;
  cb(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ message: `Hi there ${name}`});
  });
};

module.exports = hello;
