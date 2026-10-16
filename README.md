# SPFx React Gantt Chart Sample

This sample demonstrates a Syncfusion React TreeGrid/Gantt component hosted inside a SharePoint Framework (SPFx) web part.

## Prerequisites

- Node.js (supported version for the project)
- SharePoint Online tenant access
- Microsoft 365 account
- Yeoman and SPFx development environment configured

## Installation

Install the required packages:

```bash
npm install
```

## Configure SharePoint Tenant URL

Update the `initialPage` property in `config/serve.json` with your SharePoint tenant URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/spfx-serve.schema.json",
  "port": 4321,
  "https": true,
  "initialPage": "https://<your-tenant>.sharepoint.com/_layouts/15/workbench.aspx"
}
```

## Trust Development Certificate

Trust the local development certificate:

```bash
heft trust-dev-cert
```

## Run the Application

Start the SPFx development server:

```bash
heft start
```

## Testing

1. Launch the SharePoint hosted workbench.
2. Add the sample web part to the page.
3. Verify the Gantt Chart component renders correctly.
4. Test virtualization, hierarchy expansion/collapse, and scrolling behavior.

## Sample Scenario

- React-based Syncfusion component
- SharePoint Framework (SPFx)
- Virtual scrolling enabled
- Hierarchical parent-child records
- Performance and rendering validation

## Troubleshooting

### Tenant Domain Warning

If you encounter the following warning:

```text
Placeholder {tenantdomain} was found in serve.json but OS variable SPFX_SERVE_TENANT_DOMAIN is not set.
```

Either:

- Update `serve.json` with the tenant URL directly, or
- Set the environment variable:

```bash
setx SPFX_SERVE_TENANT_DOMAIN "<your-tenant>.sharepoint.com"
```

### Development Certificate Issues

Re-trust the development certificate:

```bash
heft trust-dev-cert
```

## License

This sample is intended for testing and evaluation purposes.