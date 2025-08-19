import React from "react";

const WhatsAppButton = () => {
	const phoneNumber = "919982576458"; // Uses the contact number from ContactDetails without plus and spaces
	const message = encodeURIComponent("Hello! I'm interested in your products.");
	const href = `https://wa.me/${phoneNumber}?text=${message}`;

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			aria-label="Chat on WhatsApp"
			className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6"
		>
			<div className="h-14 w-14 md:h-16 md:w-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
				style={{ backgroundColor: "#25D366" }}
			>
				<svg
					x="0px"
					y="0px"
					viewBox="0 0 32 32"
					className="h-7 w-7 md:h-8 md:w-8 text-white fill-white"
					aria-hidden="true"
				>
					<path d="M19.112 17.17c-.29-.145-1.706-.84-1.97-.936-.264-.096-.456-.145-.647.145-.193.29-.744.936-.913 1.129-.168.193-.337.217-.626.072-.29-.145-1.223-.45-2.329-1.437-.86-.767-1.44-1.715-1.609-2.005-.168-.29-.018-.447.127-.592.13-.129.29-.337.435-.505.145-.168.193-.289.29-.481.096-.193.048-.361-.024-.505-.072-.145-.647-1.56-.887-2.134-.234-.563-.473-.487-.647-.496l-.553-.01c-.193 0-.505.073-.77.361-.264.289-1.01.985-1.01 2.402 0 1.417 1.035 2.785 1.18 2.978.145.193 2.04 3.112 4.944 4.362.691.298 1.231.476 1.652.61.693.22 1.324.189 1.824.115.557-.083 1.706-.697 1.948-1.37.24-.674.24-1.252.168-1.37-.072-.12-.265-.193-.554-.337z"/>
					<path d="M26.64 5.36C23.72 2.44 19.96 1 16 1S8.28 2.44 5.36 5.36C2.44 8.28 1 12.04 1 16c0 2.49.66 4.92 1.91 7.06L1 31l7.94-1.9C11.08 30.34 13.51 31 16 31c3.96 0 7.72-1.44 10.64-4.36C29.56 23.72 31 19.96 31 16s-1.44-7.72-4.36-10.64zM16 28.9c-2.3 0-4.56-.62-6.54-1.78l-.47-.28-4.7 1.12 1.12-4.68-.31-.48C3.92 20.8 3.3 18.52 3.3 16 3.3 9.85 9.85 3.3 16 3.3c3.39 0 6.58 1.32 8.98 3.72 2.4 2.4 3.72 5.59 3.72 8.98 0 6.15-6.55 12.9-12.7 12.9z"/>
				</svg>
			</div>
		</a>
	);
};

export default WhatsAppButton;


