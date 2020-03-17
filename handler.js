const got = require("got");
const {
  CIRCLE_CI_TOKEN,
  DEFAULT_BRANCH,
  VCS,
  REPO_OWNER,
  REPO_NAME
} = process.env;

module.exports.trigger = async () => {
  const body = JSON.stringify({ branch: DEFAULT_BRANCH });

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
