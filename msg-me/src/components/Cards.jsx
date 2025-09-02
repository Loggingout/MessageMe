//When using export default function, in order for logic code to be used className={``} needs to be used in this exact format.

export default function Cards() {
    //Render content
    return(
        <>
        <div className="card-bg-container">
            <div className="card-content">
                <div className="card border w-80 bg-black p-2 rounded-lg inset shadow-lg ">
                    <img src="https://picsum.dev/300/200" alt="Placeholder img" className="rounded-sm"/>
                    <div className="card-text-div ">
                        <h4 className="font-semibold mt-3 text-white">Author</h4>
                        <p className="font-semibold text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sint quis repudiandae nihil sunt. Tenetur distinctio dicta eveniet excepturi minima illum ullam in quos doloremque a velit, voluptatum fugit aspernatur?</p>
                        <p className="mt-2"><span className="text-white">Aug 20th</span></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
//export function /YOU CAN ONLY EXPORT ONE DEFAULT FUNCTION PER FILE\
//Finish function for icon
export function CardItem(icon) {
    return(
        <>
        {/**Icon*/}
        <li className={`relative`}>{icon}</li>
        </>
    )
}
