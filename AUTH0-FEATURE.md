## 1. Install auth0 dependencies

`@auth0/auth0-spa-js` The web SDK client
`nativescript-auth0` The mobile SDK client 

```
npm i @auth0/auth0-spa-js nativescript-auth0 --save
```

Now just make sure your {N} app also references the auth0 dependency from root of workspace, for example:

```
"nativescript-auth0": "file:../../node_modules/nativescript-auth0",
```

## 2. Add environment handling for auth0 client credentials

In `libs/core/environments/environment.ts`:

```
auth0: {
  domain: 'nativescriptnx.us.auth0.com',
  clientId: 'oEagDfjAVyXXrv35NO9GYmbFHqnDDLCh',
  redirectUri: 'authcallback',
  scope: 'openid profile email',
  responseType: 'token id_token',
},
```

## 3. Generate an xplat feature and setup to allow configurable providers

You can use Nx Console with following options:

<p align="center"><img src="https://raw.githubusercontent.com/NativeScripting/course-nx-xplat/master/nx-console-xplat-feature.png" width="300"></p>

Or you can execute from command line with the following:

```
nx generate @nstudio/angular:feature --name=auth --onlyModule --platforms=web,nativescript --skipFormat
```

### Allow the module to have configurable provider's via forRoot setup

We'll add a `forRoot` static method to allow our cross platform modules to configure the providers. This will also allow us to use a xplat utility `throwIfAlreadyLoaded` to ensure this module is never included more than once in any app in the workspace to ensure the provider's are only configured once per app usage:

```
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '@nuvious/utils';

@NgModule()
export class AuthModule {

  static forRoot(
    configuredProviders: Array<any>
  ): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        ...configuredProviders
      ]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AuthModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }
}
```

## 4. Generate AuthService and InjectionToken for cross platform usage

This service will provide the single api we use to login via auth0 **everywhere** no matter the platform or app. 

You can use Nx Console with following options:

<p align="center"><img src="https://raw.githubusercontent.com/NativeScripting/course-nx-xplat/master/nx-console-xplat-service.png" width="300"></p>

Or you can execute from command line with the following:

```
nx generate @nstudio/angular:service --name=auth --feature=auth --skipFormat
```

Now create `tokens.ts` inside the `services` folder alongside the `auth.service.ts` we just created. We will add any InjectionToken's we need to provide for cross platform runtime usage.

-- see `libs/features/auth/services/tokens.ts` for changes needed --

## 5. Create mobile auth0 client and provide it for the runtime

-- see `xplat/nativescript/features/auth/utils/mobile-auth0-client.ts` for changes needed --

Then modify `xplat/nativescript/features/auth/auth.module.ts` to provide it -- see module for changes

## 6. Provide for the web

-- see `xplat/web/features/auth/auth.module.ts` for changes needed --

## 7. Import platform specific AuthModule into app's that need it

-- see:

* `apps/web-tasks/src/app/app.module.ts`
* `apps/nativescript-tasks/src/app.module.ts`

## 8. Generate page-login for routing to a login screen

You can use Nx Console with following options:

<p align="center"><img src="https://raw.githubusercontent.com/NativeScripting/course-nx-xplat/master/nx-console-xplat-page-login.png" width="300"></p>

Or you can execute from command line with the following:

```
nx generate @nstudio/angular:feature --name=page-login --onlyProject --projects=web-tasks,nativescript-tasks --routing
```

Let's also make sure our home view can navigate to this new screen. (see code changes for link inserted)

## 9. Generate shared component to initiate login

This shared component will house login that each platform can use to reduce maintenance labor in the future on this component as well as provide nice consistency in how the login component behaves in all platform implementations.

**SPECIAL NOTE AND LEARNING MOMENT**: Notice we do not target the auth feature when creating this shared component. Whenever you create a feature module for purposes of providing cross platform services with a `forRoot` method like we did above, you will always want those to be "service oriented" modules and not also contain components, directives or pipes. The reason is because cross platform configurable modules are only to be imported once in any application. In comparison, a module that exports components, directives or pipes will need to imported multiple times in any modules which need to use those shared component, directives or pipes.

For this reason we will allow the generator to target the default 'ui' feature which comes out of the box with xplat. This shared module is already configured for use in all applications that use xplat architecture and are a good place to house shared components, directives or pipes. You could also create another feature module to house this component if you'd like but for simplicity we're just going to use the default 'ui' feature by not indicating any particular feature on generation.

You can use Nx Console with following options:

<p align="center"><img src="https://raw.githubusercontent.com/NativeScripting/course-nx-xplat/master/nx-console-xplat-shared-login-component.png" width="300"></p>

Or you can execute from command line with the following:

```
nx generate @nstudio/angular:component --name=login --createBase --platforms=web,nativescript
```

## 10. Add login method to base component and just use it in each platform implementation

-- see:

* `libs/features/ui/base/login.base-component.ts`
* `xplat/web/features/ui/components/login.component.ts`
* `xplat/nativescript/features/ui/components/login.component.ts`

## 11. Configure Auth0 dashboard and apps with correct configuration and settings

-- see https://manage.auth0.com/dashboard/us/nativescriptnx/applications/oEagDfjAVyXXrv35NO9GYmbFHqnDDLCh/settings

* Allowed Callback URLs

* Web: http://localhost:4200/authcallback
* iOS: `org.nativescript.tasks://nativescriptnx.us.auth0.com/ios/org.nativescript.tasks/callback`
* Android: `https://nativescriptnx.us.auth0.com/android/org.nativescript.tasks/callback`

Also for Android you will need to modify `webpack.config.js` to include the nativescript-auth0 activity:

```
if (platform === "android") {
  appComponents.push("nativescript-auth0/android/provider/redirectActivity");
}
```

### Web: Add authcallback component to handle the auth success

see the authcallback.component

### iOS/Android: Add correct configurations

* iOS Info.plist:

```
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleTypeRole</key>
		<string>None</string>
		<key>CFBundleURLName</key>
		<string>auth0</string>
		<key>CFBundleURLSchemes</key>
		<array>
			<string>org.nativescript.tasks</string>
		</array>
	</dict>
</array>
```

* AndroidManifest.xml:

```
<!-- Auth0 -->
<activity
		android:name="org.nativescript.auth0.RedirectActivity"
		tools:node="replace">
		<intent-filter>
				<action android:name="android.intent.action.VIEW" />

				<category android:name="android.intent.category.DEFAULT" />
				<category android:name="android.intent.category.BROWSABLE" />

				<data
						android:host="nativescriptnx.us.auth0.com"
						android:pathPrefix="/android/${applicationId}/callback"
						android:scheme="https" />
		</intent-filter>
</activity>
```


