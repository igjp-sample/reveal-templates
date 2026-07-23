# Reveal BI Application Templates

This repository contains templates for creating Reveal BI application projects using different project styles. You can use these templates to quickly set up a new Reveal BI application with your preferred technology stack.

## Create a new Reveal BI application project

| Project Style                      | Command                                                 |
| ---------------------------------- | ------------------------------------------------------- |
| Node.js Server + Vanilla JS Client | `npx degit igjp-sample/reveal-templates/nodejs/vanilla` |

Once you have completed the previous steps, you can restore packages and run the project by executing the following commands.

```bash
npm ci
npm run dev
```

## Build and deploy

Running the following command generates the contents for deployment in the `./dist` folder.

```bash
npm run build
```

You can run the application from the generated `./dist` folder by executing `npm start` in it. A `web.config` file is also placed in the `./dist` folder so that the application can be deployed to Azure Web Apps.

## Troubleshooting

### `RevealEnginePrg.exe ENOENT` error when running the app

If you see an error like the following when starting the application:

```
Error: spawn ...\node_modules\reveal-sdk-node\lib\..\native\win-x64\RevealEnginePrg.exe ENOENT
```

it means the native engine binary required by `reveal-sdk-node` has not been downloaded.

This typically happens when npm install scripts are disabled in your environment
(for example, when `ignore-scripts=true` is set in your `.npmrc`). Because the
install script is skipped, the `reveal-sdk-node` package cannot download its
native binary, and the application fails to start.

To fix this, run the following command, which downloads the native binary by
running the package's install script for that single package only:

```bash
npm run rebuild:native
```

After it completes, start the app again with `npm run dev`.

## Deploy to Azure App Service

### Configurations

Set your Reveal license key in the `REVEAL_LICENSE_KEY` environment variable.

> [!NOTE]
> The Node.js version requires a 64-bit environment, so the free plan (F1) of Azure App Service Plans cannot be used.

### Node.js + Vanilla

1. Run `npm run build` to generate the deployment contents in the `./dist` folder.
2. Compress the files inside `./dist` into a `.zip` file. Make sure `server.js` and the other files and folders sit at the root of the `.zip` (no extra subfolder).
3. In the Azure App Service portal, open "Deployment Center", choose "Publish files" from "Source", select the `.zip` in the file input that appears, and click "Save". The `.zip` is uploaded, extracted, and the app starts running.

## Licensing

This repository is licensed under the [Unlicense](LICENSE).