# Symfony React
Symfony React symfony and react project app using Symfony as an backend api and React as a frontend library integrated with webpack encore and tailwindcss

## Installation
* [Install Composer](https://getcomposer.org/download).
* [Install Yarn](https://yarnpkg.com/) or [NodeJS](https://nodejs.org/).

# Make Composer install the project's dependencies into vendor/
# Warning: This template requires php >=8.0.0
> cd <into the project>
> composer install

# Make Yarn install the project's dependencies into node_modules/
> yarn install

```

# Finally, setup your ``.env.local`` as the [.env](.env)

# To create database 
> php bin/console doctrine:database:create

## Usage
```
# Startup the Symfony server
> symfony server:start

# Then startup the Symfony Encore server
> yarn dev-server

* Access the server at http://localhost:8000

# yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.