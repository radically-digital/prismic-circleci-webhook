# Prismic Circleci Webhook

Triggers a build in circleci when the lambda receives a post request.

## To run

Post request to lambda API

`curl -X POST <lambda-api>/trigger?branch=<branch-other-than-master>`

## Setup

Create an AWS user with programmatic access, setup the environment variables.

## Environment Variables

Setup environment variables required for deployment, by copying and editing the example values.

```sh
cp example.env .env
```

**Serverless User**

If you already have programmatic access just export the AWS_PROFILE to your shell and deploy

```sh
export AWS_PROFILE=<one-of-your-configured-profiles>
```

Alternatively:

1. Sign Up for an AWS account or log in if you already have one.
1. In the AWS search bar, search for "IAM".
1. On the IAM page, click on "Users" on the sidebar, then the "Add user" button.
1. On the Add user page, give the user a name – something like "serverless-contact-form-user" is appropriate. Check "Programmatic access" under Access type then click next.
1. On the permissions screen, click on the "Attach existing policies directly" tab, search for "AdministratorAccess" in the list, check it, and click next.
1. On the review screen you should see your user name, with "Programmatic access", and "AdministratorAccess", then create the user.
1. Locally run:
   ```sh
   npm run sls -- config credentials --provider aws --key <AWS_KEY> --secret <AWS_SECRET>
   ```

## Develop

Please use [nvm]

```sh
# Set node version
nvm use

# Install Dependencies
npm install
```

## Deploy

```sh
# Deploy
npm run deploy
```

<!-- MARKDOWN REFERENCES -->

[nvm]: https://github.com/nvm-sh/nvm
