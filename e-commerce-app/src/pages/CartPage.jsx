import Cart from "../components/Cart";

function CartPage() {

    return(
        <>
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-black mb-8">Your Shopping Cart</h1>
                <Cart />
            </div>
        </>
    );
}

export default CartPage;