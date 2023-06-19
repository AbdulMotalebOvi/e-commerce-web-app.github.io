
export default function SectionTitle({ header, desc }) {

    return (
        <div className="m-auto text-center space-y-4">
            <h2 className="font-bold text-3xl ">{header}</h2>
            <p>{desc}</p>
        </div>
    )
}

