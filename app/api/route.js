export function GET(request) {
  console.log(request);

  //   retun Response.json();
  return new Response("Hello!");
}

// export function POST() {}
