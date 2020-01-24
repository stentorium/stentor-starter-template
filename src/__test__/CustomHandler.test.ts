import { expect } from "chai";

import { CustomHandler } from "../CustomHandler";
import { Handler } from "stentor";

const props: Handler = {
    type: "CustomHandler",
    appId: "appId",
    organizationId: "organizationId",
    intentId: "intentId",
    content: {}
}

describe(`${CustomHandler.name}`, () => {
    describe(`#constructor()`, () => {
        it(`returns an instance of`, () => {
            expect(new CustomHandler(props)).to.be.an.instanceOf(CustomHandler);
        });
    });
});
