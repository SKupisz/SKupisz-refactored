const React = require("react");
const ReactRouter = require("react-router");
const Switch = ReactRouter.Switch;
const Route = ReactRouter.Route;

const Router = () => (
    <Switch>
        <Route path="/"/>
        <Route path = "/portfolio"/>
        <Route path = "/blog"/>
        <Route exact path = "/contact"/>
    </Switch>
);

module.exports = Router;