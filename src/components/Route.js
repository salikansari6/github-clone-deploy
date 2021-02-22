//Custom Route component which returns a component on the basis of specified URL present
const Route = ({ path, children }) => {
    return window.location.pathname === path
    ? children
    : null;
}

export default Route;