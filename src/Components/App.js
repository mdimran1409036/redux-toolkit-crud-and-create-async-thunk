import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Card from "./Pages/Card/Card";
import CounterRedux from "./Pages/CounterRedux/CounterRedux";
import CounterState from "./Pages/CounterState/CounterState";
import Users from "./Pages/Users/Users";
import AllTodo from "./Pages/AllTodo/AllTodo";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Card />} />
                    <Route path="/counterState" element={<CounterState />} />
                    <Route path="/counterRedux" element={<CounterRedux />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/todo" element={<AllTodo />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
