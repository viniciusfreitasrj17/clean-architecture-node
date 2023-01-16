# Clean Architecture with Nodejs

## Create a simple product

![Alt Clean Architecture](/CleanArchitecture.jpg "a Clean Architecture")

### In Enterprise Business Rules

- Has Product Entity

### In Application Business Rules

- Has Create Product UseCase

### In Interface Adapters

- Has Gateway Layer to create the product protocol

### And, in Frameworks & Drivers

- Has DB to store datas in sqlite
- Has Web to export api with express and route create product

***Also it's wes used TDD and SOLID principals***
