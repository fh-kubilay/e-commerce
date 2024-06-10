function Icon({ color = '#3b3b3b', width = 14.745, height = 15 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 14.745 15"
        >
            <defs>
                <clipPath id="clip-path">
                    <path
                        fill="#3b3b3b"
                        d="M0 0H14.745V15H0z"
                        data-name="Rectangle 1752"
                    ></path>
                </clipPath>
            </defs>
            <g fill={color} clipPath="url(#clip-path)" data-name="Group 1520">
                <path
                    d="M3.54 1.13a2.41 2.41 0 11-2.41 2.41 2.413 2.413 0 012.41-2.41m0-1.13a3.54 3.54 0 103.54 3.54A3.54 3.54 0 003.54 0"
                    data-name="Path 3301"
                ></path>
                <path
                    d="M64.59 1.13a2.41 2.41 0 11-2.41 2.41 2.413 2.413 0 012.41-2.41m0-1.13a3.54 3.54 0 103.54 3.54A3.54 3.54 0 0064.59 0"
                    data-name="Path 3302"
                    transform="translate(-53.385)"
                ></path>
                <path
                    d="M3.54 64.206a2.41 2.41 0 11-2.41 2.41 2.413 2.413 0 012.41-2.41m0-1.13a3.54 3.54 0 103.54 3.54 3.54 3.54 0 00-3.54-3.54"
                    data-name="Path 3303"
                    transform="translate(0 -55.156)"
                ></path>
                <path
                    d="M64.59 64.206a2.41 2.41 0 11-2.41 2.41 2.413 2.413 0 012.41-2.41m0-1.13a3.54 3.54 0 103.54 3.54 3.54 3.54 0 00-3.54-3.54"
                    data-name="Path 3304"
                    transform="translate(-53.385 -55.156)"
                ></path>
            </g>
        </svg>
    );
}

export default Icon;
