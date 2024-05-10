const getHomeData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/homepage?populate=*`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
      },
    });
    return response.json();
}

const getHomeAds = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/ad?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
      },
    });
    return response.json();
}

const getCategories = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/categories?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
      },
    });
    return response.json();
}


export { getHomeData, getHomeAds, getCategories }