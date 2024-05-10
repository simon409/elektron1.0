const AddItemToCart = async (item) => {
    try {
        //get the cart id using teh customer id

        // This is a placeholder for the actual API call
        /* const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
        });
        return response.json(); */
    } catch (error) {
        console.log(error);
    }
}