
export const InputRange= () => {
    return (
        <div>

            <span id='label' tabIndex={-1}>
                {/* required because Safari does not implement focus on input range  */}

                <input
                    tabIndex={0}
                    onClick={focus}
                    type='range'
                    className='appearance-none bg-transparent cursor-pointer w-5/6
        [&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:h-6 [&::-webkit-slider-runnable-track]:p-[0.125rem]  [&::-webkit-slider-runnable-track]:bg-slate-600
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-0 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:transition [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:ease-in-out
        [&::-webkit-slider-runnable-track]:focus:outline-none [&::-webkit-slider-runnable-track]:focus:ring-2 [&::-webkit-slider-runnable-track]:focus:ring-gray-300 [&::-webkit-slider-runnable-track]:focus:ring-offset-2
        [&::-moz-range-track]:appearance-none [&::-moz-range-track]:rounded-full [&::-moz-range-track]:h-6 [&::-moz-range-track]:mx-[-0.125rem]  [&::-moz-range-track]:bg-slate-600
        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full  [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:bg-white
        [&::-moz-range-thumb]:transition [&::-moz-range-thumb]:duration-200 [&::-moz-range-thumb]:ease-in-out
        [&::-moz-range-track]:focus:outline-none [&::-moz-range-track]:focus:ring-2 [&::-moz-range-track]:focus:ring-gray-300 [&::-moz-range-track]:focus:ring-offset-2'
                />
            </span>
        </div>
    );
};

