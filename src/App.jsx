import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="bg-[#F8F8F8]">
            <Header></Header>
            <div className="max-w-[1340px] mx-auto flex flex-col lg:flex-row gap-7 py-12">
                <Cards></Cards>
                <Cart></Cart>
            </div>
        </div>
    );
}

export default App;
