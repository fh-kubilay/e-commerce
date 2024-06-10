function Icon({ color = '#3b3b3b', width = 15, height = 17.305 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            data-name="üyelik bilgileri"
            viewBox="0 0 15 17.305"
        >
            <defs>
                <clipPath id="clip-path">
                    <path
                        fill={color}
                        d="M0 0H15V17.305H0z"
                        data-name="Rectangle 1860"
                    ></path>
                </clipPath>
            </defs>
            <g clipPath="url(#clip-path)" data-name="Group 2289">
                <path
                    fill={color}
                    d="M14.945 16.517v-2.493a7.341 7.341 0 00-5.022-6.9 3.947 3.947 0 001.643-3.173A4 4 0 007.528 0h-.056a4 4 0 00-4.038 3.951 3.951 3.951 0 001.642 3.173 7.342 7.342 0 00-5.023 6.9v2.492H0v.192a.581.581 0 00.629.594h.028a.6.6 0 00.6-.6v-2.678a6.24 6.24 0 0112.478 0v2.685a.588.588 0 00.63.594h.027a.6.6 0 00.6-.6v-.192zm-4.64-12.566a2.8 2.8 0 01-5.609 0 2.805 2.805 0 015.609 0"
                    data-name="Path 4316"
                ></path>
            </g>
        </svg>
    );
}

export default Icon;
