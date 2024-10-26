## [0.6.4](https://github.com/LetsStreamIt/auth-service/compare/v0.6.3...v0.6.4) (2024-10-26)

### Bug Fixes

* cors settings ([cc4003f](https://github.com/LetsStreamIt/auth-service/commit/cc4003ff433aed0184b8017bc610bf2b75cd2ec3))

### General maintenance

* add debug print to release step ([13050fb](https://github.com/LetsStreamIt/auth-service/commit/13050fb1432b590b4c375766cd88ec9df527bb49))

## [0.6.3](https://github.com/LetsStreamIt/auth-service/compare/v0.6.2...v0.6.3) (2024-10-26)

### Dependency updates

* **deps:** update dependency @types/axios to v0.14.4 ([8ff517b](https://github.com/LetsStreamIt/auth-service/commit/8ff517b37c31a32b39ba5fc8d6cd44bbc6641c0d))
* **deps:** update dependency @types/chai-http to v4.2.4 ([7163995](https://github.com/LetsStreamIt/auth-service/commit/7163995d525e4f6c1dfc5717a2ba38406092e035))
* **deps:** update dependency @types/node to v20.16.14 ([a56cc2b](https://github.com/LetsStreamIt/auth-service/commit/a56cc2b214b34822bf07a2ce64884e0519d0ff37))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.112 ([e92c1f1](https://github.com/LetsStreamIt/auth-service/commit/e92c1f1adf560780772e21a80acec7b16d0236df))
* **deps:** update typescript-eslint monorepo to v8.11.0 ([b97e1d4](https://github.com/LetsStreamIt/auth-service/commit/b97e1d4ef89e9e36bf8d435cb5fdbb06ce631991))

### Bug Fixes

* bcrypt does not work on plain alpine linux ([b5f71a0](https://github.com/LetsStreamIt/auth-service/commit/b5f71a08bfd3173e326464f652da5667f8ee3788))

### Build and continuous integration

* **deps:** update actions/checkout action to v4.2.2 ([3559784](https://github.com/LetsStreamIt/auth-service/commit/3559784fd20060b7443cb9315d64de9beed34f7c))
* **deps:** update actions/setup-node action to v4.1.0 ([2c4d481](https://github.com/LetsStreamIt/auth-service/commit/2c4d481612b408b1f3f329138e29ec75fcc27731))
* **deps:** update danysk/action-checkout action to v0.2.22 ([4673456](https://github.com/LetsStreamIt/auth-service/commit/46734567f3493b5c639da11647097b3b90e00a7e))
* **deps:** update docker/build-push-action digest to 5e99dac ([e3a9310](https://github.com/LetsStreamIt/auth-service/commit/e3a9310c773c73cd3c5532c0e0fa7f2e128eaa14))
* **deps:** update docker/login-action digest to 0689575 ([f29418f](https://github.com/LetsStreamIt/auth-service/commit/f29418f47f5f737f74166ddfa5617f20684f8232))
* **deps:** update docker/metadata-action digest to d31acd5 ([f2c6d37](https://github.com/LetsStreamIt/auth-service/commit/f2c6d374e902bf32600bd5b2fa5c5137d50479ae))
* release docs and docker image only when a new release is made ([d070e04](https://github.com/LetsStreamIt/auth-service/commit/d070e045faf5986f0569a753c065281a54acfdff))

## [0.6.2](https://github.com/LetsStreamIt/auth-service/compare/v0.6.1...v0.6.2) (2024-10-24)

### Bug Fixes

* fix account creation error ([31a6bf4](https://github.com/LetsStreamIt/auth-service/commit/31a6bf4186915708e04aac158802cecf4e18646a))

### Build and continuous integration

* **deps:** update docker/login-action digest to 5d8785b ([b3d7857](https://github.com/LetsStreamIt/auth-service/commit/b3d7857eb06e3b685371f0bd6b5b01592aa16c6d))

## [0.6.1](https://github.com/LetsStreamIt/auth-service/compare/v0.6.0...v0.6.1) (2024-10-23)

### Dependency updates

* **deps:** update dependency @types/axios to ^0.14.0 ([df92a29](https://github.com/LetsStreamIt/auth-service/commit/df92a29d983c83817b93558093fbb09b21bbbcde))
* **deps:** update dependency @types/node to v20.16.13 ([1f3b685](https://github.com/LetsStreamIt/auth-service/commit/1f3b68597fb2ca2b70afa82e7feedf4f70df2a1f))
* **deps:** update eslint monorepo to v9.13.0 ([a8a1ed1](https://github.com/LetsStreamIt/auth-service/commit/a8a1ed1c5fb47e00cd2e174cfe582e826ff91628))

### Documentation

* added initial documentation ([fddb93f](https://github.com/LetsStreamIt/auth-service/commit/fddb93f0d9b7ae297c19cb060e7a7fd21f3982a3))

### Build and continuous integration

* added automatic doc upload ([695f472](https://github.com/LetsStreamIt/auth-service/commit/695f472add3eaab835f9ffd54610f2f99b4fdae5))
* added docs to pipeline success ([6bc53c7](https://github.com/LetsStreamIt/auth-service/commit/6bc53c7f30b8ace86748a370ca3bf65817bbac8f))
* avoid uploading docs in pull requests ([2fd2df1](https://github.com/LetsStreamIt/auth-service/commit/2fd2df10de38016ce8679793241e0785241aa4fe))
* fixed typo on docs build ([2391790](https://github.com/LetsStreamIt/auth-service/commit/23917906755e73bc908027aaaf788a05ca25b9dd))

## [0.6.0](https://github.com/LetsStreamIt/auth-service/compare/v0.5.5...v0.6.0) (2024-10-21)

### Features

* implemented profile creation during registration ([0549321](https://github.com/LetsStreamIt/auth-service/commit/0549321e9dcaa664edbefd260f86eadb204ab28c))

### Dependency updates

* **deps:** update dependency @types/node to v20.16.12 ([aa8398f](https://github.com/LetsStreamIt/auth-service/commit/aa8398f8a3252789a2df4b15e52bee17923a3775))
* **deps:** update dependency mongoose to v8.7.2 ([e19c14d](https://github.com/LetsStreamIt/auth-service/commit/e19c14d43a41c3334100cd25d96a974e9593e38e))
* **deps:** update typescript-eslint monorepo to v8.10.0 ([443efdc](https://github.com/LetsStreamIt/auth-service/commit/443efdcbe5a7f9715520a92e1c32f2274b8e8953))

## [0.5.5](https://github.com/LetsStreamIt/auth-service/compare/v0.5.4...v0.5.5) (2024-10-19)

### Bug Fixes

* added back refresh token to cookies ([935777d](https://github.com/LetsStreamIt/auth-service/commit/935777dfbb3f5f1af77c36f80fa4e63591a29745))

## [0.5.4](https://github.com/LetsStreamIt/auth-service/compare/v0.5.3...v0.5.4) (2024-10-19)

### Dependency updates

* **deps:** update dependency @types/chai to v4.3.20 ([9486870](https://github.com/LetsStreamIt/auth-service/commit/94868709190b82a7ac7c15ed66a1e3eef446d82e))
* **deps:** update dependency @types/express to v5 ([6648615](https://github.com/LetsStreamIt/auth-service/commit/664861539a9bab6e491744673aa0f9f4b18dc901))
* **deps:** update dependency @types/mocha to v10.0.9 ([a6afb01](https://github.com/LetsStreamIt/auth-service/commit/a6afb01b953fe9dcbf339bdbd395a367cf455d7a))
* **deps:** update dependency @types/node to v20.16.10 ([edd095b](https://github.com/LetsStreamIt/auth-service/commit/edd095b8e6a1c8ccfbb31b5a72e2b1481b7fa849))
* **deps:** update dependency @types/node to v20.16.11 ([6a51f82](https://github.com/LetsStreamIt/auth-service/commit/6a51f8217bed2f19ead3a086647dc806556c2e92))
* **deps:** update dependency @types/node to v20.16.7 ([8723854](https://github.com/LetsStreamIt/auth-service/commit/87238540b6f2a505a3a3776f790bc5bed9d4c276))
* **deps:** update dependency @types/node to v20.16.9 ([b3eb246](https://github.com/LetsStreamIt/auth-service/commit/b3eb2463aa53018d4f31d7cc037992e24127dd65))
* **deps:** update dependency @vue/eslint-config-prettier to v10 ([39a2237](https://github.com/LetsStreamIt/auth-service/commit/39a22377d7f3cae542712dfbbc5ff234e3c4b88c))
* **deps:** update dependency cookie-parser to v1.4.7 ([e1bf2c3](https://github.com/LetsStreamIt/auth-service/commit/e1bf2c36c077854d9e9ccfbb430163ecb3f53b28))
* **deps:** update dependency express to v4.21.1 ([314745e](https://github.com/LetsStreamIt/auth-service/commit/314745e77469c4e6baa2ac07df9467459a9d2df3))
* **deps:** update dependency mongoose to v8.6.4 ([820cdd1](https://github.com/LetsStreamIt/auth-service/commit/820cdd1db6a002246c1714396b348f892ab565c8))
* **deps:** update dependency mongoose to v8.7.0 ([3ce116b](https://github.com/LetsStreamIt/auth-service/commit/3ce116b6602e9d627bb5bbf3193dfceedb62757c))
* **deps:** update dependency mongoose to v8.7.1 ([36883d6](https://github.com/LetsStreamIt/auth-service/commit/36883d6ca6a7caf31aba3f50b0105c88a64cdf80))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.109 ([3106fe1](https://github.com/LetsStreamIt/auth-service/commit/3106fe127b527d69ae09d329254435b872b33192))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.110 ([36fe95f](https://github.com/LetsStreamIt/auth-service/commit/36fe95f7732c02982a1abbab9841b2d242c8d630))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.111 ([b096194](https://github.com/LetsStreamIt/auth-service/commit/b096194b1660d56a5507c369bc6761e864bc2404))
* **deps:** update dependency typescript to v5.6.3 ([479ef4e](https://github.com/LetsStreamIt/auth-service/commit/479ef4eab5bee28ffa0832c9ed7f75b1f4b5eca5))
* **deps:** update eslint monorepo to v9.12.0 ([23e7910](https://github.com/LetsStreamIt/auth-service/commit/23e7910858e0beef91272727f3400eef3cb95bd5))
* **deps:** update node.js to 20.18 ([761ee0a](https://github.com/LetsStreamIt/auth-service/commit/761ee0a4658ff3b2116ca81f8a2e89c8a771f3ed))
* **deps:** update typescript-eslint monorepo to v8.8.0 ([c8d4b7a](https://github.com/LetsStreamIt/auth-service/commit/c8d4b7aab0a4c96460a123bc7b182889f99f54ae))
* **deps:** update typescript-eslint monorepo to v8.8.1 ([50a46f1](https://github.com/LetsStreamIt/auth-service/commit/50a46f14bffb4b834056d03be7ca3b47d5766f31))
* **deps:** update typescript-eslint monorepo to v8.9.0 ([5c28034](https://github.com/LetsStreamIt/auth-service/commit/5c28034fbe5edfe9a362010ec92a17914fa43598))

### Bug Fixes

* forgot about the await for token creation ([367ddae](https://github.com/LetsStreamIt/auth-service/commit/367ddae1e93a0b489e6235ce56b7c912b8459e34))

### Tests

* fixed validation test calling refresh api ([7be41f1](https://github.com/LetsStreamIt/auth-service/commit/7be41f1e044ec8d03c14288affad9a4a9118e83a))

### Build and continuous integration

* **deps:** update actions/checkout action to v4.2.1 ([6cc3b0f](https://github.com/LetsStreamIt/auth-service/commit/6cc3b0f80b2f78455abb95ec40d682d112c5d972))
* **deps:** update danysk/action-checkout action to v0.2.21 ([1e327b9](https://github.com/LetsStreamIt/auth-service/commit/1e327b9abc145ce53c4bc6b4405c6f5c1e3d25e4))
* **deps:** update docker/build-push-action digest to 4f58ea7 ([1ac8b32](https://github.com/LetsStreamIt/auth-service/commit/1ac8b32757eed6c01a8ebe9fd737f75d6990f785))
* **deps:** update docker/build-push-action digest to e44afff ([e8aeabf](https://github.com/LetsStreamIt/auth-service/commit/e8aeabf942d50ea67095e070c282c1a7aab3eae5))
* **deps:** update docker/login-action digest to 1f36f5b ([a316c9c](https://github.com/LetsStreamIt/auth-service/commit/a316c9c27ebb628de5ea187a59e8b1ad686bcf6f))
* **deps:** update docker/login-action digest to 29df2a9 ([93a7f11](https://github.com/LetsStreamIt/auth-service/commit/93a7f11e8da35a57b1d9a96c70594cf65a922bbf))

### General maintenance

* changed error message ([d6a7b21](https://github.com/LetsStreamIt/auth-service/commit/d6a7b212a6f3715971066dc54871adb3ae86ba4b))

## [0.5.3](https://github.com/LetsStreamIt/auth-service/compare/v0.5.2...v0.5.3) (2024-09-27)

### Dependency updates

* **deps:** update commitlint monorepo to v19.5.0 ([89717f0](https://github.com/LetsStreamIt/auth-service/commit/89717f0c4d8c800cd36065611180d5f8e4c4c121))
* **deps:** update dependency @commitlint/cli to v19.4.1 ([e5be8c5](https://github.com/LetsStreamIt/auth-service/commit/e5be8c56b74d9cf5a239387de82b0da665233764))
* **deps:** update dependency @commitlint/config-conventional to v19.4.1 ([ac7efd0](https://github.com/LetsStreamIt/auth-service/commit/ac7efd0c5c4cc418a8eab92b58350b31be89daea))
* **deps:** update dependency @types/chai to v4.3.18 ([ad9d9bc](https://github.com/LetsStreamIt/auth-service/commit/ad9d9bc59d29a8df2a23c1e07607b49af032868b))
* **deps:** update dependency @types/chai to v4.3.19 ([f54f78e](https://github.com/LetsStreamIt/auth-service/commit/f54f78e77aad65e4c61951121a1aba9220abdf86))
* **deps:** update dependency @types/jsonwebtoken to v9.0.7 ([3701d71](https://github.com/LetsStreamIt/auth-service/commit/3701d710b5ec474c3133aa8a3ddea7a79cbe0e71))
* **deps:** update dependency @types/mocha to v10.0.8 ([6a00a0f](https://github.com/LetsStreamIt/auth-service/commit/6a00a0f35d0555afea2bc781a03ddfdd72ae384b))
* **deps:** update dependency @types/node to v20.16.2 ([cc00fd7](https://github.com/LetsStreamIt/auth-service/commit/cc00fd717febc46c7979740aef0d9dd66a060ec1))
* **deps:** update dependency @types/node to v20.16.3 ([d5714f0](https://github.com/LetsStreamIt/auth-service/commit/d5714f059a910e9d617b6fceb0c0287701fa53ff))
* **deps:** update dependency @types/node to v20.16.4 ([d99337f](https://github.com/LetsStreamIt/auth-service/commit/d99337f90fd3f4daa17a87008601659bd06923bb))
* **deps:** update dependency @types/node to v20.16.5 ([f9205a6](https://github.com/LetsStreamIt/auth-service/commit/f9205a643ffe1ab8b6d2432c4d8cf415ef66067d))
* **deps:** update dependency @types/node to v20.16.6 ([bf254cc](https://github.com/LetsStreamIt/auth-service/commit/bf254cc49eabf5e7c33d63e00a9a6708178f5b42))
* **deps:** update dependency express to v4.20.0 [security] ([c8c1bb5](https://github.com/LetsStreamIt/auth-service/commit/c8c1bb59bd3ee21ecf1700d839a2cbab246d1e6e))
* **deps:** update dependency express to v4.21.0 ([9875d95](https://github.com/LetsStreamIt/auth-service/commit/9875d95c3a1fdd028fc348eb05444eea043676a9))
* **deps:** update dependency husky to v9.1.6 ([9f39492](https://github.com/LetsStreamIt/auth-service/commit/9f39492f27979872b2b054f66494b6bfc78961a6))
* **deps:** update dependency lint-staged to v15.2.10 ([48fe327](https://github.com/LetsStreamIt/auth-service/commit/48fe3272c2dddd60ee76a59fff37bbbb83429e23))
* **deps:** update dependency mongoose to v8.5.4 ([29947d1](https://github.com/LetsStreamIt/auth-service/commit/29947d15d78290ce6fc7774b7dd6fec8bddeb7bb))
* **deps:** update dependency mongoose to v8.5.5 ([9f2fda6](https://github.com/LetsStreamIt/auth-service/commit/9f2fda6378e3057576ebc0ed58386d98581db5ad))
* **deps:** update dependency mongoose to v8.6.0 ([c3eb32f](https://github.com/LetsStreamIt/auth-service/commit/c3eb32f48c6d604d95b0244aa4789dba6b3ff66f))
* **deps:** update dependency mongoose to v8.6.1 ([d5c12a1](https://github.com/LetsStreamIt/auth-service/commit/d5c12a1db43f5daae7919792bc4ffaf2f04719d5))
* **deps:** update dependency mongoose to v8.6.2 ([a168ae7](https://github.com/LetsStreamIt/auth-service/commit/a168ae7541143af92de00e9a7aec0beeb3833a6e))
* **deps:** update dependency mongoose to v8.6.3 ([4fedccd](https://github.com/LetsStreamIt/auth-service/commit/4fedccd9d32ff31c63e9caf091c93c8a2ddad2a9))
* **deps:** update dependency nodemon to v3.1.5 ([2ef3b75](https://github.com/LetsStreamIt/auth-service/commit/2ef3b75526497cbe6ea094a1d7f18819cc8ac488))
* **deps:** update dependency nodemon to v3.1.6 ([3baaf1e](https://github.com/LetsStreamIt/auth-service/commit/3baaf1e57b1d3e3b9897f130a1c523455b74ce17))
* **deps:** update dependency nodemon to v3.1.7 ([2ab587f](https://github.com/LetsStreamIt/auth-service/commit/2ab587f9f8274de724fbcfd7a917ccfff51af733))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.101 ([dd3566a](https://github.com/LetsStreamIt/auth-service/commit/dd3566a9ee366967fff9c85483e9e09071074b2f))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.102 ([47cdb36](https://github.com/LetsStreamIt/auth-service/commit/47cdb3657dfc69541ad14b60bbb838487c570fe9))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.103 ([9709def](https://github.com/LetsStreamIt/auth-service/commit/9709deff63e7894fb81c2ae4ea1f171aefbe7cb3))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.104 ([81bc4e6](https://github.com/LetsStreamIt/auth-service/commit/81bc4e6d174f63dc43d60a2678bd0f8a470ec39c))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.105 ([646199b](https://github.com/LetsStreamIt/auth-service/commit/646199b830b1cd032b7212389eeb7569e1fad67e))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.106 ([2b86368](https://github.com/LetsStreamIt/auth-service/commit/2b86368e408cdc15fd4fb1de7e26240f5e696e7e))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.107 ([6a6ae09](https://github.com/LetsStreamIt/auth-service/commit/6a6ae09a28e52c8acc6c425d4f32cff5fb0d9a54))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.108 ([7931fa3](https://github.com/LetsStreamIt/auth-service/commit/7931fa308a5cc4b4ce4ba99d04295b8215e611e5))
* **deps:** update dependency sinon to v18.0.1 ([4fbecd8](https://github.com/LetsStreamIt/auth-service/commit/4fbecd8e8d013474bad4219b1f5b3a6b76fd7bdf))
* **deps:** update dependency sinon to v19 ([6a5f3dd](https://github.com/LetsStreamIt/auth-service/commit/6a5f3dd6b934a5877a0ab3844e2e2411ef7dd25e))
* **deps:** update dependency typescript to v5.6.2 ([1f5fedb](https://github.com/LetsStreamIt/auth-service/commit/1f5fedb3f42b43a2f6b93bace18930f4ccebd3b5))
* **deps:** update eslint monorepo to v9.10.0 ([ff9975f](https://github.com/LetsStreamIt/auth-service/commit/ff9975f4cffd9257d15e384294dc1283a7119263))
* **deps:** update eslint monorepo to v9.11.0 ([4177c82](https://github.com/LetsStreamIt/auth-service/commit/4177c8228a725016cfb6494d2216b43f8c1c5da8))
* **deps:** update eslint monorepo to v9.11.1 ([2e8b0cb](https://github.com/LetsStreamIt/auth-service/commit/2e8b0cba8de97af1984acf9c920e0876ed83369e))
* **deps:** update eslint monorepo to v9.9.1 ([8adfc09](https://github.com/LetsStreamIt/auth-service/commit/8adfc09caec7c913bd96585055f305ee90fdb630))
* **deps:** update typescript-eslint monorepo to v8.3.0 ([45eaeb3](https://github.com/LetsStreamIt/auth-service/commit/45eaeb3b42f25c77301837a0c6aaacb567a3612e))
* **deps:** update typescript-eslint monorepo to v8.4.0 ([678d4ac](https://github.com/LetsStreamIt/auth-service/commit/678d4acdcb3e99990147edc18b508a35667ef7db))
* **deps:** update typescript-eslint monorepo to v8.5.0 ([7ca418f](https://github.com/LetsStreamIt/auth-service/commit/7ca418f8497248a8ee1ed8141752ee07162d7586))
* **deps:** update typescript-eslint monorepo to v8.6.0 ([500c3ed](https://github.com/LetsStreamIt/auth-service/commit/500c3ed55e2168c1c8bd3e171f5839751facca0c))
* **deps:** update typescript-eslint monorepo to v8.7.0 ([9e3a38f](https://github.com/LetsStreamIt/auth-service/commit/9e3a38f4ba401b4d32969acf270f5959a02c1640))

### Bug Fixes

* added back tokens to registration and login responses ([7063ccf](https://github.com/LetsStreamIt/auth-service/commit/7063ccf5ddbe1b44bead23ef6a238cc89c5775ab))
* cors origin fixed ([28e4d92](https://github.com/LetsStreamIt/auth-service/commit/28e4d92da45d634914999068cbf887755bc6720f))

### Tests

* refactored test to match hexagonal architecture implementation ([a49a1d3](https://github.com/LetsStreamIt/auth-service/commit/a49a1d33541cce98403ff97f8b69d0c91b39863f))

### Build and continuous integration

* **deps:** update actions/checkout action to v4.2.0 ([d68bdc0](https://github.com/LetsStreamIt/auth-service/commit/d68bdc034988e94e60575ddc7de985da74326243))
* **deps:** update actions/setup-node action to v4.0.4 ([9b0ddc4](https://github.com/LetsStreamIt/auth-service/commit/9b0ddc40efdb1bf11c368515ae32b05a92f3621c))
* **deps:** update danysk/action-checkout action to v0.2.20 ([b6433a3](https://github.com/LetsStreamIt/auth-service/commit/b6433a3a3515ad6eb6a9e4cfa1d98f628274fe4f))
* **deps:** update docker/login-action digest to 3b8fed7 ([cdf9982](https://github.com/LetsStreamIt/auth-service/commit/cdf9982e20f14cf9771a6eeace8f73fbfb9a479f))
* **deps:** update docker/metadata-action digest to 70b2cdc ([ee37e15](https://github.com/LetsStreamIt/auth-service/commit/ee37e15460fe97f35bd92c710c301737115fdd3f))

### Refactoring

* moved to hexagonal architecture ([c7106ed](https://github.com/LetsStreamIt/auth-service/commit/c7106ed78696b28132d70b6248d24a8a0a47562b))

## [0.5.2](https://github.com/LetsStreamIt/auth-service/compare/v0.5.1...v0.5.2) (2024-08-25)

### Dependency updates

* **deps:** update dependency @types/node to v20.16.0 ([35e5e73](https://github.com/LetsStreamIt/auth-service/commit/35e5e73ba9189ff5cd4ca6ecc97c36d6129def68))
* **deps:** update dependency @types/node to v20.16.1 ([5cc51cf](https://github.com/LetsStreamIt/auth-service/commit/5cc51cf98d63b5162f038b0732bce106b40f21fd))
* **deps:** update dependency husky to v9.1.5 ([67a2b9d](https://github.com/LetsStreamIt/auth-service/commit/67a2b9dbad543fa0b6f35f4a4a7e354d828e0b87))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.98 ([27958e0](https://github.com/LetsStreamIt/auth-service/commit/27958e0761c55d2103cd3e58dfca955f577a2917))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.99 ([52297b5](https://github.com/LetsStreamIt/auth-service/commit/52297b5382f1cb1fb3c12f9e27e896d70a491d23))
* **deps:** update node.js to 20.17 ([e8e06ee](https://github.com/LetsStreamIt/auth-service/commit/e8e06ee31e249d386070d6bd3314dc866ac2b0bd))
* **deps:** update typescript-eslint monorepo to v8.2.0 ([f984f8c](https://github.com/LetsStreamIt/auth-service/commit/f984f8c6323db980b3c3a0df2f259127cbd4de89))

### Bug Fixes

* added refresh token inside login and registration data ([4081b03](https://github.com/LetsStreamIt/auth-service/commit/4081b03bd50a18d932491da327a930613025f5ac))

## [0.5.1](https://github.com/LetsStreamIt/auth-service/compare/v0.5.0...v0.5.1) (2024-08-21)

### Bug Fixes

* fixed cors origin settings ([d8443b3](https://github.com/LetsStreamIt/auth-service/commit/d8443b372234634e57ae6e635b94018f942cde03))

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
