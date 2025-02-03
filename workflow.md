# Developer Worflow

This document explains step by step guide for developer to develop a solution or a feature

# Features

## Logout

1. On Logout click, delete `accessJWT` token form the `localStorage`
2. Reset user object form the state
3. Redirect user to login page.

## Auto-Login

This feature allows user to login only one time a day and use the system for a day with out needing to login again and again

1. Check if user exit, if does not then call autologin function.
2. Auto-login function:
   - check if `accessJWT` exit, if so, call getUser api to get user, else do nothing.
   - mount user in the state
   - redirect to dashboard

## Transaction API

1. Create basic controller and add auth Middleware
2. Receive data and userId
3. Create model to insert transaction
4. Response message
