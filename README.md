# Componente1

### datos
https://auth0.com/ 
luis13711@hotmail.com 
Buenaboca1820 
domain 
dev-jo4bnf180oat65tp.us.auth0.com 
client id 
4Rs8Pb4jswYC6AFCNTzq8Lt0N9tVHQqj 
client secret 
DVhdrYuTnNV_s7IVyuSHb8mWs9w5Ydsa_OKiE73K__0MeC1j_D3zVx8oHkiW4DNO 
lcorrea@deltasac.com.pe 
Ejemplo2356 
alberto13711@gmail.com 
Ejemplo2356 

###
>- ng new mf-host-web --no-standalone
>- npm install -D @angular-architects/module-federation
>- ng add @angular-architects/module-federation --project mf-remote --port 4200 --type host

>- ng add @angular-architects/module-federation --project mf-shell --port 4200 --type host
>- ng add @angular-architects/module-federation --project mf-shopping --port 4201 --type remote
>- ng add @angular-architects/module-federation --project mf-payment --port 4202 --type remote

>- ng new mf-shell --style=scss --routing=true
>- ng new mf-payment --style=scss
>- ng new mf-shopping --style=scss --routing=true
>- ng g c components/login -m login.module
>- --port 4200 --type host

### comandos aws s3 despliegue en bucket independiente
>- Cuenta IAM agregarle
>- agregar politica directamente AmazonS3ReadOnlyAccess IAM 
>- agregar politica directamente AmazonS3FullAccess IAM 
>- aws s3 ls --profile myprofile 
>- aws sts get-caller-identity 
>- aws s3 sync dist/ s3://mf-remoto --acl public-read 
>- aws s3 sync dist/mf-remoto s3://mf-remoto 
>- aws s3 ls s3://mf-remoto 
>- aws s3 ls s3://tu-bucket --recursive | grep index.html 
>- aws s3 cp dist/mf-remoto/index.html s3://mf-remoto/index.html 
>- aws s3 sync dist/mf-remoto/ s3://mf-remoto
Configurar cors en permisos 
[ 
  { 
    "AllowedHeaders": ["*"], 
    "AllowedMethods": ["GET"], 
    "AllowedOrigins": ["*"], 
    "ExposeHeaders": [] 
  } 
] 
>- npm run build
>- aws s3 sync dist/mf-host-web/ s3://mf-host-web 

### comandos aws s3 despliegue en bucket compartido
>- aws s3 sync dist/mf-host-web s3://mf-host-web-and-remote/


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
