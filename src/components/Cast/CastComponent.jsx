import react, {useContext} from "react";


const Cast = (props) => {


     return(
        <>
            <div>
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 container rounded-full overflow-hidden">
                        <img src={props.image} alt="Actor Image" className="object-contain text-center align-text-bottom" />
                    </div>
                    <h1 className="text-gray-800 text-xl text-center">{props.castName}</h1>
                    <h1 className="text-gray-800 text-sm text-center">as {props.role}</h1>
                </div>
            </div>
        </>
     )
}


export default Cast;