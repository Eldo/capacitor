export interface CapacitorConfig {
  /**
   * The Package ID of your app.
   *
   * Package IDs (aka Bundle ID in iOS and Application ID in Android) are
   * unique identifiers for apps. They must be in reverse domain name notation,
   * generally representing a domain name that you or your company owns.
   *
   * @since 1.0.0
   */
  appId?: string;

  /**
   * The human-friendly name of your app.
   *
   * This should be what you'd see in the App Store, but can be changed after
   * within each native platform after it is generated.
   *
   * @since 1.0.0
   */
  appName?: string;

  /**
   * The directory of your compiled web assets.
   *
   * This directory should contain the final `index.html` of your app.
   *
   * @since 1.0.0
   */
  webDir?: string;

  /**
   * Whether to copy the Capacitor runtime bundle or not.
   *
   * If your app is using a bundler, this should be `false`. If you added
   * `capacitor.js` as a script in your `index.html` file, this should be
   * `true`.
   *
   * @since 1.0.0
   * @default false
   */
  bundledWebRuntime?: boolean;

  /**
   * Hide or show the native logs for iOS and Android.
   *
   * @since 1.0.0
   * @default false
   */
  hideLogs?: boolean;

  /**
   * User agent of Capacitor Web View.
   *
   * @since 1.0.0
   */
  overrideUserAgent?: string;

  /**
   * String to append to the original user agent of Capacitor Web View.
   *
   * This is disregarded if `overrideUserAgent` is used.
   *
   * @since 1.0.0
   */
  appendUserAgent?: string;

  /**
   * Background color of the Capacitor Web View.
   *
   * @since 1.0.0
   */
  backgroundColor?: string;

  android?: {
    /**
     * Specify a custom path to the native Android project.
     *
     * @since 3.0.0
     * @default android
     */
    path?: string;

    /**
     * User agent of Capacitor Web View on Android.
     *
     * Overrides global `overrideUserAgent` option.
     *
     * @since 1.0.0
     */
    overrideUserAgent?: string;

    /**
     * String to append to the original user agent of Capacitor Web View for Android.
     *
     * Overrides global `appendUserAgent` option.
     *
     * This is disregarded if `overrideUserAgent` is used.
     *
     * @since 1.0.0
     */
    appendUserAgent?: string;

    /**
     * Background color of the Capacitor Web View for Android.
     *
     * Overrides global `backgroundColor` option.
     *
     * @since 1.0.0
     */
    backgroundColor?: string;

    /**
     * Enable mixed content in the Capacitor Web View for Android.
     *
     * [Mixed
     * content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)
     * is disabled by default for security. During development, you may need to
     * enable it to allow the Web View to load files from different schemes.
     *
     * **This is not intended for use in production.**
     *
     * @default false
     */
    allowMixedContent?: boolean;

    /**
     * This enables a simpler keyboard which may have some limitations.
     *
     * This will capture JS keys using an alternative
     * [`InputConnection`](https://developer.android.com/reference/android/view/inputmethod/InputConnection).
     *
     * @since 1.0.0
     * @default false
     */
    captureInput?: boolean;

    /**
     * Always enable debuggable web content.
     *
     * This is automatically enabled during development.
     *
     * @since 1.0.0
     * @default false
     */
    webContentsDebuggingEnabled?: boolean;

    /**
     * Hide or show the native logs for Android.
     *
     * Overrides global `hideLogs` option.
     *
     * @since 1.0.0
     * @default false
     */
    hideLogs?: boolean;
  };

  ios?: {
    /**
     * Specify a custom path to the native iOS project.
     *
     * @since 3.0.0
     * @default ios
     */
    path?: string;

    /**
     * User agent of Capacitor Web View on iOS.
     *
     * Overrides global `overrideUserAgent` option.
     *
     * @since 1.0.0
     */
    overrideUserAgent?: string;

    /**
     * String to append to the original user agent of Capacitor Web View for iOS.
     *
     * Overrides global `appendUserAgent` option.
     *
     * This is disregarded if `overrideUserAgent` is used.
     *
     * @since 1.0.0
     */
    appendUserAgent?: string;

    /**
     * Background color of the Capacitor Web View for iOS.
     *
     * Overrides global `backgroundColor` option.
     *
     * @since 1.0.0
     */
    backgroundColor?: string;

    /**
     * Configure the scroll view's content inset adjustment behavior.
     *
     * This will set the
     * [`contentInsetAdjustmentBehavior`](https://developer.apple.com/documentation/uikit/uiscrollview/2902261-contentinsetadjustmentbehavior)
     * property on the Web View's
     * [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview).
     *
     * @since 1.0.0
     * @default never
     */
    contentInset?: 'automatic' | 'scrollableAxes' | 'never' | 'always';

    /**
     * Configure the Swift version to be used in Cordova plugins.
     *
     * @since 1.0.0
     * @default 5.1
     */
    cordovaSwiftVersion?: string;

    /**
     * Configure the minimum iOS version supported.
     *
     * @since 1.0.0
     * @default 11.0
     */
    minVersion?: string;

    /**
     * Configure custom linker flags for compiling Cordova plugins.
     *
     * @since 1.0.0
     * @default []
     */
    cordovaLinkerFlags?: string[];

    /**
     * Allow destination previews when pressing on links.
     *
     * @since 1.0.0
     * @default false
     */
    allowsLinkPreview?: boolean;

    /**
     * Hide or show the native logs for iOS.
     *
     * Overrides global `hideLogs` option.
     *
     * @since 1.0.0
     * @default false
     */
    hideLogs?: boolean;
  };

  server?: {
    /**
     * Configure the local hostname of the device.
     *
     * It is recommended to keep this as `localhost` as it allows the use of
     * Web APIs that would otherwise require a [secure
     * context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts)
     * such as
     * [`navigator.geolocation`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)
     * and
     * [`MediaDevices.getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).
     *
     * @since 1.0.0
     * @default localhost
     */
    hostname?: string;

    /**
     * Configure the local scheme on iOS.
     *
     * This can be useful when migrating from
     * [`cordova-plugin-ionic-webview`](https://github.com/ionic-team/cordova-plugin-ionic-webview),
     * where the default scheme on iOS is `ionic`.
     *
     * @since 1.0.0
     * @default capacitor
     */
    iosScheme?: string;

    /**
     * Configure the local scheme on Android.
     *
     * @since 1.0.0
     * @default http
     */
    androidScheme?: string;

    /**
     * Load an external URL in the Web View.
     *
     * This is intended for use with live-reload servers.
     *
     * **This is not intended for use in production.**
     *
     * @since 1.0.0
     */
    url?: string;

    /**
     * Allow cleartext traffic in the Web View.
     *
     * On Android, all cleartext traffic is disabled by default as of API 28.
     *
     * This is intended for use with live-reload servers where unencrypted HTTP
     * traffic is often used.
     *
     * **This is not intended for use in production.**
     *
     * @since 1.0.0
     * @default false
     */
    cleartext?: boolean;

    /**
     * Set additional URLs the Web View can navigate to.
     *
     * By default, all external URLs are opened in the external browser (not
     * the Web View).
     *
     * **This is not intended for use in production.**
     *
     * @since 1.0.0
     * @default []
     */
    allowNavigation?: string[];
  };

  cordova?: {
    /**
     * Configure Cordova preferences.
     *
     * @since 1.0.0
     */
    preferences?: { [key: string]: string | undefined };
  };

  plugins?: { [key: string]: any };
}