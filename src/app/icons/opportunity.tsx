function Icon({ color = '#ffffff', width = 17.862, height = 17.85 }: { color?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 17.862 17.85"
        >
            <path
                fill={color}
                d="M1.389 10.385L10.3 1.476a1.19 1.19 0 01.847-.351h6.043a1.8 1.8 0 011.8 1.8v6.03a1.2 1.2 0 01-.378.873l-9.477 8.9a.892.892 0 01-.615.244h-.036a.892.892 0 01-.629-.29l-6.492-7.053a.9.9 0 01.026-1.244zm7.143 7.265l9.257-8.7V2.923a.6.6 0 00-.6-.6h-6.043L2.44 11.029z"
                data-name="Path 4298"
                transform="translate(-1.125 -1.125)"
            ></path>
            <path
                fill={color}
                d="M8.915 6.75A2.165 2.165 0 116.75 8.915 2.165 2.165 0 018.915 6.75zm0 3a.833.833 0 10-.833-.833.833.833 0 00.833.833z"
                data-name="Path 4299"
                transform="translate(3.879 -3.848)"
            ></path>
        </svg>
    );
}

export default Icon;
