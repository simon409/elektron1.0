export default async function getHomeData() {
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
