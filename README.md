# Authentication Service

![CI status](https://github.com/letsstreamit/auth-service/actions/workflows/dispatcher.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/github/v/release/letsstreamit/auth-service?style=plastic)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LetsStreamIt_auth-service&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=LetsStreamIt_auth-service)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LetsStreamIt_auth-service&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=LetsStreamIt_auth-service)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=LetsStreamIt_auth-service&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=LetsStreamIt_auth-service)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LetsStreamIt_auth-service&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LetsStreamIt_auth-service)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LetsStreamIt_auth-service&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=LetsStreamIt_auth-service)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LetsStreamIt_auth-service&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=LetsStreamIt_auth-service)

Authentication service is responsible for managing user authentication to the LetsStreamIt platform.
It manages user registration and login.

## Technologies

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![jwt](https://img.shields.io/badge/jwt-D63AFF?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://expressjs.com/)

### Infrastructure

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)

### DevOps

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Semantic Release](https://img.shields.io/badge/Semantic_Release-494949?style=for-the-badge&logo=semantic-release&logoColor=white)](https://semantic-release.gitbook.io/)
[![Semantic Versioning](https://img.shields.io/badge/Semantic_Versioning-333333?style=for-the-badge&logo=semver&logoColor=white)](https://semver.org/)
[![Conventional Commits](https://img.shields.io/badge/Conventional_Commits-FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://www.conventionalcommits.org/en/v1.0.0/)
[![Renovate](https://img.shields.io/badge/RenovateBot-1A1F6C?style=for-the-badge&logo=renovate&logoColor=white)](https://renovatebot.com/)
[![SonarCloud](https://img.shields.io/badge/SonarCloud-F3702A?style=for-the-badge&logo=sonarcloud&logoColor=white)](https://sonarcloud.io/)

### Documentation

[![Typedoc](https://img.shields.io/badge/Typedoc-2ECE53?style=for-the-badge&logo=readthedocs&logoColor=white)](https://typedoc.org/)

## Usage

It is possible to run the service locally or through a Docker container.

1. To run the service locally:

   ```bash
   git clone https://github.com/LetsStreamIt/auth-service.git
   cd auth-service
   npm install
   npm run build && npm run start
   ```

2. Using a Docker container:

   1. You can build the Docker image locally:

      ```bash
      docker build -t auth-service .
      docker run -p 3000:3000 auth-service
      ```

   2. Or you can pull the image from the GitHub Container Registry:

      ```bash
      docker pull ghcr.io/letsstreamit/auth-service:main
      docker run -p 3000:3000 ghcr.io/letsstreamit/auth-service:main
      ```

## Configuration

If you want to change the default configuration, you can do so by creating a `.env` file in the root of the project.

The following variables can be set:

| Variable                   | Description                            | Default         |
| -------------------------- | -------------------------------------- | --------------- |
| `AUTH_SERVICE_PORT`        | The port of the service                | `3000`          |
| `JWT_SECRET`               | The secret used to sign the JWT tokens | `testingsecret` |
| `PROFILE_SERVICE_HOSTNAME` | The hostname of the profile service    | `localhost`     |
| `PROFILE_SERVICE_PORT`     | The port of the profile service        | `8080`          |
| `MONGO_HOSTNAME`           | The hostname of the MongoDB server     | `localhost`     |
| `MONGO_PORT`               | The port of the MongoDB server         | `27017`         |

The `.env` file should look like this:

```env
AUTH_SERVICE_PORT=3000
JWT_SECRET=testingsecret
PROFILE_SERVICE_HOSTNAME=localhost
PROFILE_SERVICE_PORT=8080
MONGO_HOSTNAME=localhost
MONGO_PORT=27017
```

When running the service locally, the `.env` file is automatically loaded.

When running the service in a Docker container, you can pass the environment variables using the `--env-file` flag:

```bash
docker run --env-file .env -p 3000:3000 auth-service
```

## API Documentation

The documentation and API reference can be found [here](https://letsstreamit.github.io/auth-service/).

## Contributing

If you want to contribute to the project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- Luca Fabri ([w-disaster](https://github.com/w-disaster))
- Simone Ceredi ([sceredi](https://github.com/sceredi))
