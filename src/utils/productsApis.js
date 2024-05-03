const getLatestProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/products?sort=createdAt:desc&populate=*&pagination[limit]=4`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
      },
    });
    return response.json();
}

const getProductBySlug = async ({slug}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/products?filters[slug]=${slug}&populate=*`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
    },
  });
  return response.json();
}

const getRating = async ({productId}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/reviews?filters[product_id]=${productId}`, {
      method: "GET",
      cache: "no-cache",
      next: {
        revalidate: 60,
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
      },
    });
    return response.json();
}


export { getLatestProducts, getRating, getProductBySlug };