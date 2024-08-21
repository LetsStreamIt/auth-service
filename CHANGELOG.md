## [0.5.0](https://github.com/LetsStreamIt/auth-service/compare/v0.4.2...v0.5.0) (2024-08-21)

### Features

* moved refresh token management to cookies ([41a9928](https://github.com/LetsStreamIt/auth-service/commit/41a9928f34ef251aa676a30371b120f65776680e))

### Build and continuous integration

* avoid running deploy image outside main branch ([f0c8faa](https://github.com/LetsStreamIt/auth-service/commit/f0c8faa9fd0256b9c8006f8efd90c4f8fc946092))
* fix avoid running deploy image outside main branch ([786a692](https://github.com/LetsStreamIt/auth-service/commit/786a6929b67898d0565befa3d1b265543e340d14))

## [0.4.2](https://github.com/LetsStreamIt/auth-service/compare/v0.4.1...v0.4.2) (2024-08-21)

### Bug Fixes

* send accessToken inside body ([2208bcb](https://github.com/LetsStreamIt/auth-service/commit/2208bcbc09e4f90706c34947e1d877867f77945b))

## [0.4.1](https://github.com/LetsStreamIt/auth-service/compare/v0.4.0...v0.4.1) (2024-08-21)

### Bug Fixes

* cors configuration ([02fc47e](https://github.com/LetsStreamIt/auth-service/commit/02fc47e43f04105e1275877c175564cf34df659c))

## [0.4.0](https://github.com/LetsStreamIt/auth-service/compare/v0.3.0...v0.4.0) (2024-08-21)

### Features

* added cors ([3e4eba3](https://github.com/LetsStreamIt/auth-service/commit/3e4eba3552a426d68e5bdc2173bb5891317c6125))

### Dependency updates

* **deps:** update dependency @types/node to v20.15.0 ([c21ba89](https://github.com/LetsStreamIt/auth-service/commit/c21ba898516b11ef04c09dcb12ea273aee9b4b60))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.97 ([b77c40c](https://github.com/LetsStreamIt/auth-service/commit/b77c40c9546364a7cb247ef479fdacfc180d39af))

## [0.3.0](https://github.com/LetsStreamIt/auth-service/compare/v0.2.2...v0.3.0) (2024-08-18)

### Features

* added refresh token to cookies ([fcc481a](https://github.com/LetsStreamIt/auth-service/commit/fcc481a743125b53d6f2657c0ad816ea77f73021))

## [0.2.2](https://github.com/LetsStreamIt/auth-service/compare/v0.2.1...v0.2.2) (2024-08-18)

### Bug Fixes

* fixed typescript target version ([0f02e07](https://github.com/LetsStreamIt/auth-service/commit/0f02e070458223f45ee6f60947626c364069cbd1))

### Build and continuous integration

* added release as docker image ([e28db64](https://github.com/LetsStreamIt/auth-service/commit/e28db64a83dc67d49ae206c7f94a35a20332de2f))
* avoid running deploy image in pull requests ([c4a150f](https://github.com/LetsStreamIt/auth-service/commit/c4a150fdc1cfc335ace8e8a3f8e05bd04fb02cfe))
* fixed success step ([946888d](https://github.com/LetsStreamIt/auth-service/commit/946888d7f7621f619cdf6de189440fd3878611d9))
* removed linting step from build ([aab85b6](https://github.com/LetsStreamIt/auth-service/commit/aab85b687be3f8e137f74eaecdae51081aa1b12c))

## [0.2.1](https://github.com/LetsStreamIt/auth-service/compare/v0.2.0...v0.2.1) (2024-08-18)

### Dependency updates

* **deps:** update dependency mongoose to v8.5.3 ([1c9c650](https://github.com/LetsStreamIt/auth-service/commit/1c9c6508b4f28f662f0fd787d38e62dec0fff332))

### Bug Fixes

* get access token trough headers when validating ([1b6a20d](https://github.com/LetsStreamIt/auth-service/commit/1b6a20d426e79d59a0e738fd34d4e520ff812064))

## [0.2.0](https://github.com/LetsStreamIt/auth-service/compare/v0.1.0...v0.2.0) (2024-08-17)

### Features

* added get email route ([ff29060](https://github.com/LetsStreamIt/auth-service/commit/ff290602b25a06998c71e52a9c728edaf867cb07))
* added validate token api ([7bf82f2](https://github.com/LetsStreamIt/auth-service/commit/7bf82f2720e799b52061ce172268f0ea63e74d7a))
* implemented basic authentication ([f955c3c](https://github.com/LetsStreamIt/auth-service/commit/f955c3c2ea09da60ed8811ce2cb9f1c9dca2bd6d))
* implemented user registration ([96904cf](https://github.com/LetsStreamIt/auth-service/commit/96904cf73d9a873dad78c7f7b3a08d7f40a69b21))

### Dependency updates

* **deps:** update dependency @types/node to v20.14.15 ([be04893](https://github.com/LetsStreamIt/auth-service/commit/be04893c9fb4c62ebffedf1284be35a9a9cbd8fa))
* **deps:** update dependency lint-staged to v15.2.9 ([c56fd8b](https://github.com/LetsStreamIt/auth-service/commit/c56fd8b62fb3c41916e12bc67fc0efaa66c9a413))
* **deps:** update dependency mocha to v10.7.3 ([d0da3f8](https://github.com/LetsStreamIt/auth-service/commit/d0da3f8bb282b6b71b081b4479222e833eec635f))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.96 ([25d5aba](https://github.com/LetsStreamIt/auth-service/commit/25d5abaecb55e28011794925cdfef22523fd747e))
* **deps:** update eslint monorepo to v9.9.0 ([422b181](https://github.com/LetsStreamIt/auth-service/commit/422b181e26d66ac8b88530b66ca1371c12a8c6ce))
* **deps:** update typescript-eslint monorepo to v8.1.0 ([2facc92](https://github.com/LetsStreamIt/auth-service/commit/2facc92fe07b7f766938913cd16d04808419345c))

### Bug Fixes

* added email as information inside token ([3ad7084](https://github.com/LetsStreamIt/auth-service/commit/3ad708489025ab95168cab248cc1934308acdb0f))
* fixed jwt secret for pr environment ([68c0c09](https://github.com/LetsStreamIt/auth-service/commit/68c0c0955236c6e03eb04ce4796b329ab5395267))
* fixed status code for bad refresh token request ([0bcf0bc](https://github.com/LetsStreamIt/auth-service/commit/0bcf0bc07fdb798993ac9603426b32ad49fc1b5d))
* jwt now contains the email ([9132f51](https://github.com/LetsStreamIt/auth-service/commit/9132f51b1aec03eacee69eb9ab26e8b9caa72857))
* removed username from user model ([73adf51](https://github.com/LetsStreamIt/auth-service/commit/73adf51799c3f1f77c5ccf993e7262a59185ecc8))

### Documentation

* added documentation to user functions and interfaces ([d765438](https://github.com/LetsStreamIt/auth-service/commit/d76543839bdf788de6355767a8747a5182373acf))

### Tests

* added login testing suite ([2d8957d](https://github.com/LetsStreamIt/auth-service/commit/2d8957d6816f2cf313e170f402a638861b736779))
* added missing stubs for user registration ([4e366e6](https://github.com/LetsStreamIt/auth-service/commit/4e366e6ffa88a404e15a008d989d904327a33c01))
* added token refresh testing spec ([959b365](https://github.com/LetsStreamIt/auth-service/commit/959b365e01d76c3c2e5236ef98333d08a1e013ee))
* refactored registration test ([51639c8](https://github.com/LetsStreamIt/auth-service/commit/51639c86216f5633a40c9cf2c523305e321beb66))

### General maintenance

* added default mongo uri ([b446f4d](https://github.com/LetsStreamIt/auth-service/commit/b446f4de74909da76c03d0c5149abce41b8f9c02))
* added deps ([4303142](https://github.com/LetsStreamIt/auth-service/commit/430314257f1750f5cea65ae92fcf50e4983b749d))
* created mongodb models ([e226f4e](https://github.com/LetsStreamIt/auth-service/commit/e226f4ee2c8dbbdb5ef3d1a3311910e08915cb33))
* refactored error handling ([f20ade8](https://github.com/LetsStreamIt/auth-service/commit/f20ade80678ac47814a2ac22f0071678a4aa958c))
* removed useless test ([af2b099](https://github.com/LetsStreamIt/auth-service/commit/af2b099c0cd927eb900bc1d0b675e0c5048238b5))
* updated deps ([3432860](https://github.com/LetsStreamIt/auth-service/commit/34328601f90ff3efe3ba6dc7e1968736987008ff))

### Refactoring

* extracted token refresh to new controller ([3c27ca2](https://github.com/LetsStreamIt/auth-service/commit/3c27ca2ed30e3eb1b8d094ceaa67d0955b2167a7))
* moved token testing suite from user ones ([dc6b782](https://github.com/LetsStreamIt/auth-service/commit/dc6b7829c752b2dda42a8282feb834701ce79a36))
