const got = require("got");
const {
  CIRCLE_CI_TOKEN,
  DEFAULT_BRANCH,
  VCS,
  REPO_OWNER,
  REPO_NAME
} = process.env;

module.exports.trigger = async event => {
  const { branch } = JSON.parse(event.params);
  const body = JSON.stringify({ branch: branch || DEFAULT_BRANCH });

  try {
    const response = await got.post(
      `https://circleci.com/api/v1.1/project/${VCS}/${REPO_OWNER}/${REPO_NAME}/build?circle-token=${CIRCLE_CI_TOKEN}`,
      { body, headers: { "Content-Type": "application/json" } }
    );
    return response.body;
  } catch (error) {
    return error.response.body;
  }
};
