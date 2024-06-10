function Icon({ color = '#3b3b3b', width = 7.449, height = 4 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 7.449 4"
        >
            <defs>
                <clipPath id="clip-path">
                    <path
                        fill="none"
                        d="M0 0H7.449V4H0z"
                        data-name="Rectangle 1751"
                    ></path>
                </clipPath>
            </defs>
            <g clipPath="url(#clip-path)" data-name="Group 1519">
                <path
                    fill={color}
                    d="M7.264.168a.669.669 0 00-.886 0L3.724 2.607 1.07.168A.655.655 0 00.626 0a.652.652 0 00-.444.17.545.545 0 000 .815l3.1 2.846a.668.668 0 00.888 0L7.266.984a.545.545 0 000-.816"
                    data-name="Path 3300"
                ></path>
            </g>
        </svg>
    );
}

export default Icon;
