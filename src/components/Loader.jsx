import bouncing_circles from "../assets/bouncing_circles.svg";

export default function Loader() {
    return (
        <div className="flex justify-center items-center mt-10">
            <img src={bouncing_circles} className="h-14" />
        </div>
    );
}
