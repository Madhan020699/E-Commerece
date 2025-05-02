import {createRoot} from "react-dom/client";

const productsApp = () => {
    return (
        <div>Product</div>
    );
}

const domNode = document.getElementById("productSection");
const root = createRoot(domNode);
root.render(productsApp);
