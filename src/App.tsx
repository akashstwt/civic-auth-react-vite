import { CivicAuthProvider, UserButton } from "@civic/auth/react";

const App = () => {
  return (
      <CivicAuthProvider
        clientId={"1aa523d3-d80b-4b72-a081-523c5e1a0771"}
      >
        <UserButton/>
      </CivicAuthProvider>
  );
}

export default App;
