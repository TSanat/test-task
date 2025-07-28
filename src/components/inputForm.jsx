import React from "react";

function InputForm({handleEnter, handleChange, value}) {

	return (
		<form onSubmit={handleEnter}
		      className="flex w-full h-15 bg-neutral-700 absolute  rounded-2xl border-1 border-neutral-600">
			<input
				onChange={handleChange}
				type="text"
				value={value}
				className="w-full text-white outline-none h-full rounded-2xl pl-5"/>
			<button className="flex justify-center items-center p-4">
				<img src="/send.svg" alt="" className="invert w-6 h-6 "/>
			</button>
		</form>
	)

}

export default InputForm;