# NextAuth Session Undefined in getServerSideProps

This repository demonstrates a common issue when using NextAuth.js with getServerSideProps: the session object is undefined, even though the API route correctly returns the session details.

## Problem

The `unstable_getServerSession` function is used within a component's `getServerSideProps` function to retrieve the user's session. However, the session consistently returns `undefined`, even when the API route `/api/auth/[...nextauth]` correctly returns the session data.

## Solution

The problem often lies in incorrect usage or pathing of the `authOptions` object. Ensure that the path to `authOptions` is correct and that it is being imported correctly. Also verify the configuration of the NextAuth.js API route.

## Usage

1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Observe the console logs to see the session data in both the component and the API route.

The solution file demonstrates the correct implementation to address this issue. The `bug.js` file shows the initial problem, and the `bugSolution.js` shows how to fix it.