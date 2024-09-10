import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";

export default function Home() {
	return (
		<>
			<div className="body">
				<div className="bg-black red-600 cursor-my-cursor selection:bg-red-600  ">
					<div className="z-10 ">
						{" "}
						<Header />{" "}
					</div>
					<div className="z-20 ">
						{" "}
						<Slider />{" "}
					</div>
					<div className=" z-0 mt-12">
						<Cards />
					</div>
					<div className="z-30">
						{" "}
						<Footer />{" "}
					</div>
				</div>
			</div>
		</>
	);
}
