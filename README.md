# stentor-starter-template

A starter template for 📣 stentor.

## Getting Started

1. Create a new repository using this one as a template by clicking [here](https://github.com/stentorium/stentor-starter-template/generate).
2. Once cloned locally, run `$ yarn install`
3. Create a `.env` file at root.
   - This should not be checked in to source code management.
4. Add the following to your `.env` file:
   - OVAI_TOKEN - Credentials to access handlers
   - OVAI_APP_ID - Your APP_ID
   - AWS_REGION - Typically us-east-1
   - ALEXA_APPLICATION_ID - Required for Alexa request verification
5. To develop locally, run `$ yarn start`

### Sample .env file

```
AWS_REGION=us-east-1
OVAI_TOKEN=baz
OVAI_APP_ID=bar
ALEXA_APPLICATION_ID=foo
OVAI_LOG_LEVEL=debug
```
