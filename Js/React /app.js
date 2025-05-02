const ProductsApp = () => {
    return (
        <div>
            <h1>Product</h1>
        </div>
    );
};

const domNode = document.getElementById("productSection");
const root = ReactDOM.createRoot(domNode);
root.render(ProductsApp);
