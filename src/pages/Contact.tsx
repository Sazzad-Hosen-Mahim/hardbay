import React, { useState } from 'react';

const Contact = () => {
	const [showSupportForm, setShowSupportForm] = useState(false);
	const [showReturnForm, setShowReturnForm] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('Form submitted!');
	};

	return (
		<div className="max-w-5xl mx-auto px-4 py-10 space-y-5">
			<h1 className="text-4xl font-bold text-center text-black-800">
				Contact <span className="text-primary-orange">HardBay</span>
			</h1>
			<p className="text-center text-gray-600">
				Get in touch by selecting one of the options below.
			</p>

			<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
				<section className="bg-white p-6 rounded-2xl w-full shadow-md">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						General Inquiry
					</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="text"
							placeholder="First Name"
							className="w-full p-3 border rounded-xl"
							required
						/>
						<input
							type="text"
							placeholder="Last Name"
							className="w-full p-3 border rounded-xl"
							required
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-3 border rounded-xl"
							required
						/>
						<input
							type="string"
							placeholder="Phone Number"
							className="w-full p-3 border rounded-xl"
							required
						/>
						<textarea
							placeholder="How can we help you?"
							className="w-full p-3 border rounded-xl"
							rows={5}
							required
						></textarea>
						<button
							type="submit"
							className="text-white font-semibold text-lg bg-primary-blue rounded-xl px-4 py-2 hover:bg-primary-blue/90 hover:text-black transition"
						>
							Send Message
						</button>
					</form>
				</section>

				<div className="grid gap-8  md:grid-rows-2">
					{/* Contact Information Section */}
					{/* Support Section */}
					<section className="bg-white p-6 rounded-2xl shadow-md ">
						<h2 className="text-4xl font-bold text-center text-black-800 my-3">
							<span className="text-primary-orange">HardBay</span> Support
						</h2>
						<p className="text-gray-600 mb-4">
							Submit a technical question or problem to our support team. We'll
							contact you promptly with a response.
						</p>
						<button
							onClick={() => setShowSupportForm(!showSupportForm)}
							className=" text-white font-semibold text-lg bg-primary-blue rounded-xl px-4 py-2 hover:bg-primary-blue/90 hover:text-black transition"
						>
							{showSupportForm ? 'Hide Support Form' : 'Request Support'}
						</button>
						{showSupportForm && (
							<form onSubmit={handleSubmit} className="mt-4 space-y-4">
								<input
									type="text"
									placeholder="Full Name"
									className="w-full p-3 border rounded-xl"
									required
								/>
								<input
									type="email"
									placeholder="Email Address"
									className="w-full p-3 border rounded-xl"
									required
								/>
								<textarea
									placeholder="Describe your issue"
									className="w-full p-3 border rounded-xl"
									rows={4}
									required
								></textarea>
								<button
									type="submit"
									className=" text-white font-semibold text-lg bg-primary-blue rounded-xl px-4 py-2 hover:bg-primary-blue/90 hover:text-black transition"
								>
									Submit Support Request
								</button>
							</form>
						)}
					</section>

					{/* Product Return Section */}
					<section className="bg-white p-6 rounded-2xl shadow-md">
						<h2 className="text-4xl font-bold text-center text-black-800 my-3">
							Product <span className="text-primary-orange">Returns</span>
						</h2>
						<p className="text-gray-600 mb-4">
							Use our online Return Merchandise Authorization (RMA) form to
							request an in-warranty return.
						</p>
						<button
							onClick={() => setShowReturnForm(!showReturnForm)}
							className="text-white font-semibold text-lg bg-primary-blue rounded-xl px-4 py-2 hover:bg-primary-blue/90 hover:text-black transition"
						>
							{showReturnForm ? 'Hide Return Form' : 'Online RMA'}
						</button>
						{showReturnForm && (
							<form onSubmit={handleSubmit} className="mt-4 space-y-4">
								<input
									type="text"
									placeholder="Order ID"
									className="w-full p-3 border rounded-xl"
									required
								/>
								<input
									type="email"
									placeholder="Email"
									className="w-full p-3 border rounded-xl"
									required
								/>
								<textarea
									placeholder="Reason for Return"
									className="w-full p-3 border rounded-xl"
									rows={4}
									required
								></textarea>
								<button
									type="submit"
									className="text-white font-semibold text-lg bg-primary-blue rounded-xl px-4 py-2 hover:bg-primary-blue/90 hover:text-black transition"
								>
									Submit Return Request
								</button>
							</form>
						)}
					</section>
				</div>
			</div>

			{/* Global Office Addresses */}
			<section className="bg-white p-6 rounded-2xl shadow-md">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Our Global Offices
				</h2>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{[
						{ city: 'New York', address: '123 5th Avenue, NY 10001, USA' },
						{ city: 'London', address: '221B Baker Street, London, UK' },
						{ city: 'Tokyo', address: '1-1 Chiyoda, Tokyo 100-0001, Japan' },
					].map((office, idx) => (
						<div
							key={idx}
							className="border rounded-xl p-4 shadow-sm bg-gray-50"
						>
							<h3 className="font-bold text-lg text-primary-orange">
								{office.city}
							</h3>
							<p className="text-gray-600 mt-1">{office.address}</p>
						</div>
					))}
				</div>
			</section>

			{/* Stay Updated Section */}
			<section className="bg-white p-6 rounded-2xl shadow-md text-center">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Stay Up to Date
				</h2>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col sm:flex-row justify-center items-center gap-4"
				>
					<input
						type="email"
						placeholder="Enter your email"
						className="p-3 border rounded-xl w-full sm:w-96"
						required
					/>
					<button
						type="submit"
						className="text-white font-semibold text-lg bg-primary-blue rounded-xl px-4 py-2 hover:bg-primary-blue/90 hover:text-black transition"
					>
						Subscribe
					</button>
				</form>
			</section>
		</div>
	);
};

export default Contact;
