import React from 'react'

export default function OwnFilter() {
    const [selectedOption, setSelectedOption] = useState(null)

    const onValueChange = e => {
        setSelectedOption(e.target.value)
    }

    return (
        <>
            {/*<!-- Component: Primary checkboxes --> */}
            <fieldset className="flex gap-10">
                <legend className="mb-6 text-slate-500">Primary radio group:</legend>
                <div className="relative flex items-center">
                    <input
                        className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                        type="radio"
                        value="huey"
                        id="huey"
                        name="drone"
                        onChange={onValueChange}
                    />
                    <label
                        className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                        for="huey"
                    >
                        Huey
                    </label>
                    <svg
                        className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="title-1 description-1"
                        role="graphics-symbol"
                    >
                        <title id="title-1">Circle Shape</title>
                        <desc id="description-1">
                            Circle shape to indicate whether the radio input is checked or
                            not.
                        </desc>
                        <circle cx="8" cy="8" r="4" />
                    </svg>
                </div>
                <div className="relative flex items-center">
                    <input
                        className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                        type="radio"
                        value="dewey"
                        id="dewey"
                        name="drone"
                        onChange={onValueChange}
                    />
                    <label
                        className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                        for="dewey"
                    >
                        Dewey
                    </label>
                    <svg
                        className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="title-2 description-2"
                        role="graphics-symbol"
                    >
                        <title id="title-2">Circle Shape</title>
                        <desc id="description-2">
                            Circle shape to indicate whether the radio input is checked or
                            not.
                        </desc>
                        <circle cx="8" cy="8" r="4" />
                    </svg>
                </div>
                <div className="relative flex items-center">
                    <input
                        className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                        type="radio"
                        value="louie"
                        id="louie"
                        name="drone"
                        onChange={onValueChange}
                    />
                    <label
                        className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                        for="louie"
                    >
                        Louie
                    </label>
                    <svg
                        className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="title-3 description-3"
                        role="graphics-symbol"
                    >
                        <title id="title-3">Circle Shape</title>
                        <desc id="description-3">
                            Circle shape to indicate whether the radio input is checked or
                            not.
                        </desc>
                        <circle cx="8" cy="8" r="4" />
                    </svg>
                </div>
            </fieldset>
            {/*<!-- End Primary checkboxes --> */}
        </>
    )
}
