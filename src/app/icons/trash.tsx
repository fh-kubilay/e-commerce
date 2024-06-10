function Icon({ color = '#3b3b3b', width = 13.65, height = 14.891 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 13.65 14.891"
        >
            <defs>
                <clipPath id="clip-path">
                    <path
                        fill={color}
                        d="M1.517 1.4a1.5 1.5 0 001.516 1.491h7.583A1.5 1.5 0 0012.133 1.4v-8.933h1.517v-1.489h-3.033v-1.489A1.5 1.5 0 009.1-12H4.55a1.5 1.5 0 00-1.517 1.489v1.489H0v1.489h1.517zM4.55-10.511H9.1v1.489H4.55zm-.758 2.978h6.825V1.4H3.033v-8.933z"
                        data-name="Path 4223"
                        transform="translate(0 12)"
                    ></path>
                </clipPath>
                <clipPath id="clip-path-2">
                    <path
                        fill={color}
                        d="M-341 576.686h465.341V-251H-341z"
                        data-name="Path 4222"
                        transform="translate(341 251)"
                    ></path>
                </clipPath>
                <clipPath id="clip-path-3">
                    <path
                        fill={color}
                        d="M3.667-7.2h1.222v4.8H3.667zm2.444 0h1.222v4.8H6.111z"
                        data-name="Path 4226"
                        transform="translate(-3.667 7.2)"
                    ></path>
                </clipPath>
                <clipPath id="clip-path-4">
                    <path
                        fill={color}
                        d="M-341 416H34v-667h-375z"
                        data-name="Path 4225"
                        transform="translate(341 251)"
                    ></path>
                </clipPath>
            </defs>
            <g opacity="0.5">
                <g clipPath="url(#clip-path)" data-name="Group 2029">
                    <g
                        clipPath="url(#clip-path-2)"
                        data-name="Group 2028"
                        transform="translate(-423.15 -296.577)"
                    >
                        <path
                            fill={color}
                            d="M-1-13h16.132V4.373H-1z"
                            data-name="Path 4221"
                            transform="translate(422.909 308.336)"
                        ></path>
                    </g>
                </g>
                <g
                    clipPath="url(#clip-path-3)"
                    data-name="Group 2031"
                    transform="translate(4.99 6.727)"
                >
                    <g
                        clipPath="url(#clip-path-4)"
                        data-name="Group 2030"
                        transform="translate(-344.667 -243.8)"
                    >
                        <path
                            fill={color}
                            d="M2.667-8.2h5.666v6.8H2.667z"
                            data-name="Path 4224"
                            transform="translate(341 251)"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Icon;
