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
                d="M6 12h12m0 0l-5-5m5 5l-5 5"
            ></path>
        </svg>
    );
}

export default Icon;
