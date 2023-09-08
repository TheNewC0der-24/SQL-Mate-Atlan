# SQL Mate
**[SQL Mate](https://sql-mate.vercel.app)** is a web application that allows you to run predefined SQL queries, visualize the query results in a table format, and perform various data manipulation tasks.

## Features
- [x] **SQL Query Execution:** Execute predefined SQL queries and view the results in a table format.
- [x] **Data Table:** Easily search, filter, and paginate through the displayed data.
- [x] **Column Customization:** Add or remove columns to tailor the view to your needs.
- [x] **Pagination:** Navigate through large datasets with built-in pagination controls.
- [x] **Row Count Control:** Choose the number of rows to display per page (5, 10, 20).
- [x] **Export Option:** Can download the table data in CSV file format.
- [x] **Firebase Authentication:** Secure user registration, login, password reset, and account management.

## Usage 
- **Authentication:**
  - Register: Create a new account with a valid email and password.
  - Login: Sign in to your account with your registered credentials.
  - Password Reset: If you forget your password, use the "Forgot Password" feature to reset it.
  - Account Management: Update your email and password from the user profile section.

- **SQL Query Execution:**
  - Choose a predefined SQL query from the ***`Available Queries List`***.
  - Click the ***`Run Query`*** button to run the query.
  - View the query results in the table below.

- **Data Manipulation:**
  - Use the search bar to find specific data within the table.
  - Apply filters to narrow down the displayed rows.
  - Customize column visibility using the column selector.
  - Navigate through pages with pagination controls.
  - Adjust the number of rows displayed per page.
  - Download the response data as CSV using download button within the table.

## Built With
|[React.JS](https://react.dev/)|[Material UI](https://mui.com/material-ui/)|[Firebase](https://firebase.google.com/)|
|---|---|---|

## Hosted On 
This application is hosted on [Vercel](https://vercel.com/)

## Dependecies Used
```json
"dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@material-table/core": "^6.2.3",
    "@material-table/exporters": "^1.1.0",
    "@mui/material": "^5.14.7",
    "firebase": "^10.3.1",
    "react": "^18.2.0",
    "react-ace": "^10.1.0",
    "react-dom": "^18.2.0",
    "react-error-boundary": "^4.0.11",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.11.0",
    "react-router-dom": "^6.15.0"
  }
```

## Page Load Time
I have conducted a comprehensive performance analysis and load time assessment of the application, utilizing both GTmetrix and PageSpeed, in order to evaluate its overall efficiency and user experience.

### [GTmetrix](https://gtmetrix.com/) : Performance Report
![image](https://github.com/TheNewC0der-24/SQL-Mate/blob/main/Report/GTmetrix%20Report.png)

### [PageSpeed](https://pagespeed.web.dev/) : Performance Report
>Mobile Performance 
![image](https://github.com/TheNewC0der-24/SQL-Mate/blob/main/Report/Mobile%20Performance.png)

>Desktop Performance
![image](https://github.com/TheNewC0der-24/SQL-Mate/blob/main/Report/Desktop%20Performance.png)

## Optimisations I did to decrease the load time or increase performance
1. Employed code-splitting techniques with `React.Lazy()` and `Suspense` to facilitate the dynamic loading of components, effectively distributing JavaScript into multiple chunks through the use of Dynamic Runtime Imports. This strategic approach enhances page load times significantly.
2. Leveraged the capabilities of Vercel for website deployment, harnessing the benefits of its Vercel Edge Network compression mechanism. This strategic choice has notably contributed to superior performance outcomes.

## Link 
```
https://sql-mate.vercel.app
```

---
<h3 align="center">Happy querying with SQL Mate!</h3>
<h5 align="center">Show some ❤️ by ⭐ this Repo</h5>


