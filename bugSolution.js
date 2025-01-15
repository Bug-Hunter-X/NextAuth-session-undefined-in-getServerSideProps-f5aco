```javascript
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "pages/api/auth/[...nextauth]"; // Correct path

export default async function MyComponent(props) {
  // Session is now available here
  console.log(props.session);

  return (
    <div>Hello, {props.session?.user?.name}</div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
}
```