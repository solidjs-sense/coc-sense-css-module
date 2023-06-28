import {
  ExtensionContext,
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
  workspace,
  services,
  Buffer,
} from "coc.nvim";
import { resolve } from "path";

export async function activate(context: ExtensionContext) {
  const config = workspace.getConfiguration("sense-css-module");
  const isEnable = config.get<boolean>("enable", true);
  // extension is disable
  if (!isEnable) {
    return;
  }
  // The server is implemented in node
  let serverModule = resolve(context.extensionPath, "out", "server");

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  let serverOptions: ServerOptions = {
    run: {
      module: serverModule,
      transport: TransportKind.ipc,
    },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
    },
  };

  const globalStyleFiles = config.get<string[]>("global-style-files", []);

  // Options to control the language client
  let clientOptions: LanguageClientOptions = {
    documentSelector: [
      "javascriptreact",
      "javascript.jsx",
      "typescriptreact",
      "typescript.tsx",
      "css",
      "scss",
      "less",
    ],
    initializationOptions: {
      "global-style-files": globalStyleFiles,
    },
  };

  // Create the language client and start the client.
  let client = new LanguageClient(
    "sense-css-module",
    "sense-css-module language server",
    serverOptions,
    clientOptions
  );

  // Push the disposable to the context's subscriptions so that the
  // client can be deactivated on extension deactivation
  context.subscriptions.push(services.registLanguageClient(client));
}
