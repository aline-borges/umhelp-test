<p align="center"> 
  <img src="https://github.com/aline-borges/umhelp-test/blob/master/src/images/readme-banner.png?raw=true">
</p>

<a href="https://instock-umhelptest.netlify.app/">
  <img src="https://github.com/aline-borges/umhelp-test/blob/master/src/images/demo-badge.png?raw=true">
</a>  

<p align="center"> 
  <img src="https://github.com/aline-borges/umhelp-test/blob/master/src/images/instock-screen.png?raw=true">
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c14d260a-791a-43e6-a433-2943c8b4880d/deploy-status)](https://app.netlify.com/sites/instock-umhelptest/deploys)

This application is a UmHelp Front-End test, which shows a product table, a product search form and a product creation form.

### The Problem

<a href="https://github.com/da1help/desafios/blob/master/desafio-front-end.md">
  :arrow_right: The Challenge :clipboard:
</a>

The test consists in elaborating an interface that will allow the user to edit a list of products. This implementation can be done in 3 ways:

- As a Web application, using React
- As a web application, using JavaScript or some language that compiles to JavaScript without any framework
- As a hybrid mobile application, using React Native

### The Application

#### Business Rules

1. Once the list of products is modified, the change must be locally persisted. That is, if the user updates the page, the list of products in which he was working must continue as it was before the update.

2. Once text is inserted in the search bar, the list of products should display only the products whose name corresponds (totally or partially) to the text inserted in the bar. This should not affect the product list, affecting only which products on the list are displayed.

3. The product id should not be provided via field: Instead, the product should receive a sequential id, starting at 1.

4. If the user tries to create a product and the inputs in the input form fields do not match the types specified in the Product entity, an error should be displayed.

5. If the user tries to create a product with 0 pieces in stock, an error should be displayed.

6. If the amount of stock of a product is changed to 0, the product should be excluded.

7. The total value of the product should not be given by field: instead, it should be determined by multiplying the unit value of the product by the quantity of units in stock. If the quantity of units in stock is changed, the total value of the product should be changed accordingly.

8. If a product is excluded, its id should be reused for new products added. An example follows:
 - User creates 4 products (IDs 1, 2, 3, and 4)
 - User deletes products 2 and 3
 - User registers new product. This product must receive the ID 2 (and not 5)
 - User registers new product. This product must receive the ID 3 (and not 6)
 - User registers new product. This product must receive id 5 (and not 7)

#### Restrictions

1. If you choose the Vanilla JS option, you are not allowed to use any library.

2. If you choose the React option, only the React and ReactDOM libraries are allowed. If you prefer to use the Create React App, you can use the dependencies required by it. If you wish, you can also use TypeScript.

3. If you choose the React Native option, you will only be allowed to use the React and React Native libraries.

Here, "libraries" are defined as code ready to be included in the output that will be sent to the client. Tools that are only used by the developer as minifiers or pre-processors are still allowed.

#### Interface

The graphic details of the interface will not be specified by us. You can implement the interface as you wish - just pay attention to the usability consequences of your choices. Here is the functional description of the interface to be implemented:

At the top of the interface, there should be a search bar that allows text insertion.

Immediately below the text bar, there should be a series of fields that allow the specification of a product (according to the Product entity described in the Entities section). Next to these fields there must be a button that allows the creation of a product according to the inputs specified in the fields (except the identifier and the total value, which will be assigned to the products created as specified in the Business Rules section). The fields and button will now be referred to as the "input form".

Below the input form, there must be a list of the products entered. This list must have a header with the name of each field in the product. When clicking on a field in the header, the list must be sorted according to that field.

Each item must:

 - Display the data for a product
 - Display a control that allows increasing or decreasing the stock quantity of that item
 - Display a control that allows the removal of that item
 - Optional: the items must be able to be rearranged by "drag-and-drop".

##### Entities

###### Product
The product must consist of the following information:

| Product |
| ------ | 
| Identifier (number) |
| Name (string) | 
| Quantity in stock (number) |
| Unit value (number) |
| Total value (number) |

### Available Scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.