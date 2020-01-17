// Loads the environment variables from a .env file at root
require("dotenv").config();

// Assistant
import { Assistant } from "stentor";
// Channels
import { Alexa } from "@xapp/stentor-alexa";
import { Dialogflow } from "@xapp/stentor-dialogflow";
// Services
import { DynamoUserStorageService } from "@xapp/stentor-service-user-storage";
// Custom Handlers
import { CustomHandler } from "./CustomHandler";

// Return the handler for running in an AWS Lambda function.
export const handler = new Assistant()
    .withUserStorage(
        new DynamoUserStorageService({
            appId: process.env.OVAI_APP_ID,
            tableName: "stentor-user-prod"
        })
    )
    .withHandlers({
        CustomHandler
    })
    .withChannels([Alexa(), Dialogflow()])
    .lambda();



