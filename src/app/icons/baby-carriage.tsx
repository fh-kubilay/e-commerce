function Icon({ color = '#3b3b3b', width = 17.386, height = 16.024 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 17.386 16.024"
        >
            <defs>
                <clipPath id="clip-path">
                    <path
                        fill="none"
                        d="M0 0H17.386V16.024H0z"
                        data-name="Rectangle 1769"
                    ></path>
                </clipPath>
            </defs>
            <g fill={color} clipPath="url(#clip-path)" data-name="Group 1570">
                <path
                    d="M65.611 299.075a2.021 2.021 0 102.079 2.02 2.052 2.052 0 00-2.079-2.02m.535 2.02a.533.533 0 11-.532-.517.526.526 0 01.532.517"
                    data-name="Path 3410"
                    transform="translate(-60.912 -287.091)"
                ></path>
                <path
                    d="M199.629 299.075a2.021 2.021 0 102.079 2.02 2.052 2.052 0 00-2.079-2.02m.534 2.02a.533.533 0 11-.532-.517.526.526 0 01.532.517"
                    data-name="Path 3411"
                    transform="translate(-189.404 -287.091)"
                ></path>
                <path
                    d="M16.612 1.969h-.745a2.665 2.665 0 00-2.7 2.623v.748H6.782V.75A.763.763 0 006.009 0 5.944 5.944 0 000 5.84v.26a.79.79 0 00.016.152 5.973 5.973 0 005.995 5.424H8.7a5.946 5.946 0 006.014-5.836V4.592a1.138 1.138 0 011.153-1.12h.745a.752.752 0 100-1.5m-3.567 4.871a4.467 4.467 0 01-4.353 3.329H6.011a4.465 4.465 0 01-4.344-3.329zm-7.81-5.276V5.34H1.578a4.377 4.377 0 013.657-3.773"
                    data-name="Path 3412"
                    transform="translate(0 .001)"
                ></path>
            </g>
        </svg>
    );
}

export default Icon;
