function Icon({ color = '#000000', width = 24, height = 24 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={width}
            height={height}
            viewBox="0 0 24 24"
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12h16M4 12l4-4m-4 4l4 4"
            ></path>
        </svg>
    );
}

export default Icon;
