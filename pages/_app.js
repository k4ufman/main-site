import '../styles/globals.css'
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-700">
        <Header></Header>
      <main className="mt-6 mb-20">
          <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
