import React from "react";

function InputForm({handleEnter, handleChange, value}) {

	return (
		<form onSubmit={handleEnter}
		      className="flex gap-3 w-full h-15 absolute  rounded-2xl border-1 border-neutral-600">
			<input
				onChange={handleChange}
				type="text"
				value={value}
				className="w-full outline-none text-white bg-neutral-700 h-full rounded-2xl px-5"/>
		</form>
	)

}

export default InputForm;