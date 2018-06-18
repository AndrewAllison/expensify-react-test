import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is the inf0: {props.info}</p>
  </div>
);

const withAdminarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is Private please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      <h1>Doc App</h1>
      {!props.isAuthenticated && <p>Login</p>}
      {props.isAuthenticated && <WrappedComponent {...props} />}
    </div>
  );
};

const AdminInfo = withAdminarning(Info);
const AuthenticatedInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='This is some info'/>, document.getElementById('App'));
ReactDOM.render(<AuthenticatedInfo isAuthenticated={true} info="Well Done!!!"/>, document.getElementById('App'));