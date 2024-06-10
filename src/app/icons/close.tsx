function Icon({ color = '#3b3b3b', width = 9.017, height = 9.017 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 9.017 9.017"
        >
            <path
                fill={color}
                d="M14.067 12.943l3.148-3.148a.8.8 0 00-1.125-1.127l-3.148 3.148-3.148-3.148a.8.8 0 00-1.127 1.127l3.148 3.148-3.148 3.148a.8.8 0 001.127 1.127l3.148-3.148 3.148 3.148a.8.8 0 101.127-1.127z"
                data-name="close"
                transform="translate(-8.434 -8.435)"
            ></path>
        </svg>
    );
}

export default Icon;
