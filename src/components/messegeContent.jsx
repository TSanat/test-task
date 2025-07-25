import React, {useEffect, useRef} from "react";

function  MessegeContent({messeges}) {

	const bottomRef = useRef(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messeges]);

	return (
		<div className={"h-[600px] overflow-y-auto hide-scroll"}>
			{
				messeges.map((messege) => {
					return (<div key={messege.id} className={"flex mb-12 gap-4" + (messege.type === "user" ? " justify-end" : " justify-start")}>
							<h3 className={"text-white w-max h-max rounded-2xl p-4 break-words" + (messege.type === "user" ? " bg-neutral-700 max-w-[300px]" : " max-w-[1000px]")}>{messege.label}</h3>
						</div>
					)
				})
			}

			<div ref={bottomRef}></div>
		</div>
	)
}

export default MessegeContent;