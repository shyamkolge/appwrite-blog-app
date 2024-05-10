import "./app.css";

export function App() {
  {
    console.log(import.meta.env.VITE_APPWRITE_URL);
  }

  return <h1 className="text-black underline">Hello</h1>;
}
