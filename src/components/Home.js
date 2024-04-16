import Navbar from "./Navbar";
import Content from "./Content/Content";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

export default function Home({q}) {

    const {query} = useParams();
  return (
    <div>
      <Navbar />
      <Content query={query}/>
      <Footer />
    </div>
  );
}
