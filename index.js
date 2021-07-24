exports.getTokenDetails = (req, res) => {
  const tokenInfo = JSON.parse(Buffer.from(req.headers['x-apigateway-api-userinfo'], 'base64').toString());
  var userDetails = {
	userId: tokenInfo.user_id,
	email: tokenInfo.email
  }
  res.status(200).send(userDetails);
};
