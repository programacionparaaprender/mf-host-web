# Componente1

### datos
## cursos  de angular

### curso de compodoc
>- https://www.udemy.com/course/compodoc-crea-documentacion-en-angular-ionic/learn/lecture/13589698?components=add_to_cart%2Cbase_purchase_section%2Cbuy_button%2Ccacheable_buy_button%2Cdeal_badge%2Cdiscount_expiration%2Cgift_this_course%2Clifetime_access_context%2Cprice_text%2Cpurchase%2Cpurchase_tabs_context%2Crecommendation%2Credeem_coupon%2Cone_click_checkout#overview


### documentar
>- npm install -D @compodoc/compodoc

###
>- ng new mf-host --no-standalone
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
>- aws s3 sync dist/mf-host/ s3://mf-host 

### comandos aws s3 despliegue en bucket compartido
>- aws s3 sync dist/mf-host s3://mf-host-and-remote/

### actualizar versión de angular
>- ng update @angular/cli@19 @angular/core@19
>- ng update @angular/cli@20 @angular/core@20


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
