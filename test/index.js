// promise
// const res = fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

const btn = document.querySelector(".btn-control")

const ayncFn = () => {
  console.log("1");
  const res = fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res);
  //   const json = await res.json()
  //   console.log(json);
  console.log("2");
};

ayncFn();
