# Clean Architecture with Nodejs

## Create a simple product

![Alt Clean Architecture](/CleanArchitecture.jpg "a Clean Architecture")

### In Enterprise Business Rules (domains)

- Has Product Entity

### In Application Business Rules (app)

- Has Create Product UseCase, Create Product Dto and Product Repository Protocol

### In Interface Adapters (infra)

- Has Controller Layer to create the product

### And, in Frameworks & Drivers (external)

- Has DB to store datas in sqlite
- Has Web to export api with express and route create product

***Also it's wes used TDD and SOLID principals***
