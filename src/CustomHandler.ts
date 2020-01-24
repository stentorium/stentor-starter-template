import { AbstractHandler, Context, keyFromRequest, Request } from "stentor";

// 1. Rename to something that describes what the handler does like "SearchHandler"
export class CustomHandler extends AbstractHandler {

    // The start method is called at the beginning of a workflow.
    // It is called every time the request is for itself unless overridden
    // in the handleRequest method below
    public async start(request: Request, context: Context): Promise<void> {
        // Implement the start method.
        context.response.say('Hello world!');
    }
    // The handleRequest is called 
    public async handleRequest(request: Request, context: Context): Promise<void> {
        // 2. Write your custom logic
        const key = keyFromRequest(request);

        switch (key) {

            case 'HelpIntent':
                // Provide contextual help
                context.response.say('This is handler specific help that is returned.');
                // Exit from the flow
                return;
            default:
            // Let it fall through to the super
        }

        // 3. Let remaining requests fall through to the super
        //    It is not recommended to remove this
        return super.handleRequest(request, context);
    }

    public canHandleRequest(request: Request, context: Context): boolean {
        // 4. You may need to override this behavior, otherwise let it fall through to the super
        return super.canHandleRequest(request, context);
    }
}