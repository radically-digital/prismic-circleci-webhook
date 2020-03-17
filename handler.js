const got = require("got");
const {
  CIRCLE_CI_TOKEN,
  DEFAULT_BRANCH,
  VCS,
  REPO_OWNER,
  REPO_NAME,
  RANDOM_SECRET
} = process.env;

module.exports.trigger = async event => {
  const { branch } = JSON.parse(event.params);
  const { secret } = JSON.parse(event.body);
  const body = JSON.stringify({ branch: branch || DEFAULT_BRANCH });

  if (`${secret}` !== `${RANDOM_SECRET}`) {
    return { statusCode: 401, body: "I need the secret" };
  }

  try {
    const response = await got.post(
      `https://circleci.com/api/v1.1/project/${VCS}/${REPO_OWNER}/${REPO_NAME}/build?circle-token=${CIRCLE_CI_TOKEN}`,
      { body, headers: { "Content-Type": "application/json" } }
    );

    return {
      body: JSON.stringify(response.body),
      statusCode: response.status
    };
  } catch (error) {
    return {
      body: JSON.stringify(error.response.body),
      statusCode: error.response.status
    };
  }
};
