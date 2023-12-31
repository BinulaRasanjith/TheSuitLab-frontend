import { Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Slideshow = () => {
	const navigate = useNavigate();
	const toast = useToast();

	const handleClick = () => {
		toast({
			title: "You must login first",
			status: "info",
			duration: 3000,
			isClosable: true,
		});
		navigate("/login");
	};
	const [current, setCurrent] = useState(0);
	const slides = [
		{
			url: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			url: "https://www.realmenrealstyle.com/wp-content/uploads/2021/07/Suit-Jacket-Details.jpg",
		},
		{
			url: "https://cdn.pixabay.com/photo/2017/08/10/08/00/suit-2619784_1280.jpg",
		},
		{
			url: "https://cdn.pixabay.com/photo/2017/01/14/10/03/fashion-1979136_1280.jpg",
		},
		{
			url: "https://images.pexels.com/photos/1416971/pexels-photo-1416971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
	];

	useEffect(() => {
		const length = slides.length;

		setTimeout(() => {
			// Increment the current slide index
			setCurrent(current === length - 1 ? 0 : current + 1);
		}, 5000); // 5 seconds
	}, [current, slides.length]);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	const goToSlide = (slideIndex) => {
		setCurrent(slideIndex);
	};

	return (
		<div className="max-w-[1580px] h-screen w-full m-auto relative group flex items-center justify-center">
			<div
				className="w-full h-screen bg-center bg-cover duration-500"
				style={{ backgroundImage: `url(${slides[current].url})` }}
			></div>

			{/* left Arrow */}
			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className="absolute flex top-[80%] right-[50%] left-[50%] justify-center py-2">
				{slides.map((slide, slideIndex) => {
					return (
						<div
							className="text-2xl justify-center py-2"
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
						>
							<RxDotFilled />
						</div>
					);
				})}
			</div>

			<div className="flex flex-col items-center absolute ">
				<p className="text-xl sm:text-2xl md:text-5xl text-white font-bold">
					Welcome to the world of
				</p>
				<p className="text-xl sm:text-2xl md:text-5xl text-white font-bold py-3">
					Gentleman
				</p>
				<Button
					onClick={handleClick}
					_active={{
						bg: "gray.200",
					}}
					_hover={{
						bg: "white",
						border: "2px solid white",
						textColor: "black",
					}}
					bg={"transparent"}
					border={"2px"}
					textColor={"white"}
				>
					Shop Now
				</Button>
			</div>
		</div>
	);
};

export default Slideshow;
