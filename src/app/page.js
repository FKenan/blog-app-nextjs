//npx create-next-app@latest ile proje oluşturduk.
//npm run dev ile projeyi çalıştırırız.

// localhost:3000/ sayfasına denk gelir.
// app klasörü altındaki page sayfası ana sayfa olarak algılanır.
// app içine açılan klasörler routing yapısına katılır.
// blogs klasörü localhost:3000/blogs a denk gelir. blogs altındaki page.js sayfası açılır.
// [id] gibi klasör tanımlarsak urlden gelen parametrelere karşılık gelir.

// (account) dosyası tanımlarsak o dosya ismini görmez. tanımlamazsak login page e http://localhost:3000/account/login ile ulaşırız.
// (account)->login altındaki page sayfasına http://localhost:3000/login ile ulaşmamızı sağlar.

export default function Home() {
  return <h1>Home</h1>;
}
