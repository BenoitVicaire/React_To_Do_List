import { useState } from "react";
import { TODOS,categorys } from "../assets/dataSet";

function CategoryFilter({props, setters} ){


	return(
		<section>
			{categorys.map((e)=>(
				<div key={e}>
					<input 
						type="checkbox"
						name={"category"+e}  
						id={"category"+e}
						checked={props[e]}
						onChange={()=>{
							setters({
								...props,
								[e]: !props[e]
							})
						}}
					/>
					<label htmlFor={"category"+e}>
						{e}
					</label>
				</div>
			))}
		</section>
	)
}

export default CategoryFilter;